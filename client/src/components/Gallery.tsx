import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop", alt: "Beautiful living room paint" },
    { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=800&fit=crop", alt: "Modern exterior painting", className: "md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop", alt: "Interior detail painting" },
    { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=600&fit=crop", alt: "Bedroom painting" },
    { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=600&fit=crop", alt: "Kitchen painting fresh" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Recent Projects</h3>
          <p className="text-lg text-muted-foreground">
            Browse through our portfolio of completed residential and commercial painting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer shadow-md ${img.className || ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
