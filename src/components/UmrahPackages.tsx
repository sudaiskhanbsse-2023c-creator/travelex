import { Check, MessageCircle } from "lucide-react";
import { umrahPackages, waLink } from "@/data/site";

export function UmrahPackages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Umrah Packages 2026</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Choose the Journey that Fits You
          </h2>
          <p className="mt-3 text-muted-foreground">
            Limited seats available for every package — early bookings get the best hotels near Haram.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {umrahPackages.map((p) => {
            const featured = p.badge === "Best Seller";
            return (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-2xl bg-card border p-6 transition-all hover:-translate-y-1 hover:shadow-elegant ${
                  featured ? "border-gold shadow-elegant" : "border-border shadow-card"
                }`}
              >
                {p.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap ${
                      featured ? "bg-gradient-gold text-gold-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  {p.days} Days · {p.hotel}
                </div>

                <div className="mt-4 pb-4 border-b border-border">
                  <div className="text-3xl font-display font-bold text-primary">{p.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">per person · all-inclusive</div>
                </div>

                <ul className="mt-4 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="mt-0.5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Assalamualaikum, I want details about the ${p.name} Umrah Package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    featured
                      ? "bg-gradient-gold text-gold-foreground hover:opacity-95"
                      : "bg-primary text-primary-foreground hover:bg-primary-dark"
                  }`}
                >
                  <MessageCircle size={16} /> Inquire on WhatsApp
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
