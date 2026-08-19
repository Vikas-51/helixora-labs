"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function GsapParallax({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.to("[data-gsap-float]", {
        yPercent: -16,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
