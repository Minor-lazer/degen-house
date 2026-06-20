import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Everything a Web3 campaign needs under one roof"
          description="Strategy, community, creators, content, PR, and launch distribution connected by one growth plan."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group glass-panel h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-acid/40">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-md border border-acid/30 bg-acid/10 text-acid shadow-neon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-black text-white/10 transition group-hover:text-acid/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/62">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
