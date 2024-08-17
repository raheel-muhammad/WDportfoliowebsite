import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0F0D15] h-full text-[#fff] ">
      <section id="home" className="scroll-pt-5">
        <Hero />
      </section>
      <section id="services" className="scroll-pt-5">
        <Services />
      </section>
      <section id="portfolio" className="scroll-pt-5">
        <Work />
      </section>
      <section id="testimonials" className="scroll-pt-5">
        {/* <Testimonials /> */}
      </section>
      <section id="contact" className="scroll-pt-5">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
