import { useState } from "react";
import { MapPin, ArrowRight, Send, MessageCircle, X } from "lucide-react";
import { tours, waLink } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function CustomizedTours() {
  const [form, setForm] = useState({ destination: "Turkey", budget: "PKR 150k – 300k", dates: "" });
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Assalamualaikum, I want to plan a custom tour.\nDestination: ${form.destination}\nBudget: ${form.budget}\nTravel Dates: ${form.dates || "Flexible"}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const handleTourClick = (tour: typeof tours[0]) => {
    setSelectedTour(tour);
    setIsOpen(true);
  };

  return (
    <section id="tours" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">International Tours</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Explore the World — Customized for You
          </h2>
          <p className="mt-3 text-muted-foreground">
            From Istanbul to the Maldives — every itinerary tailored to your family, budget and pace.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t) => (
            <article
              key={t.name}
              onClick={() => handleTourClick(t)}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name} travel destination`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground">
                  <MapPin size={12} className="text-primary" /> {t.name}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-foreground">{t.name}</h3>
                  <div className="text-sm font-semibold text-gold whitespace-nowrap">From {t.price}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tour Details Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedTour && selectedTour.details ? (
              <>
                <DialogTitle>{selectedTour.name}</DialogTitle>
                <DialogDescription className="sr-only">
                  Tour details for {selectedTour.name} including highlights, inclusions, and itinerary.
                </DialogDescription>
                <div className="grid gap-6">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          {selectedTour.name}
                        </h2>
                        <p className="mt-1 text-gold text-lg font-semibold">From {selectedTour.price}</p>
                      </div>
                      <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                        <X className="h-5 w-5" />
                      </DialogClose>
                    </div>
                    <img
                      src={selectedTour.image}
                      alt={selectedTour.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Duration */}
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary">Duration</p>
                    <p className="text-lg font-bold text-foreground">{selectedTour.details.duration}</p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {selectedTour.details.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1 inline-block w-2 h-2 bg-gold rounded-full shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {selectedTour.details.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1 inline-block w-2 h-2 bg-primary rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Itinerary */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Itinerary</h3>
                    <div className="space-y-2 border-l-2 border-gold pl-4">
                      {selectedTour.details.itinerary.map((day, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-5 top-1 w-3 h-3 bg-gold rounded-full" />
                          <p className="text-sm text-foreground font-medium">{day}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Inquiry Button */}
                  <div className="mt-4">
                    <a
                      href={waLink(`Assalamualaikum, I want details about the ${selectedTour.name} tour with a complete itinerary and pricing.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-base font-semibold text-gold-foreground hover:opacity-95 transition"
                    >
                      <MessageCircle size={20} /> Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>

        {/* Plan Your Own Trip */}
        <div className="mt-14 rounded-3xl bg-gradient-primary p-6 md:p-10 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Plan Your Own Trip
              </h3>
              <p className="mt-2 text-primary-foreground/85">
                Tell us your destination, budget and dates — we'll WhatsApp you a tailored itinerary within 24 hours.
              </p>
            </div>
            <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="rounded-lg bg-white/95 px-3 py-3 text-sm text-foreground border-0 focus:ring-2 focus:ring-gold outline-none"
              >
                {tours.map((t) => (
                  <option key={t.name}>{t.name}</option>
                ))}
              </select>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="rounded-lg bg-white/95 px-3 py-3 text-sm text-foreground border-0 focus:ring-2 focus:ring-gold outline-none"
              >
                <option>PKR 100k – 150k</option>
                <option>PKR 150k – 300k</option>
                <option>PKR 300k – 500k</option>
                <option>PKR 500k+</option>
              </select>
              <input
                type="date"
                value={form.dates}
                onChange={(e) => setForm({ ...form, dates: e.target.value })}
                className="rounded-lg bg-white/95 px-3 py-3 text-sm text-foreground border-0 focus:ring-2 focus:ring-gold outline-none"
              />
              <button
                type="submit"
                className="sm:col-span-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:opacity-95 transition"
              >
                <Send size={16} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
