"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CopperBreak() {
  return (
    <section className="relative bg-[#C8963E] py-20 md:py-24 overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.15) 10px,
            rgba(0,0,0,0.15) 11px
          )`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="font-script text-[#0F0F0D]/60 text-4xl block mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Bar Program
          </span>
          <h2
            className="font-display font-black text-[#0F0F0D] leading-none mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
            }}
          >
            THE BAR MATCHES
            <br />
            THE KITCHEN&apos;S AMBITION.
          </h2>
          <p className="font-body text-[#0F0F0D]/70 text-lg max-w-2xl mx-auto mb-10">
            Pecan Old Fashioned. Espresso Martini. Craft beers on draft.
            The cocktail program here isn&apos;t an afterthought — it&apos;s a destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu#cocktails"
              className="px-8 py-4 bg-[#0F0F0D] text-[#C8963E] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[#1A1917] transition-all duration-300"
            >
              House Cocktails
            </Link>
            <Link
              href="/menu#beer"
              className="px-8 py-4 border-2 border-[#0F0F0D]/50 text-[#0F0F0D] font-body font-semibold text-sm tracking-widest uppercase hover:border-[#0F0F0D] transition-all duration-300"
            >
              Draft Beer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
