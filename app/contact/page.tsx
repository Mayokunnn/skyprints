"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Users,
  Printer,
} from "lucide-react";
import { DotBackground } from "@/components/dot-background";

export const metadata: Metadata = {
  title: "Contact Us | The Skyprint Global Services Limited",
  description:
    "Get in touch with The Skyprint Global Services Limited. Contact us via phone, email, or visit our Lagos office. We're ready to discuss your printing and branding needs.",
  keywords: [
    "contact skyprint",
    "printing quotes",
    "Lagos office",
    "customer service",
  ],
  openGraph: {
    title: "Contact Us | The Skyprint Global Services Limited",
    description:
      "Get in touch with The Skyprint Global Services Limited for your printing and branding needs.",
    type: "website",
    url: "https://skyprints.vercel.app/contact",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Visit Our Office",
      details: [
        "2, Ayinde Street, Off Ikate, Surulere",
        "Lagos State, Nigeria",
        "Get directions",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Call Us",
      details: ["+234 (0) 806 761 4781", "Mon-Fri: 8AM-6PM"],
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email Us",
      details: [
        "info@skyprintglobal.com",
        "sales@skyprintglobal.com",
        "support@skyprintglobal.com",
      ],
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Corporate Branding",
      description: "Complete brand identity solutions for businesses",
    },
    {
      icon: <Printer className="h-8 w-8 text-blue-600" />,
      title: "Large Format Printing",
      description: "Banners, posters, and outdoor advertising materials",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Event Materials",
      description: "Conference materials, exhibition displays, and more",
    },
  ];

  const handleWhatsAppChat = () => {
    const phoneNumber = "2348067614781";
    const message = `Hello Skyprint Global! 👋

I'm interested in your printing services and would like to discuss my project requirements. 

Could we chat about:
- Service options
- Pricing
- Timeline
- Custom solutions

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <DotBackground>
        <section className="relative py-32 flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-3">Contact</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Let's Bring Your{" "}
                  <span className="text-orange-400">Vision to Life</span>
                </h1>
                <p className="text-xl mb-8 text-pretty max-w-3xl mx-auto">
                  Ready to start your next printing project? Get in touch with
                  our expert team for personalized solutions and competitive
                  quotes.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white mr-4 gap-0"
                  onClick={handleWhatsAppChat}
                >
                  <FaWhatsapp className="w-4 h-4 mr-1" />
                  Chat with Us on WhatsApp
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </DotBackground>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to connect with our team. We're
              here to help with all your printing and branding needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-[250px] max-h-64 text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form*/}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
                  Send Message
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-600 mb-4">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed quote and project timeline.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">
                        Prefer instant messaging?
                      </h3>
                      <p className="text-green-700 text-sm">
                        Get immediate responses via WhatsApp
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 gap-0"
                      onClick={handleWhatsAppChat}
                    >
                      <FaWhatsapp className="w-4 h-4 mr-1" />
                      Chat Now
                    </Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-orange-500" />
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+234 (0) 806 761 4781" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="corporate-branding">
                        Corporate Branding
                      </option>
                      <option value="large-format">
                        Large Format Printing
                      </option>
                      <option value="business-cards">
                        Business Cards & Stationery
                      </option>
                      <option value="packaging">Packaging Design</option>
                      <option value="digital-printing">Digital Printing</option>
                      <option value="event-materials">Event Materials</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <select
                      id="budget"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-100k">Under ₦100,000</option>
                      <option value="100k-500k">₦100,000 - ₦500,000</option>
                      <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                      <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                      <option value="over-5m">Over ₦5,000,000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <select
                      id="timeline"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">When do you need this completed?</option>
                      <option value="asap">ASAP (Rush Order)</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project requirements, quantities needed, preferred materials, and any specific details..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What is your typical turnaround time?
                </h3>
                <p className="text-gray-600 text-sm">
                  Standard projects typically take 3-7 business days. Rush
                  orders can be completed in 24-48 hours for an additional fee.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer design services?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes! Our in-house design team can create custom designs or
                  work with your existing brand guidelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What file formats do you accept?
                </h3>
                <p className="text-gray-600 text-sm">
                  We accept AI, EPS, PDF, PSD, and high-resolution JPG/PNG
                  files. Our team can also work with other formats upon request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
