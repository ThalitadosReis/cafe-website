import { useOpeningStatus } from "../../lib/useOpeningStatus";

export default function OpenStatusBadge({ className = "" }) {
  const { isOpen, label } = useOpeningStatus();

  return (
    <p
      className={`inline-flex min-h-11 items-center gap-2.5 rounded-full border border-cream/20 bg-shadow/60 px-4 text-sm font-medium text-cream backdrop-blur ${className}`}
    >
      <span className="relative flex size-2.5" aria-hidden="true">
        {isOpen && (
          <span className="absolute inline-flex size-full rounded-full bg-open opacity-60 motion-safe:animate-ping" />
        )}
        <span
          className={`relative inline-flex size-2.5 rounded-full ${isOpen ? "bg-open" : "bg-grenadine"}`}
        />
      </span>
      {label}
    </p>
  );
}
