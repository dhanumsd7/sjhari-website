import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Premium Painting Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              SJ Hari <span className="text-primary italic">Painting</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-xl leading-relaxed">
              Professional Painting & Building Maintenance Services based in Ammandivilai.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/919626344778', '_blank')}
                className="bg-accent hover:bg-accent/90 text-slate-900 rounded-full text-lg h-16 px-10 font-bold shadow-lg shadow-accent/20 transition-all hover:scale-105"
              >
                WhatsApp Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.location.href = 'tel:+919626344778'}
                className="rounded-full text-lg h-16 px-10 border-2 border-slate-200 text-slate-900 hover:bg-slate-50 font-bold transition-all"
              >
                Call Now
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500">
                <div className="flex text-yellow-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                Trusted by 500+ happy clients
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=1400&fit=crop"
                alt="Premium Painting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-50 max-w-xs">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-slate-900 font-bold uppercase tracking-wider text-sm">Years Experience</div>
              <p className="text-slate-500 text-sm mt-2">Delivering excellence in every brush stroke since 2014.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
