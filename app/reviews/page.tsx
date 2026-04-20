"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "J D",
    badge: "Local Guide",
    rating: 5,
    text: "This place was Great!!! Cocktails were on point. Best espresso martini I've ever had. Service was top notch. The food was insanely good. We had the citrus smoked wings to start. Our group ordered Brussels and cauliflower which were also incredible.",
    highlight: "Best espresso martini I've ever had.",
    timeAgo: "4 months ago",
    priceRange: "$30–50",
  },
  {
    name: "Rane Williams",
    badge: "Local Guide",
    rating: 5,
    text: "I'm from Florida and had been awaiting the opening for months — and it did not disappoint! The service was caring and attentive and positive. The space is perfect size, location, and has a warm welcoming ambiance. The food is even more outstanding.",
    highlight: "The space is perfect — warm welcoming ambiance.",
    timeAgo: "A year ago",
    priceRange: "",
  },
  {
    name: "Angela Loftis",
    badge: "Local Guide · 83 reviews",
    rating: 5,
    text: "Every time I go, it seems to get better and better. The food quality is awesome. The food quantity is above average and basically two meals depending. It's just fabulous. The staff are fabulous. Kyle is exceptional at making everyone feel welcome.",
    highlight: "Every time I go, it seems to get better and better.",
    timeAgo: "2 months ago",
    priceRange: "$20–30",
  },
  {
    name: "Laurie Laun",
    badge: "Local Guide",
    rating: 5,
    text: "What a gem! We came into town from Greenville to visit my college student. Wasn't quite sure where to eat as I was unfamiliar with the area. The food was amazing. The staff made us feel like family.",
    highlight: "The staff made us feel like family.",
    timeAgo: "4 months ago",
    priceRange: "$30–50",
  },
  {
    name: "Alyssa",
    badge: "Local Guide · 112 reviews",
    rating: 5,
    text: "Exactly what Rock Hill needed! Top notch food, vibes, and service. On our first visit, my sister and I shared the Shrimp Quesadilla and Blackened Chicken Nachos — both were incredible.",
    highlight: "Exactly what Rock Hill needed!",
    timeAgo: "Edited a year ago",
    priceRange: "$20–30",
  },
  {
    name: "Matthew Heisler",
    badge: "",
    rating: 5,
    text: "Stout Braised Beef Melt with truffle parmesan fries. Everything about this plate was right. 10/10 experience all around.",
    highlight: "10/10 experience all around.",
    timeAgo: "1 month ago",
    priceRange: "",
  },
  {
    name: "Samantha Morrow",
    badge: "Local Guide",
    rating: 5,
    text: "Fantastic lunch! I had the wedge salad and it was the best I've ever had. The side of grilled chicken was also excellent. My boyfriend had the burger and fries — if you ever had their food truck, you already know it's delicious!",
    highlight: "The wedge salad was the best I've ever had.",
    timeAgo: "A year ago",
    priceRange: "$10–20",
  },
  {
    name: "Dan Root",
    badge: "",
    rating: 5,
    text: "Simply the best! The pastrami Reuben was the best I've ever had and the Cajun fries were delicious. The jalapeño garlic hummus was also incredible. Washed it all down with a fresh tasting Sierra Nevada Pale Ale on draft.",
    highlight: "Simply the best!",
    timeAgo: "9 months ago",
    priceRange: "$10–20",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#C8963E] text-[#C8963E]" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="bg-[#1A1917] min-h-screen pt-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-script text-[#C8963E] text-4xl block mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            What People Are Saying
          </span>
          <h1
            className="font-display font-black text-[#F5E9D5] leading-none mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
            }}
          >
            ⭐ 4.9 / 5.0
          </h1>
          <p className="font-body text-[#F5E9D5]/50 text-base">
            Based on 349 Google reviews
          </p>
        </motion.div>
      </section>

      {/* Reviews grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="glass p-7 flex flex-col gap-5 hover:border-[#C8963E]/25 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <Stars count={review.rating} />
                {review.priceRange && (
                  <span className="font-body text-xs text-[#F5E9D5]/30">{review.priceRange}</span>
                )}
              </div>

              <blockquote className="font-body text-[#F5E9D5]/75 text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="bg-[#C8963E]/10 border-l-2 border-[#C8963E] pl-4 py-2">
                <p
                  className="font-display italic text-[#C8963E] text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;{review.highlight}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#C8963E]/10 pt-4 flex justify-between items-end">
                <div>
                  <p
                    className="font-display font-semibold text-[#F5E9D5] text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {review.name}
                  </p>
                  {review.badge && (
                    <p className="font-body text-[#C8963E] text-xs mt-0.5">{review.badge}</p>
                  )}
                </div>
                <p className="font-body text-[#F5E9D5]/30 text-xs">{review.timeAgo}</p>
              </div>
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
          <p className="font-body text-[#F5E9D5]/40 text-sm mb-4">Had a great experience?</p>
          <a
            href="https://www.google.com/search?sca_esv=aae6e3c89fbb1a52&rlz=1C5CHFA_enUS953US953&sxsrf=ANbL-n5oNLOyzvJNOHO-ViJfPw8DJWZJWg:1776650470016&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXgo8bNAVDQf7wHT8H5A4-wTHMxK4TKbGrgNtY6zIFz4z_fj5sfIcYaJe_AmSb3y697rGqNrejPQ6FF3qu8CPR10NHn1&q=Elk+Ave+Tavern+Reviews&sa=X&ved=2ahUKEwjG5Z7hqvuTAxUC_8kDHX_JOlcQ0bkNegQIQxAF&biw=1920&bih=958&dpr=1#lrd=0x8856890006e73c1f:0x95025a7bfd0a080,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-widest uppercase text-[#C8963E] border border-[#C8963E]/60 px-8 py-3.5 hover:bg-[#C8963E] hover:text-[#0F0F0D] transition-all duration-300"
          >
            Leave Us a Google Review
          </a>
        </motion.div>
      </section>
    </div>
  );
}
