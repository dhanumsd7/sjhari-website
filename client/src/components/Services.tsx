import { motion } from "framer-motion";
import { Home, Building2, Droplets, PaintRoller } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Residential Painting",
      description: "Transform your home's interior and exterior with premium colors and flawless execution that lasts for years.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop"
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: "Commercial Painting",
      description: "Professional painting services for offices, shops, and commercial buildings with minimal disruption to your business.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      icon: <PaintRoller className="w-10 h-10 text-primary" />,
      title: "Spider Work (High-Rise)",
      description: "Specialized rope access painting for high-rise buildings and difficult-to-reach exteriors ensuring safety and quality.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f0f?w=800&h=600&fit=crop"
    },
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      title: "Waterproofing",
      description: "Advanced waterproofing solutions for roofs, walls, and foundations to protect your property from heavy monsoons.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Painting Solutions</h3>
          <p className="text-lg text-muted-foreground">
            From cozy homes to towering commercial structures, we deliver top-tier painting and protection services across Ammandivilai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8 relative bg-white">
                  <div className="absolute -top-10 right-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 mt-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
