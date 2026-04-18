"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-[#1A1917] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[600px]">
        {/* Text — left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-28"
        >
          <span
            className="font-script text-[#C8963E] text-3xl mb-6 block"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Story
          </span>
          <h2
            className="font-display font-bold text-[#F5E9D5] text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Food Truck
            <br />
            <em className="text-[#C8963E]">to Forever Home</em>
          </h2>
          <p className="font-body text-[#F5E9D5]/65 text-base leading-relaxed mb-6">
            Anthony Legatie and Hunter Newton didn&apos;t follow a playbook. They built Cibi Cibi
            into a Rock Hill institution, then had the confidence to shut it down and build
            something permanent — a place that honors the past while blazing its own trail.
          </p>
          <p className="font-body text-[#F5E9D5]/65 text-base leading-relaxed mb-10">
            Named as a nod to Kinch&apos;s, the beloved predecessor that shaped this block —
            Elk Ave Tavern opened to a 45-minute wait on its second day. Some things just land.
          </p>
          <Link
            href="/about"
            className="self-start font-body text-sm tracking-widest uppercase text-[#C8963E] border-b border-[#C8963E]/50 pb-1 hover:border-[#C8963E] hover:text-[#E2B96A] transition-all duration-300"
          >
            Read the Full Story →
          </Link>
        </motion.div>

        {/* Image — right, bleeds to edge */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[400px] md:min-h-0"
        >
          <Image
            src="/gallery/619659632_17947828938090877_2166249858373438495_n.jpg"
            alt="Interior of Elk Ave Tavern — warm, eclectic dining room"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1917] via-[#1A1917]/10 to-transparent md:block hidden" />

          {/* Floating badge */}
          <div className="absolute bottom-8 left-8 md:left-auto md:right-8 bg-[#C8963E] text-[#0F0F0D] px-5 py-4">
            <p className="font-body font-semibold text-xs tracking-widest uppercase">Rock Hill&apos;s Own</p>
            <p
              className="font-display font-bold text-2xl mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Since 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
