import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhatWeServe from "../components/home/WhatWeServe";
import Gallery from "../components/home/Gallery";
import PhotoBand from "../components/ui/PhotoBand";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeServe />
      <Gallery />
      <PhotoBand
        image="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2000&auto=format&fit=crop"
        title="Your table is waiting"
        links={[{ to: "/about", label: "Our story" }]}
      />
    </>
  );
}
