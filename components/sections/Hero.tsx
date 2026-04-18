"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const words = ["TAVERN", "FOOD", "DRINKS", "ROCK", "HILL"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden bg-[#0F0F0D]">
      {/* Parallax background */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="/hero/472396610_17904205713090877_6538103811525956284_n.jpg"
          alt="Elk Ave Tavern exterior signage in downtown Rock Hill, SC"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0D]/60 via-[#0F0F0D]/30 to-[#0F0F0D]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0D]/50 via-transparent to-transparent" />
      </motion.div>

      {/* Diagonal copper accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C8963E] z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto"
      >
        {/* Kinetic headline */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span
              className="block font-display font-black text-[#F5E9D5] leading-none tracking-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 12vw, 10rem)",
              }}
            >
              ELK AVE.
            </span>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <span
              className="block font-script text-[#C8963E] leading-none"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(2.5rem, 10vw, 8rem)",
              }}
            >
              Tavern
            </span>
          </motion.div>
        </div>

        {/* Tagline + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-body text-[#F5E9D5]/80 text-base md:text-lg max-w-sm leading-relaxed"
          >
            Elevated pub fare & craft cocktails in the heart of downtown Rock Hill, SC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex gap-4"
          >
            <Link
              href="/menu"
              className="px-7 py-3.5 bg-[#C8963E] text-[#0F0F0D] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[#E2B96A] transition-all duration-300"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-[#F5E9D5]/40 text-[#F5E9D5] font-body text-sm tracking-widest uppercase hover:border-[#C8963E] hover:text-[#C8963E] transition-all duration-300"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#C8963E] to-transparent"
        />
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8963E]/70 -rotate-90 mt-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
