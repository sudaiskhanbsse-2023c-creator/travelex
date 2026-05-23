import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { site, navLinks, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-lg bg-gradient-gold flex items-center justify-center font-display font-bold text-gold-foreground">
                T
              </span>
              <span className="font-display font-bold text-xl">{site.brand}</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              {site.tagline}. Pakistan's trusted partner for Umrah pilgrimages and customized
              international tours — built on transparency, care and decades of experience.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/75 hover:text-gold transition">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-gold transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gold">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink("Assalamualaikum, I want to inquire about your travel services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-primary-foreground/85 hover:text-gold"
                >
                  <Phone size={14} className="mt-0.5" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 text-primary-foreground/85 hover:text-gold break-all"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" /> {site.email}
                </a>
              </li>
              <li className="text-primary-foreground/70">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p>Designed & built by {site.owner}.</p>
        </div>
      </div>
    </footer>
  );
}
