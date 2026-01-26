import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Truck, Building2, PenTool, ShoppingBag, Sofa } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Handyman dienstverlening",
    description: "Van kleine reparaties tot complexe klussen: vakmanschap en snelle service.",
    href: "/diensten#handyman",
    size: "large",
  },
  {
    icon: Truck,
    title: "Verhuizen",
    description: "Professionele verhuisservice voor kantoren zonder onderbrekingen.",
    href: "/diensten#verhuizen",
    size: "small",
  },
  {
    icon: Building2,
    title: "Integrated Facilities",
    description: "Complete facilitaire ondersteuning onder één dak.",
    href: "/diensten#integrated-facilities",
    size: "small",
  },
  {
    icon: PenTool,
    title: "Fit-out's",
    description: "Transformatie van ruimtes naar functionele werkomgevingen. Van ontwerp tot oplevering.",
    href: "/diensten#fitouts",
    size: "medium",
  },
  {
    icon: ShoppingBag,
    title: "Inkoop",
    description: "Strategische inkoop van meubilair met scherpe prijzen.",
    href: "/diensten#inkoop",
    size: "small",
  },
  {
    icon: Sofa,
    title: "Projectinrichting",
    description: "Maatwerk inrichting en stoffering voor een optimale werkplek.",
    href: "/diensten#stoffering",
    size: "small",
  },
];

const ServiceCard = ({ 
  service, 
  isVisible, 
  index 
}: { 
  service: typeof services[0]; 
  isVisible: boolean; 
  index: number;
}) => {
  const isLarge = service.size === "large";
  const isMedium = service.size === "medium";
  
  return (
    <Link
      to={service.href}
      className={`group relative bg-background border border-border/50 gsa-hoek-sm p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isLarge ? "sm:col-span-2 md:col-span-2 md:row-span-2" : ""} ${isMedium ? "sm:col-span-2 md:col-span-2" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className={`mb-4 ${isLarge ? "mb-6" : ""}`}>
        <div className={`inline-flex items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent transition-colors duration-300 ${
          isLarge ? "w-14 h-14" : "w-11 h-11"
        }`}>
          <service.icon className={`text-accent group-hover:text-white transition-colors duration-300 ${
            isLarge ? "w-7 h-7" : "w-5 h-5"
          }`} />
        </div>
      </div>

      {/* Content */}
      <h3 className={`font-bold text-primary mb-1 md:mb-2 group-hover:text-accent transition-colors line-clamp-2 ${
        isLarge ? "text-base sm:text-lg md:text-2xl" : "text-sm md:text-lg"
      }`}>
        {service.title}
      </h3>
      <p className={`text-muted-foreground leading-relaxed line-clamp-3 ${
        isLarge ? "text-xs sm:text-sm md:text-base" : "text-xs md:text-sm"
      }`}>
        {service.description}
      </p>

      {/* Arrow */}
      <div className={`mt-4 flex items-center justify-between text-primary group-hover:text-accent transition-colors ${
        isLarge ? "mt-6" : ""
      }`}>
        <span className="text-xs font-semibold uppercase tracking-wide flex items-center gap-1">
          Lees meer
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </span>
        <div className="w-9 h-9 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 gsa-hoek-sm border-2 border-transparent group-hover:border-accent/20 transition-colors pointer-events-none" />
    </Link>
  );
};

const ServicesBento = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className={`max-w-2xl mb-10 md:mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
            Onze diensten
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Complete facilitaire ondersteuning
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Van verhuizingen tot volledige kantoorinrichtingen. Wij bieden alles wat je nodig hebt.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Link 
            to="/diensten" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
          >
            Bekijk alle diensten
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
