export default function HeadingBlock({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleAs = "h2",
  titleSize = "lg",
  eyebrowClassName = "",
  titleClassName = "",
  dividerClassName = "",
  descriptionClassName = "",
}) {
  const centered = align === "center";
  const Tag = titleAs;
  const sizeMap = {
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    "2xl": "text-5xl md:text-7xl",
  };
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`.trim()}>
      {eyebrow && (
        <p
          className={`mb-4 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-grenadine ${eyebrowClassName}`.trim()}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mb-4 whitespace-pre-line font-display font-light leading-[1.08] ${sizeMap[titleSize] ?? sizeMap.lg} ${titleClassName}`.trim()}
      >
        {title}
      </Tag>
      <div
        className={`mb-6 h-px w-12 bg-grenadine ${centered ? "mx-auto" : ""} ${dividerClassName}`.trim()}
      />
      {description && (
        <p
          className={`font-body text-sm leading-relaxed ${descriptionClassName}`.trim()}
        >
          {description}
        </p>
      )}
    </div>
  );
}
