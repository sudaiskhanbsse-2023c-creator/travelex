import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold text-gold uppercase tracking-wider">Testimonials</span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">What Our Pilgrims Say</h2>

        <div className="mt-12 relative">
          <Quote className="mx-auto text-gold opacity-60" size={42} />
          <div className="mt-4 min-h-[180px] md:min-h-[160px]">
            <p key={i} className="fade-in-up text-lg md:text-xl leading-relaxed font-light italic">
              "{testimonials[i].text}"
            </p>
            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: testimonials[i].rating }).map((_, k) => (
                <Star key={k} className="fill-gold text-gold" size={18} />
              ))}
            </div>
            <div className="mt-3 font-display font-bold text-gold">
              {testimonials[i].name}
            </div>
            <div className="text-sm text-primary-foreground/80">{testimonials[i].city}</div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-6 bg-gold" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % total)}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
