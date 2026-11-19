import { PiMapTrifold } from "react-icons/pi";
import { CAFE } from "../../data/cafe";
import ButtonLink from "./ButtonLink";

const DEFAULT_LINKS = [{ to: "/menu", label: "See the menu" }];

export default function PhotoBand({ image, title, links = DEFAULT_LINKS }) {
  return (
    <section className="relative isolate overflow-hidden bg-shadow py-24 text-cream md:py-32">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        loading="lazy"
      />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl leading-[1.05] font-light tracking-tight md:text-6xl">
          {title}
        </h2>
        <p className="mt-5 text-lg text-cream/80">
          {CAFE.address.street}, {CAFE.address.city}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink to={CAFE.mapsUrl} target="_blank" rel="noreferrer">
            <PiMapTrifold className="size-5" aria-hidden="true" />
            Get directions
          </ButtonLink>
          {links.map(({ to, label, icon: Icon }) => (
            <ButtonLink key={to} to={to} variant="outlineLight">
              {Icon && <Icon className="size-5" aria-hidden="true" />}
              {label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
