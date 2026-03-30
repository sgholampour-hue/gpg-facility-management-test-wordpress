import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Truck, Building2, PenTool, ShoppingBag, Sofa } from "lucide-react";
import { usePageContent } from "@/hooks/useCmsContent";

const iconMap: Record<string, any> = {
  huismeesterdiensten: Wrench,
  verhuizen: Truck,
  "integrated-facilities": Building2,
  fitouts: PenTool,
  inkoop: ShoppingBag,
  stoffering: Sofa,
};

const defaultServices = [
  {
    icon: Wrench,
    title: "Huismeesterdiensten",
    description: "Van kleine reparaties tot complexe klussen: vakmanschap en snelle service.",
    href: "/diensten#huismeesterdiensten",
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
    subtitle: "Inrichtingscomponenten",
    description: "Strategische inkoop van meubilair en inrichting. Wij bieden scherpe prijzen en kwaliteitsgarantie.",
    href: "/diensten#inkoop",
    size: "small",
  },
  {
    icon: Sofa,
    title: "Projectinrichting &",
    subtitle: "Stoffering",
    description: "Maatwerk inrichting en stoffering voor een optimale werkplek. Van bureaus tot beplanting, alles uit één hand.",
    href: "/diensten#stoffering",
    size: "small",
  },
];

interface ServiceType {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  size: string;
}

const ServiceCard = ({ 
  service, 
  isVisible, 
  index 
}: { 
  service: ServiceType; 
  isVisible: boolean; 
  index: number;
}) => {
  return (
    <Link
      to={service.href}
      className={`group relative bg-background border border-border/50 rounded-tr-2xl rounded-bl-none rounded-br-none rounded-tl-none p-5 md:p-6 pl-7 md:pl-8 transition-all duration-500 ease-out
        hover:shadow-[0_10px_40px_-10px_hsl(var(--accent)/0.25)] 
        hover:border-accent/40 
        hover:-translate-y-2 
        hover:bg-gradient-to-br hover:from-background hover:to-accent/5
        flex flex-col overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ 
        transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
        transitionProperty: 'opacity, transform, box-shadow, border-color, background'
      }}
    >
      {/* Green accent bar left */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-accent rounded-r-full" />

      {/* Icon + Title Row */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg border-2 border-accent/30 bg-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/50 transition-all duration-300">
          <service.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-primary uppercase text-sm md:text-base tracking-wide group-hover:text-accent transition-colors leading-tight">
            {service.title}
          </h3>
          {service.subtitle && (
            <span className="font-bold text-primary uppercase text-sm md:text-base tracking-wide group-hover:text-accent transition-colors leading-tight">
              {service.subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
        {service.description}
      </p>

      {/* Arrow - Bottom */}
      <div className="flex items-center justify-between text-primary group-hover:text-accent transition-colors mt-auto">
        <span className="text-xs font-semibold uppercase tracking-wide flex items-center gap-1">
          Lees meer
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </span>
        <div className="w-9 h-9 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-tr-2xl border-2 border-transparent group-hover:border-accent/20 transition-colors pointer-events-none" />
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
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`max-w-2xl mb-8 md:mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-3 md:mb-4">
            Onze diensten
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Complete facilitaire ondersteuning
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Van verhuizingen tot volledige kantoorinrichtingen. Wij bieden alles wat je nodig hebt.
          </p>
        </div>

        {/* Grid - 3 columns like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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
