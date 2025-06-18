import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="bg-white">
      {/* hero section */}
      <Slider />

      {/* about section */}
      <section className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <p className="text-grenadine font-openSans tracking-wider uppercase text-sm mb-2">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-4">
                Coffee and Brunch in the Heart of the City
              </h2>
              <div className="w-20 h-0.5 bg-grenadine mb-8 mx-auto md:mx-0"></div>
            </div>

            <div className="text-sm space-y-4">
              <p>
                We are a locally owned and operated coffee and brunch spot,
                located in the heart of the city's historic district! Open since
                2023, we serve locally roasted specialty coffee, healthy brunch
                options, artisan pastries, and fresh sandwiches.
              </p>
              <p>
                Join us for a coffee, some delicious food, or a specialty drink
                on our cozy terrace in the sun!
              </p>
              <p>
                Follow us{" "}
                <span className="text-grenadine font-semibold">@brewtopia</span>{" "}
                and keep up to date with all the latest news and events.
              </p>
              <p>
                We are very pet friendly! Don’t hesitate to bring your furry
                friend with you!
              </p>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baristas preparing coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* offer section */}
      <section className="bg-shadow/5 p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-oswald uppercase text-center mb-4">
          What We Offer
        </h2>
        <div className="w-20 h-0.5 bg-grenadine mb-8 mx-auto"></div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Coffee To Go",
              img: "https://img.icons8.com/pastel-glyph/100/1A1A1A/drink-to-go--v2.png",
              description:
                "Enjoy our freshly brewed coffee on the go, with convenient takeout options available.",
            },
            {
              title: "French Press",
              img: "https://img.icons8.com/ios/100/1A1A1A/french-press.png",
              description:
                "Our French Press coffee is brewed to perfection, offering a rich and full-bodied flavor.",
            },
            {
              title: "Turkish Coffee",
              img: "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/1A1A1A/external-turkish-coffee-coffee-shop-2-kmg-design-detailed-outline-kmg-design.png",
              description:
                "Experience the rich and aromatic flavors of our traditional Turkish coffee, brewed with care.",
            },
            {
              title: "Drip Coffee",
              img: "https://img.icons8.com/external-itim2101-lineal-itim2101/100/1A1A1A/external-coffee-maker-coffee-itim2101-lineal-itim2101-1.png",
              description:
                "Made with high-quality beans, our drip coffee offers a smooth and satisfying cup every time.",
            },
            {
              title: "Tea",
              img: "https://img.icons8.com/wired/100/1A1A1A/tea.png",
              description:
                "We serve a variety of premium teas—from classic black and green to relaxing herbal blends.",
            },
          ].map(({ title, img, description }) => (
            <div key={title} className="space-y-4">
              <div className="flex flex-col items-center gap-3">
                <img src={img} alt={title} className="w-14 h-14" />
                <h3 className="text-lg font-merriweather text-grenadine">
                  {title}
                </h3>
              </div>
              <p className="text-xs">{description}</p>
            </div>
          ))}
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://img.icons8.com/external-wanicon-lineal-wanicon/100/1A1A1A/external-menu-coffee-shop-wanicon-lineal-wanicon.png"
                alt="Full Menu"
                className="w-14 h-14"
              />
              <h3 className="text-lg font-merriweather text-grenadine">
                Full Menu
              </h3>
            </div>
            <p className="text-xs mb-4">
              Explore our complete menu with detailed descriptions, prices, and
              seasonal specialties.
            </p>
            <Link
              to="/menu"
              className="group inline-flex items-center gap-1 text-xs uppercase font-oswald text-grenadine px-4 py-2 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative px-1 cursor-pointer">
                <span className="relative z-10">View Full Menu</span>
                <div className="absolute top-0 left-0 h-full w-[15%] bg-grenadine/20 group-hover:w-[75%] transition-all duration-300"></div>
              </span>
              <div className="transition-transform duration-300 transform group-hover:translate-x-1 cursor-pointer">
                <RiArrowRightLine className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section className="py-8 md:py-12 px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:h-[500px]">
          <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden h-48 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Busy coffee shop interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:row-span-2 relative overflow-hidden h-48 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coffee preparation setup with latte art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden h-48 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1598959652545-c0230cdbb01f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coffee shop counter"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden h-48 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coffee shop seating area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
