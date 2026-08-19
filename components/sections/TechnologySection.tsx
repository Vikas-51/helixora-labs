import { Reveal } from "@/components/animation/Reveal";
import { EdgePanel } from "@/components/ui/EdgePanel";
import { TechnologyOrbitMap } from "@/components/visuals/TechnologyOrbitMap";
import { responsiveShell, sectionSpacing } from "@/responsive/breakpoints";

const technologies = [
  { title: "Vector intelligence", text: "Rank gene delivery paths against expression durability and immune response.", x: "89%", y: "15%" },
  { title: "Phenotype vision", text: "Convert microscopy into interpretable cellular state maps.", x: "80%", y: "44.5%" },
  { title: "Adaptive protocols", text: "Prioritize next experiments as signal strength shifts.", x: "57.5%", y: "30%" },
  { title: "Biomarker routing", text: "Route high-confidence markers into translational review.", x: "60%", y: "76%" },
   { title: "Assay telemetry", text: "Track every readout as structured evidence.", x: "33%", y: "66%" },
];

export function TechnologySection() {
  return (
    <section id="technology" className={`${sectionSpacing} bg-white/62`}>
      <div className={responsiveShell}>
        <Reveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-plasma">Technology / research</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">
              Wet lab evidence, machine reasoning, and clinical constraints in one orbit<span className="text-plasma">.</span>
            </h2>
          </div>
          {/* <a href="#contact" className="focus-ring inline-flex w-fit items-center border border-ink px-5 py-3 text-sm font-bold text-ink transition hover:border-plasma hover:text-plasma">
            Book a demo
          </a> */}
        </Reveal>
        <Reveal>
          <EdgePanel className="overflow-hidden p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
              <div>
                <div className="border-l-4 border-plasma pl-6">
                  <h3 className="font-display text-3xl font-semibold leading-tight text-ink">
                    Translating living signal into deployable research decisions.
                  </h3>
                  <p className="mt-5 text-xl font-semibold leading-8 text-ink/42">
                    Molecular graphs, image phenotypes, protocol state, and translational constraints move together.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {["12ms", "4.2M", "99.1%", "21"].map((value, index) => (
                    <div key={value}>
                      <p className="font-display text-4xl font-semibold text-ink">{value}</p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/45">
                        {["signal latency", "cell states", "lineage match", "active models"][index]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <TechnologyOrbitMap technologies={technologies} />
            </div>
          </EdgePanel>
        </Reveal>
      </div>
    </section>
  );
}
