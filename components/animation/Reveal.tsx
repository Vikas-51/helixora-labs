"use client";

import { fadeUp, scaleIn, staggerContainer } from "@/animation/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  mode?: "fade" | "scale" | "stagger";
  delay?: number;
};

export function Reveal({ children, className, mode = "fade", delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = mode === "scale" ? scaleIn : mode === "stagger" ? staggerContainer : fadeUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
