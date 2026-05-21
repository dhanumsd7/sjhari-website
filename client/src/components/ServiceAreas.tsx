import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ServiceAreas() {
  const areas = [
    "Ammandivilai",
    "Nagercoil",
    "Kanyakumari",
    "Marthandam",
    "Thuckalay",
    "Colachel",
    "Kaliyakkavilai",
    "Eraniel"
  ];

  return (
    <section id="areas" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Service Areas</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proudly Serving Kanyakumari District</h3>
            <p className="text-muted-foreground text-lg">
              We travel to your location. If you don't see your town listed, give us a call to confirm coverage!
            </p>
          </div>
          
          <div className="md:w-2/3 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <MapPin className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
