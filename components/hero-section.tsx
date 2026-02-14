"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { NumberTicker } from "./ui/number-ticker";
import { cn } from "@/lib/utils";
import { DotBackground } from "./dot-background";

export const products = [
  {
    title: "Customized Coffee Mugs",
    thumbnail: "/products/customized-mug.jpg",
  },
  {
    title: "Business Cards",
    thumbnail: "/products/one-sided-business-card.webp",
  },
  {
    title: "Corporate T-Shirts",
    thumbnail: "/products/customized-t-shirt.png",
  },
  {
    title: "Perfect Binding Brochures",
    thumbnail: "/products/a4-perfect-binding-brochure.jpg",
  },
  {
    title: "Promotional Flyers",
    thumbnail: "/products/a5-double-side-flyers.jpg",
  },
  {
    title: "Table Calendars",
    thumbnail: "/products/a5-table-calendar.jpg",
  },
  {
    title: "Custom Gift Boxes",
    thumbnail: "/products/customized-gift-box.jpg",
  },
  {
    title: "Customized Pens",
    thumbnail: "/products/customized-pen.jpg",
  },
  {
    title: "Invitation Cards",
    thumbnail: "/products/customized-invitation-card.jpg",
  },
  {
    title: "Roll-Up Banners",
    thumbnail: "/products/roll-up-banner.jpg",
  },
  {
    title: "Industrial Safety Signage",
    thumbnail: "/industrial-safety-signage-printing.jpg",
  },
  {
    title: "Large Format Banners",
    thumbnail: "/large-format-printing-banners.jpg",
  },
  {
    title: "Corporate Diaries",
    thumbnail: "/products/corporate-diary.jpg",
  },
  {
    title: "Hard Cover Jotters",
    thumbnail: "/products/hard-cover-jotter.jpg",
  },
  {
    title: "Two-Sided Business Cards",
    thumbnail: "/products/two-sided-business-card.webp",
  },
  {
    title: "Professional Invoices",
    thumbnail: "/products/company-invoice.jpg",
  },
  {
    title: "Custom Water Bottles",
    thumbnail: "/products/customized-water-bottle.jpg",
  },
  {
    title: "Technical Documentation",
    thumbnail: "/technical-manual-printing-documentation.jpg",
  },
];

export function HeroSection({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <DotBackground>
      <section
        ref={ref}
        className={cn(
          "relative w-full flex flex-col justify-center pt-10 lg:pt-20",
          className,
        )}
      >
        {/* ✅ Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-primary"
            >
              Creating <span className="tex[t-accent">Printing</span> Solutions
              for Corporate <span className="text-accent">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              className="text-base sm:text-lg leading-relaxed text-pretty max-w-2xl mx-auto"
            >
              The Global Skyprint Services Limited delivers bespoke corporate
              branding, technical printing, promotional merchandise, and
              exhibition solutions with unmatched speed, quality, and
              cost-effectiveness.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
            >
              <Link href="/shop">Shop Now</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-4 sm:pt-6"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.3, delayChildren: 1.6 },
              },
            }}
          >
            {[
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 24, suffix: "hr", label: "Express Service" },
              { value: 100, suffix: "%", label: "Quality Guarantee" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-center"
              >
                <NumberTicker
                  value={stat.value}
                  delay={1.8 + i * 0.3}
                  className="text-2xl font-bold text-primary"
                />
                <span className="text-2xl font-bold text-primary">
                  {stat.suffix}
                </span>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </DotBackground>
  );
}
