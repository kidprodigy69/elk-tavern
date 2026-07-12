"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function EditorialStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = progress * video.duration;
    }
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#F5E9D5] min-h-[70vh] overflow-hidden flex items-center justify-center"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/generated/burger-smash.mp4"
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E9D5]/10 via-transparent to-[#F5E9D5]/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <p className="font-body text-[#1A1917]/80 text-lg leading-relaxed bg-[#F5E9D5]/85 backdrop-blur-sm rounded-lg px-6 py-4">
          From the legendary Cibi Cibi food truck to a permanent home in the heart of downtown —
          Elk Ave Tavern is where Rock Hill comes to eat, drink, and belong.
        </p>
      </motion.div>
    </section>
  );
}
