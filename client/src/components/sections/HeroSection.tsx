import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { orbitItems } from "@/data/home";

export function HeroSection() {
  return (
    <section id="top" className="noise relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid bg-[size:54px_54px] opacity-30" />
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-acid/20 bg-acid/5 blur-3xl" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full border border-violet/20 bg-violet/20 blur-3xl" />

      <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-acid"
          >
            <span className="h-2 w-2 rounded-full bg-acid shadow-neon" />
            Web3 Marketing Agency
          </motion.div>

          <motion.h1
            className="text-balance text-5xl font-black uppercase leading-[0.88] text-white sm:text-7xl lg:text-8xl xl:text-[6.9rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Web3 Marketing That Drives{" "}
            <span className="bg-gradient-to-r from-acid via-white to-violet bg-clip-text text-transparent">
              Real Growth
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Degen House builds launch momentum, community heat, and performance campaigns for crypto, NFT, DeFi,
            and blockchain teams that need attention to convert.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href="#contact">Book Strategy Call</Button>
            <Button href="#services" variant="secondary">
              View Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            {["Real projects", "Real growth", "Zero BS"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-white/72">
                <CheckCircle2 className="h-4 w-4 text-acid" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-acid/20 via-transparent to-violet/30 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-lg">
            <img
              src="/degen-house-banner.jpeg"
              alt="Degen House Web3 marketing agency banner"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">Campaign Command</p>
                <p className="mt-1 text-2xl font-black uppercase text-white">Grow. Hype. Dominate.</p>
              </div>
              <div className="rounded-md border border-acid/40 bg-black/75 px-4 py-3 text-right">
                <p className="text-xs uppercase text-white/50">Launch Status</p>
                <p className="font-black text-acid">Scaling</p>
              </div>
            </div>
          </div>

          {orbitItems.map((item, index) => {
            const Icon = item.icon;
            const positions = [
              "left-2 top-8",
              "right-6 top-4",
              "-left-4 top-1/2",
              "right-0 top-1/2",
              "bottom-14 left-10",
              "bottom-8 right-20",
              "left-1/2 top-1/4"
            ];

            return (
              <motion.div
                key={item.label}
                className={`absolute ${positions[index]} hidden items-center gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-2 text-xs font-black text-white shadow-violet backdrop-blur md:flex`}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="h-4 w-4 text-acid" />
                {item.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative border-y border-white/10 bg-white/[0.03]">
        <div className="container flex min-h-16 flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white/55">
          <span>Token Launches</span>
          <ArrowUpRight className="h-4 w-4 text-acid" />
          <span>NFT Drops</span>
          <ArrowUpRight className="h-4 w-4 text-violet" />
          <span>KOL Engines</span>
          <ArrowUpRight className="h-4 w-4 text-acid" />
          <span>Community Growth</span>
        </div>
      </div>
    </section>
  );
}
