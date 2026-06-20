import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/useCounter";
import { metrics } from "@/data/home";

function MetricCard({ value, suffix, label, index }: (typeof metrics)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, inView);

  return (
    <motion.div
      ref={ref}
      className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <p className="text-5xl font-black uppercase text-acid sm:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/55">{label}</p>
    </motion.div>
  );
}

export function MetricsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
