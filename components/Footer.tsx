import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0D] text-[#F5E9D5]/60 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/logo/430483829_421045087259831_2239488633024398494_n.jpg"
              alt="Elk Ave Tavern"
              width={72}
              height={72}
              className="rounded-full border border-[#C8963E]/30"
            />
            <p className="text-sm leading-relaxed">
              Homegrown Rock Hill dining. From the food truck to the heart of
              downtown — we&apos;re here to stay.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/elkavetavern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8963E] hover:text-[#E2B96A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Elk-Ave-Tavern-61552149427204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8963E] hover:text-[#E2B96A] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#C8963E] mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-[#C8963E] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#C8963E] mb-5">
              Hours
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex justify-between gap-8">
                <span>Mon – Thu</span>
                <span className="text-[#F5E9D5]">11am – 10pm</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Fri – Sat</span>
                <span className="text-[#F5E9D5]">11am – 11pm</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Sunday</span>
                <span className="text-[#F5E9D5]">11am – 9pm</span>
              </li>
            </ul>
          </div>

          {/* Find us */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#C8963E] mb-5">
              Find Us
            </p>
            <address className="not-italic text-sm leading-relaxed">
              Downtown Rock Hill, SC
            </address>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.yelp.com/biz/elk-ave-tavern-rock-hill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide text-[#C8963E] hover:text-[#E2B96A] transition-colors underline underline-offset-4"
              >
                View on Yelp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#C8963E]/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Elk Ave Tavern. All rights reserved.</span>
          <span className="text-[#C8963E]/60">Rock Hill, SC</span>
        </div>
      </div>
    </footer>
  );
}
