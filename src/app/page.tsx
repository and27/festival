import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Mission from "./components/Mision";
import EditionsGallery from "./components/Editions";
import Scurve from "./components/Scurve";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Scurve />
      <EditionsGallery />
      <Gallery />
      <ContactSection />
    </>
  );
}
