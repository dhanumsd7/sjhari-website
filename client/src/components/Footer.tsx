import { Paintbrush } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Paintbrush size={18} />
              </div>
              <h2 className="font-bold text-xl text-white">Ammandivilai Painters</h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Delivering premium residential, commercial, and spider-work painting services across Kanyakumari District with unmatched quality and professionalism.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Get a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Residential Painting</li>
              <li>Commercial Painting</li>
              <li>Spider Work (High-Rise)</li>
              <li>Waterproofing</li>
              <li>Exterior Textures</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ammandivilai Painting Contractors. All rights reserved.</p>
          <p>Designed for Quality & Durability</p>
        </div>
      </div>
    </footer>
  );
}
