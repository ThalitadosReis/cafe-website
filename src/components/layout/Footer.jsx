import {
  PiArrowUpRight,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiInstagramLogo,
  PiMapPin,
  PiPhone,
  PiTiktokLogo,
} from "react-icons/pi";
import { CAFE, HOURS } from "../../data/cafe";
import { useOpeningStatus } from "../../lib/useOpeningStatus";
import Logo from "../ui/Logo";

const SOCIAL_ICONS = {
  Instagram: PiInstagramLogo,
  Facebook: PiFacebookLogo,
  TikTok: PiTiktokLogo,
};

function ColumnTitle({ children }) {
  return (
    <h2 className="mb-5 font-display text-xl font-normal text-cream">
      {children}
    </h2>
  );
}

function HoursList() {
  const { today } = useOpeningStatus();

  return (
    <dl className="space-y-3">
      {HOURS.map(({ label, days, open, close }) => {
        const isToday = days.includes(today);
        return (
          <div key={label} className="flex items-baseline gap-3">
            <dt className={isToday ? "text-cream" : "text-cream/70"}>
              {label}
              {isToday && (
                <span className="ml-2 text-sm text-grenadine">today</span>
              )}
            </dt>
            <span
              className="flex-1 border-b border-dotted border-cream/25"
              aria-hidden="true"
            />
            <dd
              className={`tabular-nums ${isToday ? "text-cream" : "text-cream/70"}`}
            >
              {open} – {close}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

const CONTACT_LINK =
  "group flex items-start gap-3 text-cream/85 underline-offset-4 transition-colors hover:text-grenadine hover:underline";

export default function Footer() {
  return (
    <footer id="visit" className="bg-shadow text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16 md:px-10 md:py-20">
        {/* brand */}
        <div>
          <Logo className="h-5" />
          <p className="mt-4 max-w-xs leading-relaxed text-cream/70">
            Specialty coffee, slow brunch and a sunny terrace on Bahnhofstrasse.
            Pouring in Zürich since {CAFE.foundedYear}.
          </p>
          <ul className="mt-7 flex gap-2">
            {CAFE.socials.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Brewtopia on ${label}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-grenadine hover:text-grenadine"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* hours */}
        <div>
          <ColumnTitle>Opening hours</ColumnTitle>
          <HoursList />
        </div>

        {/* contact */}
        <div>
          <ColumnTitle>Find us</ColumnTitle>
          <address className="space-y-4 not-italic">
            <a
              href={CAFE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={CONTACT_LINK}
            >
              <PiMapPin
                className="mt-0.5 size-5 shrink-0 text-grenadine"
                aria-hidden="true"
              />
              <span>
                {CAFE.address.street}
                <br />
                {CAFE.address.city}, {CAFE.address.country}
                <span className="mt-1 flex items-center gap-1 text-sm text-grenadine">
                  Open in Google Maps <PiArrowUpRight aria-hidden="true" />
                </span>
              </span>
            </a>
            <a href={CAFE.phone.href} className={CONTACT_LINK}>
              <PiPhone
                className="mt-0.5 size-5 shrink-0 text-grenadine"
                aria-hidden="true"
              />
              {CAFE.phone.display}
            </a>
            <a href={`mailto:${CAFE.email}`} className={CONTACT_LINK}>
              <PiEnvelopeSimple
                className="mt-0.5 size-5 shrink-0 text-grenadine"
                aria-hidden="true"
              />
              {CAFE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="overflow-hidden rounded-card border border-cream/10">
          <iframe
            title="Map showing Brewtopia at Bahnhofstrasse 1, Zürich"
            src={CAFE.mapEmbedUrl}
            className="block h-72 w-full border-0 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)] md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-cream/60 md:flex-row md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Brewtopia Café. All rights reserved.</p>
        <a
          href="https://thalitadosreis.ch/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-cream"
        >
          Made by Thalita dos Reis <PiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
