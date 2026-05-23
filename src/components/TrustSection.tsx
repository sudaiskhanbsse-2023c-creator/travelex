import { ShieldCheck, Award, Users, Clock } from "lucide-react";

const items = [
  { Icon: ShieldCheck, title: "IATA Certified", desc: "Fully licensed travel agency with verified Saudi visa authorization." },
  { Icon: Award, title: "12+ Years Experience", desc: "Specialized in Umrah travel since 2014 with thousands of pilgrims served." },
  { Icon: Users, title: "5,000+ Happy Pilgrims", desc: "From Karachi to Peshawar — families across Pakistan trust us yearly." },
  { Icon: Clock, title: "24/7 Support", desc: "Reach our team on WhatsApp anytime — even during your journey." },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Why TravelEx</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Trust Built Over a Decade
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border p-6 text-center shadow-card hover:shadow-elegant transition"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-accent flex items-center justify-center">
                <Icon className="text-primary" size={26} />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
