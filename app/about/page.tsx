import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DotBackground } from "@/components/dot-background";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Us | The Skyprint Global Services Limited",
  description:
    "Learn about The Skyprint Global Services Limited, a leading corporate printing and branding solutions provider in Lagos, Nigeria. We deliver quality, integrity, and excellence in every project.",
  keywords: [
    "about skyprint",
    "company values",
    "printing company",
    "branding company",
    "Lagos Nigeria",
  ],
  openGraph: {
    title: "About Us | The Skyprint Global Services Limited",
    description:
      "Learn about The Skyprint Global Services Limited and our commitment to quality and excellence.",
    type: "website",
    url: "https://skyprints.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DotBackground>
        <section className="relative py-32 flex h-screen items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                About
                <span className="text-orange-400"> Skyprint</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pioneering excellence in corporate printing and branding
                solutions since 2015
              </p>
            </div>
          </div>
        </section>
      </DotBackground>

      {/* Interactive Content */}
      <AboutContent />

      <Footer />
    </main>
  );
}

export const metadata: Metadata = {
  title: "About Us | The Skyprint Global Services Limited",
  description:
    "Learn about The Skyprint Global Services Limited, a leading corporate printing and branding solutions provider in Lagos, Nigeria. We deliver quality, integrity, and excellence in every project.",
  keywords: [
    "about skyprint",
    "company values",
    "printing company",
    "branding company",
    "Lagos Nigeria",
  ],
  openGraph: {
    title: "About Us | The Skyprint Global Services Limited",
    description:
      "Learn about The Skyprint Global Services Limited and our commitment to quality and excellence.",
    type: "website",
    url: "https://skyprints.vercel.app/about",
  },
};

export default function AboutPage() {
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
        "We deliver on our promises, meeting deadlines and maintaining consistent quality across all projects.",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and creative solutions to stay ahead of industry trends.",
    },
  ];

  const achievements = [
    "100+ Corporate Clients Served",
    "10+ Years of Industry Experience",
    "99.8% On-Time Delivery Rate",
    "ISO 9001:2015 Certified",
    "Award-Winning Design Team",
    "24/7 Customer Support",
  ];

  const team = [
    {
      name: "Adebayo Johnson",
      role: "Chief Executive Officer",
      experience: "15+ years in printing industry",
      image: "/professional-nigerian-ceo-in-business-suit.jpg",
    },
    {
      name: "Funmi Adebayo",
      role: "Creative Director",
      experience: "12+ years in graphic design",
      image: "/professional-nigerian-female-creative-director.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <DotBackground>
        <section className="relative py-32 flex h-screen items-center">
          <div className="container mx-auto px-4 ">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2, duration: 0.6 },
                  },
                }}
              >
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <Badge className="mb-3">
                    About The Skyprint Global Services Limited
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-balance"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Transforming Ideas Into
                  <span className="text-orange-400">
                    {" "}
                    Exceptional Print Solutions
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl mb-8 text-pretty max-w-3xl mx-auto"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Since 2014, we've been Lagos's premier printing and branding
                  partner, delivering world-class solutions to corporations,
                  institutions, and organizations across Nigeria.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </DotBackground>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on Excellence, Driven by Innovation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014 in the heart of Lagos,{" "}
                  <span className="uppercase font-bold">
                    The Skyprint Global Services Limited
                  </span>{" "}
                  is a digital printing solution hub, we offer the full range of
                  branding support and print services to a variety of clients
                  operating across different sectors. We are a one-stop shop for
                  all your printing requirements; our customized solutions are
                  tailored specifically to your individual needs, ensuring the
                  best results every time throughout the prepress, printing and
                  finishing process
                </p>
                <p>
                  Our years of experience has enabled us to provide the best
                  possible printing solution where attention is given to quality
                  and detail, resulting in satisfied clients with whom we have
                  lasting business relationships.
                </p>
                <p>
                  The foundation of our business is integrity and honesty. We
                  take pride in the client relationships that have developed
                  resulting in interdependency and mutual growth.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/modern-printing-facility-with-large-format-printer.jpg"
                alt="Skyprint Global printing facility"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every project we
              undertake, ensuring consistent excellence in all our endeavors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              >
                <Card
                  className="text-white rounded-3xl border border-orange-500/20 
                bg-gradient-to-tr from-primary/95 to-slate-900 
                shadow-2xl duration-700 z-10 relative backdrop-blur-xl 
                hover:border-orange-500/40 overflow-hidden hover:shadow-orange-500/10 hover:shadow-3xl 
                w-full h-full"
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-orange-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"></div>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-orange-500/5 blur-xl animate-ping"></div>
                    <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-orange-500/5 blur-lg animate-ping delay-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10 flex flex-col items-center text-center">
                    {/* Icon inside animated circle */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-orange-500/10 animate-pulse delay-500"></div>
                      <div className="p-6 rounded-full backdrop-blur-lg border border-orange-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-orange-500/20">
                        <div className="transform group-hover:rotate-180 transition-transform duration-700">
                          {value.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 max-w-xs">
                      {value.description}
                    </p>
                  </div>

                  {/* Corner highlights */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Our Achievements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Track Record of Success
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client
              satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-slate-800 p-4 rounded-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                <span className="text-gray-200">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Experts Behind Our Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in
              printing, design, and business management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 justify-center items-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden hover:shadow-xl hover:scale-105 transition-all">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-white text-primary">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl  mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust The Skyprint Global
            Services Limited for their printing and branding needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Get a Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
