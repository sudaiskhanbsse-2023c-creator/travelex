import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { site, waLink } from "@/data/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Assalamualaikum, my name is ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Contact</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Send us a message and we'll get back to you on WhatsApp within minutes.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={waLink("Assalamualaikum, I want to inquire about your travel services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-card hover:shadow-elegant transition"
            >
              <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">WhatsApp</div>
                <div className="font-semibold mt-0.5">{site.phoneDisplay}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">Tap to chat — fastest reply</div>
              </div>
            </a>

            <a
              href={`tel:+${site.whatsapp}`}
              className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-elegant transition"
            >
              <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-semibold mt-0.5 text-foreground">{site.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-elegant transition"
            >
              <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold mt-0.5 text-foreground text-sm break-all">{site.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-card">
              <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-semibold mt-0.5 text-foreground">{site.address}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. Ahmed Raza"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                  placeholder="03XX XXXXXXX"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">How can we help?</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-3 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="Tell us about your travel plans..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition shadow-card"
            >
              <Send size={16} /> Send via WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">
              We'll never share your details. Your message opens in WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
