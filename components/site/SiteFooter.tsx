"use client";

import { HelixoraLogo } from "@/components/site/HelixoraLogo";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Explore: [
    { label: "Innovation", href: "#innovation" },
    { label: "Research", href: "#technology" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Impact", href: "#impact" },
  ],
  Company: [
    { label: "About Helixora", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Book a demo", href: "#contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink text-bone">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-plasma/10 blur-[120px]"
      />

      <div className="section-shell relative">
        {/* Main footer */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] md:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="#top"
              className="focus-ring inline-flex rounded-[6px]"
            >
              <div className="[&_svg]:text-bone">
                <Link
  href="#top"
  className="focus-ring inline-flex rounded-[6px]"
>
  <HelixoraLogo variant="light" />
</Link>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-bone/55">
              Adaptive biotechnology systems built to accelerate
              translational research and move breakthrough science
              toward meaningful outcomes.
            </p>

            {/* Status */}
            <div className="mt-7 inline-flex items-center gap-2 border border-bone/10 bg-bone/[0.03] px-3 py-2 text-xs text-bone/55">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-plasma opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-plasma" />
              </span>
              Research systems online
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-bone/35">
              Explore
            </p>

            <ul className="space-y-3">
              {footerLinks.Explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-bone/60 transition-colors duration-200 hover:text-bone"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="translate-y-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-bone/35">
              Company
            </p>

            <ul className="space-y-3">
              {footerLinks.Company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-bone/60 transition-colors duration-200 hover:text-bone"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="translate-y-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-bone/35">
              Start a conversation
            </p>

            <p className="mb-6 max-w-xs text-sm leading-6 text-bone/55">
              Explore how Helixora can support your next translational
              research program.
            </p>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-bone/20 bg-bone px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-plasma hover:bg-plasma"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a demo
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="mailto:hello@helixora.com"
                aria-label="Email Helixora"
                className="focus-ring grid size-9 place-items-center border border-bone/10 text-bone/50 transition hover:border-bone/25 hover:text-bone"
              >
                <Mail size={15} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="focus-ring grid size-9 place-items-center border border-bone/10 text-bone/50 transition hover:border-bone/25 hover:text-bone"
              >
                <Linkedin size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-bone/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {new Date().getFullYear()} Helixora Labs. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-bone/20 sm:block" />

            <p>Adaptive biotechnology systems.</p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="transition hover:text-bone"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-bone"
            >
              Terms
            </Link>

            <Link
              href="#top"
              aria-label="Back to top"
              className="group flex items-center gap-2 transition hover:text-bone"
            >
              Back to top
              <span className="grid size-7 place-items-center border border-bone/10 transition group-hover:border-bone/25">
                <MoveUpRight
                  size={13}
                  className="-rotate-45 transition-transform group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}