import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* hero residential painting beautiful home exterior */}
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop"
          alt="Premium House Painting"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <ShieldCheck className="text-accent w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide">Top Rated Painters in Ammandivilai & Kanyakumari</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
            Transform Your Space with <span className="text-accent">Flawless Finishes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Expert residential, commercial, and specialized spider-work painting services. We bring color to life with premium materials and unmatched precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-14 px-8 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all"
            >
              Get a Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'tel:+919876543210'}
              className="rounded-full text-lg h-14 px-8 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-white/5 backdrop-blur-sm transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +91 98765 43210
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
              <p className="text-slate-400 text-sm font-medium">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">500+</h4>
              <p className="text-slate-400 text-sm font-medium">Projects Completed</p>
            </div>
            <div className="hidden md:block">
              <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
              <p className="text-slate-400 text-sm font-medium">Satisfaction Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
