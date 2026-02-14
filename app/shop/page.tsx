import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ShopContent } from "@/components/shop-content";

export const metadata: Metadata = {
  title: "Shop | Corporate Printing Products & Solutions",
  description:
    "Browse our complete catalog of corporate printing products including business cards, brochures, merchandise, banners, and branding solutions. Custom printing for businesses in Nigeria.",
  keywords: [
    "shop corporate printing",
    "custom printing products",
    "business cards",
    "merchandise printing",
    "banners",
    "brochures",
    "branding solutions",
    "printing catalog",
    "corporate printing nigeria",
    "professional printing services",
    "Global Skyprint services",
    "skyprint",
    "skyprint nigeria",
    "skyprint lagos",
    "printing company",
    "Global Skyprint",
    "skyprint services",
    "printing solutions",
  ],
  openGraph: {
    title: "Shop | Corporate Printing Products & Solutions",
    description:
      "Browse our complete catalog of corporate printing products including business cards, brochures, merchandise, banners, and branding solutions.",
    type: "website",
    url: "https://www.globalskyprint.com/shop",
  },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Corporate Printing Solutions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our comprehensive catalog of printing and branding products
              designed for corporate excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content (Interactive) */}
      <ShopContent />

      <Footer />
    </main>
  );
}
