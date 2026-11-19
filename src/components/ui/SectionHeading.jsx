export default function SectionHeading({
  kicker,
  title,
  children,
  as = "h2",
  className = "",
}) {
  const Heading = as;

  return (
    <div className={className}>
      {kicker && (
        <p className="mb-3 font-display text-lg italic text-grenadine-deep">
          {kicker}
        </p>
      )}
      <Heading className="text-4xl leading-[1.05] font-normal tracking-tight text-shadow md:text-5xl">
        {title}
      </Heading>
      {children && (
        <div className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
          {children}
        </div>
      )}
    </div>
  );
}
