"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    name: "Disco Fries",
    description: "Braised beef, mozzarella, stout gravy, pickled onion, roasted garlic mayo",
    price: "$16",
    tag: "Fan Favorite",
  },
  {
    name: "Double Burger",
    description: "Caramelized onion, american cheese, shredded lettuce, burger sauce, potato roll",
    price: "$16",
    tag: "Best in Charlotte Metro",
  },
  {
    name: "Lamb Burger",
    description: "Whipped goat cheese, roasted red pepper, romesco, balsamic onion jam, arugula",
    price: "$18",
    tag: "Chef's Pride",
  },
  {
    name: "Smoked Chicken Wings",
    description: "House jerk sauce, sweet n tangy bbq, buffalo, citrus honey, or cajun dry rub",
    price: "$12",
    tag: "Local Legend",
  },
  {
    name: "Stout Braised Beef Melt",
    description: "Whipped goat cheese, mozz, caramelized onions, balsamic jam, stout gravy, sourdough",
    price: "$18",
    tag: "Must-Try",
  },
  {
    name: "Buttermilk Fried Chicken",
    description: "Springer mountain farms, house pickles, hot honey, buttery buffalo, herb ranch",
    price: "$16",
    tag: "From the Truck",
  },
];

const galleryPreviews = [
  {
    src: "/gallery/619659632_17947828938090877_2166249858373438495_n.jpg",
    alt: "Elk Ave Tavern warm interior dining",
  },
  {
    src: "/gallery/590387755_17947242864090877_8163397717376841853_n.jpg",
    alt: "Food and drinks at Elk Ave Tavern Rock Hill",
  },
  {
    src: "/gallery/618483075_17947340820090877_6947416961864051979_n.jpg",
    alt: "Craft cocktails at Elk Ave Tavern",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-[#F9F5EE] py-20 md:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span
            className="font-script text-[#C8963E] text-3xl block mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            What to Order
          </span>
          <h2
            className="font-display font-bold text-[#1A1917] text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Signature Plates
          </h2>
        </div>
        <Link
          href="/menu"
          className="font-body text-sm tracking-widest uppercase text-[#C8963E] border-b border-[#C8963E]/50 pb-1 hover:border-[#C8963E] transition-all self-start md:self-auto"
        >
          Full Menu →
        </Link>
      </motion.div>

      {/* Horizontal scroll menu-board cards — text only, no mismatched photos */}
      <div className="flex gap-4 overflow-x-auto scroll-track px-6 md:px-12 pb-4">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="flex-none w-64 md:w-72 bg-white border border-[#E8D9BE] hover:border-[#C8963E]/50 transition-all duration-300 p-6 flex flex-col justify-between gap-4"
          >
            <div>
              <span className="inline-block bg-[#C8963E] text-[#0F0F0D] text-[9px] font-body font-bold tracking-widest uppercase px-2.5 py-1 mb-4">
                {dish.tag}
              </span>
              <h3
                className="font-display font-bold text-[#1A1917] text-xl leading-snug mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {dish.name}
              </h3>
              <p className="font-body text-[#1A1917]/55 text-sm leading-relaxed">
                {dish.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#E8D9BE]">
              <span className="font-display font-bold text-[#C8963E] text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {dish.price}
              </span>
              <Link
                href="/menu"
                className="font-body text-xs tracking-widest uppercase text-[#1A1917]/40 hover:text-[#C8963E] transition-colors"
              >
                See menu →
              </Link>
            </div>
          </motion.div>
        ))}

        {/* End CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex-none w-56 bg-[#1A1917] flex flex-col items-center justify-center p-8 text-center gap-4"
        >
          <p
            className="font-display text-[#F5E9D5] text-xl italic leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            There&apos;s so much more
          </p>
          <Link
            href="/menu"
            className="font-body text-xs tracking-widest uppercase text-[#C8963E] border border-[#C8963E]/60 px-5 py-3 hover:bg-[#C8963E] hover:text-[#0F0F0D] transition-all duration-300"
          >
            Full Menu
          </Link>
        </motion.div>
      </div>

      <p className="text-center mt-4 mb-16 font-body text-xs text-[#1A1917]/30 tracking-widest uppercase px-6">
        Scroll to explore ›
      </p>

      {/* Gallery photo strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {galleryPreviews.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0D]/30 to-transparent" />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href="/gallery"
            className="font-body text-xs tracking-widest uppercase text-[#1A1917]/50 hover:text-[#C8963E] transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
