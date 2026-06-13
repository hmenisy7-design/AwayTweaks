"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Years of Experience",
    description: "Deep testing across countless hardware configurations ensures the best compatibility for every single machine.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Real vouches with proofs from satisfied clients. We deliver measurable improvements, not empty promises.",
  },
  {
    icon: Users,
    title: "Best Prices",
    description: "Premium optimization at competitive rates. The best value in the tweaking community.",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    description: "All optimizations are VAC and anti-cheat compliant. Your account safety is our priority.",
  },
];

const benefits = [
  "Personalized optimization for your specific hardware",
  "Remote-friendly process with guided walkthroughs",
  "Ongoing support after service completion",
  "Measurable performance improvements guaranteed",
  "Professional and responsive communication",
  "Comprehensive system-wide optimization",
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Away Tweaks
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            The Trusted Choice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine years of experience with a passion for performance to deliver 
            optimization services that actually make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What You Get
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="https://discord.gg/mNc7czb8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-box"
              >
                Start Your Optimization Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
