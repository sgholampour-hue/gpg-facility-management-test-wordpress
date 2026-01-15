import { TestimonialCard } from "@/components/ui/Tagline";

const testimonials = [
  {
    quote: "GPG heeft ons kantoor volledig getransformeerd. De aandacht voor detail en de professionele aanpak hebben onze verwachtingen overtroffen.",
    author: "Sarah van der Berg",
    role: "Facility Manager",
    company: "Booking.com"
  },
  {
    quote: "Al jaren vertrouwen wij op GPG voor onze verhuizingen en facility services. Betrouwbaar, flexibel en altijd op tijd.",
    author: "Mark Jansen",
    role: "Operations Director",
    company: "Schiphol Group"
  },
  {
    quote: "De samenwerking met GPG verloopt uitstekend. Ze denken proactief mee en leveren consistente kwaliteit.",
    author: "Linda de Vries",
    role: "Office Manager",
    company: "Rabobank"
  }
];

const Testimonials = () => {
  return (
    <section className="py-8 md:py-10 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-subheading text-accent text-sm mb-2 block">
            Wat klanten zeggen
          </span>
        </div>

        {/* Featured Quote - compact */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <svg className="w-8 h-8 text-accent opacity-30 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-quote text-xl md:text-2xl leading-relaxed mb-4">
              Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil.
            </p>
            <footer className="font-body">
              <cite className="font-semibold text-primary not-italic">Frank van Schaik</cite>
              <span className="text-muted-foreground ml-2">— Directeur, GSA Groep</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
