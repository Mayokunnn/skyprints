import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services-hero";
import { ServicesSections } from "@/components/services-sections";
import { ServicesCTA } from "@/components/services-cta";
import { DotBackground } from "@/components/dot-background";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DotBackground>
        <ServicesHero />
      </DotBackground>
      <ServicesSections />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
