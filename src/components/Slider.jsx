import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Reveal from "./ui/Reveal";
import HeadingBlock from "./ui/HeadingBlock";

const SLIDES = [
  {
    id: 1,
    title: "Friendly Atmosphere",
    text: "Experience the perfect blend of premium coffee and cozy atmosphere",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Artisan Coffee",
    text: "Brewed to perfection with handpicked beans from around the world",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cozy Corners",
    text: "Find your favorite nook and enjoy the ambiance",
    image:
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Community Vibes",
    text: "A place to connect, create, and caffeinate together",
    image:
      "https://images.unsplash.com/photo-1533117259300-57a7476bc78d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i + 1) % SLIDES.length);

  return (
    <div className="group relative h-screen min-h-[600px] overflow-hidden">
      {SLIDES.map(({ id, image }, index) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-shadow/75 via-shadow/50 to-shadow/25 z-10" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Reveal
          key={current}
          className="text-white text-center px-6 max-w-3xl mx-auto"
        >
          <HeadingBlock
            eyebrow="Brewtopia"
            title={SLIDES[current].title}
            description={SLIDES[current].text}
            titleAs="h1"
            titleSize="2xl"
            eyebrowClassName="text-white/50"
            descriptionClassName="text-xs md:text-sm font-light text-white/75"
          />
        </Reveal>
      </div>

      {/* arrow controls */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-8 h-8" />
      </button>

      {/* progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-px transition-all duration-500 ease-out cursor-pointer ${
              current === index
                ? "w-12 bg-grenadine"
                : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
