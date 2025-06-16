import { useState, useEffect } from "react";
import cafeImage from "../assets/cafe-home.jpg";

const slides = [
  {
    id: 1,
    title: "Friendly Atmosphere",
    text: "Experience the perfect blend of premium coffee and cozy atmosphere",
    image: cafeImage,
  },
  {
    id: 2,
    title: "Artisan Coffee",
    text: "Brewed to perfection with handpicked beans from around the world",
    image: cafeImage,
  },
  {
    id: 3,
    title: "Cozy Corners",
    text: "Find your favorite nook and enjoy the ambiance",
    image: cafeImage,
  },
  {
    id: 4,
    title: "Community Vibes",
    text: "A place to connect, create, and caffeinate together",
    image: cafeImage,
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

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map(({ id, title, text, image }, index) => (
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
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-oswald uppercase mb-4">
                {title}
              </h1>
              <div className="w-24 h-0.5 bg-grenadine mx-auto mb-4" />
              <p className="font-merriweather max-w-xl mx-auto text-lg">
                {text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
              current === index
                ? "bg-grenadine border-grenadine"
                : "bg-white border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
