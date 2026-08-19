"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

function parseValue(value: string) {
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  return {
    numeric,
    prefix: value.match(/^[^0-9]*/)?.[0] ?? "",
    suffix: value.match(/[^0-9.]*$/)?.[0] ?? ""
  };
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const { numeric, prefix, suffix } = parseValue(value);
    const state = { current: 0 };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const animation = animate(state, {
          current: numeric,
          duration: 1300,
          ease: "outExpo",
          onUpdate: () => {
            const rounded = numeric % 1 === 0 ? Math.round(state.current).toString() : state.current.toFixed(1);
            setDisplay(`${prefix}${rounded}${suffix}`);
          }
        });
        observer.disconnect();
        return () => animation.cancel();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={root} className={className}>
      {display}
    </span>
  );
}
