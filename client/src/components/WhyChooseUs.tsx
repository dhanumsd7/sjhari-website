import { motion } from "framer-motion";
import { ShieldCheck, Clock, ThumbsUp, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Licensed & Insured",
      description: "Full liability coverage giving you complete peace of mind during the project."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "On-Time Completion",
      description: "We respect your schedule. We start on time and finish strictly by the deadline."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Premium Materials",
      description: "We exclusively use top-tier paints like Asian Paints, Berger, and Dulux."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-accent" />,
      title: "100% Satisfaction",
      description: "We don't pack up until you are completely thrilled with the final result."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The Most Trusted Painting Contractor in Tamil Nadu
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Painting isn't just about applying color—it's about protecting your investment and enhancing its value. Our team of seasoned professionals brings meticulous attention to detail to every single project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* painter working on wall */}
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1000&h=800&fit=crop" 
                alt="Professional Painter at work" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/10 rounded-2xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white text-foreground p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <div className="flex text-accent mb-2">
                {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-bold text-lg leading-tight">"The best painters in Ammandivilai!"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
