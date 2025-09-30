"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Palette,
  Printer,
  Award,
  Calendar,
  Package,
  Monitor,
} from "lucide-react";

const services = [
  {
    id: "corporate-branding",
    icon: Palette,
    title: "Corporate Branding & Identity",
    description:
      "Complete brand identity solutions that establish your corporate presence with professional consistency across all materials.",
    image: "/corporate-branding-identity-design.jpg",
    features: [
      "Logo design and brand guidelines",
      "Business cards and stationery",
      "Corporate letterheads and envelopes",
      "Brand identity packages",
      "Marketing collateral design",
    ],
    benefits: [
      "Professional brand consistency",
      "Enhanced corporate image",
      "Memorable brand recognition",
    ],
    pricing: "Starting from ₦25,000",
  },
  {
    id: "technical-printing",
    icon: Printer,
    title: "Technical & Commercial Printing",
    description:
      "High-precision printing for technical documentation, manuals, reports, and specialized commercial materials.",
    image: "/technical-manual-printing-documentation.jpg",
    features: [
      "Technical manuals and documentation",
      "Engineering drawings and blueprints",
      "Safety manuals and procedures",
      "Training materials and guides",
      "Large format technical prints",
    ],
    benefits: [
      "Industry-standard compliance",
      "Durable materials",
      "Precise color reproduction",
    ],
    pricing: "Starting from ₦15,000",
  },
  {
    id: "merchandise",
    icon: Award,
    title: "Corporate Merchandise",
    description:
      "Branded promotional items, corporate gifts, and professional uniforms that represent your company with pride.",
    image: "/corporate-branded-polo-shirts.jpg",
    features: [
      "Branded apparel and uniforms",
      "Promotional gifts and giveaways",
      "Corporate awards and plaques",
      "Safety wear with company branding",
      "Executive gifts and accessories",
    ],
    benefits: [
      "Employee unity and pride",
      "Brand visibility",
      "Professional appearance",
    ],
    pricing: "Starting from ₦5,000",
  },
  {
    id: "event-branding",
    icon: Calendar,
    title: "Event & Exhibition Branding",
    description:
      "Complete event branding solutions including displays, signage, and promotional materials for exhibitions and corporate events.",
    image: "/exhibition-banner-stands-display.jpg",
    features: [
      "Exhibition stands and displays",
      "Event banners and signage",
      "Conference materials and badges",
      "Promotional booth graphics",
      "Event merchandise and giveaways",
    ],
    benefits: [
      "Professional event presence",
      "Increased brand visibility",
      "Memorable experiences",
    ],
    pricing: "Starting from ₦35,000",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging & Label Printing",
    description:
      "Custom packaging solutions and professional labeling that protects your products while promoting your brand.",
    image: "/custom-product-packaging-boxes.jpg",
    features: [
      "Custom product packaging boxes",
      "Industrial labels and stickers",
      "Shipping and logistics labels",
      "Product information labels",
      "Eco-friendly packaging options",
    ],
    benefits: [
      "Product protection",
      "Brand differentiation",
      "Professional presentation",
    ],
    pricing: "Starting from ₦20,000",
  },
  {
    id: "digital-offset",
    icon: Monitor,
    title: "Digital & Offset Printing Solutions",
    description:
      "Advanced printing technologies for high-volume runs and specialized printing requirements with superior quality.",
    image: "/digital-printing-services.jpg",
    features: [
      "High-volume digital printing",
      "Offset printing for large runs",
      "Variable data printing",
      "Specialty paper and finishes",
      "Color management and proofing",
    ],
    benefits: [
      "Cost-effective large runs",
      "Superior print quality",
      "Flexible printing options",
    ],
    pricing: "Custom pricing available",
  },
];

export function ServicesSections() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left side */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

            useEffect(() => {
              if (isInView) {
                setActiveIndex(index);
              }
            }, [isInView, index]);

            return (
              <div ref={ref} key={service.id} className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{service.pricing}</Badge>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {" "}
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {" "}
                    {service.description}{" "}
                  </p>
                </div>{" "}
                <Card className="border-border">
                  {" "}
                  <CardHeader>
                    {" "}
                    <CardTitle className="text-lg">
                      What's Included
                    </CardTitle>{" "}
                  </CardHeader>
                  <CardContent>
                    {" "}
                    <ul className="space-y-2">
                      {" "}
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />{" "}
                          <span className="text-sm">{feature}</span>{" "}
                        </li>
                      ))}{" "}
                    </ul>
                  </CardContent>
                </Card>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Key Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {service.benefits.map((benefit, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-slate-900 text-primary"
                      >
                        {" "}
                        {benefit}{" "}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-slate-900 hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden lg:block sticky top-32 h-[500px]">
          <motion.div
            key={services[activeIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-lg overflow-hidden shadow-xl h-full"
          >
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
