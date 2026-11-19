import { CAFE } from "../../data/cafe";

export default function Story() {
  return (
    <section className="py-20 md:py-28">
      <h2 className="sr-only">Our story</h2>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <figure className="mx-auto w-full max-w-md md:col-span-5 md:max-w-none">
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200&auto=format&fit=crop"
            alt="Café tables set out on a cobbled old-town street"
            className="aspect-[4/5] w-full rounded-arch object-cover"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm text-muted">
            Tables outside on a sunny morning in the old town.
          </figcaption>
        </figure>

        <div className="md:col-span-6 md:col-start-7">
          <blockquote>
            <p className="font-display text-3xl leading-snug font-light text-shadow md:text-4xl">
              “We wanted a place where the coffee is taken seriously, and nobody
              is in a hurry.”
            </p>
            <footer className="mt-5 text-muted">The Brewtopia team</footer>
          </blockquote>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Brewtopia opened in {CAFE.foundedYear} in Zürich's historic
              centre, a few steps off Bahnhofstrasse. The idea was simple: a
              locally owned café that does specialty coffee properly, serves
              food we'd want to eat ourselves, and gives people a reason to sit
              down instead of grabbing and going.
            </p>
            <p>
              Since then, it has become a morning stop for commuters, a brunch
              spot for friends, and an afternoon office for anyone with a laptop
              and a slice of cake. The terrace fills up the moment the sun comes
              out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
