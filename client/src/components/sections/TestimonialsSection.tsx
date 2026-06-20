import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  const repeated = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-white/10 bg-black py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Web3 teams say after the campaign starts moving"
          align="center"
        />
      </div>
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="w-[22rem] rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:w-[30rem]"
            >
              <Quote className="h-7 w-7 text-acid" />
              <p className="mt-5 text-lg font-bold leading-8 text-white">{testimonial.quote}</p>
              <div className="mt-8">
                <p className="font-black uppercase text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/50">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
