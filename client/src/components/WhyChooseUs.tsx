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
    <section id="why-us" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Why SJ Hari?
          </motion.h3>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-slate-100 shadow-sm bg-white rounded-3xl hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-primary">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
