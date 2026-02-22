import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3 md:hidden z-50">
      <Button 
        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-[#25D366]/20"
        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        WhatsApp
      </Button>
      <Button 
        className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20"
        onClick={() => window.location.href = 'tel:+919876543210'}
      >
        <Phone className="mr-2 w-5 h-5" />
        Call Now
      </Button>
    </div>
  );
}
