import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiX } from "react-icons/pi";
import { CAFE } from "../../data/cafe";
import { useOpeningStatus } from "../../lib/useOpeningStatus";
import Logo from "../ui/Logo";
import ButtonLink from "../ui/ButtonLink";
import { NAV_ITEMS, isActive } from "./navigation";

export default function MobileDrawer({ isOpen, onClose, returnFocusRef }) {
  const location = useLocation();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const { label: statusLabel } = useOpeningStatus();

  useEffect(() => {
    if (!isOpen) return;

    const returnTo = returnFocusRef.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const focusable = panelRef.current.querySelectorAll("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      returnTo?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden ${isOpen ? "" : "pointer-events-none"}`}
      inert={!isOpen}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-shadow/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute inset-y-0 right-0 flex w-[min(22rem,86vw)] flex-col bg-shadow text-cream shadow-[-24px_0_48px_-24px_rgb(0_0_0/0.6)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-18 items-center justify-between border-b border-cream/10 px-6">
          <Logo className="h-4" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full hover:bg-cream/10"
            aria-label="Close menu"
          >
            <PiX className="size-6" />
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item, location);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`block py-2.5 font-display text-xl transition-colors hover:text-grenadine ${
                      active ? "text-grenadine" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-cream/10 px-6 py-6 text-cream/70">
          <p className="text-sm">{statusLabel}</p>
          <p className="text-sm leading-relaxed">
            {CAFE.address.street}, {CAFE.address.city}
          </p>
          <ButtonLink to="#visit" className="w-full" onClick={onClose}>
            Visit us
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
