import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Wrench, Truck, Building2, HardHat, ShoppingCart, Palette, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import gpgLogo from "@/assets/gpg-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten", hasDropdown: true },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

const dienstenLinks = [
  { href: "/diensten#handyman", label: "Handyman dienstverlening", icon: Wrench },
  { href: "/diensten#verhuizen", label: "Verhuizen", icon: Truck },
  { href: "/diensten#integrated-facilities", label: "Integrated Facilities", icon: Building2 },
  { href: "/diensten#fitouts", label: "Fit-out's", icon: HardHat },
  { href: "/diensten#inkoop", label: "Inkoop van inrichtingscomponenten", icon: ShoppingCart },
  { href: "/diensten#stoffering", label: "Projectinrichting & stoffering", icon: Palette },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setDienstenOpen(false);
    if (dienstenOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [dienstenOpen]);

  return (
    <>
      {/* Main sticky header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
        <nav className="container flex items-center justify-between py-4">
          <Link to="/" className="flex-shrink-0">
            <img src={gpgLogo} alt="GPG Facility Management" className="h-12 w-auto" />
          </Link>

          {/* Desktop navigation - pushed to the right */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-6 mr-6">
              {navLinks.map((link) => (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setDienstenOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDienstenOpen(false)}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={`text-sm font-medium transition-colors flex items-center gap-1 nav-link-hover py-2 ${
                          location.pathname.startsWith("/diensten")
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDienstenOpen(!dienstenOpen);
                        }}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dienstenOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Diensten dropdown */}
                      {dienstenOpen && (
                        <div 
                          className="absolute top-full left-0 mt-0 pt-2 w-72 z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-background border border-border rounded-lg shadow-xl py-2 animate-fade-in">
                            {dienstenLinks.map((dienst) => (
                              <Link
                                key={dienst.href}
                                to={dienst.href}
                                onClick={() => setDienstenOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors nav-link-hover"
                              >
                                <dienst.icon className="w-4 h-4 text-primary" />
                                {dienst.label}
                              </Link>
                            ))}
                            <div className="border-t border-border mt-2 pt-2">
                              <Link
                                to="/diensten"
                                onClick={() => setDienstenOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors nav-link-hover"
                              >
                                Bekijk alle diensten
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm font-medium transition-colors nav-link-hover py-2 ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="uppercase font-semibold tracking-wide" asChild>
              <Link to="/contact">Neem Contact Op</Link>
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
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)}
                        className={`flex items-center justify-between w-full text-base font-medium py-2 transition-colors ${
                          location.pathname.startsWith("/diensten")
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDienstenOpen && (
                        <div className="pl-4 space-y-1 animate-fade-in">
                          {dienstenLinks.map((dienst) => (
                            <Link
                              key={dienst.href}
                              to={dienst.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDienstenOpen(false);
                              }}
                              className="flex items-center gap-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                            >
                              <dienst.icon className="w-4 h-4 text-primary" />
                              {dienst.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-base font-medium py-2 transition-colors ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="outline" className="mt-4 uppercase font-semibold tracking-wide" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Sub-header with contact info - static, always visible */}
      <div 
        className="fixed left-0 right-0 z-40"
        style={{ top: "73px" }}
      >
        <div className="hidden md:block bg-muted border-b border-border">
          <div className="container flex justify-end items-center py-3 gap-10 text-sm">
            <a
              href="mailto:info@gpg-fm.nl"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@gpg-fm.nl</span>
            </a>
            <a
              href="tel:+31207952820"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>020 - 795 28 20</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
