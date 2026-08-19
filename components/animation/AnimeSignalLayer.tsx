"use client";

import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const signals = ["mRNA vector", "cell viability", "target affinity", "assay confidence"];

export function AnimeSignalLayer() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const chips = element.querySelectorAll("[data-signal-chip]");
    const animation = animate(chips, {
      translateY: [-6, 6],
      opacity: [0.64, 1],
      delay: stagger(180),
      duration: 1800,
      ease: "inOutSine",
      loop: true,
      alternate: true
    });

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div ref={root} className="pointer-events-none absolute inset-4 z-10 hidden sm:block">
      {signals.map((signal, index) => (
        <span
          key={signal}
          data-signal-chip
          className="absolute rounded-[8px] border border-bone/12 bg-bone/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-bone backdrop-blur-md"
          style={{
            left: `${index % 2 === 0 ? 5 : 58}%`,
            top: `${14 + index * 18}%`
          }}
        >
          {signal}
        </span>
      ))}
    </div>
  );
}
