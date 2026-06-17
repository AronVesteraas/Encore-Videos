import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Revenue from "@/components/Revenue";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Channels />
        <Revenue />
        <HowItWorks />
        <About />
        <Contact />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}
