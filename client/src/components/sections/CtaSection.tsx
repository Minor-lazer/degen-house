import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function CtaSection() {
  return (
    <section id="contact" className="px-4 pb-24">
      <div className="container relative overflow-hidden rounded-lg border border-acid/30 bg-acid p-8 text-background shadow-neon sm:p-12 lg:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-acid">
              <Rocket className="h-4 w-4" />
              Ready to dominate Web3?
            </div>
            <h2 className="text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
              Let&apos;s build your growth engine.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-black/70">
              Bring the product, token, or community. Degen House brings the campaign architecture, creator
              distribution, and execution rhythm.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={`mailto:${siteConfig.email}`} className="bg-background text-white hover:bg-violet" showArrow>
              Book Strategy Call
            </Button>
            <Button href="#services" variant="secondary" className="border-black/20 bg-black/10 text-background hover:text-background">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
