"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Clock, Shield } from "lucide-react";
import Image from "next/image";

export function AboutContent() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty and transparency in all our business dealings.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Quality Excellence",
      description:
        "Every project receives meticulous attention to detail, ensuring superior results that exceed expectations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Reliability",
      description:
        "We consistently deliver on time and on budget, building lasting partnerships with our clients.",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Innovation",
      description:
        "We stay ahead of industry trends, incorporating the latest technology and techniques in our work.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "Global Skyprint Limited established",
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded operations and client base across Nigeria",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced printing technologies",
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Recognized as premier printing solutions provider",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every project we
              undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    {value.icon}
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Company Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-20 bg-orange-200 mt-2" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Meet Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experts in Printing & Design
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Kunle Obi",
                role: "CEO & Founder",
                image: "/professional-nigerian-ceo-in-business-suit.jpg",
              },
              {
                name: "Chioma Adeyemi",
                role: "Creative Director",
                image: "/professional-nigerian-female-creative-director.jpg",
              },
              {
                name: "Tunde Oluwaseun",
                role: "Operations Manager",
                image: "/professional-nigerian-operations-manager.jpg",
              },
              {
                name: "Amara Nwosu",
                role: "Quality Assurance",
                image:
                  "/professional-nigerian-female-quality-assurance-man.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
