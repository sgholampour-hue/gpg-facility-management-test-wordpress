import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTANew = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl border border-border/50 shadow-xl overflow-hidden">
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
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">+31(0)20 795 21 00</span>
                  </a>
                  <a 
                    href="mailto:info@gpgfacilities.nl" 
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">info@gpgfacilities.nl</span>
                  </a>
                </div>

                <Button variant="default" size="lg" className="rounded-full group" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem contact op
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Right: Visual */}
              <div className="relative bg-primary p-8 md:p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl md:text-7xl font-bold text-white/10 mb-4">
                    GPG
                  </div>
                  <p className="text-white/80 text-sm md:text-base max-w-xs mx-auto">
                    Jouw partner voor professionele facilitaire dienstverlening
                  </p>
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
