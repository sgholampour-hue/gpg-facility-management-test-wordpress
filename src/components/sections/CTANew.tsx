import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import ctaMeetingImage from "@/assets/cta-meeting.jpg";

const CTANew = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background gsa-hoek-lg border border-border/50 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Left: Content */}
              <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
                  Neem contact op
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Klaar om te starten?
                </h2>
                <p className="text-muted-foreground mb-6 text-sm md:text-base">
                  Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek. 
                  Wij helpen je graag bij jouw volgende project.
                </p>

                <div className="space-y-3 mb-8">
                  <a 
                    href="tel:+31207952100" 
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">+31(0)20 795 21 00</span>
                  </a>
                  <a 
                    href="mailto:info@gpgfacilities.nl" 
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">info@gpgfacilities.nl</span>
                  </a>
                </div>

                <Button variant="outline" size="lg" className="gsa-hoek-sm group" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem contact op
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Right: Image */}
              <div className="relative min-h-[250px] md:min-h-0">
                <img 
                  src={ctaMeetingImage} 
                  alt="Professioneel overleg met het GPG team"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm gsa-hoek-sm px-4 py-3 shadow-lg">
                  <p className="text-xs font-semibold text-primary">Jouw partner voor</p>
                  <p className="text-sm font-bold text-accent">professionele facilitaire dienstverlening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CTANew.displayName = "CTANew";

export default CTANew;
