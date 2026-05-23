import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know before you book.</p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl bg-card border border-border shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <span className="shrink-0 h-7 w-7 rounded-full bg-accent text-primary flex items-center justify-center">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
