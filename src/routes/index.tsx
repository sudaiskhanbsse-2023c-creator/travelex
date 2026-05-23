import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UmrahPackages } from "@/components/UmrahPackages";
import { CustomizedTours } from "@/components/CustomizedTours";
import { TrustSection } from "@/components/TrustSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TravelEx — Umrah Packages 2026 & International Tours from Pakistan" },
      {
        name: "description",
        content:
          "Pakistan's trusted Umrah travel agency. Economy to VIP Umrah packages, Turkey, Dubai, Malaysia & Europe tours. Transparent pricing, IATA certified.",
      },
      { property: "og:title", content: "TravelEx — Umrah Packages 2026 & International Tours" },
      {
        property: "og:description",
        content:
          "Hand-picked Umrah packages and customized international tours from Pakistan. Chat with us on WhatsApp anytime.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "TravelEx",
          description: "Umrah travel and international tour packages from Pakistan.",
          areaServed: "PK",
          telephone: "+92-325-0501140",
          email: "sudais.khan.bsse-2023c@cecosian.edu.pk",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <UmrahPackages />
        <CustomizedTours />
        <TrustSection />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
