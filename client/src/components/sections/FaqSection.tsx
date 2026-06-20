import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { faqs } from "@/data/home";
import { cn } from "@/utils/cn";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Built static today. Ready for APIs tomorrow."
          description="The V1 site is intentionally fast and static, with routing and service layers already waiting for future backend features."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const active = openIndex === index;
            return (
              <div key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpenIndex(active ? -1 : index)}
                  aria-expanded={active}
                >
                  <span className="text-base font-black uppercase text-white">{faq.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-acid transition", active && "rotate-180")} />
                </button>
                {active ? <p className="px-5 pb-5 text-sm leading-6 text-white/62">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
