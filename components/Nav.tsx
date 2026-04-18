"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0F0F0D]/95 backdrop-blur-md border-b border-[#C8963E]/20 py-3"
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/430483829_421045087259831_2239488633024398494_n.jpg"
              alt="Elk Ave Tavern logo"
              width={48}
              height={48}
              className="rounded-full border border-[#C8963E]/40"
            />
            <span
              className="hidden sm:block font-script text-[#C8963E] text-2xl leading-none"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Elk Ave Tavern
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm tracking-widest uppercase text-[#F5E9D5]/80 hover:text-[#C8963E] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+18034190000"
              className="ml-4 px-5 py-2.5 border border-[#C8963E] text-[#C8963E] font-body text-xs tracking-widest uppercase hover:bg-[#C8963E] hover:text-[#0F0F0D] transition-all duration-300"
            >
              Call Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-[#F5E9D5]"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#1A1917] z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#C8963E]/20">
                <span
                  className="font-script text-[#C8963E] text-2xl"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Elk Ave Tavern
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[#F5E9D5]/70"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6 flex-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl text-[#F5E9D5] hover:text-[#C8963E] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-[#C8963E]/20">
                <a
                  href="tel:+18034190000"
                  className="block w-full text-center py-3.5 bg-[#C8963E] text-[#0F0F0D] font-body font-semibold text-sm tracking-widest uppercase"
                >
                  Call Us Today
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
