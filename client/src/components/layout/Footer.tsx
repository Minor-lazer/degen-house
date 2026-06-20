import { Send, Twitter, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/constants/site";

const footerLinks = ["Services", "Process", "Case Studies", "FAQ"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-acid/60 bg-acid/10 text-lg font-black text-acid">
              DH
            </span>
            <div>
              <p className="font-black uppercase text-white">Degen House</p>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-acid">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">{siteConfig.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {footerLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-bold text-white/62 hover:text-acid">
              {link}
            </a>
          ))}
        </div>

        <div>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-acid">
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Send].map((Icon, index) => (
              <a
                key={index}
                href="#top"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:border-acid/50 hover:text-acid"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Degen House. All rights reserved.
      </div>
    </footer>
  );
}
