import { Reveal } from "@/components/animation/Reveal";
import { EdgePanel } from "@/components/ui/EdgePanel";
import { responsiveShell, sectionSpacing } from "@/responsive/breakpoints";
import { ArrowRight } from "lucide-react";

const visionLinks = [
  { label: "Science", href: "#innovation" },
  { label: "3D Imaging", href: "#technology" },
  { label: "Partnering", href: "#capabilities" },
  { label: "About us", href: "#impact" }
];

export function FinalCta() {
  return (
    <section id="contact" className={`${sectionSpacing} bg-[radial-gradient(circle_at_18%_10%,rgba(168,85,247,0.2),transparent_28rem),linear-gradient(180deg,#fbf8ff,#f6f1ff)]`}>
      <Reveal className={responsiveShell}>
        <EdgePanel className="bg-white/78 p-6 shadow-[0_30px_110px_rgba(80,36,130,0.12)] backdrop-blur-2xl sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-plasma">Final CTA</p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Bring adaptive biotechnology into your next research milestone.
            </h2>
            <a href="mailto:research@helixora.example" className="focus-ring inline-flex items-center justify-center gap-2 border border-ink bg-white px-6 py-4 font-semibold text-ink transition hover:border-plasma hover:text-plasma">
              Discuss a program <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[1.35fr_0.65fr]">
            <form className="space-y-7" aria-label="Get in touch form">
              <div>
                <h3 className="font-display text-3xl font-semibold text-ink">Get In Touch</h3>
                <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-ink/58">
                  Reach out regarding collaborations, press inquiries, or general questions.
                </p>
              </div>
              <div className="grid gap-6">
                <label className="grid gap-3 text-sm font-semibold text-ink" htmlFor="cta-email">
                  Email Address
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="Enter your e-mail"
                    className="focus-ring h-14 w-full border border-ink/18 bg-white/36 px-5 text-base font-medium text-ink outline-none transition placeholder:text-ink/38 hover:border-ink/30 focus-visible:border-plasma"
                  />
                </label>
                <label className="grid gap-3 text-sm font-semibold text-ink" htmlFor="cta-message">
                  Message
                  <textarea
                    id="cta-message"
                    name="message"
                    placeholder="Enter your message"
                    rows={6}
                    className="focus-ring min-h-44 w-full resize-none border border-ink/18 bg-white/36 px-5 py-4 text-base font-medium text-ink outline-none transition placeholder:text-ink/38 hover:border-ink/30 focus-visible:border-plasma"
                  />
                </label>
              </div>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-4 text-base font-medium text-ink" htmlFor="cta-consent">
                  <input id="cta-consent" name="consent" type="checkbox" className="peer sr-only" />
                  <span className="grid size-9 place-items-center rounded-full border border-ink/22 bg-white/20 transition peer-checked:border-plasma peer-checked:bg-plasma peer-checked:[&>span]:opacity-100">
                    <span className="size-3 rounded-full bg-white opacity-0 transition" />
                  </span>
                  I agree to the processing of personal data
                </label>
                <button type="submit" className="focus-ring inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-plasma">
                  Send message
                </button>
              </div>
            </form>
            <aside className="border border-ink/10 bg-white/32 p-6">
              <p className="text-base font-medium leading-7 text-ink/62">
                We are committed to transparency and welcome your questions.
              </p>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/42">Our vision</p>
                <nav className="mt-5 flex flex-col gap-3" aria-label="Our vision">
                  {visionLinks.map((link) => (
                    <a key={link.label} href={link.href} className="group inline-flex items-center justify-between border-b border-ink/10 py-3 font-display text-xl font-semibold text-ink transition hover:border-plasma hover:text-plasma">
                      {link.label}
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </EdgePanel>
      </Reveal>
    </section>
  );
}
