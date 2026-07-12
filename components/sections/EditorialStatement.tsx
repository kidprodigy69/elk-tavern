"use client";

import { motion, useMotionValueEvent, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

function OutlinedLine({
  text,
  x,
  fontSize,
  italic,
}: {
  text: string;
  x: MotionValue<string>;
  fontSize: string;
  italic?: boolean;
}) {
  const shared = {
    fontFamily: "'Playfair Display', serif",
    fontSize,
    WebkitTextFillColor: "transparent" as const,
    color: "transparent",
  };
  return (
    <motion.div style={{ x }} className="relative overflow-visible">
      <h2
        aria-hidden
        className={`font-display font-black whitespace-nowrap leading-none absolute inset-0 ${italic ? "italic" : ""}`}
        style={{ ...shared, WebkitTextStroke: "7px #1A1917" }}
      >
        {text}
      </h2>
      <h2
        className={`font-display font-black whitespace-nowrap leading-none relative ${italic ? "italic" : ""}`}
        style={{ ...shared, WebkitTextStroke: "2px #C8963E" }}
      >
        {text}
      </h2>
    </motion.div>
  );
}

export default function EditorialStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-60%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);
  const smoothX1 = useSpring(x1, { stiffness: 60, damping: 20 });
  const smoothX2 = useSpring(x2, { stiffness: 60, damping: 20 });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = progress * video.duration;
    }
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#F5E9D5] py-20 md:py-28 overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/generated/burger-sear.mp4"
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E9D5]/10 via-transparent to-[#F5E9D5]/10" />

      <div className="relative z-10 flex flex-col gap-0">
        <OutlinedLine text="ROOTED IN ROCK HILL." x={smoothX1} fontSize="clamp(1.75rem, 6.5vw, 6rem)" />
        <OutlinedLine text="BUILT FOR THE NEIGHBORHOOD." x={smoothX2} fontSize="clamp(1.5rem, 5.5vw, 5rem)" italic />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto px-6 mt-12 text-center"
      >
        <p className="font-body text-[#1A1917]/80 text-lg leading-relaxed bg-[#F5E9D5]/85 backdrop-blur-sm rounded-lg px-6 py-4">
          From the legendary Cibi Cibi food truck to a permanent home in the heart of downtown —
          Elk Ave Tavern is where Rock Hill comes to eat, drink, and belong.
        </p>
      </motion.div>
    </section>
  );
}
