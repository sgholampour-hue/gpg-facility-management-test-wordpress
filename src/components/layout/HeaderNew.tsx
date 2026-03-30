import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Wrench, Truck, Building2, HardHat, ShoppingCart, Palette, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettingsData } from "@/hooks/useSiteSettings";
import gpgLogo from "@/assets/gpg-logo.png";

const iconMap: Record<string, any> = { Wrench, Truck, Building2, HardHat, ShoppingCart, Palette };

const HeaderNew = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { settings } = useSiteSettingsData();

  // Fallback nav items
  const navLinks = settings?.footer_info?.navigation_items || [
    { label: "Home", href: "/" },
    { label: "Over Ons", href: "/over-ons" },
    { label: "Diensten", href: "/diensten", hasDropdown: true },
    { label: "Projecten", href: "/projecten" },
    { label: "Duurzaamheid", href: "/duurzaamheid" },
  ];

  const dienstenLinks = settings?.footer_info?.diensten_dropdown || [
    { label: "Huismeesterdiensten", href: "/diensten#huismeesterdiensten", icon: "Wrench" },
    { label: "Verhuizen", href: "/diensten#verhuizen", icon: "Truck" },
    { label: "Integrated Facilities", href: "/diensten#integrated-facilities", icon: "Building2" },
    { label: "Fit-out's", href: "/diensten#fitouts", icon: "HardHat" },
    { label: "Inkoop van inrichtingscomponenten", href: "/diensten#inkoop", icon: "ShoppingCart" },
    { label: "Projectinrichting & stoffering", href: "/diensten#stoffering", icon: "Palette" },
  ];

  const contactEmail = settings?.email || "info@gpgfacilities.nl";
  const contactPhone = settings?.phone || "+31(0)20 795 21 00";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
    setDienstenOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setDienstenOpen(false), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background border-b transition-all duration-300 ${isScrolled ? "border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md bg-background/95" : "border-border"}`}>
      <nav className="container">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img src={gpgLogo} alt={settings?.company_name || "GPG Facility Management"} className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter()}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}>
                  {link.hasDropdown ? (
                    <>
                      <Link to="/diensten" className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group/nav ${location.pathname.startsWith("/diensten") ? "text-primary" : "text-foreground"}`} onClick={() => setDienstenOpen(false)}>
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dienstenOpen ? 'rotate-180' : ''}`} />
                        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-300 origin-left ${location.pathname.startsWith("/diensten") ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`} />
                      </Link>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-50 transition-all duration-200 ${dienstenOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                        <div className="absolute -top-2 left-0 right-0 h-4" />
                        <div className="bg-background rounded-2xl shadow-2xl border border-border/50 p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {dienstenLinks.map((dienst) => {
                              const Icon = iconMap[dienst.icon || ""] || Wrench;
                              return (
                                <a key={dienst.href} href={dienst.href} onClick={(e) => {
                                  e.preventDefault(); setDienstenOpen(false);
                                  const targetId = dienst.href.split('#')[1];
                                  if (location.pathname === '/diensten') {
                                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                                  } else { window.location.href = dienst.href; }
                                }} className="flex items-center gap-3 p-3 rounded-xl text-sm text-foreground hover:bg-muted transition-all duration-200 group cursor-pointer">
                                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Icon className="w-5 h-5 text-accent group-hover:text-white" />
                                  </div>
                                  <span className="font-medium">{dienst.label}</span>
                                </a>
                              );
                            })}
                          </div>
                          <div className="border-t border-border mt-3 pt-3">
                            <Link to="/diensten" onClick={() => setDienstenOpen(false)} className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                              Bekijk alle diensten →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={link.href} className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group/nav ${location.pathname === link.href ? "text-primary" : "text-foreground"}`}>
                      {link.label}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-300 origin-left ${location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`} />
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
          <button className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container py-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.hasDropdown ? (
                <>
                  <button onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)} className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname.startsWith("/diensten") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileDienstenOpen ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 space-y-1">
                      {dienstenLinks.map((dienst) => {
                        const Icon = iconMap[dienst.icon || ""] || Wrench;
                        return (
                          <a key={dienst.href} href={dienst.href} onClick={(e) => {
                            e.preventDefault(); setMobileMenuOpen(false); setMobileDienstenOpen(false);
                            const targetId = dienst.href.split('#')[1];
                            if (location.pathname === '/diensten') {
                              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                            } else { window.location.href = dienst.href; }
                          }} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
                            <Icon className="w-4 h-4 text-accent" />
                            {dienst.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={link.href} onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 mt-4 border-t border-border space-y-3">
            <a href={`tel:${contactPhone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />{contactPhone}
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />{contactEmail}
            </a>
          </div>
          <Button variant="default" className="w-full mt-4 gsa-hoek-sm" asChild>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Neem contact op</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
