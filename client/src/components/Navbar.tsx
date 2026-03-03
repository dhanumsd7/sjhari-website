import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Home,
  Info,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button"; // ✅ FIXED (relative import)
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  /* ---------------- Scroll detection ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Section navigation ---------------- */
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");

      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (!el) return;

        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          90;

        window.scrollTo({ top: y, behavior: "smooth" });
      };

      if (location === "/") {
        scrollToSection();
      } else {
        setLocation("/");
        setTimeout(scrollToSection, 200);
      }
      return;
    }

    setLocation(href);
  };

  const navLinks = [
    { name: "Home", href: "/#home", icon: <Home size={18} /> },
    { name: "Services", href: "/#services", icon: <Briefcase size={18} /> },
    { name: "About", href: "/#why-us", icon: <Info size={18} /> },
    { name: "Contact", href: "/#contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 inset-x-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= GLASS PILL ================= */}
        <div
          className={`relative overflow-hidden rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-background/50 backdrop-blur-2xl border border-border/50 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              : "bg-background/20 backdrop-blur-[70px] border border-white/20 shadow-[0_30px_120px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Glass highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

          <div className="relative z-10 flex h-14 md:h-16 items-center justify-between px-8">
            {/* LOGO */}
            <Link
              href="/"
              onClick={() => handleNavClick("/#home")}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="SJ Hari Painting Logo"
                  className="w-[115%] h-[115%] object-contain"
                />
              </div>

              <span
                className={`font-bold text-lg md:text-xl tracking-tight ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                SJ Hari <span className="text-primary">Painting</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-semibold transition-colors ${
                    isScrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <Button
                className="bg-accent text-accent-foreground rounded-full h-9 px-6 font-bold hover:scale-105 transition"
                onClick={() =>
                  window.open("https://wa.me/919626344778", "_blank")
                }
              >
                WhatsApp
              </Button>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  size={24}
                  className={isScrolled ? "text-foreground" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolled ? "text-foreground" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-28 left-4 right-4 bg-background/55 backdrop-blur-2xl border border-border/60 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.6)] z-50 p-6"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-3 text-lg font-bold text-foreground"
                  >
                    {link.icon}
                    {link.name}
                  </button>
                ))}

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = "tel:+919626344778")
                    }
                  >
                    <Phone size={18} className="mr-2" />
                    Call
                  </Button>

                  <Button
                    className="bg-accent text-accent-foreground"
                    onClick={() =>
                      window.open(
                        "https://wa.me/919626344778",
                        "_blank"
                      )
                    }
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