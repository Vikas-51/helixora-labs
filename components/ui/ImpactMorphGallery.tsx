"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ImageCard = {
  title: string;
  label: string;
  tone: string;
  imageSrc: string;
};

const cards: ImageCard[] = [
  { title: "Closed-loop dosing", label: "Microfluidic vial", tone: "rgba(25, 132, 111, 0.78)", imageSrc: "/images/impact/lab-01.png" },
  { title: "Preclinical assay", label: "Injection study", tone: "rgba(32, 95, 170, 0.74)", imageSrc: "/images/impact/lab-02.png" },
  { title: "3D model review", label: "Imaging console", tone: "rgba(190, 84, 118, 0.74)", imageSrc: "/images/impact/lab-03.png" },
  { title: "Organ model panel", label: "Tissue evidence", tone: "rgba(204, 141, 47, 0.78)", imageSrc: "/images/impact/lab-04.png" },
  { title: "Robotic screening", label: "Automated plate", tone: "rgba(71, 116, 101, 0.76)", imageSrc: "/images/impact/lab-05.png" },
  { title: "Cytometry readout", label: "Cell-state plots", tone: "rgba(102, 94, 166, 0.72)", imageSrc: "/images/impact/lab-06.png" },
  { title: "Mouse phenotyping", label: "Model cohort", tone: "rgba(18, 121, 143, 0.76)", imageSrc: "/images/impact/lab-07.png" },
  { title: "Clean-room prep", label: "Sterile workflow", tone: "rgba(165, 89, 63, 0.74)", imageSrc: "/images/impact/lab-08.png" },
  { title: "Culture handling", label: "Colony growth", tone: "rgba(95, 132, 53, 0.72)", imageSrc: "/images/impact/lab-09.png" },
  { title: "Growth comparison", label: "Plate morphology", tone: "rgba(132, 83, 134, 0.72)", imageSrc: "/images/impact/lab-10.png" },
  { title: "Bioreactor control", label: "Process scale", tone: "rgba(26, 107, 128, 0.74)", imageSrc: "/images/impact/lab-11.png" }
];

const duplicatedCards = [...cards, ...cards];

export function ImpactMorphGallery() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative mt-8 w-full h-[320px] sm:h-[360px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF9F6] via-[#F3F1EC] to-[#EAE7E1] flex items-center">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.85),transparent_70%)] pointer-events-none" />

      {/* Edge Blur Masking */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20" />

      {/* Main Continuous Marquee Track */}
      <motion.div
        className="flex gap-5 w-max items-center px-4"
        animate={{
          x: isPaused ? undefined : ["0%", "-50%"]
        }}
        transition={{
          ease: "linear",
          duration: 35,
          repeat: Infinity
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedCards.map((card, index) => {
          return (
            <motion.article
              key={`${card.title}-${index}`}
              className="relative group shrink-0 w-[130px] h-[180px] sm:w-[155px] sm:h-[215px] rounded-2xl overflow-hidden border border-black/10 bg-white shadow-md cursor-pointer"
              whileHover={{
                scale: 1.08,
                y: -8,
                zIndex: 40,
                shadow: "0px 18px 35px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(min-width: 640px) 155px, 130px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-20 mix-blend-soft-light"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${card.tone}, transparent 60%)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Text Info */}
              <div className="absolute inset-x-0 bottom-0 p-3 text-white z-10">
                <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white/70">
                  {card.label}
                </p>
                <h4 className="text-xs font-semibold mt-0.5 leading-snug drop-shadow-sm">
                  {card.title}
                </h4>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}