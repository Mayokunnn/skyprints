import { Header } from "@/components/header";
import { HeroSection, products } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Footer } from "@/components/footer";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero content floats above parallax */}
      <div className="relative z-0">
          <HeroParallax products={products} />
      </div>

      {/* Other sections stack normally below */}
      <div className="relative z-20">
        <ServicesGrid />
        <WhyChooseUs />
        <Footer />
      </div>
    </main>
  );
}
