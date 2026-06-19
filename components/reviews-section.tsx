"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";

const reviews = [
  {
    name: "bqlu",
    game: "Rainbow Six Siege",
    content: "+rep Bios Tuning was getting 300 fps after bios tune im getting 415 to 380 while actively moving and quick peeking corners on siege",
    rating: 5,
  },
  {
    name: "1nemo1",
    game: "MMO Games",
    content: "+Rep. Had the full package of tweaks. what can i Say, the best costumer experience i had till now. Away is 1000%. I can see a very good improvement over the previous tweaks i had. good FPS(very good), stable Lows, stuttering is almost non existing and i play MMO games that suffer from bad optimization in game and stuttering problems. now its all solved. highly recommend.",
    rating: 5,
  },
  {
    name: "edu246_",
    game: "Various Titles",
    content: "i mean my ram oc just got better, +200mt/s and lower timings so better perf, bigger vouch to Away tbh (also Bounder helped me at the start a little bit). Went from 200fps unstable (drops everytime to 190 - 180) to more than 250fps stable",
    rating: 5,
  },
  {
    name: "georgejadon",
    game: "General Use",
    content: "I recently had my PC tweaked by Away, and I'm genuinely impressed with the results. Before the tweaks, my system was decent, but I could definitely feel some slowdowns and inconsistency, especially when gaming and multitasking. After he worked on it, everything feels noticeably smoother, faster, and way more responsive. He clearly knows what he's doing — he optimized the system properly instead of just doing basic, surface-level changes. Load times improved, overall performance feels more stable, and even general use like browsing and switching between apps is smoother. What I appreciated most is that he took the time to do things right and made sure everything was running as it should. The whole process was easy, and he was professional throughout. If you want to get the most out of your PC and actually feel a real difference, I'd definitely recommend Away. Solid and reliable work.",
    rating: 5,
  },
  {
    name: "jayzaloner",
    game: "Competitive FPS",
    content: "I appreciate away not for the tweaks but for the time he took out of his sleep to tweak my pc many people wouldn't overall I went from 160 to 240 I also wanna thank Edu for being there during the process super helpful. Thanks away",
    rating: 5,
  },
];

const extraReviews = [
  {
    name: "loqxn",
    game: "PC Optimization",
    content: "I gotta say Away might be the best pc optimizer. He singlehandedly reached out to me to let me know my OS and OC's could both be messed up. He didn't even try to sell me anything at first, just fixed my overclocks for free. After he showed me what he can do I paid for full service and bro this is the best my pc has ever ran — it even sounds better and games feel way better. Holy goat.",
    rating: 5,
  },
  {
    name: "erlamaverde",
    game: "RAM Overclocking",
    content: "I was dealing with problems with stability and game crashes so I tried removing XMP which fixed crashes but killed my fps. Since I have Samsung D-die RAM I couldn't find the right profile, so I went to Away and he found a fully stable profile without losing performance. We kept it at 3200MHz like I wanted and he fixed everything in just a few hours.",
    rating: 5,
  },
  {
    name: "vgqm",
    game: "Valorant",
    content: "vouch windows tuning 400 more fps on val 0 delay",
    rating: 5,
  },
  {
    name: "nexus38333",
    game: "BIOS Tuning",
    content: "vouch bios tuning went from 1.2k fps to 1.4k fps big vouch 0 delay underrated",
    rating: 5,
  },
  {
    name: "kyumafv",
    game: "General Gaming",
    content: "Super good. My motherboard sucks but he still got me higher average fps and my lows were like 150 higher. Thanks away.",
    rating: 5,
  },
  {
    name: "bachira6_",
    game: "Windows Tuning",
    content: "Vouch — paid windows tuning gave me a huge boost!",
    rating: 5,
  },
  {
    name: "devtroxzy",
    game: "Fortnite",
    content: "His tweaks are very good, gave me 150+ fps in Fortnite, less delay and slightly lower ping.",
    rating: 5,
  },
  {
    name: "tyrese0722",
    game: "CS2",
    content: "Vouch — Away is literally the best person you can find for tweaking your PC. I did bios and RAM OC even with C-die RAM and it was great. Before I had around 190fps in CS2 in heavy situations, now I get 240 stable. He is super patient and explains everything. 100% recommend.",
    rating: 5,
  },
  {
    name: "edu246_",
    game: "BIOS Tuning",
    content: "Vouch for Away — he did bios tuning, game became super smooth, felt like 0 delay and increased fps. Very worth it.",
    rating: 5,
  },
  {
    name: "lazyx04",
    game: "Windows Optimization",
    content: "Vouch — Away optimized my PC, even helped fix my wifi issue instantly. System feels way more responsive and fps increased a lot even just from windows tweaks.",
    rating: 5,
  },
];

export function ReviewsSection() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Trusted by Gamers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results from real clients. See what our community has to say about their optimization experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 ${
                index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.game}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {review.content}
              </p>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => setShowExtra(!showExtra)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 border border-primary/30 hover:border-primary/60"
          >
            {showExtra ? (
              <>Hide Vouches <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View More Vouches <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </motion.div>

        {/* Extra Reviews */}
        <AnimatePresence>
          {showExtra && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {extraReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.game}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {review.content}
                    </p>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more reviews? Join our Discord community.
          </p>
          <a
            href="https://discord.gg/JchPduxyeu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View More on Discord
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
