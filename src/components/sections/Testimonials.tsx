import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil.",
    author: "Frank van Schaik",
    role: "Directeur",
    company: "GSA Groep"
  },
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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="text-center px-4">
    <svg className="w-8 h-8 text-accent opacity-30 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
    <p className="text-lg md:text-xl leading-relaxed mb-4 text-primary/90">
      {testimonial.quote}
    </p>
    <footer className="font-body">
      <cite className="font-semibold text-primary not-italic">{testimonial.author}</cite>
      <span className="text-muted-foreground ml-2">— {testimonial.role}, {testimonial.company}</span>
    </footer>
  </div>
);

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-8 md:py-10 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-subheading text-accent text-sm mb-2 block">
            Wat klanten zeggen
          </span>
        </div>

        {/* Mobile: Carousel */}
        {isMobile ? (
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary hover:text-white transition-colors"
                aria-label="Vorige testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? "bg-accent w-4" 
                        : "bg-primary/30"
                    }`}
                    aria-label={`Ga naar testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary hover:text-white transition-colors"
                aria-label="Volgende testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop: Featured Quote */
          <div className="max-w-3xl mx-auto">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
