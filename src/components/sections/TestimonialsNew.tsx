import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil.",
    author: "Frank van Schaik",
    role: "Directeur",
    company: "GSA Groep",
    initials: "FS",
  },
  {
    quote: "GPG heeft ons kantoor volledig getransformeerd. De aandacht voor detail en de professionele aanpak hebben onze verwachtingen overtroffen.",
    author: "Sarah van der Berg",
    role: "Facility Manager",
    company: "Booking.com",
    initials: "SB",
  },
  {
    quote: "Al jaren vertrouwen wij op GPG voor onze verhuizingen en facility services. Betrouwbaar, flexibel en altijd op tijd.",
    author: "Mark Jansen",
    role: "Operations Director",
    company: "Schiphol Group",
    initials: "MJ",
  },
  {
    quote: "De samenwerking met GPG verloopt uitstekend. Ze denken proactief mee en leveren consistente kwaliteit.",
    author: "Linda de Vries",
    role: "Office Manager",
    company: "Rabobank",
    initials: "LV",
  },
];

const TestimonialsNew = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
            Klantreviews
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Wat klanten zeggen
          </h2>
        </div>

        {/* Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-white/10 backdrop-blur-sm gsa-hoek-lg p-6 md:p-10 text-center transition-all duration-300 hover:bg-white/15">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:bg-accent/30">
                      <Quote className="w-5 h-5 text-accent" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4 group/author">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold transition-transform duration-300 group-hover/author:scale-110">
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-white/70">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 hover:border-accent/50 transition-all duration-300"
              aria-label="Vorige testimonial"
            >
              <ChevronLeft className="w-5 h-5 transition-transform duration-300 hover:-translate-x-0.5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index 
                      ? "bg-accent w-6" 
                      : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                  aria-label={`Ga naar testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 hover:border-accent/50 transition-all duration-300"
              aria-label="Volgende testimonial"
            >
              <ChevronRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
