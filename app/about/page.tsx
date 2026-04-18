"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F5EE] pt-24">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-[#0F0F0D]">
        <Image
          src="/gallery/616082465_17947003206090877_2725069109956164394_n.jpg"
          alt="Interior of Elk Ave Tavern — warm, eclectic atmosphere"
          fill
          className="object-cover object-center opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F0D]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-[#C8963E] text-4xl block mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[#F5E9D5] text-4xl md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built From the Ground Up
          </motion.h1>
        </div>
      </section>

      {/* Story section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-display font-bold text-[#1A1917] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Rock Hill Success Story
            </h2>
            <div className="font-body text-[#1A1917]/70 text-base leading-relaxed space-y-5">
              <p>
                Elk Ave Tavern is a homegrown Rock Hill success story built by co-owners Anthony Legatie
                and Hunter Newton — two operators who earned their stripes the hard way. Before opening
                their brick-and-mortar, Anthony and Hunter ran Cibi Cibi, a wildly popular food truck
                that became locally legendary, particularly for its fried chicken sandwich.
              </p>
              <p>
                When they were ready to grow, they didn&apos;t chase a franchise model or a suburban strip mall.
                They closed down the food truck and opened Elk Ave Tavern in the heart of downtown Rock Hill,
                in the space that formerly housed Sweet Tea Cafe — planting a flag in the community they&apos;d
                already spent years serving.
              </p>
              <p>
                The restaurant pays homage to Kinch&apos;s, a beloved Rock Hill establishment that preceded them,
                weaving that sense of local legacy into the dining experience from the moment guests walk in.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/gallery/619659632_17947828938090877_2166249858373438495_n.jpg"
                alt="Elk Ave Tavern — warm dining atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Offset accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C8963E] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* The Space */}
      <section className="bg-[#1A1917] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              "/gallery/618483075_17947340820090877_6947416961864051979_n.jpg",
              "/gallery/590387755_17947242864090877_8163397717376841853_n.jpg",
              "/gallery/612167852_17946255579090877_5151559941126121164_n.jpg",
              "/gallery/615542373_17946874842090877_4499280384558941136_n.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Elk Ave Tavern interior and food photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span
              className="font-script text-[#C8963E] text-3xl block mb-4"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              The Atmosphere
            </span>
            <h2
              className="font-display font-bold text-[#F5E9D5] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cozy But Lively.
              <br />
              <em className="text-[#C8963E]">Always Rooted.</em>
            </h2>
            <div className="font-body text-[#F5E9D5]/65 text-base leading-relaxed space-y-4">
              <p>
                The result is a place that feels both rooted and fresh. The interior draws comparisons
                to the eclectic charm of Savannah, Georgia — cozy but lively, with a menu that balances
                creative surprises alongside the comfort food the neighborhood came to love.
              </p>
              <p>
                The menu spans hearty pub fare and elevated tavern dishes, with standouts including
                braised beef disco fries, a double cheeseburger that critics have called the best in the
                Charlotte metro, and a lamb burger that quickly earned its own following.
              </p>
              <p>
                The bar program matches the kitchen&apos;s ambition, featuring craft beers and inventive
                cocktails like the Banana Bread Old Fashioned.
              </p>
              <p className="text-[#C8963E] font-medium">
                Elk Ave Tavern opened to a 45-minute wait on its second day of business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-[#C8963E] py-16 diagonal-both">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <blockquote
            className="font-display font-bold text-[#0F0F0D] text-2xl md:text-4xl leading-snug italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;For Anthony and Hunter, it&apos;s more than a restaurant. It&apos;s the permanent
            home their food was always building toward.&rdquo;
          </blockquote>
        </motion.div>
      </section>
    </div>
  );
}
