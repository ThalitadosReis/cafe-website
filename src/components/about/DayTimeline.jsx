import { HOURS } from "../../data/cafe";
import SectionHeading from "../ui/SectionHeading";

const [weekdays, saturday, sunday] = HOURS;

const MOMENTS = [
  {
    time: weekdays.open,
    title: "Doors open",
    text: `The first espressos go out to commuters on their way to work. On weekends we open at ${saturday.open} (Saturday) and ${sunday.open} (Sunday).`,
  },
  {
    time: "10:00",
    title: "Brunch hour",
    text: "Eggs Benedict, pancakes and avocado toast, served all day from here on.",
  },
  {
    time: "12:30",
    title: "Lunch rush",
    text: "Sandwiches and the soup of the day for the office crowd.",
  },
  {
    time: "15:00",
    title: "Terrace time",
    text: "Cold brew, cheesecake and the best of the afternoon sun.",
  },
  {
    time: weekdays.close,
    title: "Last cup",
    text: `We close at ${weekdays.close} on weekdays, ${saturday.close} on Saturdays and ${sunday.close} on Sundays.`,
  },
];

export default function DayTimeline() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          kicker="A day at Brewtopia"
          title="How the day unfolds"
          className="max-w-2xl"
        />

        <ol className="mt-14 grid gap-10 border-l border-shadow/15 pl-6 md:grid-cols-5 md:gap-6 md:border-t md:border-l-0 md:pt-8 md:pl-0">
          {MOMENTS.map((moment) => (
            <li key={moment.title} className="relative">
              <span
                className="absolute top-2 -left-[1.95rem] size-3 rounded-full bg-grenadine-deep md:-top-[2.4rem] md:left-0"
                aria-hidden="true"
              />
              <time className="font-display text-3xl text-grenadine-deep">
                {moment.time}
              </time>
              <h3 className="mt-2 text-lg font-medium text-shadow">
                {moment.title}
              </h3>
              <p className="mt-1 leading-relaxed text-muted">{moment.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
