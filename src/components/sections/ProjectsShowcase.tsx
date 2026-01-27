import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/gsa-hub-locatie.jpg";
import projectHub2 from "@/assets/project-hub-2.jpg";

const projects = [
  {
    title: "BOOKING.COM",
    subtitle: "Amsterdam, Nederland",
    year: "2023",
    image: projectBooking,
    slug: "cbre-booking",
    stats: [
      { label: "Oppervlakte", value: "65.000 m²" },
      { label: "Werkplekken", value: "3.500+" },
      { label: "Verdiepingen", value: "12" },
    ],
  },
  {
    title: "HQ SCHIPHOL",
    subtitle: "Schiphol, Nederland",
    year: "Lopend",
    image: projectSchiphol,
    slug: "schiphol-hq",
    stats: [
      { label: "Oppervlakte", value: "45.000 m²" },
      { label: "Werkplekken", value: "2.800+" },
      { label: "Gebouwen", value: "3" },
    ],
  },
  {
    title: "HUB LOCATIES",
    subtitle: "Diverse locaties",
    year: "2024",
    image: projectHub,
    slug: "hub-locaties",
    stats: [
      { label: "Locaties", value: "12" },
      { label: "Onderhoud", value: "Continue" },
      { label: "Medewerkers", value: "50+" },
    ],
  },
  {
    title: "GSA GROEP",
    subtitle: "Hoofdkantoor, Nederland",
    year: "2022",
    image: projectHub2,
    slug: "gsa-groep",
    stats: [
      { label: "Ontzorging", value: "100%" },
      { label: "Services", value: "Full-service" },
      { label: "Jaren", value: "5+" },
    ],
  },
];

const ProjectsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
      containScroll: false,
    },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is from center of viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const offset = (sectionCenter - viewportCenter) * 0.15;
      
      setParallaxOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Large gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Secondary parallax layer (slower) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-accent/10 rounded-full" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div>
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
              Uitgelichte werken
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              RECENTE PROJECTEN
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              aria-label="Vorig project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              aria-label="Volgend project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {projects.map((project, index) => {
                const isActive = selectedIndex === index;
                return (
                  <div 
                    key={project.slug} 
                    className={`min-w-0 shrink-0 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isActive 
                        ? "basis-[70%] sm:basis-[60%] md:basis-[50%] lg:basis-[45%]" 
                        : "basis-[20%] sm:basis-[18%] md:basis-[16%] lg:basis-[14%]"
                    }`}
                    onClick={() => scrollTo(index)}
                  >
                    <Link
                      to={`/projecten/${project.slug}`}
                      className="group relative block gsa-hoek-lg overflow-hidden transition-all duration-300 hover:shadow-2xl h-full"
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault();
                          scrollTo(index);
                        }
                      }}
                    >
                      <div className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isActive ? "aspect-[4/3]" : "aspect-[2/3]"}`}>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                            isActive 
                              ? "scale-100 opacity-100" 
                              : "scale-105 opacity-60 grayscale-[20%]"
                          } group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0`}
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive 
                          ? "bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" 
                          : "bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"
                      }`} />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end transition-all duration-300">
                        {/* Year badge - always visible */}
                        <span className={`inline-block self-start px-2 sm:px-3 py-1 gsa-hoek-sm bg-accent text-white font-semibold mb-2 transition-all duration-300 ${
                          isActive ? "text-xs" : "text-[8px] sm:text-[10px]"
                        }`}>
                          {project.year}
                        </span>
                        
                        <h3 className={`font-bold text-white mb-1 transition-all duration-300 leading-tight ${
                          isActive ? "text-lg sm:text-xl md:text-2xl lg:text-3xl" : "text-[10px] sm:text-xs"
                        }`}>
                          {project.title}
                        </h3>
                        
                        {/* Subtitle - visible on active or hover */}
                        <p className={`text-white/70 transition-all duration-300 ${
                          isActive 
                            ? "text-sm md:text-base opacity-100 mb-3 md:mb-4" 
                            : "text-[8px] sm:text-xs opacity-70 mb-0"
                        }`}>
                          {project.subtitle}
                        </p>
                        
                        {/* Stats - Only visible on active slide */}
                        {isActive && (
                          <div className="flex flex-wrap gap-2 md:gap-3 animate-fade-in">
                            {project.stats.map((stat, i) => (
                              <div 
                                key={i}
                                className="px-2 py-1 md:px-4 md:py-2 gsa-hoek-sm bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                              >
                                <span className="text-white text-xs md:text-sm font-bold">{stat.value}</span>
                                <span className="text-white/60 text-[10px] md:text-xs ml-1 md:ml-1.5">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? "w-8 bg-accent" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ga naar project ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-10 md:mt-14 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Link 
            to="/projecten"
            className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wide hover:text-accent transition-colors group"
          >
            Bekijk alle projecten
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;