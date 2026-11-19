import { PiCoffee, PiInfo, PiLeaf } from "react-icons/pi";
import MenuTabs from "../components/menu/MenuTabs";
import ImageBanner from "../components/ui/ImageBanner";
import InfoCard from "../components/ui/InfoCard";
import PhotoBand from "../components/ui/PhotoBand";
import SectionHeading from "../components/ui/SectionHeading";

const NOTES = [
  {
    icon: PiLeaf,
    title: "Plant milks included",
    text: "Oat, almond and lactose-free milk at no extra charge.",
  },
  {
    icon: PiInfo,
    title: "Allergies?",
    text: "Ask at the counter and we'll walk you through what's in each dish.",
  },
  {
    icon: PiCoffee,
    title: "Coffee to go",
    text: "Any filter or espresso drink, in a returnable cup.",
  },
];

// Same tabs as the home page, but listing every item in each category.
export default function Menu() {
  return (
    <>
      <ImageBanner
        image="https://images.unsplash.com/photo-1717484909079-d10de22ac3cd?q=80&w=2000&auto=format&fit=crop"
        alt="A cup of coffee held over a wooden board with the menu"
        kicker="Our menu"
        title="Coffee, brunch and something sweet"
      >
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          Fresh, locally sourced ingredients, made in-house where we can. Ask at
          the counter about allergens and today's specials.
        </p>
      </ImageBanner>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeading
            kicker="Choose a category"
            title="Everything we serve"
            className="mb-10"
          />
          <MenuTabs />
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
          <div className="md:col-span-4">
            <SectionHeading kicker="Good to know" title="Before you order" />
          </div>
          <ul className="grid gap-5 sm:grid-cols-3 md:col-span-8">
            {NOTES.map(({ icon, title, text }) => (
              <InfoCard key={title} icon={icon} title={title}>
                {text}
              </InfoCard>
            ))}
          </ul>
        </div>
      </section>

      <PhotoBand
        image="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop"
        title="Hungry yet?"
        links={[{ to: "/contact", label: "Book for a group" }]}
      />
    </>
  );
}
