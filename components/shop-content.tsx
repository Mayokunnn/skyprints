"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductFilters } from "@/components/product-filters";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function ShopContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <CategorySidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="hidden lg:flex justify-between items-center">
              <Link href="/cart">
                <Button variant="outline">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  View Cart
                </Button>
              </Link>
            </div>
            <ProductFilters />
            <ProductGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
