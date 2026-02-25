import { useState, useEffect } from "react";
import { Menu, X, Paintbrush, Phone, Home, Info, Briefcase, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      if (location === "/") {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      } else {
        setLocation("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      setLocation(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Services", href: "/services", icon: <Briefcase size={18} /> },
    { name: "About", href: "/about", icon: <Info size={18} /> },
    { name: "Contact", href: "/contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-sm" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <Paintbrush size={20} className="text-white" />
            </div>
            <h1 className="font-bold text-lg md:text-xl leading-none text-slate-900 tracking-tight">
              SJ Hari <span className="text-primary">Painting</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-semibold transition-colors relative group ${
                  location === link.href ? "text-primary" : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
            <Button 
              className="bg-accent hover:bg-accent/90 text-slate-900 rounded-full font-bold px-5 shadow-sm transition-all hover:scale-105 h-9"
              onClick={() => window.open("https://wa.me/919626344778", "_blank")}
            >
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900 relative z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[105]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl z-[110] md:hidden overflow-hidden border border-slate-100"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-3 text-lg font-bold p-3 rounded-xl transition-colors ${
                      location === link.href ? "bg-primary/5 text-primary" : "text-slate-900 active:bg-slate-50"
                    }`}
                  >
                    <div className={`${location === link.href ? "text-primary" : "text-slate-400"}`}>
                      {link.icon}
                    </div>
                    {link.name}
                  </button>
                ))}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                  <Button 
                    variant="outline"
                    className="rounded-xl h-12 border-slate-200 text-slate-900 font-bold"
                    onClick={() => window.location.href = "tel:+919626344778"}
                  >
                    <Phone size={18} className="mr-2" />
                    Call
                  </Button>
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-slate-900 rounded-xl h-12 font-bold shadow-lg"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.open("https://wa.me/919626344778", "_blank");
                    }}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
