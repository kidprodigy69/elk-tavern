"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "J D",
    rating: 5,
    text: "This place was Great!!! Cocktails were on point. Best espresso martini I've ever had. Service was top notch. The food was insanely good. We had the citrus smoked wings to start — everything our group ordered was incredible.",
    detail: "Citrus Smoked Wings, Espresso Martini",
    timeAgo: "4 months ago",
  },
  {
    name: "Rane Williams",
    rating: 5,
    text: "I'm from Florida and had been awaiting the opening for months — and it did not disappoint! The service was caring and attentive. The space is perfect size, location, and has a warm welcoming ambiance. The food is even more outstanding.",
    detail: "Full dining experience",
    timeAgo: "A year ago",
  },
  {
    name: "Angela Loftis",
    rating: 5,
    text: "Every time I go, it seems to get better and better. The food quality is awesome. The food quantity is above average — basically two meals depending. It's just fabulous. The staff are fabulous. Kyle is exceptional at making everyone feel welcome.",
    detail: "Regular visitor",
    timeAgo: "2 months ago",
  },
  {
    name: "Laurie Laun",
    rating: 5,
    text: "What a gem! We came into town from Greenville to visit my college student. Wasn't sure where to eat. The food was amazing. The staff made us feel like family.",
    detail: "Out-of-town visitor",
    timeAgo: "4 months ago",
  },
  {
    name: "Samantha Morrow",
    rating: 5,
    text: "Fantastic lunch! I had the wedge salad and it was the best I've ever had. My boyfriend had the burger and fries — if you ever had their food truck, you already know it's delicious!",
    detail: "Wedge Salad, Double Burger",
    timeAgo: "A year ago",
  },
  {
    name: "Matthew Heisler",
    rating: 5,
    text: "Stout Braised Beef Melt with truffle parmesan fries. Everything about this plate was right. 10/10 experience all around.",
    detail: "Stout Braised Beef Melt",
    timeAgo: "1 month ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#C8963E] text-[#C8963E]" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#1A1917] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end gap-6"
        >
          <div>
            <span
              className="font-script text-[#C8963E] text-3xl block mb-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              What People Are Saying
            </span>
            <h2
              className="font-display font-bold text-[#F5E9D5] text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ⭐ 4.9 Stars.
              <br />
              <em className="text-[#C8963E]">349 Reviews.</em>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/Elk+Ave+Tavern+Rock+Hill"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end font-body text-sm tracking-widest uppercase text-[#C8963E] border-b border-[#C8963E]/50 pb-1 hover:border-[#C8963E] transition-all"
          >
            Leave a Review →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass rounded-none p-6 flex flex-col gap-4 hover:border-[#C8963E]/30 transition-all duration-300"
            >
              <Stars count={review.rating} />
              <p className="font-body text-[#F5E9D5]/80 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-[#C8963E]/10 pt-4">
                <p
                  className="font-display font-semibold text-[#F5E9D5] text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {review.name}
                </p>
                <p className="font-body text-[#C8963E] text-xs mt-0.5">{review.detail}</p>
                <p className="font-body text-[#F5E9D5]/30 text-xs mt-0.5">{review.timeAgo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
