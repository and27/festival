import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Mission from "./components/Mision";
import EditionsGallery from "./components/Editions";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <EditionsGallery />
      <Gallery />
    </>
  );
}
