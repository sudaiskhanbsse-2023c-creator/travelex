import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/site";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export function BlogSection() {
  return (
    <section id="blogs" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">From the Blog</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Travel Guides & Umrah Tips
          </h2>
          <p className="mt-3 text-muted-foreground">
            Practical reading from our team to help you prepare for the journey of a lifetime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((b) => (
            <Dialog key={b.slug}>
              <article className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="self-start rounded-full bg-accent text-accent-foreground px-3 py-0.5 text-xs font-semibold">
                    {b.category}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-base text-foreground leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{b.excerpt}</p>
                  <DialogTrigger asChild>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
                      Read More <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                    </button>
                  </DialogTrigger>
                </div>
              </article>
              <DialogContent className="rounded-3xl p-0 overflow-hidden">
                <div className="relative">
                  <img src={b.image} alt={b.title} className="h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle>{b.title}</DialogTitle>
                    <DialogDescription>
                      <p className="text-sm text-muted-foreground">{b.category}</p>
                    </DialogDescription>
                  </DialogHeader>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  <DialogFooter>
                    <DialogClose className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                      Close
                    </DialogClose>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
