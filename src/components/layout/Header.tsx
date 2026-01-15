import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import gpgLogo from "@/assets/gpg-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-background/95 backdrop-blur-sm border-b border-border"
    }`}>
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-primary">
        <div className="container flex justify-end items-center py-2 gap-6 text-sm">
          <a
            href="mailto:info@gpg-fm.nl"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@gpg-fm.nl
          </a>
          <a
            href="tel:+31207952820"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            020 - 795 28 20
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={gpgLogo} alt="GPG Facility Management" className="h-12 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium link-underline transition-colors ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Offerte Aanvragen</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Offerte Aanvragen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
