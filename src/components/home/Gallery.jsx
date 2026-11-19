import { PiInstagramLogo } from "react-icons/pi";
import { CAFE } from "../../data/cafe";
import { GALLERY } from "../../data/gallery";
import ButtonLink from "../ui/ButtonLink";

// Handle and follow button over a photo grid. Square tiles on phones,
// a bento layout from tablet up.
export default function Gallery() {
  const instagram = CAFE.socials.find((s) => s.label === "Instagram").href;

  return (
    <section className="bg-sand py-20 md:py-28" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-6 border-b border-shadow/10 pb-10 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg italic text-grenadine-deep">Follow along</p>
            <h2 id="gallery-title" className="text-4xl leading-tight font-normal tracking-tight text-shadow md:text-5xl">
              {CAFE.handle}
            </h2>
            <p className="mt-2 text-lg text-muted">Moments from the counter, the terrace and the oven.</p>
          </div>
          <ButtonLink to={instagram} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <PiInstagramLogo className="size-5" aria-hidden="true" />
            Follow on Instagram
          </ButtonLink>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:auto-rows-[13rem] md:grid-flow-dense md:grid-cols-4 md:gap-4 lg:auto-rows-[15rem]">
          {GALLERY.map(({ src, alt, span }) => (
            <li
              key={src}
              className={`group relative aspect-square overflow-hidden rounded-card bg-shadow/10 md:aspect-auto ${span}`}
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-shadow/60 via-shadow/0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="text-sm font-medium text-cream">{alt}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
