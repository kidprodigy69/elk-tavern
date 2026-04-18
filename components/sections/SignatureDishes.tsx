"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    name: "Disco Fries",
    description: "Braised beef, mozzarella, stout gravy, pickled onion, roasted garlic mayo",
    price: "$16",
    tag: "Fan Favorite",
    img: "/gallery/621567946_17948008656090877_768608983113603717_n.jpg",
  },
  {
    name: "Double Burger",
    description: "Caramelized onion, american cheese, shredded lettuce, burger sauce, potato roll",
    price: "$16",
    tag: "Best in Charlotte Metro",
    img: "/gallery/623294470_17948458893090877_3342193539966754514_n.jpg",
  },
  {
    name: "Lamb Burger",
    description: "Whipped goat cheese, roasted red pepper, romesco, balsamic onion jam, arugula",
    price: "$18",
    tag: "Chef's Pride",
    img: "/gallery/625075944_17948691690090877_445431725240949560_n.jpg",
  },
  {
    name: "Smoked Chicken Wings",
    description: "House jerk sauce, sweet n tangy bbq, buffalo, citrus honey, or cajun dry rub",
    price: "$12",
    tag: "Local Legend",
    img: "/gallery/619599451_17947690197090877_4872050041499176022_n.jpg",
  },
  {
    name: "Stout Braised Beef Melt",
    description: "Whipped goat cheese, mozz, caramelized onions, balsamic jam, stout gravy, sourdough",
    price: "$18",
    tag: "Must-Try",
    img: "/gallery/615542373_17946874842090877_4499280384558941136_n.jpg",
  },
];

export default function SignatureDishes() {
  const trackRef = useRef<HTMLDivElement>(null);

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

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-track px-6 md:px-12 pb-4"
        style={{ cursor: "grab" }}
      >
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="flex-none w-72 md:w-80 bg-white overflow-hidden border border-[#E8D9BE] hover:border-[#C8963E]/60 transition-all duration-300 group"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={dish.img}
                alt={`${dish.name} — ${dish.description}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-3 left-3 bg-[#C8963E] text-[#0F0F0D] text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1">
                {dish.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="font-display font-semibold text-[#1A1917] text-xl leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {dish.name}
                </h3>
                <span className="font-body font-semibold text-[#C8963E] text-lg">{dish.price}</span>
              </div>
              <p className="font-body text-[#1A1917]/60 text-sm leading-relaxed">{dish.description}</p>
            </div>
          </motion.div>
        ))}

        {/* End CTA card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex-none w-64 bg-[#1A1917] flex flex-col items-center justify-center p-8 text-center"
        >
          <p
            className="font-display text-[#F5E9D5] text-2xl mb-4 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            There&apos;s more
          </p>
          <Link
            href="/menu"
            className="font-body text-sm tracking-widest uppercase text-[#C8963E] border border-[#C8963E]/60 px-5 py-3 hover:bg-[#C8963E] hover:text-[#0F0F0D] transition-all duration-300"
          >
            See Full Menu
          </Link>
        </motion.div>
      </div>

      <p className="text-center mt-6 font-body text-xs text-[#1A1917]/30 tracking-widest uppercase px-6">
        Scroll to explore ›
      </p>
    </section>
  );
}
