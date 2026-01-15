import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Truck, Building2, PenTool, ShoppingBag, Sofa, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    icon: Wrench,
    title: "Handyman dienstverlening",
    description:
      "Van kleine reparaties tot complexe klussen: onze handymen staan voor je klaar met vakmanschap en snelle service.",
  },
  {
    icon: Truck,
    title: "Verhuizen",
    description:
      "Professionele verhuisservice voor kantoren en bedrijven. Wij zorgen voor een vlotte verhuizing zonder onderbrekingen.",
  },
  {
    icon: Building2,
    title: "Integrated Facilities",
    description:
      "Complete facilitaire ondersteuning onder één dak. Van receptiediensten tot technisch beheer, wij ontzorgen volledig.",
  },
  {
    icon: PenTool,
    title: "Fit-out's",
    description:
      "Transformatie van ruimtes naar functionele werkomgevingen. Van ontwerp tot oplevering, wij realiseren jouw visie.",
  },
  {
    icon: ShoppingBag,
    title: "Inkoop inrichtingscomponenten",
    description:
      "Strategische inkoop van meubilair en inrichting. Wij bieden scherpe prijzen en kwaliteitsgarantie.",
  },
  {
    icon: Sofa,
    title: "Projectinrichting & Stoffering",
    description:
      "Maatwerk inrichting en stoffering voor een optimale werkplek. Van bureaus tot beplanting, alles uit één hand.",
  },
];

// Group services into pairs for 2-row carousel
const serviceSlides = [
  [services[0], services[1]],
  [services[2], services[3]],
  [services[4], services[5]],
];

const ServiceCard = ({ service, isVisible, index, prefersReducedMotion }: {
  service: typeof services[0];
  isVisible: boolean;
  index: number;
  prefersReducedMotion: boolean;
}) => (
  <Link
    to="/diensten"
    className={`service-card group hover-lift transition-all duration-500 ease-out block cursor-pointer ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`}
    style={{ 
      transitionDelay: prefersReducedMotion ? "0ms" : `${index * 120}ms` 
    }}
  >
    <div className="pl-3 md:pl-4">
      <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
        <service.icon className="w-4 h-4 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-primary" />
        <h3 className="text-sm md:text-lg font-semibold text-primary uppercase tracking-wide leading-tight">
          {service.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide group-hover:text-accent transition-colors">
          <span className="inline-flex items-center">
            Lees meer
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </span>
        <span
          className="arrow-button w-7 h-7 md:w-10 md:h-10"
          aria-label={`Meer over ${service.title}`}
        >
          <ArrowUpRight className="w-3.5 h-3.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  </Link>
);

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useRef(false);
  const isMobile = useIsMobile();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeaderVisible(true);
          
          if (prefersReducedMotion.current) {
            setVisibleCards(services.map((_, i) => i));
          } else {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, 200 + index * 120);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-28 bg-gpg-cream">
      <div className="container">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 
            className={`text-2xl md:text-4xl font-bold text-primary max-w-2xl transition-all duration-500 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            WAT WE ALS FACILITAIR BEDRIJF VOOR JE KUNNEN BETEKENEN
          </h2>
          
          {/* Desktop navigation arrows */}
          {isMobile && (
            <div className="flex gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                aria-label="Vorige diensten"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                aria-label="Volgende diensten"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Carousel with 2 rows */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {serviceSlides.map((slideServices, slideIndex) => (
                  <div 
                    key={slideIndex} 
                    className="flex-shrink-0 w-[85%] flex flex-col gap-4"
                  >
                    {slideServices.map((service, rowIndex) => (
                      <ServiceCard
                        key={service.title}
                        service={service}
                        isVisible={visibleCards.includes(slideIndex * 2 + rowIndex)}
                        index={slideIndex * 2 + rowIndex}
                        prefersReducedMotion={prefersReducedMotion.current}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {serviceSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={visibleCards.includes(index)}
                index={index}
                prefersReducedMotion={prefersReducedMotion.current}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
