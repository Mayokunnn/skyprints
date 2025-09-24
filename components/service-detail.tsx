"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Award,
  DollarSign,
  ArrowRight,
} from "lucide-react";

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  // Mock service data - in real app, fetch based on slug
  const getServiceData = (slug: string) => {
    const services = {
      "corporate-branding": {
        title: "Corporate Branding & Identity",
        subtitle:
          "Professional brand identity solutions for corporate excellence",
        description:
          "Establish a strong corporate presence with our comprehensive branding solutions. We create cohesive brand identities that communicate professionalism, reliability, and innovation across all your business materials.",
        image: "/corporate-branding-identity-design-hero.jpg",
        pricing: "Starting from ₦25,000",
        deliveryTime: "3-5 business days",
        features: [
          "Logo design and brand guidelines",
          "Business cards and stationery design",
          "Corporate letterheads and envelopes",
          "Brand identity style guides",
          "Marketing collateral templates",
          "Digital brand assets package",
        ],
        process: [
          {
            step: "Discovery & Consultation",
            description:
              "We understand your brand vision, values, and target audience",
          },
          {
            step: "Concept Development",
            description: "Create initial design concepts and brand direction",
          },
          {
            step: "Design Refinement",
            description: "Refine chosen concepts based on your feedback",
          },
          {
            step: "Final Delivery",
            description: "Deliver complete brand package with guidelines",
          },
        ],
        packages: [
          {
            name: "Starter Package",
            price: "₦25,000",
            features: [
              "Logo design",
              "Business cards",
              "Letterhead",
              "Basic brand guidelines",
            ],
          },
          {
            name: "Professional Package",
            price: "₦45,000",
            features: [
              "Logo design + variations",
              "Complete stationery set",
              "Brand guidelines",
              "Marketing templates",
              "Digital assets",
            ],
          },
          {
            name: "Enterprise Package",
            price: "₦75,000",
            features: [
              "Comprehensive brand identity",
              "Complete stationery suite",
              "Detailed brand guidelines",
              "Marketing collateral",
              "Digital and print assets",
              "Brand implementation support",
            ],
          },
        ],
        gallery: [
          "/corporate-branding-logo-designs.jpg",
          "/business-cards-corporate-design.jpg",
          "/corporate-stationery-letterhead.jpg",
          "/brand-guidelines-documentation.jpg",
        ],
      },
      // Add other services as needed
    };

    return (
      services[slug as keyof typeof services] || services["corporate-branding"]
    );
  };

  const service = getServiceData(slug);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{service.pricing}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-pretty">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>{service.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-accent" />
                <span>Competitive Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-primary-foreground bg-transparent"
              >
                <Link href="/shop">Browse Products</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Service Details Tabs */}
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
                <CardDescription>
                  Comprehensive features included in our{" "}
                  {service.title.toLowerCase()} service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
                <CardDescription>
                  How we deliver exceptional results for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-900 text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {step.step}
                        </h4>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {service.packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    index === 1 ? "border-accent shadow-lg" : ""
                  }`}
                >
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {pkg.price}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        index === 1
                          ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                          : "bg-slate-900 hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      <Link href="/contact">Choose Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {service.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${service.title} example ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a custom quote tailored to your specific needs. Our team is
              ready to help you create professional materials that elevate your
              brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-slate-900 hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/contact">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
