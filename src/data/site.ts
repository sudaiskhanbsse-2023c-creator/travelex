// Centralized site config & static data — no backend needed.
export const site = {
  brand: "TravelEx",
  owner: "Sudais Khan",
  whatsappRaw: "03250501140",
  // International format for wa.me (Pakistan +92, drop leading 0)
  whatsapp: "923250501140",
  email: "sudais.khan.bsse-2023c@cecosian.edu.pk",
  phoneDisplay: "+92 325 0501140",
  address: "Peshawar, Pakistan",
  tagline: "Umrah Travel & International Tours",
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Tours", href: "#tours" },
  { label: "Blogs", href: "#blogs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "5,000+", label: "Happy Pilgrims" },
  { value: "12+", label: "Years Experience" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "100%", label: "IATA Certified" },
];

export const umrahPackages = [
  {
    name: "Economy",
    days: 7,
    hotel: "3-Star Hotel",
    price: "PKR 185,000",
    badge: null as string | null,
    features: ["Visa Processing", "Return Flights", "Hotel Accommodation", "Daily Breakfast", "Ziyarat Tours"],
  },
  {
    name: "Standard",
    days: 10,
    hotel: "4-Star Hotel",
    price: "PKR 245,000",
    badge: "Best Seller",
    features: ["Visa Processing", "Return Flights", "4-Star Hotel near Haram", "Daily Breakfast & Dinner", "Guided Ziyarat", "Airport Transfers"],
  },
  {
    name: "Premium",
    days: 14,
    hotel: "5-Star Hotel",
    price: "PKR 345,000",
    badge: "Limited Seats",
    features: ["Visa Processing", "Direct Flights", "5-Star Hotel walking distance", "Full Board Meals", "Private Ziyarat Guide", "VIP Airport Transfers"],
  },
  {
    name: "VIP",
    days: 21,
    hotel: "5-Star Luxury",
    price: "PKR 495,000",
    badge: "Premium",
    features: ["Premium Visa", "Business-class Flights", "5-Star Luxury Suite", "Full Board Premium Meals", "Private Mutawwif", "Luxury Transfers", "24/7 Concierge"],
  },
];

import heroKaaba from "@/assets/hero-kaaba.jpg";
import madinah from "@/assets/madinah.jpg";
import turkey from "@/assets/turkey.jpg";
import dubai from "@/assets/dubai.jpg";
import malaysia from "@/assets/malaysia.jpg";
import europe from "@/assets/europe.jpg";
import honeymoon from "@/assets/honeymoon.jpg";

export const tours = [
  {
    name: "Turkey",
    image: turkey,
    price: "PKR 235,000",
    desc: "Istanbul, Cappadocia & Bursa — 7 days of history and culture.",
    details: {
      duration: "7 Days / 6 Nights",
      highlights: [
        "Istanbul: Blue Mosque, Topkapi Palace, Bosphorus cruise",
        "Cappadocia: Hot air balloon ride, fairy chimneys, underground cities",
        "Bursa: Green Mosque, Ulubey Canyon, traditional Turkish cuisine",
      ],
      includes: [
        "Return flights from Pakistan",
        "4-star hotel accommodation",
        "Daily breakfast & dinners",
        "Guided tours for all attractions",
        "Airport transfers",
        "Visa assistance",
      ],
      itinerary: [
        "Day 1: Arrive Istanbul, hotel check-in",
        "Day 2: Blue Mosque, Topkapi Palace, Grand Bazaar",
        "Day 3: Bosphorus cruise, Galata Tower",
        "Day 4: Flight to Cappadocia, Hot air balloon ride at sunrise",
        "Day 5: Goreme open-air museum, underground cities of Derinkuyu",
        "Day 6: Flight to Bursa, Green Mosque, Silk market",
        "Day 7: Return to Istanbul, departure",
      ],
    },
  },
  {
    name: "Dubai",
    image: dubai,
    price: "PKR 185,000",
    desc: "Burj Khalifa, desert safari and luxury shopping — 5 days.",
    details: {
      duration: "5 Days / 4 Nights",
      highlights: [
        "Burj Khalifa: World's tallest building with observation deck",
        "Desert Safari: Dune bashing, camel ride, traditional dinner",
        "Dubai Mall: Shopping at the world's largest mall",
        "Palm Jumeirah: Stunning beachfront experience",
        "Gold Souk: Traditional authentic shopping",
      ],
      includes: [
        "Return flights from Pakistan",
        "5-star hotel in Dubai",
        "Daily breakfast & lunch",
        "Desert safari with BBQ dinner",
        "Burj Khalifa entry ticket",
        "Airport transfers",
      ],
      itinerary: [
        "Day 1: Arrive Dubai, hotel check-in, relax on beach",
        "Day 2: Burj Khalifa observation deck, Dubai Mall shopping",
        "Day 3: Desert safari with dune bashing & traditional dinner",
        "Day 4: Palm Jumeirah tour, gold souk, beachfront activities",
        "Day 5: Last-minute shopping, departure",
      ],
    },
  },
  {
    name: "Malaysia",
    image: malaysia,
    price: "PKR 215,000",
    desc: "Kuala Lumpur, Langkawi & Genting — tropical 8-day escape.",
    details: {
      duration: "8 Days / 7 Nights",
      highlights: [
        "Kuala Lumpur: Petronas Twin Towers, National Museum",
        "Langkawi: Cable car, island hopping, pristine beaches",
        "Genting Highland: Theme parks, shopping, cool mountain climate",
        "Batu Caves: Iconic limestone cave temple",
        "Street food tours and night markets",
      ],
      includes: [
        "Return flights from Pakistan",
        "4-star hotel accommodation",
        "Daily breakfast & selected dinners",
        "Petronas Towers entry",
        "Langkawi cable car & island tour",
        "Genting Highland theme park tickets",
      ],
      itinerary: [
        "Day 1: Arrive Kuala Lumpur, city orientation",
        "Day 2: Petronas Twin Towers, National Mosque, Batu Caves",
        "Day 3: Genting Highland, theme parks & shopping",
        "Day 4: Flight to Langkawi, beach relaxation",
        "Day 5: Langkawi cable car, island hopping, water activities",
        "Day 6: Beach day, local market exploration",
        "Day 7: Return to Kuala Lumpur, shopping",
        "Day 8: Departure",
      ],
    },
  },
  {
    name: "Europe",
    image: europe,
    price: "PKR 695,000",
    desc: "Schengen multi-country — Paris, Rome, Santorini & more.",
    details: {
      duration: "14 Days / 12 Nights",
      highlights: [
        "Paris: Eiffel Tower, Louvre Museum, Notre-Dame",
        "Rome: Colosseum, Vatican City, Roman Forum",
        "Santorini: Sunset at Oia, caldera views, volcanic beaches",
        "Florence: Renaissance art, Uffizi Gallery",
        "Venice: Grand Canal, St. Mark's Basilica, gondola rides",
      ],
      includes: [
        "Return flights from Pakistan (Business Class)",
        "5-star hotel accommodations",
        "Daily breakfast & dinners",
        "All major attractions entry tickets",
        "Guided tours in each city",
        "Schengen visa assistance",
        "Travel insurance",
      ],
      itinerary: [
        "Days 1-3: Paris - Eiffel Tower, Louvre, Palace of Versailles",
        "Days 4-6: Rome - Colosseum, Vatican, Roman Forum",
        "Days 7-9: Florence - Uffizi Gallery, Duomo, Ponte Vecchio",
        "Days 10-12: Santorini - Island tours, sunset at Oia",
        "Days 13-14: Venice - Grand Canal, St. Mark's, gondola rides",
      ],
    },
  },
  {
    name: "Honeymoon Specials",
    image: honeymoon,
    price: "PKR 325,000",
    desc: "Maldives, Bali & Phuket — handcrafted romantic getaways.",
    details: {
      duration: "10 Days / 9 Nights",
      highlights: [
        "Maldives: Overwater villas, turquoise waters, snorkeling",
        "Bali: Rice terraces, temples, spa treatments",
        "Phuket: Phang Nga Bay, Phi Phi Islands, pristine beaches",
        "Sunset dinners on the beach",
        "Couples spa & wellness packages",
      ],
      includes: [
        "Return flights from Pakistan",
        "Luxury resort accommodations with private pools",
        "All meals including romantic dinners",
        "Water activities and excursions",
        "Couples spa treatments",
        "Airport transfers & speedboat services",
      ],
      itinerary: [
        "Days 1-3: Maldives - Resort relaxation, snorkeling, sunset dinner",
        "Days 4-6: Bali - Temple visits, rice terrace tours, spa day",
        "Days 7-9: Phuket - Phang Nga Bay cruise, island hopping",
        "Day 10: Departure",
      ],
    },
  },
  {
    name: "Madinah Extension",
    image: madinah,
    price: "Custom",
    desc: "Add days to your Umrah package with premium Madinah stays.",
    details: {
      duration: "3-7 Days Customizable",
      highlights: [
        "Prophet's Mosque (Al-Masjid Al-Nabawi)",
        "Mount Uhud & historical battlegrounds",
        "Quba Mosque, the first mosque in Islam",
        "Baqi cemetery & other Islamic heritage sites",
        "Local halal food experiences",
      ],
      includes: [
        "4-5 star hotel near Prophet's Mosque",
        "Daily breakfast & dinners",
        "Guided Islamic heritage tours",
        "Religious scholar guidance",
        "Transportation between Makkah & Madinah",
        "Ziyarat arrangements",
      ],
      itinerary: [
        "Day 1: Arrival in Madinah, rest, Isha prayer at Prophet's Mosque",
        "Day 2: Guided tours of Quba Mosque, Mount Uhud",
        "Day 3: Al-Baqi cemetery, Masjid Qiblatain, local markets",
        "Day 4+: Additional prayer times, personal reflection, shopping",
      ],
    },
  },
];

export const testimonials = [
  { name: "Ahmed Raza", city: "Karachi", rating: 5, text: "Alhamdulillah, our Umrah was seamless from visa to return. The hotel was 5 minutes from Haram and the team was always reachable on WhatsApp." },
  { name: "Fatima Siddiqui", city: "Lahore", rating: 5, text: "First-time Umrah for my parents — TravelEx took care of every detail. The guided Ziyarat in Madinah was deeply emotional. Highly recommended." },
  { name: "Bilal Hussain", city: "Islamabad", rating: 5, text: "Booked the Premium package for family of 6. Transparent pricing, no hidden charges. The Mutawwif was knowledgeable and patient with our kids." },
  { name: "Ayesha Khan", city: "Peshawar", rating: 5, text: "Honeymoon to Maldives was magical. Every transfer, every meal, every excursion planned perfectly. Will book Turkey next year inshaAllah." },
  { name: "Usman Tariq", city: "Rawalpindi", rating: 5, text: "Visa was processed in record time. Flights were direct and the Madinah hotel had a view of the Prophet's Mosque. May Allah reward the team." },
];

export const blogs = [
  {
    slug: "umrah-guide-2026",
    category: "Umrah",
    title: "Umrah Guide 2026: Step-by-Step for First Timers",
    excerpt: "From ihram to tawaf to sa'i — a complete walkthrough designed for Pakistani families travelling for the first time.",
    description: "Start your journey with a complete, Pakistan-friendly Umrah checklist that covers visa steps, luggage packing, essential duas, and on-ground etiquette. This guide helps first-timers move through each ritual with confidence and calm.",
    image: madinah,
  },
  {
    slug: "prepare-for-umrah",
    category: "Spiritual",
    title: "How to Prepare for Umrah Physically and Spiritually",
    excerpt: "A 30-day preparation plan covering duas, fitness, packing, and the mental shift that makes your journey meaningful.",
    description: "Learn a practical prep plan that balances spiritual focus, health tips, and packing advice. From everyday duas to the best way to organise travel documents, this article makes your Umrah journey smoother from the first day.",
    image: heroKaaba,
  },
  {
    slug: "best-time-makkah-2026",
    category: "Travel Tips",
    title: "Best Time to Visit Makkah in 2026",
    excerpt: "Weather, crowds, hotel pricing and seasonal trends — pick the month that fits your budget and energy.",
    description: "Compare the best months for Umrah in 2026 by weather, hotel rates, and crowd levels. We also share local advice for booking flights and choosing a hotel close to Haram without stretching your budget.",
    image: dubai,
  },
  {
    slug: "turkey-7-days",
    category: "Tours",
    title: "Turkey in 7 Days: The Complete Tour Guide from Pakistan",
    excerpt: "Istanbul, Cappadocia, Bursa — sample itinerary, halal food guide, and what to budget per person.",
    description: "Discover a 7-day Turkey itinerary designed for Pakistani travellers, including halal dining, cultural highlights, and practical tips for flights and local transfers. This guide keeps your trip unforgettable and easy to navigate.",
    image: turkey,
  },
];

export const faqs = [
  { q: "What documents are required for Umrah?", a: "A passport valid for at least 6 months, two recent passport-size photos, NIC copy, Mahram proof for women under 45, and a vaccination certificate (Meningitis & COVID where applicable). We handle the rest." },
  { q: "Is visa processing included in the package?", a: "Yes — every TravelEx Umrah package includes Saudi e-Visa processing, biometric scheduling, and full documentation support. There are no hidden visa fees." },
  { q: "Can families with children travel together?", a: "Absolutely. We arrange family rooms, child-friendly Ziyarat schedules, and dedicated baby strollers on request. Children under 2 travel at reduced fares." },
  { q: "What is the cancellation and refund policy?", a: "Cancellations 30+ days before departure receive an 85% refund. Within 15–30 days: 50%. Within 14 days: visa-fee deduction applies. Full policy shared at booking." },
  { q: "Do you offer payment plans?", a: "Yes — we offer 3-instalment plans for Standard, Premium and VIP packages with no interest. A 25% confirmation deposit secures your seat." },
  { q: "How close are the hotels to Haram?", a: "Economy: 800m–1km. Standard: 400–600m. Premium & VIP: 100–300m walking distance. Exact hotel names are confirmed at booking based on availability." },
];
