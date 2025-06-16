import cafeImage from "../assets/cafe-home.jpg";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      {/* hero section */}
      <Slider />

      {/* about section */}
      <div className="relative z-0 bg-white/95 backdrop-blur-sm p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <p className="text-grenadine font-light tracking-widest uppercase text-sm mb-2">
                What Happens Here
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
                options and authentic artisan pastries and fresh sandwiches.
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
                We are very pet friendly! Don't hesitate to bring your furry
                friend with you!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={cafeImage}
              alt="Brewtopia Cafe Storefront"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
