import { partnerLogos } from "@/data/home";

export function TrustedBySection() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-b border-white/10 bg-black py-10">
      <div className="container">
        <p className="mb-6 text-center text-xs font-black uppercase tracking-[0.2em] text-white/45">
          Trusted by Web3 teams, founders, and launch crews
        </p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-16 w-44 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-5 text-center text-sm font-black uppercase text-white/55"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
