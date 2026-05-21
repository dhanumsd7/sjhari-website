import { motion } from "framer-motion";
import { Shield, Clock, BadgeCheck, Users } from "lucide-react";

export function WhyChooseUs() {
  const items = [
    {
      title: "Experienced Team",
      desc: "Professional painters with years of local expertise.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Safety Focused",
      desc: "Strict adherence to safety protocols, especially in spider work.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Affordable Pricing",
      desc: "High-quality results that fit your budget perfectly.",
      icon: <BadgeCheck className="w-6 h-6" />
    },
    {
      title: "On-Time Completion",
      desc: "We respect your time and finish projects as promised.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight"
          >
            Why SJ Hari Painting?
          </motion.h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-card border border-border shadow-lg shadow-slate-200/40 hover:shadow-2xl transition-all"
            >
              <div className="p-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h4>

                <p className="text-muted-foreground font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}