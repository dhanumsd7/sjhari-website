import {
  Paintbrush,
  SprayCan,
  Building2,
  Wind,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Painting Works",
    description:
      "Premium interior and exterior painting services for homes, offices, and commercial buildings.",
    icon: Paintbrush,
  },
  {
    title: "Spray Painting",
    description:
      "Smooth, even spray painting solutions for modern finishes and industrial requirements.",
    icon: SprayCan,
  },
  {
    title: "Building Maintenance",
    description:
      "Complete building maintenance services including repair, repainting, and protection.",
    icon: Building2,
  },
  {
    title: "Spider Work",
    description:
      "High-rise exterior painting and maintenance using professional rope access techniques.",
    icon: ShieldCheck,
  },
  {
    title: "Glass Cleaning",
    description:
      "Professional glass and facade cleaning for apartments and commercial buildings.",
    icon: Wind,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Our Services
          </h2>

          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Painting & Building Maintenance
          </h3>

          <p className="text-muted-foreground text-lg">
            Trusted professional services across Ammandivilai, Kanyakumari,
            and nearby areas.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            const message = `Hello SJ Hari Painting, I would like to know more about your ${service.title} service.`;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="
                group
                glass
                rounded-3xl
                p-8
                border border-border
                shadow-xl
                hover:shadow-2xl
                transition
                flex flex-col
                "
              >
                {/* ICON */}
                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  bg-yellow-400/20
                  text-yellow-500
                  flex items-center justify-center
                  mb-6
                  group-hover:scale-110
                  transition
                "
                >
                  <Icon size={28} />
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-black mb-3">
                  {service.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* WHATSAPP BUTTON */}
                <Button
                  className="
                  mt-auto
                  bg-yellow-400
                  text-black
                  font-bold
                  rounded-full
                  hover:bg-yellow-500
                  hover:scale-105
                  transition
                "
                  onClick={() =>
                    window.open(
                      `https://wa.me/919626344778?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="mr-2" size={18} />
                  Ask on WhatsApp
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}