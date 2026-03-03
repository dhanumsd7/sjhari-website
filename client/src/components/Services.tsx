import {
  Paintbrush,
  SprayCan,
  Building2,
  Wind,
  ShieldCheck,
} from "lucide-react";

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
            Trusted professional services across Ammandivilai, Kanyakumari, and
            nearby areas.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h4 className="text-xl font-black mb-3">
                  {service.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}