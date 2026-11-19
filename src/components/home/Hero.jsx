import ButtonLink from "../ui/ButtonLink";
import ImageBanner from "../ui/ImageBanner";
import OpenStatusBadge from "../ui/OpenStatusBadge";

export default function Hero() {
  return (
    <ImageBanner
      size="full"
      image="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2000&auto=format&fit=crop"
      alt="Café interior with wooden tables and an open counter"
      kicker="Bahnhofstrasse 1, Zürich"
      title="Slow coffee for a fast city."
    >
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
        Locally roasted specialty coffee, all-day brunch and pastries baked
        every morning, a few steps from the lake. Take a seat on the terrace and
        stay a while.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink to="/menu">Explore menu</ButtonLink>
        <OpenStatusBadge />
      </div>
    </ImageBanner>
  );
}
