import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* ================= MAIN GALLERY ================= */

const galleryImages = [
  {
    image: "/images/work/work1.webp",
    title: "Premium Interior Painting",
  },
  {
    image: "/images/work/work2.webp",
    title: "Modern Exterior Finish",
  },
  {
    image: "/images/work/work3.webp",
    title: "Luxury Wall Painting",
  },
  {
    image: "/images/work/work4.webp",
    title: "High-Rise Design Work",
  },
  {
    image: "/images/work/work5.webp",
    title: "Temple Statue Restoration",
  },
  {
    image: "/images/work/work6.webp",
    title: "Minute Detail Works",
  },
  {
    image: "/images/work/work7.webp",
    title: "Restoration Work",
  },
  {
    image: "/images/work/work8.webp",
    title: "Fine Finish Painting",
  },
  {
    image: "/images/work/work9.webp",
    title: "Building Maintenance",
  },
  {
    image: "/images/work/work10.webp",
    title: "Professional Wall Painting",
  },
  {
    image: "/images/work/work11.webp",
    title: "Gopuram Restoration",
  },
  {
    image: "/images/work/work12.webp",
    title: "Exterior Renovation",
  },
];

/* ================= POPUP GALLERY ================= */

const popupGalleryImages = [
  ...galleryImages,

  {
    image: "/images/new-work/new1.webp",
    title: "Premium Luxury Finish",
  },
  {
    image: "/images/new-work/new2.webp",
    title: "Modern Architectural Painting",
  },
  {
    image: "/images/new-work/new3.webp",
    title: "Detailed Restoration Work",
  },
  {
    image: "/images/new-work/new4.webp",
    title: "High Quality Exterior Finish",
  },
  {
    image: "/images/new-work/new5.webp",
    title: "Commercial Premium Work",
  },
  {
    image: "/images/new-work/new6.webp",
    title: "Elegant Final Finish",
  },
];

export function Gallery() {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919626344778?text=Hello%20SJ%20Hari%20Painting,%20I%20saw%20your%20gallery%20works%20and%20would%20like%20a%20quotation.",
      "_blank",
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === popupGalleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? popupGalleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden border-t border-border bg-background py-32"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Our Gallery
            </h2>

            <h3 className="mb-6 text-4xl leading-tight font-black md:text-6xl">
              Recent Works &
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Premium Finishes
              </span>
            </h3>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore our latest professional painting and maintenance projects
              completed across Ammandivilai and Kanyakumari district.
            </p>
          </motion.div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-500
                  hover:-translate-y-4
                  hover:rotate-[0.5deg]
                  hover:shadow-[0_30px_100px_rgba(250,204,21,0.18)]
                "
              >
                {/* Premium Border Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-yellow-400/0 transition-all duration-500 group-hover:border-yellow-400/40" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      h-[340px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-110
                      group-hover:brightness-110
                      group-hover:saturate-150
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/95
                      via-black/20
                      to-transparent
                      opacity-90
                      transition-all
                      duration-500
                      group-hover:from-black/80
                      group-hover:via-black/10
                    "
                  />

                  {/* Shine Sweep */}
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute top-0 -left-[120%] h-full w-[60%] rotate-12 bg-white/20 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="
                      mb-4
                      text-2xl
                      font-black
                      text-white
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:text-yellow-300
                    "
                  >
                    {item.title}
                  </motion.h4>

                  <button
                    onClick={handleWhatsApp}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-yellow-400
                      px-5
                      py-3
                      font-bold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-yellow-300
                      hover:shadow-[0_10px_35px_rgba(250,204,21,0.45)]
                    "
                  >
                    <MessageCircle size={18} />
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore Gallery Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setOpenGallery(true)}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-yellow-400
                px-8
                py-4
                font-black
                text-black
                shadow-[0_10px_40px_rgba(250,204,21,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              Explore Gallery
            </button>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h4 className="mb-6 text-3xl font-black md:text-4xl">
              Want Your Space To Look Premium?
            </h4>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Contact SJ Hari Painting & Building Maintenance today for
              professional painting, maintenance, and exterior finishing
              services.
            </p>

            <button
              onClick={handleWhatsApp}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-yellow-400
                px-8
                py-4
                font-black
                text-black
                shadow-[0_10px_40px_rgba(250,204,21,0.4)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= CINEMATIC POPUP GALLERY ================= */}

      <AnimatePresence>
        {openGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              overflow-hidden
              bg-black/95
              backdrop-blur-2xl
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenGallery(false)}
              className="
                fixed
                top-6
                right-6
                z-50
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-white
                backdrop-blur-xl
                transition-all
                hover:bg-yellow-400
                hover:text-black
              "
            >
              <X size={24} />
            </button>

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="
                absolute
                top-1/2
                left-4
                z-50
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-white
                backdrop-blur-xl
                transition-all
                hover:bg-yellow-400
                hover:text-black
                md:left-8
              "
            >
              <ChevronLeft size={28} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="
                absolute
                top-1/2
                right-4
                z-50
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-white
                backdrop-blur-xl
                transition-all
                hover:bg-yellow-400
                hover:text-black
                md:right-8
              "
            >
              <ChevronRight size={28} />
            </button>

            {/* IMAGE COUNTER */}
            <div
              className="
                absolute
                top-8
                left-1/2
                z-50
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-5
                py-2
                font-bold
                text-white
                backdrop-blur-xl
              "
            >
              {currentIndex + 1} / {popupGalleryImages.length}
            </div>

            {/* MAIN CONTENT */}
            <div className="flex h-full w-full items-center justify-center px-4 md:px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="relative w-full max-w-6xl"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src={popupGalleryImages[currentIndex].image}
                      alt={popupGalleryImages[currentIndex].title}
                      className="
                        max-h-[82vh]
                        w-full
                        rounded-[2rem]
                        object-cover
                        shadow-[0_30px_120px_rgba(0,0,0,0.7)]
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="
                      absolute
                      right-0
                      bottom-0
                      left-0
                      p-8
                      md:p-12
                    "
                  >
                    <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
                      {popupGalleryImages[currentIndex].title}
                    </h2>

                    <p className="mb-6 max-w-2xl text-lg text-white/70">
                      Professional premium painting and maintenance work
                      completed by SJ Hari Painting & Building Maintenance.
                    </p>

                    <button
                      onClick={handleWhatsApp}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-yellow-400
                        px-8
                        py-4
                        font-black
                        text-black
                        shadow-[0_10px_40px_rgba(250,204,21,0.35)]
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-yellow-300
                      "
                    >
                      <MessageCircle size={20} />
                      Get Similar Work
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
