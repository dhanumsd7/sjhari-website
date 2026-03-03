import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

/* -----------------------------
   Types
----------------------------- */
type ContactForm = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
};

/* -----------------------------
   Component
----------------------------- */
export function Contact() {
  const { register, handleSubmit, reset, setValue } =
    useForm<ContactForm>();

  function onSubmit(data: ContactForm) {
    const message = `
📌 *New Inquiry – SJ Hari Painting*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email || "Not provided"}
🛠️ Service: ${data.service || "Not specified"}

📝 Message:
${data.message}
`;

    window.open(
      `https://wa.me/919626344778?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    reset();
  }

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Contact SJ Hari Painting
          </h3>
          <p className="text-muted-foreground text-lg">
            Fill the form or reach us directly. Your message goes straight to our
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* FORM */}
          <div className="lg:col-span-3 bg-card rounded-3xl border border-border shadow-2xl p-8 md:p-12">
            <h4 className="text-2xl font-black mb-8">Request a Quote</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("name", { required: true })}
                  placeholder="Full Name *"
                  className="h-12 bg-secondary"
                />

                <Input
                  {...register("phone", { required: true })}
                  placeholder="Phone Number *"
                  className="h-12 bg-secondary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("email")}
                  placeholder="Email (optional)"
                  className="h-12 bg-secondary"
                />

                <Select onValueChange={(v) => setValue("service", v)}>
                  <SelectTrigger className="h-12 bg-secondary">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Painting Works">Painting Works</SelectItem>
                    <SelectItem value="Spray Painting">Spray Painting</SelectItem>
                    <SelectItem value="Texture Painting">Texture Painting</SelectItem>
                    <SelectItem value="Spider Work">Spider Work</SelectItem>
                    <SelectItem value="Glass Cleaning">Glass Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                {...register("message", { required: true })}
                placeholder="Tell us about your project *"
                className="min-h-[140px] bg-secondary"
              />

              <Button
                type="submit"
                className="w-full h-14 text-lg bg-accent text-accent-foreground font-black rounded-xl shadow-lg hover:scale-105 transition"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-3xl border border-border shadow-xl p-8">
              <h4 className="text-xl font-black mb-6">Office Details</h4>

              <InfoRow icon={<Phone />} label="Phone" value="+91 96263 44778 / +91 96778 99278" />
              <InfoRow icon={<Mail />} label="Email" value="sjharipainting@gmail.com" />
              <InfoRow icon={<MapPin />} label="Address" value="Ammandivilai, Tamil Nadu, India" />
              <InfoRow icon={<Clock />} label="Working Hours" value="Mon – Sat: 8:00 AM – 6:00 PM" />
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl">
              <iframe
                title="SJ Hari Painting Location"
                src="https://www.google.com/maps?q=Ammandivilai,Tamil%20Nadu&output=embed"
                className="w-full h-[280px]"
                loading="lazy"
              />
              <a
                href="https://www.google.com/maps?q=Ammandivilai,Tamil%20Nadu"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Open in Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Reusable Info Row
----------------------------- */
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}