import { useId, useRef, useState } from "react";
import { MENU } from "../../data/menu";

const TONES = {
  light: {
    tabOn: "border-shadow bg-shadow text-cream",
    tabOff: "border-shadow/20 text-shadow/80 hover:border-shadow/50",
    name: "text-shadow",
    leader: "border-shadow/25",
    price: "text-grenadine",
    muted: "text-muted",
  },
  dark: {
    tabOn: "border-grenadine bg-grenadine text-shadow",
    tabOff: "border-cream/25 text-cream/80 hover:border-cream/60",
    name: "text-cream",
    leader: "border-cream/25",
    price: "text-grenadine",
    muted: "text-cream/65",
  },
};

function MenuItem({ name, price, description, tone }) {
  return (
    <li className="py-4">
      <div className="flex items-baseline gap-3">
        <h3 className={`font-display text-xl font-normal ${tone.name}`}>
          {name}
        </h3>
        <span
          className={`flex-1 border-b border-dotted ${tone.leader}`}
          aria-hidden="true"
        />
        <span className={`font-medium tabular-nums ${tone.price}`}>
          <span className={`mr-1 text-sm ${tone.muted}`}>CHF</span>
          {price}
        </span>
      </div>
      <p className={`mt-1 ${tone.muted}`}>{description}</p>
    </li>
  );
}

export default function MenuTabs({
  featuredOnly = false,
  tone: toneName = "light",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const baseId = useId();
  const tone = TONES[toneName];

  const focusTab = (index) => {
    const next = (index + MENU.length) % MENU.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: MENU.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      focusTab(keys[e.key]);
    }
  };

  const active = MENU[activeIndex];
  const items = featuredOnly
    ? active.items.filter((i) => i.featured)
    : active.items;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:px-0"
        onKeyDown={onKeyDown}
      >
        {MENU.map((category, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={category.id}
              ref={(el) => (tabRefs.current[index] = el)}
              id={`${baseId}-tab-${category.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-[0.95rem] font-medium transition-colors duration-200 ${
                selected ? tone.tabOn : tone.tabOff
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        id={`${baseId}-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
        className="mt-10 grid gap-10 motion-safe:animate-rise md:grid-cols-12 md:gap-12"
      >
        <div className="md:sticky md:top-24 md:col-span-5 md:self-start">
          <img
            src={active.image.src}
            alt={active.image.alt}
            className="aspect-[4/5] w-full rounded-card object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-7">
          <p className={`max-w-prose text-lg leading-relaxed ${tone.muted}`}>
            {active.intro}
          </p>
          <ul className="mt-4">
            {items.map((item) => (
              <MenuItem key={item.name} {...item} tone={tone} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
