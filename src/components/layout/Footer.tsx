import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import gpgLogo from "@/assets/gpg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="accent-bar-left">
              <p className="text-accent text-sm font-medium mb-1">GPG FACILITY MANAGEMENT:</p>
              <h3 className="text-xl font-semibold leading-tight">
                Facilitaire diensten voor engineering, realisatie en beheer
              </h3>
            </div>
            <img src={gpgLogo} alt="GPG Facility Management" className="h-10 w-auto opacity-90" />
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Adres</h4>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Valkweg 111</p>
                <p>1118 ED Schiphol</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+31207952820" className="hover:text-primary-foreground transition-colors">
                020 - 795 28 20
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:info@gpg-fm.nl" className="hover:text-primary-foreground transition-colors">
                info@gpg-fm.nl
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Diensten</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/diensten" className="hover:text-primary-foreground transition-colors">
                  Handyman dienstverlening
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-primary-foreground transition-colors">
                  Verhuizen
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-primary-foreground transition-colors">
                  Integrated Facilities
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-primary-foreground transition-colors">
                  Fit-out's
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-primary-foreground transition-colors">
                  Projectinrichting & Stoffering
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Snel Naar</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="hover:text-primary-foreground transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/projecten" className="hover:text-primary-foreground transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} GPG Facility Management. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/voorwaarden" className="hover:text-primary-foreground transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
