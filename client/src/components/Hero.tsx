import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const HERO_IMAGES = [
  "/images/hero/image1.webp",
  "/images/hero/image2.webp",
  "/images/hero/image3.webp",
  "/images/hero/image4.webp",
];

export function Hero() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <Helmet>

        <title>
          SJ Hari Painting & Building Maintenance | Ammandivilai
        </title>

        <meta
          name="description"
          content="Professional painting and building maintenance services in Ammandivilai, Kanyakumari district."
        />

      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >

        {/* Background slideshow */}

        <div className="absolute inset-0 z-0">

          <AnimatePresence mode="wait">

            <motion.img
              key={index}
              src={HERO_IMAGES[index]}
              loading="eager"
              fetchPriority="high"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="SJ Hari Painting and Building Maintenance Service"
            />

          </AnimatePresence>

          <div className="absolute inset-0 bg-black/60" />

        </div>

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl"
          >

            Professional Painting &{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Building Maintenance
            </span>

            <br />

            Services in{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Ammandivilai
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/90 text-lg max-w-xl"
          >
            Residential • Commercial • High-Rise • Cleaning & Maintenance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <Button
              className="bg-white text-black h-12 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition"
              onClick={() => (window.location.href = "tel:+919626344778")}
            >
              <Phone className="mr-2" />
              Call Now
            </Button>

            <Button
              className="bg-yellow-400 text-black h-12 px-8 rounded-full font-bold shadow-xl hover:bg-yellow-500 hover:scale-105 transition"
              onClick={() =>
                window.open(
                  "https://wa.me/919626344778?text=Hello%20SJ%20Hari%20Painting,%20I%20would%20like%20to%20know%20about%20your%20services.",
                  "_blank"
                )
              }
            >
              <MessageCircle className="mr-2" />
              WhatsApp
            </Button>

          </motion.div>

          <p className="mt-6 text-white/70 text-sm font-medium tracking-wide max-w-xl">
            One call is all it takes — we handle everything from start to finish.
          </p>

        </div>
      </section>
    </>
  );
}