import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Wrench, Truck, Building2, HardHat, ShoppingCart, Palette, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gpgLogo from "@/assets/gpg-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten", hasDropdown: true },
  { href: "/projecten", label: "Projecten" },
  { href: "/duurzaamheid", label: "Duurzaamheid" },
];

const dienstenLinks = [
  { href: "/diensten#handyman", label: "Handyman dienstverlening", icon: Wrench },
  { href: "/diensten#verhuizen", label: "Verhuizen", icon: Truck },
  { href: "/diensten#integrated-facilities", label: "Integrated Facilities", icon: Building2 },
  { href: "/diensten#fitouts", label: "Fit-out's", icon: HardHat },
  { href: "/diensten#inkoop", label: "Inkoop van inrichtingscomponenten", icon: ShoppingCart },
  { href: "/diensten#stoffering", label: "Projectinrichting & stoffering", icon: Palette },
];

const HeaderNew = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDienstenOpen(false);
      }
    };
    
    if (dienstenOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dienstenOpen]);

  // Delayed close for smooth dropdown interaction
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDienstenOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDienstenOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  return (
    <>
      {/* Top Utility Bar - Hidden on scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[55] bg-primary text-primary-foreground transition-all duration-300 ${
          isScrolled ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-2 text-xs md:text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:info@gpgfacilities.nl" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@gpgfacilities.nl</span>
              </a>
              <a href="tel:+31207952100" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+31(0)20 795 21 00</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-3.5 h-3.5" />
              <span>Amsterdam • Nederland</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Static (not sticky) */}
      <header className="relative z-40 bg-background border-b border-border">
        <nav className="container">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-18'}`}>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10">
              <img 
                src={gpgLogo} 
                alt="GPG Facility Management" 
                className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <div 
                    key={link.href}
                    className="relative"
                    ref={link.hasDropdown ? dropdownRef : undefined}
                    onMouseEnter={() => link.hasDropdown && handleMouseEnter()}
                    onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                  >
                    {link.hasDropdown ? (
                      <>
                        <Link
                          to="/diensten"
                          className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group/nav ${
                            location.pathname.startsWith("/diensten")
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                          onClick={() => setDienstenOpen(false)}
                        >
                          {link.label}
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dienstenOpen ? 'rotate-180' : ''}`} />
                          {/* Underline animation */}
                          <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-300 origin-left ${
                            location.pathname.startsWith("/diensten") ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                          }`} />
                        </Link>
                        
                        {/* Mega Menu Dropdown with bridge element */}
                        <div 
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-50 transition-all duration-200 ${
                            dienstenOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                          }`}
                        >
                          {/* Invisible bridge to prevent gap */}
                          <div className="absolute -top-2 left-0 right-0 h-4" />
                          
                          <div className="bg-background rounded-2xl shadow-2xl border border-border/50 p-4">
                            <div className="grid grid-cols-2 gap-2">
                              {dienstenLinks.map((dienst) => (
                                <Link
                                  key={dienst.href}
                                  to={dienst.href}
                                  onClick={() => setDienstenOpen(false)}
                                  className="flex items-center gap-3 p-3 rounded-xl text-sm text-foreground hover:bg-muted transition-all duration-200 group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                    <dienst.icon className="w-5 h-5 text-accent group-hover:text-white" />
                                  </div>
                                  <span className="font-medium">{dienst.label}</span>
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-border mt-3 pt-3">
                              <Link
                                to="/diensten"
                                onClick={() => setDienstenOpen(false)}
                                className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                              >
                                Bekijk alle diensten →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group/nav ${
                          location.pathname === link.href
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                        {/* Underline animation */}
                        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-300 origin-left ${
                          location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                        }`} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="ml-6 pl-6 border-l border-border">
                <Button variant="outline-accent" size="default" className="gsa-hoek-sm" asChild>
                  <Link to="/contact">Neem contact op</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container py-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        location.pathname.startsWith("/diensten")
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileDienstenOpen ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
                      <div className="pl-4 space-y-1">
                        {dienstenLinks.map((dienst) => (
                          <Link
                            key={dienst.href}
                            to={dienst.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileDienstenOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            <dienst.icon className="w-4 h-4 text-accent" />
                            {dienst.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <a href="tel:+31207952100" className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +31(0)20 795 21 00
              </a>
              <a href="mailto:info@gpgfacilities.nl" className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@gpgfacilities.nl
              </a>
            </div>
            
            <Button variant="default" className="w-full mt-4 gsa-hoek-sm" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Neem contact op
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNew;
