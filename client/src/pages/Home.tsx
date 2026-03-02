import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>SJ Hari Painting – Premium Painting Services in Ammandivilai</title>
        <meta 
          name="description" 
          content="Professional painting, spray painting, spider work, and building maintenance services in Ammandivilai. Call or WhatsApp SJ Hari Painting today." 
        />
        <meta name="keywords" content="SJ Hari Painting, Painting services in Ammandivilai, Spray Painting, Spider Work Ammandivilai, Building Maintenance Tamil Nadu" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
