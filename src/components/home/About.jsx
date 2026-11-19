import { PiCoffeeBean, PiPawPrint, PiSunHorizon } from "react-icons/pi";
import { CAFE } from "../../data/cafe";
import ButtonLink from "../ui/ButtonLink";
import InfoCard from "../ui/InfoCard";
import SectionHeading from "../ui/SectionHeading";

const FEATURES = [
  {
    icon: PiSunHorizon,
    title: "Sunny terrace",
    text: "Outdoor seats that catch the afternoon sun.",
  },
  {
    icon: PiCoffeeBean,
    title: "Locally roasted",
    text: "Beans roasted in small batches nearby.",
  },
  {
    icon: PiPawPrint,
    title: "Pet friendly",
    text: "Water bowls ready. Bring your dog along.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="relative md:col-span-5">
          <img
            src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=1000&auto=format&fit=crop"
            alt="Baristas preparing coffee behind the counter"
            className="aspect-[4/5] w-full rounded-card object-cover"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600&auto=format&fit=crop"
            alt="French press and cups on a table by a large window"
            className="absolute -right-4 -bottom-6 hidden aspect-square w-2/5 rounded-card border-8 border-cream object-cover sm:block"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <SectionHeading
            kicker="About us"
            title="A neighbourhood café in the middle of the city"
          >
            <p>
              We're a locally owned coffee and brunch spot in Zürich's historic
              centre, open since {CAFE.foundedYear}. We serve locally roasted
              specialty coffee, healthy brunch, artisan pastries and fresh
              sandwiches.
            </p>
            <p className="mt-4">
              Join us for a coffee or a slow breakfast on the terrace, and
              follow{" "}
              <a
                href={CAFE.socials[0].href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grenadine-deep underline-offset-4 hover:underline"
              >
                {CAFE.handle}
              </a>{" "}
              for news and events.
            </p>
          </SectionHeading>

          <ButtonLink to="/about" variant="outline" className="mt-8">
            Read our story
          </ButtonLink>
        </div>
      </div>

      <ul className="mx-auto mt-16 grid max-w-7xl gap-5 px-5 sm:grid-cols-3 md:mt-20 md:px-10">
        {FEATURES.map(({ icon, title, text }) => (
          <InfoCard key={title} icon={icon} title={title}>
            {text}
          </InfoCard>
        ))}
      </ul>
    </section>
  );
}
