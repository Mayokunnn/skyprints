"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { NumberTicker } from "./ui/number-ticker";
import { HeroParallax } from "./ui/hero-parallax"; // ✅ bring in your parallax
import { cn } from "@/lib/utils";
import { DotBackground } from "./dot-background";
export const products = [
  {
    title: "Branded Coffee Mugs",
    thumbnail: "/branded-promotional-coffee-mugs.jpg",
  },
  {
    title: "Business Cards Printing",
    thumbnail: "/business-cards-printing-process.jpg",
  },
  {
    title: "Corporate Polo Shirts",
    thumbnail: "/corporate-branded-polo-shirts.jpg",
  },
  {
    title: "Corporate Identity",
    thumbnail: "/corporate-branding-identity-design.jpg",
  },
  {
    title: "Brochure Printing",
    thumbnail: "/corporate-brochure-design-printing.jpg",
  },
  {
    title: "Letterhead Printing",
    thumbnail: "/corporate-letterhead-design-printing.jpg",
  },
  {
    title: "Presentation Folders",
    thumbnail: "/corporate-presentation-folders.jpg",
  },
  {
    title: "Product Packaging",
    thumbnail: "/custom-product-packaging-boxes.jpg",
  },
  {
    title: "Digital Printing",
    thumbnail: "/digital-printing-services.jpg",
  },
  {
    title: "Exhibition Stands",
    thumbnail: "/exhibition-banner-stands-display.jpg",
  },
  {
    title: "Safety Signage",
    thumbnail: "/industrial-safety-signage-printing.jpg",
  },
  {
    title: "Large Format Banners",
    thumbnail: "/large-format-printing-banners.jpg",
  },
  {
    title: "Printing Facility",
    thumbnail: "/modern-printing-facility-with-large-format-printer.jpg",
  },
  {
    title: "Packaging Design",
    thumbnail: "/packaging-design-solutions.jpg",
  },
  {
    title: "Business Card Back",
    thumbnail: "/professional-business-cards-design-back.jpg",
  },
  {
    title: "Business Card Front",
    thumbnail: "/professional-business-cards-design-front.jpg",
  },
  {
    title: "Business Card Set",
    thumbnail: "/professional-business-cards-design.jpg",
  },
  {
    title: "Technical Manuals",
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
          className
        )}
      >
        {/* ✅ Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <TypewriterEffect
              words={[
                { text: "Creating" },
                { text: "Printing", className: "text-accent" },
                { text: "Solutions" },
                { text: "for" },
                { text: "Corporate", className: "text-primary" },
                { text: "Excellence", className: "text-accent" },
              ]}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-base sm:text-lg leading-relaxed text-pretty max-w-2xl mx-auto"
            >
              Skyprint Global Limited delivers bespoke corporate branding,
              technical printing, promotional merchandise, and exhibition
              solutions with unmatched speed, quality, and cost-effectiveness.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.5, duration: 0.6 }}
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
                transition: { staggerChildren: 0.3, delayChildren: 3.2 },
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
                  delay={3 + i * 0.3}
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
