import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin } from "lucide-react";
import gpgLogo from "@/assets/gpg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container py-12 md:py-16 lg:py-20 px-4 md:px-6">
        {/* Top section with logo and tagline */}
        <div className="border-l-4 border-accent pl-4 md:pl-6 mb-10 md:mb-14">
          <p className="text-accent text-xs md:text-sm font-medium uppercase tracking-wider mb-1">
            GPG Facility Management:
          </p>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight max-w-md">
            Facilitaire diensten voor engineering, realisatie en beheer
          </h3>
          <p className="text-white/60 text-sm mt-2">Onderdeel van GSA Groep</p>
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
              <a 
                href="tel:+31207952100" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                020 - 795 21 00
              </a>
              <a 
                href="mailto:info@gpgfacilities.nl" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 md:py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs md:text-sm text-center md:text-left">
            © GPG Facility Management {new Date().getFullYear()}. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-white/50">
              <Link to="/voorwaarden" className="hover:text-white transition-colors">
                Algemene voorwaarden
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacyverklaring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
