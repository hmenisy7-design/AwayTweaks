"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the optimization process work?",
    answer: "After you contact us on Discord, we analyze your system specs, current settings, and performance goals. We then apply a personalized set of tweaks covering BIOS, Windows settings, drivers, and network stack — all remote-friendly with guided walkthroughs.",
  },
  {
    question: "Are the tweaks safe for my system?",
    answer: "Yes — every optimization is tested, reversible, and safe. We only use proven Windows registry edits, driver configurations, and system settings. All tweaks are fully VAC and anti-cheat compliant. No sketchy third-party tools, ever.",
  },
  {
    question: "How long does the full optimization take?",
    answer: "Most clients are fully optimized within 24 hours of contacting us. Simple packages can finish in under 2 hours. Custom packages may take slightly longer due to the depth of personalization involved.",
  },
  {
    question: "Which games benefit the most?",
    answer: "Any competitive title improves — Valorant, Fortnite, CS2, Apex Legends, Warzone, Rocket League, and more. Optimizations are system-wide, so every game you play will feel noticeably smoother and more responsive.",
  },
  {
    question: "Do you provide support after service?",
    answer: "Yes. All clients get ongoing post-service support via our Discord. Changed hardware, updated drivers, or just have a question months later — we're here. Your optimization doesn't expire.",
  },
];

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-xl border border-border overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about our PC optimization services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="https://discord.gg/mNc7czb8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
          >
            Ask on Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}
