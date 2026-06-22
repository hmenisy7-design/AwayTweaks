"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Gauge, 
  Settings, 
  Wifi, 
  Cpu, 
  HardDrive, 
  MemoryStick,
  Rocket,
  Package,
  Crown,
  Star,
  Sparkles
} from "lucide-react";

const individualServices = [
  {
    icon: Settings,
    title: "Windows Tuning",
    id: "windows-tuning",
    price: "25",
    description: "Custom OS and complete Windows tuning to maximize performance and stability for an unreal gaming experience. Configuring dxgkrnl and kernel and much more trough regedit, stripping unnecessary scheduled tasks, services, devices, drivers. And much more optimization.",
  },
  {
    icon: Cpu,
    title: "GPU Overclocking",
    id: "gpu-oc",
    price: "15",
    description: "Get the most out of the most expensive part of your PC. Maximize responsiveness and visual smoothness with higher overall FPS — unlock what you really paid for with professional overclocking.",
  },
  {
    icon: MemoryStick,
    title: "RAM Overclocking",
    id: "ram-oc",
    price: "40",
    description: "Go beyond hardware limits with the most advanced RAM overclocking. Highlight the performance of your RAM with custom timings and higher frequencies, for extreme stability, buttery gameplay, and unreal responsiveness.",
  },
  {
    icon: Gauge,
    title: "CPU Overclocking",
    id: "cpu-oc",
    price: "25",
    description: "Unlock a completely different experience with ultra-low latency and maximum stability through an aggressive yet safe overclock. No risk with professionals — just pure performance intake.",
  },
  {
    icon: Wifi,
    title: "Network Tuning",
    id: "network-tuning",
    price: "10",
    description: "Completely tune your network adapter for the lowest jitter and latency, lower CPU overhead, and the lowest ISR/DPC latency available.",
  },
  {
    icon: HardDrive,
    title: "BIOS Tuning",
    id: "bios-tuning",
    price: "12",
    description: "Tuning all BIOS settings, both hidden and visible, for extra-low latency, a smooth system, and way higher FPS — a 100-300 FPS boost in most cases.",
  },
];

const packages = [
  {
    icon: Package,
    title: "Standard",
    id: "standard-pack",
    price: "35",
    tier: "standard",
    includes: ["Windows Tuning", "BIOS Tuning"],
    description: "Essential optimization package for noticeable performance gains.",
  },
  {
    icon: Zap,
    title: "Entry Level",
    id: "entry-level-pack",
    price: "45",
    tier: "entry",
    includes: ["Windows Tuning", "BIOS Tuning", "GPU Overclocking"],
    description: "Great starting point with GPU overclocking included.",
  },
  {
    icon: Star,
    title: "High Entry Level",
    id: "high-entry-level-pack",
    price: "52",
    tier: "high-entry",
    includes: ["Windows Tuning", "BIOS Tuning", "CPU Overclocking"],
    description: "CPU-focused package for processor-intensive workloads.",
  },
  {
    icon: Crown,
    title: "Pro Level",
    id: "pro-level-pack",
    price: "65",
    tier: "pro",
    includes: ["Windows Tuning", "BIOS Tuning", "CPU Overclocking", "GPU Overclocking"],
    popular: true,
    description: "Complete CPU and GPU overclocking for serious gamers.",
  },
  {
    icon: Sparkles,
    title: "Extreme Level",
    id: "extreme-level-pack",
    price: "90",
    tier: "extreme",
    includes: ["Windows Tuning", "BIOS Tuning", "CPU Overclocking", "GPU Overclocking", "RAM Overclocking"],
    description: "Maximum performance with all overclocking services included.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Comprehensive Optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We cover every single corner of your hardware and software potential to bring 
            the best results and achieve more than what your actual hardware can do — not 
            like others. We don&apos;t hold anything back, with safe yet aggressive 
            overclocking in every single aspect.
          </p>
        </motion.div>

        {/* Individual Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Individual Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {individualServices.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass rounded-xl p-5 border border-border hover:border-primary/50 transition-all duration-300 scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{service.title}</h4>
                    <p className="text-primary font-bold">{service.price}EUR</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Discount Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <span className="gradient-text">Discount Packages</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                id={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group glass rounded-xl p-5 border transition-all duration-300 relative scroll-mt-24 ${
                  pkg.popular 
                    ? "border-primary glow-box" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-center mb-1">{pkg.title}</h4>
                <p className="text-2xl font-bold text-primary text-center mb-3">{pkg.price}EUR</p>
                <p className="text-muted-foreground text-xs text-center mb-4">
                  {pkg.description}
                </p>
                <ul className="space-y-1.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://discord.gg/czyfdwDMsJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-box"
          >
            Get Your PC Optimized
            <Rocket className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
