import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { valueProps } from "@/data/home";

export function WhySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Degen House"
          title="Built for speed, culture, and measurable traction"
          description="Crypto markets move fast. Your marketing partner should understand the memes, the metrics, and the moment."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-lg border border-white/10 bg-black/55 p-6">
                  <Icon className="h-7 w-7 text-acid" />
                  <h3 className="mt-6 text-xl font-black uppercase text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
