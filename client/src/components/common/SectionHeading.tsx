import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-acid">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
