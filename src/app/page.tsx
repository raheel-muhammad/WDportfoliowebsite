import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import bgImage from '@/assets/bgimage.png'

export default function Home() {
  return (
    <div className="bg-[#0F0D15]  h-full text-[#fff] w-full">
      <div className='absolute top-0 left-0 w-full h-[70vh] lg:h-[170vh] md:h-[150vh] sm:h-[100vh]'>
        <Image
          src={bgImage}
          alt='Icon-Image'
          layout='fill'
          objectFit='contain'
          className='pointer-events-none w-[100vw]'
        />
      </div>
      <section id="/">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Work />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
