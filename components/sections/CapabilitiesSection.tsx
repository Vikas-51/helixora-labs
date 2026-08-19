import { Reveal } from "@/components/animation/Reveal";
import { EdgePanel } from "@/components/ui/EdgePanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CapabilityParticleVisual } from "@/components/visuals/CapabilityParticleVisual";
import { responsiveShell, sectionSpacing } from "@/responsive/breakpoints";

const capabilities = [
  { title: "Target discovery", text: "Prioritize disease biology with phenotype-linked evidence maps.", tag: "Discovery", visual: "helix" as const },
  { title: "Cell therapy analytics", text: "Track potency, viability, and expression quality across cohorts.", tag: "Therapy", visual: "sphere" as const },
  { title: "Organoid screening", text: "Compare response patterns in human-relevant tissue systems.", tag: "Models", visual: "ring" as const },
  { title: "CMC readiness", text: "Translate research decisions into manufacturable program constraints.", tag: "Scale", visual: "lattice" as const },
  { title: "Biomarker strategy", text: "Select markers that remain explainable across assay conditions.", tag: "Signal", visual: "wave" as const },
  { title: "Partner data rooms", text: "Package lineage, confidence, and evidence for external review.", tag: "Review", visual: "capsule" as const }
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className={`${sectionSpacing} section-breathe bg-[radial-gradient(circle_at_15%_20%,rgba(255,79,195,0.17),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.22),transparent_30rem),linear-gradient(180deg,#12091f,#080411)] text-bone`}>
      <div className={responsiveShell}>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for high-stakes biotech programs."
            body="Every capability is designed around the practical pressure of advancing a therapeutic program without losing scientific traceability."
            tone="dark"
          />
        </Reveal>
        <Reveal className="mt-12">
          <EdgePanel className="border-bone/10 bg-white/[0.04] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.28)] sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`group relative min-h-[560px] overflow-hidden border border-bone/10 bg-white/[0.07] p-7 text-bone transition duration-300 hover:-translate-y-2 hover:border-plasma/45 hover:bg-white/[0.11] hover:shadow-[0_24px_70px_rgba(168,85,247,0.2)] ${
                    index === capabilities.length - 1 ? "bg-plasma/10" : ""
                  }`}
                >
                  <div className="absolute right-0 top-0 size-20  translate-x-8 -translate-y-8 rounded-full bg-plasma/0 blur-2xl transition group-hover:bg-plasma/18" />
                  <CapabilityParticleVisual mode={capability.visual} />
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-plasma/70">{capability.tag}</p>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-bone">{capability.title}</h3>
                  <p className="mt-5 text-base font-medium leading-7 text-bone/56">{capability.text}</p>
                </div>
              ))}
            </div>
          </EdgePanel>
        </Reveal>
      </div>
    </section>
  );
}
