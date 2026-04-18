"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/gallery/590387755_17947242864090877_8163397717376841853_n.jpg", alt: "Elk Ave Tavern food and dining atmosphere" },
  { src: "/gallery/612167852_17946255579090877_5151559941126121164_n.jpg", alt: "Signature dishes at Elk Ave Tavern Rock Hill" },
  { src: "/gallery/612994072_17946444807090877_3847243999128966981_n.jpg", alt: "Bar and craft drinks at Elk Ave Tavern" },
  { src: "/gallery/615542373_17946874842090877_4499280384558941136_n.jpg", alt: "Plated entrees from Elk Ave Tavern kitchen" },
  { src: "/gallery/616082465_17947003206090877_2725069109956164394_n.jpg", alt: "Interior of Elk Ave Tavern downtown Rock Hill" },
  { src: "/gallery/618483075_17947340820090877_6947416961864051979_n.jpg", alt: "Craft cocktails at Elk Ave Tavern" },
  { src: "/gallery/619599451_17947690197090877_4872050041499176022_n.jpg", alt: "Wings and shareable plates at Elk Ave Tavern" },
  { src: "/gallery/619659632_17947828938090877_2166249858373438495_n.jpg", alt: "Warm dining room at Elk Ave Tavern" },
  { src: "/gallery/621567946_17948008656090877_768608983113603717_n.jpg", alt: "Disco fries and pub fare at Elk Ave Tavern" },
  { src: "/gallery/623294470_17948458893090877_3342193539966754514_n.jpg", alt: "Double burger at Elk Ave Tavern — best in Charlotte metro" },
  { src: "/gallery/625075944_17948691690090877_445431725240949560_n.jpg", alt: "Lamb burger at Elk Ave Tavern Rock Hill SC" },
  { src: "/gallery/628433043_17949470670090877_4052471914335268470_n.jpg", alt: "Food presentation at Elk Ave Tavern" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#0F0F0D] min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-script text-[#C8963E] text-4xl block mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            A Look Inside
          </span>
          <h1
            className="font-display font-black text-[#F5E9D5] leading-none mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
            }}
          >
            GALLERY
          </h1>
          <p className="font-body text-[#F5E9D5]/50 text-base max-w-lg">
            From the kitchen to the bar to the dining room — Elk Ave Tavern at its best.
          </p>
        </motion.div>
      </section>

      {/* Masonry grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="masonry-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="masonry-item group relative overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#C8963E]/0 group-hover:bg-[#C8963E]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-[#F5E9D5]/40 text-sm mb-4">Follow us for more</p>
          <a
            href="https://www.instagram.com/elkavetavern/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-widest uppercase text-[#C8963E] border border-[#C8963E]/60 px-6 py-3 hover:bg-[#C8963E] hover:text-[#0F0F0D] transition-all duration-300"
          >
            @elkavetavern on Instagram
          </a>
        </motion.div>
      </section>
    </div>
  );
}
