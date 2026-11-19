const STEPS = [
  {
    title: "Sourced with care",
    text: "We buy green coffee through a small Swiss roaster that knows the farms it works with.",
  },
  {
    title: "Roasted nearby",
    text: "Beans are roasted in small batches close to the city, so they reach us within days.",
  },
  {
    title: "Brewed by hand",
    text: "Espresso, French press, Turkish coffee or filter. Each one is dialled in every morning.",
  },
  {
    title: "Served your way",
    text: "Oat, almond and lactose-free milk at no extra charge, in a cup or a returnable to-go mug.",
  },
];

export default function BeanToCup() {
  return (
    <section className="bg-shadow py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="relative md:col-span-5">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
            alt="Pour-over coffee brewing on a bar counter"
            className="aspect-[4/5] w-full rounded-card object-cover"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop"
            alt="Freshly roasted coffee beans"
            className="absolute -right-4 -bottom-6 hidden aspect-square w-2/5 rounded-card border-8 border-shadow object-cover sm:block"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="mb-3 font-display text-lg italic text-grenadine">
            How we make it
          </p>
          <h2 className="text-4xl leading-[1.05] font-normal tracking-tight md:text-5xl">
            From bean to cup
          </h2>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                <span
                  className="font-display text-3xl leading-none text-grenadine"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-normal">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-cream/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
