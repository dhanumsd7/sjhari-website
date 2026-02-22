import { useState, useEffect } from "react";
import { Menu, X, Phone, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Areas", href: "#areas" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo("#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:bg-accent transition-colors">
              <Paintbrush size={24} />
            </div>
            <div>
              <h1 className={`font-bold text-xl leading-none ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Ammandivilai
              </h1>
              <p className={`text-xs font-semibold tracking-wider uppercase ${isScrolled ? 'text-primary' : 'text-accent'}`}>
                Painting Contractors
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground/80' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg shadow-accent/20"
              onClick={() => scrollTo("#contact")}
            >
              Get Free Quote
            </Button>
            <a 
              href="tel:+919876543210" 
              className={`flex items-center gap-2 font-bold transition-colors hover:text-accent ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12 text-lg mt-4"
              onClick={() => scrollTo("#contact")}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
