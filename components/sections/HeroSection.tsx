import { Reveal } from "@/components/animation/Reveal";
import { BioOrbitalScene } from "@/components/visuals/BioOrbitalScene";
import { QuantumNebulaHeroVisual } from "@/components/visuals/QuantumNebulaHeroVisual";
import { responsiveShell } from "@/responsive/breakpoints";
import { ArrowRight, ArrowUpRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#10081d] pb-20 pt-32 text-bone sm:pt-36 lg:min-h-screen lg:pb-24 lg:pt-16">
      <QuantumNebulaHeroVisual variant="background" />
      <div className="absolute inset-0 bg-grid bg-[length:34px_34px] opacity-[0.06]" />
      <div className={`${responsiveShell} relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
        <Reveal className="max-w-7xl">
          <p className="mb-5 inline-flex border border-bone/14 bg-white/8 px-3 py-2 text-sm font-semibold text-bone backdrop-blur">
            Translational cell intelligence for faster therapeutic decisions
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-normal text-bone sm:text-6xl lg:text-7xl">
            Building the future of programmable biology<span className="text-plasma">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bone/70 sm:text-xl">
            Helixora unifies cellular imaging, molecular simulation, and adaptive assay design into a research platform built for clinical-grade discovery.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 bg-bone px-6 py-4 font-semibold text-ink transition hover:bg-plasma hover:text-bone">
              Build with Helixora <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#technology" className="focus-ring inline-flex items-center justify-center gap-2 border border-bone/16 bg-white/8 px-6 py-4 font-semibold text-bone backdrop-blur transition hover:border-plasma hover:text-plasma">
              <PlayCircle size={18} aria-hidden="true" /> View platform
            </a>
          </div>
          {/* <div className="mt-16 hidden items-center gap-4 text-bone/28 sm:flex">
            <span className="h-8 w-px bg-bone/18" />
            <ArrowUpRight size={34} strokeWidth={1.2} />
          </div> */}
        </Reveal>
        <Reveal mode="scale" delay={0.12}>
          <BioOrbitalScene className="mix-blend-screen" />
        </Reveal>
      </div>
    </section>
  );
}
