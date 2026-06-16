import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Away Tweaks",
  description: "Away Tweaks refund policy - Results guaranteed with data.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">
              Refund Policy
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Your satisfaction is guaranteed with measurable results.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 border border-border">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Away Refund Policy
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  If diagnostic tools do not show a measurable drop in system latency or an 
                  increase in frames, the session is fully refunded. Results are guaranteed with data.
                </p>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How It Works
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm text-primary font-medium">1</span>
                      <span>We run diagnostic benchmarks before optimization to establish your baseline performance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm text-primary font-medium">2</span>
                      <span>After optimization, we run the same benchmarks to measure improvements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm text-primary font-medium">3</span>
                      <span>If no measurable improvement is detected, you receive a full refund.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  We stand behind our work because we use proven optimization techniques that 
                  deliver real, verifiable results. Our goal is your complete satisfaction.
                </p>

                <p>
                  For any questions about our refund policy, please contact us on{" "}
                  <a
                    href="https://discord.gg/JchPduxyeu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Discord
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
