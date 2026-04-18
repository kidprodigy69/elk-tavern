"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { getSupabase } from "@/lib/supabase";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const db = getSupabase();
      if (!db) throw new Error("Database not configured");
      const { error } = await db.from("contact_submissions").insert([
        { ...form, submitted_at: new Date().toISOString() },
      ]);
      if (error) throw error;
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#F9F5EE] min-h-screen pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0D] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="font-script text-[#C8963E] text-4xl block mb-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Come Find Us
            </span>
            <h1
              className="font-display font-black text-[#F5E9D5] leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 9vw, 7rem)",
              }}
            >
              CONTACT
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-display font-bold text-[#1A1917] text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visit Us in Downtown
              <br />
              <em className="text-[#C8963E]">Rock Hill, SC</em>
            </h2>

            <div className="flex flex-col gap-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#C8963E] flex items-center justify-center flex-none">
                  <MapPin size={18} className="text-[#0F0F0D]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#1A1917] text-sm tracking-wider uppercase mb-1">Location</p>
                  <p className="font-body text-[#1A1917]/65 text-base leading-relaxed">
                    125 Elk Avenue<br />
                    Rock Hill, South Carolina 29730
                  </p>
                  <a
                    href="https://www.google.com/maps/search/125+Elk+Avenue+Rock+Hill+SC+29730"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C8963E] text-sm mt-2 hover:text-[#9A6F28] transition-colors"
                  >
                    Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#C8963E] flex items-center justify-center flex-none">
                  <Clock size={18} className="text-[#0F0F0D]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#1A1917] text-sm tracking-wider uppercase mb-2">Hours</p>
                  <div className="font-body text-[#1A1917]/65 text-base flex flex-col gap-1.5">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Thursday</span>
                      <span className="font-medium text-[#1A1917]">11am – 10pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Friday – Saturday</span>
                      <span className="font-medium text-[#1A1917]">11am – 11pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="font-medium text-[#1A1917]">11am – 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-body text-xs tracking-widest uppercase text-[#1A1917]/40">Follow Along</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/elkavetavern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#1A1917]/70 hover:text-[#C8963E] transition-colors"
                >
                  <InstagramIcon size={16} /> @elkavetavern
                </a>
                <a
                  href="https://www.facebook.com/p/Elk-Ave-Tavern-61552149427204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#1A1917]/70 hover:text-[#C8963E] transition-colors"
                >
                  <FacebookIcon size={16} /> Facebook
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden border border-[#E8D9BE] h-60">
              <iframe
                src="https://www.google.com/maps?q=125+Elk+Avenue,+Rock+Hill,+SC+29730&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elk Ave Tavern map"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-display font-bold text-[#1A1917] text-2xl md:text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send Us a Message
            </h2>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#C8963E]/15 border border-[#C8963E]/40 p-8 text-center"
              >
                <p
                  className="font-display text-2xl text-[#1A1917] mb-2 italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Received!
                </p>
                <p className="font-body text-[#1A1917]/65 text-sm">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-[#1A1917]/50 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E8D9BE] font-body text-[#1A1917] text-sm focus:outline-none focus:border-[#C8963E] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-[#1A1917]/50 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E8D9BE] font-body text-[#1A1917] text-sm focus:outline-none focus:border-[#C8963E] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-[#1A1917]/50 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E8D9BE] font-body text-[#1A1917] text-sm focus:outline-none focus:border-[#C8963E] transition-colors"
                    placeholder="(803) 555-0000"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-[#1A1917]/50 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E8D9BE] font-body text-[#1A1917] text-sm focus:outline-none focus:border-[#C8963E] transition-colors resize-none"
                    placeholder="Large party reservation, catering inquiry, general question..."
                  />
                </div>

                {status === "error" && (
                  <p className="font-body text-red-600 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-[#1A1917] text-[#F5E9D5] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[#C8963E] hover:text-[#0F0F0D] disabled:opacity-50 transition-all duration-300"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
