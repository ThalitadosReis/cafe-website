import { PiArmchair, PiCookingPot, PiRecycle } from "react-icons/pi";
import InfoCard from "../ui/InfoCard";
import SectionHeading from "../ui/SectionHeading";

const VALUES = [
  {
    icon: PiCookingPot,
    title: "Made in-house",
    text: "Granola, chai spice and cheesecake are made in our own kitchen, not bought in.",
  },
  {
    icon: PiRecycle,
    title: "Less waste",
    text: "Returnable cups for coffee to go, and leftover pastries go to staff and neighbours at closing.",
  },
  {
    icon: PiArmchair,
    title: "Room to stay",
    text: "No time limits on tables. Order a second coffee, or don't; the seat is still yours.",
  },
];

export default function Values() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-4">
          <SectionHeading
            kicker="What we care about"
            title="Small choices, every day"
          />
        </div>

        <ul className="grid gap-5 sm:grid-cols-3 md:col-span-8">
          {VALUES.map(({ icon, title, text }) => (
            <InfoCard key={title} icon={icon} title={title}>
              {text}
            </InfoCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
