"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductFilters } from "@/components/product-filters";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, ShoppingCart } from "lucide-react";
import Link from "next/link";

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
  ],
  openGraph: {
    title: "Shop | Corporate Printing Products & Solutions",
    description:
      "Browse our complete catalog of corporate printing products including business cards, brochures, merchandise, banners, and branding solutions.",
    type: "website",
    url: "https://skyprints.vercel.app/shop",
  },
};

export default function ShopPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

      {/* Shop Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <Link href="/cart">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6">
              <div className="hidden lg:flex justify-between items-center">
                <Link href="/cart">
                  <Button variant="outline">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View Cart
                  </Button>
                </Link>
              </div>
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
