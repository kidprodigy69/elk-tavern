"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/gallery/590387755_17947242864090877_8163397717376841853_n.jpg", alt: "Elk Ave Tavern food and ambiance" },
  { src: "/gallery/612994072_17946444807090877_3847243999128966981_n.jpg", alt: "Bar and drinks at Elk Ave Tavern" },
  { src: "/gallery/616082465_17947003206090877_2725069109956164394_n.jpg", alt: "Interior dining room of Elk Ave Tavern" },
  { src: "/gallery/618483075_17947340820090877_6947416961864051979_n.jpg", alt: "Fried chicken sandwich at Elk Ave Tavern Rock Hill" },
  { src: "/gallery/612167852_17946255579090877_5151559941126121164_n.jpg", alt: "Signature dishes at Elk Ave Tavern" },
  { src: "/gallery/628433043_17949470670090877_4052471914335268470_n.jpg", alt: "Food from Elk Ave Tavern Rock Hill SC" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#F9F5EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span
              className="font-script text-[#C8963E] text-3xl block mb-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              A Look Inside
            </span>
            <h2
              className="font-display font-bold text-[#1A1917] text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Tavern
            </h2>
          </div>
          <Link
            href="/gallery"
            className="self-start md:self-end font-body text-sm tracking-widest uppercase text-[#C8963E] border-b border-[#C8963E]/50 pb-1 hover:border-[#C8963E] transition-all"
          >
            Full Gallery →
          </Link>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-2 row-span-2 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] overflow-hidden group"
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Small grid images */}
          {photos.slice(1, 5).map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#C8963E]/0 group-hover:bg-[#C8963E]/10 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Last image with overlay CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative aspect-square overflow-hidden group col-span-2 md:col-span-1"
          >
            <Image
              src={photos[5].src}
              alt={photos[5].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Link
              href="/gallery"
              className="absolute inset-0 bg-[#0F0F0D]/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            >
              <span
                className="font-display text-[#F5E9D5] text-2xl italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                See All Photos
              </span>
              <span className="font-body text-[#C8963E] text-sm tracking-widest uppercase">
                View Gallery →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
