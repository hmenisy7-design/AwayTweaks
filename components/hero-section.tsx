"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Gauge } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Premium PC Optimization Services</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text glow-text">Beyond</span>
            <br />
            <span className="gradient-text glow-text">Hardware</span>
            <br />
            <span className="gradient-text glow-text">Limits.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Low-level enthusiasts with years of knowledge in Windows and hardware functionality, 
            resulting in extreme stability and latency reduction combined with the highest 
            FPS boost possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://discord.gg/czyfdwDMsJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all duration-300 glow-box pulse-glow"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <Gauge className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">-85%</h3>
              <p className="text-sm text-muted-foreground">Latency Reduced</p>
            </div>
            <div className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <Gauge className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">+72%</h3>
              <p className="text-sm text-muted-foreground">Average FPS Improvement</p>
            </div>
            <div className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <Cpu className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">30+</h3>
              <p className="text-sm text-muted-foreground">Systems Optimized</p>
            </div>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border glow-box">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0220_2-1V5kHqkz33TCYE9VumA3kWAuEFGnMj.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
