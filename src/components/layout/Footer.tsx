import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative">
      {/* CTA Banner - Overlapping into footer */}
      <div className="bg-background pb-0">
        <div className="container px-4 md:px-6">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-primary rounded-3xl overflow-hidden translate-y-16 md:translate-y-20">
              {/* Dot pattern decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 15 }).map((_, row) =>
                    Array.from({ length: 15 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={20 + col * 12}
                        cy={20 + row * 12}
                        r="1.5"
                        fill="white"
                      />
                    ))
                  )}
                </svg>
              </div>

              <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
                <div className="max-w-lg">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight">
                    VAN VISIE NAAR<br />RENDEMENT
                  </h2>
                  <p className="text-white/70 text-sm md:text-base mb-5 md:mb-6 max-w-md">
                    Wij vertalen jouw ambities in hoogwaardige facilitaire diensten die comfort en efficiëntie combineren.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="gsa-hoek-sm bg-white text-primary hover:bg-white/90 group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Neem contact op
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-primary text-primary-foreground">
        <div className="container pt-24 md:pt-32 pb-10 md:pb-16 lg:pb-20 px-4 md:px-6">
          {/* Top section with logo and tagline */}
          <div className="border-l-4 border-accent pl-3 md:pl-6 mb-8 md:mb-14">
            <p className="text-accent text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider mb-0.5 md:mb-1">
              GPG Facility Management:
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight max-w-md">
              Facilitaire diensten voor engineering, realisatie en beheer
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mt-1 md:mt-2">Onderdeel van GSA groep</p>
          </div>

          {/* Grid with columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
                Adres
              </h4>
              <div className="text-white/70 text-sm leading-relaxed">
                <p>Valkweg 111</p>
                <p>1118 ED Schiphol</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
                Contact
              </h4>
              <div className="space-y-2 text-white/70 text-sm">
                <a href="tel:+31207952100" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  020 - 795 21 00
                </a>
                <a href="mailto:info@gpgfacilities.nl" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@gpgfacilities.nl
                </a>
              </div>
              <div className="text-white/50 text-xs pt-2 space-y-1">
                <p>BTW-id: NL854426036B01</p>
                <p>KvK: 61641987</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
                Diensten
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link to="/diensten#handyman" className="hover:text-white transition-colors">
                    Handyman dienstverlening
                  </Link>
                </li>
                <li>
                  <Link to="/diensten#verhuizen" className="hover:text-white transition-colors">
                    Verhuizen
                  </Link>
                </li>
                <li>
                  <Link to="/diensten#integrated-facilities" className="hover:text-white transition-colors">
                    Integrated Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/diensten#fitouts" className="hover:text-white transition-colors">
                    Fit-out's
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
                Snel Naar
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/over-ons" className="hover:text-white transition-colors">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link to="/diensten" className="hover:text-white transition-colors">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link to="/projecten" className="hover:text-white transition-colors">
                    Projecten
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar - extra padding for mobile CTA bar */}
        <div className="border-t border-white/10">
          <div className="container py-4 md:py-6 px-4 md:px-6 pb-20 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/50 text-[10px] sm:text-xs md:text-sm text-center md:text-left">
              © GPG Facility Management {new Date().getFullYear()}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm text-white/50">
                <Link to="/voorwaarden" className="hover:text-white transition-colors">
                  Algemene voorwaarden
                </Link>
                <span className="text-white/30">|</span>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacyverklaring
                </Link>
              </div>
              <a href="https://www.linkedin.com/company/gpg-facility-management" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Volg GPG op LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;