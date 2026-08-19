"use client";

import { HelixoraLogo } from "@/components/site/HelixoraLogo";
import {motion} from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#innovation", label: "Innovation" },
  { href: "#technology", label: "Research" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#impact", label: "Impact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mx-auto flex w-full max-w-7xl items-center justify-between border border-white bg-white/50 backdrop-blur px-4 py-3 shadow-[0_18px_60px_rgba(6,19,17,0.18)]"
        whileHover={{ y: 2 }}
        transition={{ duration: 0.25 }}
      >
      <Link
  href="#top"
  className="focus-ring flex items-center gap-2 rounded-[6px]"
>
  <HelixoraLogo />
</Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="group/nav focus-ring relative rounded-[6px] text-sm font-semibold text-ink/62 transition hover:text-ink"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.06, duration: 0.42 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-plasma transition-all duration-300 group-hover/nav:w-full" />
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="#contact"
          className="focus-ring hidden items-center gap-2 border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:border-plasma hover:text-plasma md:inline-flex"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a demo <ArrowUpRight size={15} aria-hidden="true" />
        </motion.a>
        <button
          type="button"
          className="focus-ring grid size-10 place-items-center border border-ink/15 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>
      {open ? (
        <nav className="mx-auto mt-2 grid w-[calc(100%-1.5rem)] max-w-6xl gap-1 border border-ink/10 bg-white p-2 shadow-soft backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[6px] px-3 py-3 text-sm font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </motion.header>
  );
}
