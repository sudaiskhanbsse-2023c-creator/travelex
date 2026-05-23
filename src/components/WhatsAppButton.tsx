import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Assalamualaikum, I want to inquire about your travel services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center justify-center h-14 w-14 rounded-full bg-[var(--whatsapp)] text-white shadow-elegant pulse-ring hover:scale-105 transition"
    >
      <MessageCircle size={26} />
      <span className="absolute right-full mr-3 hidden sm:block whitespace-nowrap rounded-md bg-foreground text-background text-xs font-medium px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition">
        Chat on WhatsApp
      </span>
    </a>
  );
}
