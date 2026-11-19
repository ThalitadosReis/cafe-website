export default function ImageBanner({
  image,
  alt,
  kicker,
  title,
  size = "page",
  children,
}) {
  const isFull = size === "full";

  return (
    <section
      className={`relative isolate flex overflow-hidden bg-shadow ${
        isFull
          ? "min-h-[100svh] items-end"
          : "min-h-[52svh] items-end md:min-h-[60svh]"
      }`}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-shadow via-shadow/55 to-shadow/30"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-14 md:px-10 md:pb-20">
        <div className="max-w-3xl motion-safe:animate-rise">
          {kicker && (
            <p className="mb-4 font-display text-lg italic text-grenadine">
              {kicker}
            </p>
          )}
          <h1
            className={`leading-[0.98] font-light tracking-tight text-cream ${
              isFull
                ? "text-[clamp(3rem,8vw,6rem)]"
                : "text-[clamp(2.5rem,6vw,4.5rem)]"
            }`}
          >
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
