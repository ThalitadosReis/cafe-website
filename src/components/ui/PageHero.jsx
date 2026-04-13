import Reveal from "./Reveal";
import HeadingBlock from "./HeadingBlock";

export default function PageHero({ src, alt, title, subtitle }) {
  return (
    <div className="relative h-[42vh] min-h-[280px] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-shadow/75 via-shadow/50 to-shadow/25" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6 pt-16">
        <Reveal>
          <HeadingBlock
            eyebrow="Brewtopia"
            title={title}
            description={subtitle}
            titleAs="h1"
            titleSize="xl"
            eyebrowClassName="text-white/50"
            descriptionClassName="text-xs md:text-sm font-light text-white/75"
          />
        </Reveal>
      </div>
    </div>
  );
}
