import { Reveal } from "@/components/animation/Reveal";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";
import { EdgePanel } from "@/components/ui/EdgePanel";
import { ImpactMorphGallery } from "@/components/ui/ImpactMorphGallery";
import { responsiveShell, sectionSpacing } from "@/responsive/breakpoints";

const stats = [
  { value: "41%", label: "fewer inconclusive assay cycles" },
  { value: "3.8x", label: "faster phenotype triage" },
  { value: "92%", label: "traceable experiment lineage" },
  { value: "18", label: "therapeutic areas modeled" }
];

export function ImpactSection() {
  return (
    <section id="impact" className={`${sectionSpacing} bg-[radial-gradient(circle_at_12%_20%,rgba(168,85,247,0.16),transparent_28rem),radial-gradient(circle_at_86%_70%,rgba(255,79,195,0.11),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(245,238,255,0.92))]`}>
      <div className={responsiveShell}>
        <Reveal>
          <EdgePanel className="overflow-hidden border-black/8 bg-white/38 p-5 shadow-[0_30px_120px_rgba(18,18,20,0.1)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="border-l-4 border-black/75 pl-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/45">Statistics / impact</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                  Research velocity with evidence quality intact.
                </h2>
                <p className="mt-5 max-w-xl text-base font-medium leading-7 text-ink/58">
                  Image evidence, assay telemetry, and program decisions stay connected as the research story moves.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={index * 0.06}>
                    <div className="group border-t border-black/10 bg-white/28 px-1 pt-5 transition duration-300 hover:border-black/35">
                      <AnimatedCounter value={stat.value} className="font-display text-5xl font-semibold text-ink transition duration-300 group-hover:text-black/62" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/48">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <ImpactMorphGallery />
          </EdgePanel>
        </Reveal>
      </div>
    </section>
  );
}
