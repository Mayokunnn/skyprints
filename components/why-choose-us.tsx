"use client";

import { Clock, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Speed",
    description:
      "Express 24-hour service available for urgent projects without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Superb quality printing using state-of-the-art equipment and premium materials.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effectiveness",
    description:
      "Competitive pricing with bulk order discounts for corporate clients.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Global Skyprint?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine cutting-edge technology with exceptional service to
            deliver printing solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              <div
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon inside animated circle */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-orange-500/10 animate-pulse delay-500"></div>
                      <div className="p-6 rounded-full backdrop-blur-lg border border-orange-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-orange-500/20">
                        <div className="transform group-hover:rotate-180 transition-transform duration-700">
                          <feature.icon className="w-8 h-8 text-orange-500 fill-current group-hover:text-orange-400 transition-colors duration-300 filter drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent">
                        {feature.title}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 max-w-xs">
                      {feature.description}
                    </p>

                    {/* Divider */}
                    <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

                    {/* Bouncing dots */}
                    <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>

                {/* Corner highlights */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
