import { Reveal } from "@/components/animation/Reveal";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";
import { InnovationCardMotion } from "@/components/animation/InnovationCardMotion";
import { EdgePanel } from "@/components/ui/EdgePanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { responsiveShell, sectionSpacing } from "@/responsive/breakpoints";

const principles = [
  {
    title: "Assay intelligence",
    text: "Plan the next best cellular readout from live signal quality, variance, and study objective.",
    metric: "41%",
    label: "cycle reduction",
    accent: "from-plasma/22 to-[#ff4fc3]/10"
  },
  {
    title: "Human tissue models",
    text: "Map organoid response, viability drift, and expression quality across patient-relevant systems.",
    metric: "4.2M",
    label: "cell states",
    accent: "from-[#ff4fc3]/18 to-ion/10"
  },
  {
    title: "Molecular decision graph",
    text: "Connect vectors, biomarkers, and phenotype evidence into explainable program decisions.",
    metric: "92%",
    label: "traceable lineage",
    accent: "from-ion/14 to-plasma/16"
  }
];

export function AboutSection() {
  return (
    <section id="innovation" className={`${sectionSpacing} section-breathe bg-[radial-gradient(circle_at_18%_10%,rgba(168,85,247,0.16),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(255,79,195,0.1),transparent_28rem),linear-gradient(180deg,#fbf8ff,#f3edff)] text-ink`}>
      <div className={responsiveShell}>
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <SectionHeading eyebrow="About / innovation" title="A research OS for teams moving from hypothesis to viable biology." body="Our platform reads multi-modal experiments as they evolve, then recommends the next most informative assay, target, or vector condition." />
          <p className="border-r-2 border-plasma pr-4 text-right text-lg font-medium leading-8 text-ink/58">
            Every node represents a decision gate. Every line keeps the evidence traceable.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <EdgePanel className="border-plasma/14 bg-white/35 p-5 shadow-[0_30px_120px_rgba(80,36,130,0.12)] backdrop-blur-xl sm:p-7">
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.1}
                >
                  <InnovationCardMotion
                    className={`group relative min-h-[430px] overflow-hidden border bg-white/58 p-6 shadow-[0_24px_90px_rgba(80,36,130,0.1)] backdrop-blur-2xl transition duration-300 hover:border-plasma/45 hover:bg-white/80 hover:shadow-[0_30px_110px_rgba(168,85,247,0.18)] "
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent" />
                      <div className="absolute -right-16 top-20 size-44 rounded-full bg-plasma/16 blur-3xl" />
                    </div>
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${item.accent} opacity-60 blur-2xl`} />
                    <div className="mb-8 flex items-center justify-between">
                      <span className={`node-dot-active`} />
                      <span className="font-display text-sm font-semibold text-ink/32">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
                    <p className="mt-4 min-h-24 text-base font-medium leading-7 text-ink/62">{item.text}</p>
                    <div className="mt-8 border-t border-ink/10 pt-5">
                      <AnimatedCounter value={item.metric} className="font-display text-4xl font-semibold text-plasma" />
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-ink/46">{item.label}</p>
                    </div>
                  </InnovationCardMotion>
                </Reveal>
              ))}
            </div>
          </EdgePanel>
        </Reveal>
      </div>
    </section>
  );
}
