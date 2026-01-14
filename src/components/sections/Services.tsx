import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Truck, Building2, PenTool, ShoppingBag, Sofa } from "lucide-react";

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

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 100);
          });
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gpg-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-2xl">
          WAT WE ALS FACILITAIR BEDRIJF VOOR JE KUNNEN BETEKENEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card card-lift transition-all duration-500 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="pl-4">
                <div className="flex items-start justify-between mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/diensten"
                    className="text-sm font-medium text-primary uppercase tracking-wide hover:text-accent transition-colors"
                  >
                    Lees meer
                  </Link>
                  <Link
                    to="/diensten"
                    className="arrow-button"
                    aria-label={`Meer over ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
