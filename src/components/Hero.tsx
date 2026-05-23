import heroImg from "@/assets/hero-kaaba.jpg";
import { stats, waLink } from "@/data/site";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="The Kaaba at golden hour with pilgrims performing tawaf"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover fade-in-up"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
            <span className="h-2 w-2 rounded-full bg-gold" /> Umrah Season 2026 — Now Booking
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Your Sacred Journey,
            <span className="block text-gold">Planned with Care.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            Pakistan's trusted Umrah specialists. Transparent pricing, hand-picked
            hotels near Haram, and a team you can WhatsApp anytime — from visa to
            return flight.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink("Assalamualaikum, I want to inquire about your Umrah packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3.5 text-base font-semibold text-white shadow-elegant hover:opacity-95 transition"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition"
            >
              View Packages <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl">
          {stats.map((s, index) => (
            <div
              key={s.label}
              className="rounded-xl bg-white/10 backdrop-blur border border-white/15 px-4 py-4 text-center fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-gold">{s.value}</div>
              <div className="text-xs md:text-sm text-white/85 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
