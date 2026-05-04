import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Info from "@/components/sections/Info";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Info />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
