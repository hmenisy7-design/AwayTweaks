import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Away Tweaks",
  description: "Away Tweaks terms of service and usage agreement.",
};

const terms = [
  {
    title: "1. Report Issues",
    content: "Report any rule violations or issues to the moderators or admins. Do not attempt to handle disputes on your own.",
  },
  {
    title: "2. Stay On-Topic",
    content: "Keep discussions relevant to the channel's topic. Off-topic conversations should be moved to appropriate channels.",
  },
  {
    title: "3. Respect the Moderators and Admins",
    content: "Follow the instructions of the moderators and admins. They are here to ensure the server runs smoothly.",
  },
  {
    title: "4. No Refund Policy",
    content: "All sales of services are final and non-refundable. Once you have paid for a service, you agree to this no refund policy due to the customized effort and resources involved.",
  },
  {
    title: "5. Manual Services Will Be Terminated if Content Theft is Attempted or Unauthorized Sharing Occurs",
    content: "If a user attempts to steal or misuse the content, tools, or customized settings provided during the manual service, the service will be immediately discontinued. This includes but is not limited to copying, sharing, or distributing the work without authorization. Such actions violate the agreement and trust between the user and the service provider. Additionally, tools bound to a specific Hardware ID (HWID) cannot be shared or transferred. Any attempt to do so will result in the immediate termination of the license associated with those tools. Unauthorized sharing of HWID bound tools will be considered a breach of the agreement, leading to a cancellation of the license and access to the service.",
  },
  {
    title: "6. Agreement Upon Purchase",
    content: "By purchasing any services or tools, you confirm that you have read, understood, and agreed to all rules listed above. Failure to comply with these rules may result in suspension or permanent termination of access to services and tools.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
        
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
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">
              Terms of Service
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Away Tweaks Terms of Service
            </h2>
            
            <div className="space-y-8">
              {terms.map((term, index) => (
                <div key={index} className="pb-8 border-b border-border last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {term.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground text-sm">
                By using Away Tweaks services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service. If you have any questions, 
                please contact us on{" "}
                <a
                  href="https://discord.gg/mNc7czb8"
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
    </main>
  );
}
