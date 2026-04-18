"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";

export default function ContactTeaser() {
  return (
    <section className="bg-[#1A1917] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="font-script text-[#C8963E] text-3xl block mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Come In
          </span>
          <h2
            className="font-display font-bold text-[#F5E9D5] text-4xl md:text-5xl leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We&apos;re in the Heart
            <br />
            <em className="text-[#C8963E]">of Downtown Rock Hill</em>
          </h2>

          <div className="flex flex-col gap-5 mb-10">
            <div className="flex gap-4 items-start">
              <MapPin size={18} className="text-[#C8963E] mt-0.5 flex-none" />
              <div>
                <p className="font-body font-medium text-[#F5E9D5] text-sm">Location</p>
                <p className="font-body text-[#F5E9D5]/60 text-sm mt-1">
                  Downtown Rock Hill, SC<br />
                  (in the former Sweet Tea Cafe space)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock size={18} className="text-[#C8963E] mt-0.5 flex-none" />
              <div>
                <p className="font-body font-medium text-[#F5E9D5] text-sm">Hours</p>
                <div className="font-body text-[#F5E9D5]/60 text-sm mt-1 flex flex-col gap-1">
                  <span>Mon – Thu: 11am – 10pm</span>
                  <span>Fri – Sat: 11am – 11pm</span>
                  <span>Sunday: 11am – 9pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/elkavetavern/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F5E9D5]/60 hover:text-[#C8963E] transition-colors text-sm"
            >
              <InstagramIcon size={16} />
              <span>@elkavetavern</span>
            </a>
            <a
              href="https://www.facebook.com/p/Elk-Ave-Tavern-61552149427204/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F5E9D5]/60 hover:text-[#C8963E] transition-colors text-sm"
            >
              <FacebookIcon size={16} />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>

        {/* Right — map embed + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="relative overflow-hidden border border-[#C8963E]/20 h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.123456789012!2d-81.02456!3d34.92456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569b4d4fbaaaab%3A0xb4c7e8d8cbfb1234!2sElk%20Ave%20Tavern!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elk Ave Tavern location map"
            />
          </div>

          <Link
            href="/contact"
            className="block w-full text-center py-4 bg-[#C8963E] text-[#0F0F0D] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[#E2B96A] transition-all duration-300"
          >
            Get Directions & Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
