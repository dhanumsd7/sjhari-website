import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button"; // ✅ FIXED (no alias)
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

/* -----------------------------
   Hero Images
----------------------------- */
const HERO_IMAGES = [
  "/images/hero/image1.jpeg",
  "/images/hero/image2.jpeg",
  "/images/hero/image3.jpeg",
  "/images/hero/image4.jpeg",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  /* -----------------------------
     Background rotation
  ----------------------------- */
  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          SJ Hari Painting & Building Maintenance | Ammandivilai, Kanyakumari
        </title>

        <meta
          name="description"
          content="SJ Hari Painting offers professional painting and building maintenance services in Ammandivilai, Kanyakumari District, Tamil Nadu. Experts in residential, commercial, spray painting, spider work, and high-rise maintenance."
        />

        <meta
          name="keywords"
          content="Building maintenance Ammandivilai, Painting services Kanyakumari, Professional painters Tamil Nadu, Spider work painting, High-rise maintenance"
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={index}
              src={HERO_IMAGES[index]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="SJ Hari Painting and Building Maintenance Service"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
          <h1 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
            Professional Painting &{" "}
            <span className="text-accent">Building Maintenance</span>
            <br />
            Services in{" "}
            <span className="text-accent">Ammandivilai</span>
          </h1>

          <p className="mt-6 text-white/90 text-lg max-w-xl">
            Residential • Commercial • High-Rise • Cleaning & Maintenance
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-white text-slate-900 h-12 px-8 rounded-full font-bold"
              onClick={() => (window.location.href = "tel:+919626344778")}
            >
              <Phone className="mr-2" /> Call Now
            </Button>

            <Button
              className="bg-accent text-slate-900 h-12 px-8 rounded-full font-bold"
              onClick={() =>
                window.open("https://wa.me/919626344778", "_blank")
              }
            >
              <MessageCircle className="mr-2" /> WhatsApp
            </Button>
          </div>

          {/* Marketing line */}
          <p className="mt-6 text-white/70 text-sm font-medium tracking-wide max-w-xl">
            One call is all it takes — we handle everything from start to finish.
          </p>
        </div>
      </section>
    </>
  );
}