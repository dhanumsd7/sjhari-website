import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  SprayCan,
  Layers,
  HardHat,
  Cog,
  GlassWater,
  Building2,
  Phone,
  MessageCircle,
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Painting Works",
      desc: "Interior & exterior painting with flawless, long-lasting finishes.",
      icon: Paintbrush,
    },
    {
      title: "Spray Painting",
      desc: "Smooth, uniform spray coating for doors, metals, and panels.",
      icon: SprayCan,
    },
    {
      title: "Texture Painting",
      desc: "Decorative and protective texture coating applications.",
      icon: Layers,
    },
    {
      title: "Spider Work",
      desc: "High-rise maintenance using certified rope access methods.",
      icon: HardHat,
    },
    {
      title: "Powder Coating",
      desc: "Durable, corrosion-resistant coating for metal structures.",
      icon: Cog,
    },
    {
      title: "Glass Cleaning",
      desc: "Crystal-clear glass cleaning for commercial buildings.",
      icon: GlassWater,
    },
    {
      title: "Commercial Painting",
      desc: "Large-scale painting for offices, factories, and warehouses.",
      icon: Building2,
    },
  ];

  const callNow = () => {
    window.location.href = "tel:+919626344778";
  };

  const whatsappNow = (service: string) => {
    const msg = encodeURIComponent(
      `Hello, I am interested in ${service} from SJ Hari Painting.`
    );
    window.open(`https://wa.me/919626344778?text=${msg}`, "_blank");
  };

  return (
    <section id="services" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Expertise
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
          >
            Premium Services
          </motion.h3>

          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Card className="relative h-full rounded-3xl bg-card border border-border shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Continuous Glow */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/30 blur-[2px]" />
                  <div className="absolute -inset-1 rounded-3xl bg-primary/10 opacity-40 blur-xl" />

                  <CardContent className="relative z-10 p-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-black text-foreground mb-3 tracking-tight">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-10 flex-grow">
                      {service.desc}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button
                        onClick={callNow}
                        className="flex items-center gap-2 px-5 h-11 rounded-full border border-border text-foreground font-bold text-sm hover:bg-secondary transition"
                      >
                        <Phone size={16} />
                        Call
                      </button>

                      <button
                        onClick={() => whatsappNow(service.title)}
                        className="flex items-center gap-2 px-5 h-11 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-lg hover:scale-105 transition"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}