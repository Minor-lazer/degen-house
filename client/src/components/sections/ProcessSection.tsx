import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Marketing Process"
          title="From market signal to scalable campaign engine"
          align="center"
        />

        <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-acid/60 to-transparent lg:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-acid/50 bg-black text-2xl font-black text-acid shadow-neon">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
