"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function ServicesHero() {
  return (
    <section className="relative py-32 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight tracking-tight text-balance"
          >
            Our Services: Printing Solutions for Every Corporate Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty"
          >
            From corporate branding to technical documentation, we provide
            comprehensive printing solutions that elevate your business presence
            and meet the highest professional standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Link href="/quote">Get Custom Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent px-8 py-6 text-lg"
            >
              <Link href="/shop">Browse Products</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
