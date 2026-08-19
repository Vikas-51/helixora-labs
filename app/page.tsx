import { AboutSection } from "@/components/sections/AboutSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helixora Labs",
  url: "https://helixora-biotech.vercel.app",
  description: "Adaptive biotechnology platform for precision cell intelligence.",
  sameAs: ["https://github.com/helixora-labs"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <CapabilitiesSection />
        <ImpactSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
