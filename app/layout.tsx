import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://elkavetavern.com"),
  title: "Elk Ave Tavern | Rock Hill's Premier Tavern & Restaurant",
  description:
    "Elk Ave Tavern — homegrown Rock Hill dining from the creators of Cibi Cibi food truck. Award-winning burgers, craft cocktails, and elevated pub fare in the heart of downtown Rock Hill, SC.",
  keywords: [
    "Elk Ave Tavern",
    "Rock Hill restaurant",
    "Rock Hill tavern",
    "best burger Rock Hill",
    "downtown Rock Hill dining",
    "craft cocktails Rock Hill",
    "SC restaurant",
  ],
  authors: [{ name: "Elk Ave Tavern" }],
  openGraph: {
    title: "Elk Ave Tavern | Rock Hill's Premier Tavern",
    description:
      "Homegrown dining in the heart of downtown Rock Hill. Elevated pub fare, craft cocktails, and the best burger in the Charlotte metro.",
    url: "https://elkavetavern.com",
    siteName: "Elk Ave Tavern",
    images: [
      {
        url: "/hero/472396610_17904205713090877_6538103811525956284_n.jpg",
        width: 1200,
        height: 630,
        alt: "Elk Ave Tavern exterior signage in downtown Rock Hill",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elk Ave Tavern | Rock Hill's Premier Tavern",
    description:
      "Elevated pub fare, craft cocktails, and the best burger in the Charlotte metro.",
    images: ["/hero/472396610_17904205713090877_6538103811525956284_n.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Elk Ave Tavern",
  alternateName: "Elk Avenue Tavern",
  description:
    "Homegrown Rock Hill tavern and restaurant featuring elevated pub fare, craft cocktails, and the best burger in the Charlotte metro.",
  url: "https://elkavetavern.com",
  telephone: "[Add phone]",
  address: {
    "@type": "PostalAddress",
    streetAddress: "125 Elk Avenue",
    addressLocality: "Rock Hill",
    addressRegion: "SC",
    postalCode: "29730",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "349",
    bestRating: "5",
  },
  servesCuisine: ["American", "Pub Food", "Craft Cocktails"],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/elkavetavern/",
    "https://www.facebook.com/p/Elk-Ave-Tavern-61552149427204/",
    "https://www.yelp.com/biz/elk-ave-tavern-rock-hill",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Mobile sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0F0F0D]/95 backdrop-blur border-t border-[#C8963E]/30">
          <a
            href="tel:[Add phone]"
            className="block w-full text-center py-3 bg-[#C8963E] text-[#0F0F0D] font-body font-semibold text-sm tracking-widest uppercase rounded"
          >
            Call Us Today
          </a>
        </div>
      </body>
    </html>
  );
}
