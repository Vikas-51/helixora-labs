"use client";

import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

type InnovationCardMotionProps = {
  children: ReactNode;
  className?: string;
};

export function InnovationCardMotion({ children, className = "" }: InnovationCardMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = root.current;
    if (!card) return;

    const onMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        y: -10,
        duration: 0.45,
        ease: "power3.out"
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.55)"
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={root} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
