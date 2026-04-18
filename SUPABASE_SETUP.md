# Elk Ave Tavern — Supabase Setup Guide

## 1. Create a Supabase Project
1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Name it `elk-ave-tavern`, choose your region (US East), set a database password
4. Wait for provisioning (~2 min)

## 2. Create the Contact Submissions Table

In the Supabase dashboard → SQL Editor, run:

```sql
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  submitted_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table contact_submissions enable row level security;

-- Allow anyone to insert (for the contact form)
create policy "Allow public inserts"
  on contact_submissions
  for insert
  to anon
  with check (true);

-- Only allow authenticated users to read
create policy "Allow authenticated reads"
  on contact_submissions
  for select
  to authenticated
  using (true);
```

## 3. Get Your Credentials

In Supabase dashboard → Project Settings → API:
- Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- Copy **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 4. Add to Environment

In `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

In Vercel: Project Settings → Environment Variables → add both keys.

## 5. View Submissions

In Supabase dashboard → Table Editor → `contact_submissions`

You can also set up email notifications via Supabase webhooks or a Resend integration.
