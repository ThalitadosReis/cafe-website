import MenuTabs from "../menu/MenuTabs";
import ButtonLink from "../ui/ButtonLink";

export default function WhatWeServe() {
  return (
    <section className="bg-shadow py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-display text-lg italic text-grenadine">
              What we serve
            </p>
            <h2 className="text-4xl leading-[1.05] font-normal tracking-tight md:text-5xl">
              From first espresso to last slice of cake
            </h2>
          </div>
          <ButtonLink
            to="/menu"
            variant="outlineLight"
            className="self-start md:self-auto"
          >
            See the full menu
          </ButtonLink>
        </div>
        <MenuTabs featuredOnly tone="dark" />
      </div>
    </section>
  );
}
