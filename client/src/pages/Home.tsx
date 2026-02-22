import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0">
      <Helmet>
        <title>Premium Painting Services in Ammandivilai | Professional Painters</title>
        <meta 
          name="description" 
          content="Top-rated building painting contractors in Ammandivilai. We specialize in residential, commercial, and spider work painting in Tamil Nadu. Call now for a free quote!" 
        />
        <meta name="keywords" content="Painting services in Ammandivilai, Building painting contractors near me, Spider work painting in Tamil Nadu, House painters Nagercoil, Waterproofing Kanyakumari" />
        <link rel="canonical" href="https://ammandivilaipainters.com" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <ServiceAreas />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
