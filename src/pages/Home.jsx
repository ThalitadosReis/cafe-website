import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";
import Slider from "../components/Slider";
import HeadingBlock from "../components/ui/HeadingBlock";
import Reveal from "../components/ui/Reveal";

const OFFERS = [
  {
    title: "Coffee To Go",
    description:
      "Freshly brewed and ready when you are, with convenient takeout options available all day.",
  },
  {
    title: "French Press",
    description:
      "Full-bodied and rich — steeped slowly for a coffee experience worth savoring.",
  },
  {
    title: "Turkish Coffee",
    description:
      "Finely ground, simmered with cardamom, and served in the traditional style.",
  },
  {
    title: "Drip Coffee",
    description:
      "Smooth and consistent, brewed fresh from high-quality single-origin beans.",
  },
  {
    title: "Tea & Specialty Drinks",
    description:
      "A curated selection of herbal, black, and green teas alongside seasonal specialties.",
  },
];

const INSTAGRAM_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1677825950108-57a3ed44195e?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Latte art in a ceramic cup",
  },
  {
    src: "https://images.unsplash.com/photo-1618495486072-409db92fc406?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Coffee being poured into a glass",
  },
  {
    src: "https://images.unsplash.com/photo-1520714760316-984348992242?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cozy cafe interior with warm lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1749280447562-d7e04018c42a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Freshly baked pastries on display",
  },
  {
    src: "https://images.unsplash.com/photo-1665214081622-0e37b0b7c96b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Barista preparing espresso",
  },
  {
    src: "https://images.unsplash.com/photo-1622532631316-5f8afb40812f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Overhead view of coffee and notebook",
  },
  {
    src: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cold brew coffee in a tall glass",
  },
  {
    src: "https://images.unsplash.com/photo-1482350325005-eda5e677279b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Brewtopia cafe outdoor terrace",
  },
];

export default function Home() {
  return (
    <>
      <Slider />

      {/* about */}
      <section className="">
        <div className=" grid md:grid-cols-2">
          <Reveal>
            <div className="flex flex-col justify-center h-full py-16 md:py-24 px-10 md:px-14">
              <HeadingBlock
                eyebrow="About Us"
                title="Coffee and Brunch in the Heart of the City"
                align="left"
                titleAs="h2"
              />
              <div className="text-sm leading-relaxed text-shadow/60 space-y-4 font-body">
                <p>
                  We are a locally owned and operated coffee and brunch spot,
                  located in the heart of the city's historic district. Open
                  since 2023, we serve locally roasted specialty coffee, healthy
                  brunch options, artisan pastries, and fresh sandwiches.
                </p>
                <p>
                  Join us for a coffee, some delicious food, or a specialty
                  drink on our cozy terrace in the sun!
                </p>
                <p>
                  Follow us{" "}
                  <span className="text-grenadine font-medium">@brewtopia</span>{" "}
                  and keep up to date with all the latest news and events.
                </p>
                <p>
                  We are very pet friendly — don't hesitate to bring your furry
                  friend along.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="relative h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Baristas preparing coffee"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* what we serve */}
      <section className="bg-shadow">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-72 md:min-h-[540px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artisan coffee being prepared"
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-shadow/30 to-shadow/0" />
          </div>

          <div className="px-10 md:px-14 py-14 md:py-20 flex flex-col justify-center">
            <Reveal>
              <HeadingBlock
                eyebrow="What We Serve"
                title="Our Offerings"
                align="left"
                titleAs="h2"
                className="text-white"
              />
            </Reveal>

            <div>
              {OFFERS.map((offer, index) => (
                <Reveal key={offer.title} delay={index * 60}>
                  <div
                    className={`flex gap-5 py-5 ${
                      index === OFFERS.length - 1
                        ? ""
                        : "border-b border-white/10"
                    }`}
                  >
                    <span className="text-xs font-mono text-grenadine/60 pt-1 tabular-nums shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-base font-display text-white">
                        {offer.title}
                      </h3>
                      <p className="text-sm font-body text-white/45">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={OFFERS.length * 60}>
              <div className="mt-8">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2 border border-grenadine text-grenadine text-[10px] font-body tracking-[0.18em] uppercase px-7 py-3 hover:bg-grenadine hover:text-white transition-all duration-200"
                >
                  View Full Menu
                  <RiArrowRightLine className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* instagram */}
      <section className="py-16 md:py-24">
        <Reveal>
          <div className="mb-10 px-8">
            <HeadingBlock
              eyebrow="Follow Along"
              title="@brewtopia"
              titleAs="h2"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-4 md:grid-cols-8">
          {INSTAGRAM_IMAGES.map(({ src, alt }) => (
            <div
              key={alt}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-shadow/45 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiInstagram
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
