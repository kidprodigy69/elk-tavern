"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const SCRUB_FRACTION = 0.35;

export default function EditorialStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const videoProgress = Math.min(progress / SCRUB_FRACTION, 1);
      video.currentTime = videoProgress * video.duration;
    }
  });

  return (
    <>
      <section ref={ref} className="relative bg-[#F5E9D5] min-h-[280vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/generated/burger-smash-full.mp4"
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5E9D5]/10 via-transparent to-[#F5E9D5]/10" />
        </div>
      </section>

      <section className="relative bg-[#F5E9D5] py-20 md:py-28 text-center px-6">
        <h2
          className="font-black text-[#1A1917] leading-tight max-w-4xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
          }}
        >
          Homegrown in the heart of Rock Hill.
        </h2>
      </section>
    </>
  );
}
