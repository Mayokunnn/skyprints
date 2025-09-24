"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Printer, Package, Award, Calendar, Palette } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Corporate Branding",
    description: "Logos, business cards, letterheads, and stationery.",
    href: "/services/corporate-branding",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Printer,
    title: "Technical Printing",
    description: "Blueprints, manuals, and documentation.",
    href: "/services/technical-printing",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    icon: Award,
    title: "Corporate Merchandise",
    description: "Branded items, gifts, uniforms, and safety wear.",
    href: "/services/merchandise",
    className: "lg:col-span-2 lg:row-span-3",
  },
  {
    icon: Calendar,
    title: "Event Branding",
    description: "Banners, signage, and exhibition displays.",
    href: "/services/event-branding",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description: "Custom packaging, labels, and industrial packaging.",
    href: "/services/packaging",
    className: "lg:col-span-2 lg:row-span-2",
  },
];

// Parent container animation
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between cards
    },
  },
};

// Each card animation
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateY: 90, // start flipped
    y: 80,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="relative z-20 py-16 lg:py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-foreground">
        Our Printing Solutions
      </h2>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Comprehensive printing and branding services tailored for corporate
        excellence.
      </p>

      <motion.div
        className="mt-12 grid grid-cols-1 lg:grid-cols-6 auto-rows-[200px] gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <FeatureCard key={service.title} {...service} />
        ))}
      </motion.div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        rotate: [0, -2, 2, -1, 1, 0], // wobble on hover
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      className={`p-6 sm:p-8 bg-card rounded-md shadow-md hover:shadow-lg border border-accent overflow-hidden flex flex-col justify-between ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div>
        <Icon className="h-8 w-8 text-accent mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-slate-900 font-medium hover:underline hover:text-accent"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}
