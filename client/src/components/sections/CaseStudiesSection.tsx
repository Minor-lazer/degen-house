import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { caseStudies } from "@/data/home";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Case Studies"
            title="Campaign systems made for traction"
            description="Static placeholders for V1, structured so real case studies can come from a CMS or API later."
          />
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black uppercase text-acid">
            Build my campaign <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.client} delay={index * 0.06}>
              <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-black/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/60">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-acid/30 bg-acid/10 px-3 py-1 text-xs font-black uppercase text-acid">
                    {study.client}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:text-acid" />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">Challenge</p>
                <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white">{study.challenge}</h3>
                <p className="mt-5 text-sm leading-6 text-white/60">{study.result}</p>
                <div className="mt-auto grid gap-2 pt-8">
                  {study.stats.map((stat) => (
                    <div key={stat} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-white">
                      {stat}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
