import { useState, useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const slides = [
  {
    id: 1,
    title: "Friendly Atmosphere",
    text: "Experience the perfect blend of premium coffee and cozy atmosphere",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Artisan Coffee",
    text: "Brewed to perfection with handpicked beans from around the world",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cozy Corners",
    text: "Find your favorite nook and enjoy the ambiance",
    image: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Community Vibes",
    text: "A place to connect, create, and caffeinate together",
    image: "https://images.unsplash.com/photo-1533117259300-57a7476bc78d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    if (index !== current) setCurrent(index);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map(({ id, image }, index) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-oswald uppercase mb-4">
            {slides[current].title}
          </h1>
          <div className="w-24 h-0.5 bg-grenadine mx-auto mb-4" />
          <p className="font-merriweather max-w-xl mx-auto text-lg">
            {slides[current].text}
          </p>
        </div>
      </div>

      {/* nav-arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:-translate-x-1 transition-transform duration-300 cursor-pointer hidden md:block"
        aria-label="Previous slide"
      >
        <IoIosArrowRoundBack className="text-4xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:translate-x-1 transition-transform duration-300 cursor-pointer hidden md:block"
        aria-label="Next slide"
      >
        <IoIosArrowRoundForward className="text-4xl" />
      </button>

      {/* indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative transition-all duration-300 hover:scale-110 cursor-pointer ${
              current === index
                ? "w-8 h-3 bg-grenadine rounded-full"
                : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
          >
            {current === index && (
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
