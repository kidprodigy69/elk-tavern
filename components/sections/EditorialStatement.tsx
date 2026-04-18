"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function EditorialStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);
  const smoothX1 = useSpring(x1, { stiffness: 60, damping: 20 });
  const smoothX2 = useSpring(x2, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      className="bg-[#F5E9D5] py-20 md:py-28 overflow-hidden"
    >
      <div className="flex flex-col gap-0">
        <motion.div style={{ x: smoothX1 }} className="overflow-hidden">
          <h2
            className="font-display font-black text-[#1A1917] whitespace-nowrap leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
            }}
          >
            ROOTED IN ROCK HILL.
          </h2>
        </motion.div>
        <motion.div style={{ x: smoothX2 }} className="overflow-hidden">
          <h2
            className="font-display font-black italic text-[#C8963E] whitespace-nowrap leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
            }}
          >
            BUILT FOR THE NEIGHBORHOOD.
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto px-6 mt-12 text-center"
      >
        <p className="font-body text-[#1A1917]/70 text-lg leading-relaxed">
          From the legendary Cibi Cibi food truck to a permanent home in the heart of downtown —
          Elk Ave Tavern is where Rock Hill comes to eat, drink, and belong.
        </p>
      </motion.div>
    </section>
  );
}
