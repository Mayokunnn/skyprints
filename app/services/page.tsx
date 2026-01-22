import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services-hero";
import { ServicesSections } from "@/components/services-sections";
import { ServicesCTA } from "@/components/services-cta";
import { DotBackground } from "@/components/dot-background";

export const metadata: Metadata = {
  title: "Services | Professional Printing & Branding Solutions",
  description:
    "Explore our comprehensive printing and branding services. From design consultation to large-format printing, we provide end-to-end solutions for corporate branding and marketing materials.",
  keywords: [
    "printing services",
    "branding services",
    "design services",
    "corporate solutions",
    "large format printing",
  ],
  openGraph: {
    title: "Services | Professional Printing & Branding Solutions",
    description:
      "Explore our comprehensive printing and branding services for corporate excellence.",
    type: "website",
    url: "https://www.globalskyprint.com/services",
  },
};

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
