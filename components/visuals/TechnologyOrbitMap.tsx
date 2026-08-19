"use client";

import { motion, useReducedMotion } from "framer-motion";

type OrbitItem = {
  title: string;
  text: string;
  x: string;
  y: string;
};

type TechnologyOrbitMapProps = {
  technologies: OrbitItem[];
};

const circleOrigin = { x: "78%", y: "24%" };

const circles = [
  { left: "32%", top: "0%", size: 460, className: "bg-white/50", delay: 0 },
  { left: "44.5%", top: "3%", size: 360, className: "bg-gray-200", delay: 0.12 },
  { left: "58%", top: "8%", size: 260, className: "bg-gray-100", delay: 0.24 },
  { left: "70%", top: "11%", size: 160, className: "bg-gray-50", delay: 0.36 }
];

export function TechnologyOrbitMap({ technologies }: TechnologyOrbitMapProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="relative min-h-[460px] overflow-visible">
        {circles.map((circle) => (
          <div
            key={`${circle.left}-${circle.size}`}
            className={`absolute rounded-full border border-ink/8 ${circle.className}`}
            style={{ left: circle.left, top: circle.top, width: circle.size, height: circle.size }}
          />
        ))}
        {technologies.map((item, index) => (
          <div key={item.title} className="absolute max-w-[190px]" style={{ left: item.x, top: item.y }}>
            <span className={`mb-1 inline-flex size-3 rounded-full ${index === 0 ? "node-dot-active" : "bg-plasma"}`} />
            <h4 className="font-display text-sm font-medium leading-tight text-ink">{item.title}</h4>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-[460px] overflow-visible">
      {circles.map((circle) => (
        <motion.div
          key={`${circle.left}-${circle.size}`}
          className={`absolute rounded-full border border-ink/8 ${circle.className}`}
          initial={{
            left: circleOrigin.x,
            top: circleOrigin.y,
            width: 14,
            height: 14,
            opacity: 0,
            scale: 0.2
          }}
          whileInView={{
            left: circle.left,
            top: circle.top,
            width: circle.size,
            height: circle.size,
            opacity: 1,
            scale: 1
          }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1,
            delay: circle.delay,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      ))}
      {technologies.map((item, index) => (
        <motion.div
          key={item.title}
          className="absolute max-w-[190px]"
          initial={{ left: circleOrigin.x, top: circleOrigin.y, opacity: 0, scale: 0.4 }}
          whileInView={{ left: item.x, top: item.y, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            delay: 0.28 + index * 0.12,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.span
            className={`mb-1 inline-flex size-3 rounded-full ${index === 0 ? "node-dot-active" : "bg-plasma"}`}
            initial={{ boxShadow: "0 0 0 0 rgba(168,85,247,0)" }}
            whileInView={{ boxShadow: "0 0 0 8px rgba(168,85,247,0.14)" }}
            transition={{ duration: 0.5, delay: 0.78 + index * 0.12 }}
          />
          <h4 className="font-display text-sm font-medium leading-tight text-ink">{item.title}</h4>
        </motion.div>
      ))}
    </div>
  );
}
