import ImageBanner from "../components/ui/ImageBanner";
import Story from "../components/about/Story";
import BeanToCup from "../components/about/BeanToCup";
import DayTimeline from "../components/about/DayTimeline";
import Values from "../components/about/Values";
import PhotoBand from "../components/ui/PhotoBand";

export default function About() {
  return (
    <>
      <ImageBanner
        image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
        alt="Bright café interior with plants and wooden seating"
        kicker="About us"
        title="A café for the whole day"
      >
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          Who we are, how we make our coffee, and what a day looks like behind
          the counter.
        </p>
      </ImageBanner>
      <Story />
      <BeanToCup />
      <DayTimeline />
      <Values />
      <PhotoBand
        image="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2000&auto=format&fit=crop"
        title="Come and see for yourself"
      />
    </>
  );
}
