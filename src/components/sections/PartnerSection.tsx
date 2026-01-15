import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const PartnerSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src={teamPhoto}
                alt="GPG Team bij bedrijfsvoertuigen"
                className="w-full h-auto gsa-hoek-tr-lg shadow-card"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              JOUW PARTNER VOOR EEN COMPLEET VERZORGD PROJECT
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              GPG Facility Management neemt jouw complete project uit handen. Van sloop tot de inrichting van je kantoor, van energievoorziening tot klimaatbeheersing. In samenwerking met verschillende partners leveren we een totaalpakket, inclusief elektra.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Met onze jarenlange ervaring zorgen we voor een efficiënte uitvoering en één aanspreekpunt gedurende het hele proces. Van ontwerp tot installatie en onderhoud, wij maken het mogelijk.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/diensten">Bekijk onze totaalaanpak</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
