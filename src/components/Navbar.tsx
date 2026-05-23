import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold shadow-card transition-transform group-hover:scale-105`}
          >
            T
          </span>
          <span
            className={`font-display font-bold text-lg tracking-tight ${
              scrolled ? "text-foreground" : "text-white drop-shadow"
            }`}
          >
            {site.brand}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-card hover:shadow-elegant transition"
        >
          Book Now
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-b border-border shadow-card">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
