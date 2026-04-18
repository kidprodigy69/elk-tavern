"use client";

import { motion } from "framer-motion";

const items = [
  { value: "⭐ 4.9/5.0", label: "349 Google Reviews" },
  { value: "Downtown", label: "Rock Hill, SC" },
  { value: "Open", label: "Mon–Sun 11am+" },
  { value: "Best Burger", label: "Charlotte Metro" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1A1917] border-y border-[#C8963E]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#C8963E]/20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-1 md:px-8 text-center"
            >
              <span
                className="font-display font-bold text-[#C8963E] text-xl md:text-2xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.value}
              </span>
              <span className="font-body text-xs text-[#F5E9D5]/50 tracking-wider uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
