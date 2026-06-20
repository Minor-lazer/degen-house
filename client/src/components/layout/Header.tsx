import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Degen House home">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-md border border-acid/50 bg-acid/10 shadow-neon">
            <span className="absolute inset-1 rounded-sm border border-violet/60" />
            <span className="text-lg font-black text-acid">DH</span>
          </span>
          <span>
            <span className="block text-sm font-black uppercase leading-none text-white">Degen House</span>
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.22em] text-acid">
              Grow Hype Dominate
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-white/68 transition hover:text-acid">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-white/60 hover:text-white">
            {siteConfig.email}
          </a>
          <Button href="#contact" className="min-h-11 px-4 py-2 text-xs">
            Book Strategy Call
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/75"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setOpen(false)}>
              Book Strategy Call
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
