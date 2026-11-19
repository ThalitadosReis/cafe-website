import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiList } from "react-icons/pi";
import Logo from "../ui/Logo";
import ButtonLink from "../ui/ButtonLink";
import MobileDrawer from "./MobileDrawer";
import { NAV_ITEMS, isActive } from "./navigation";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-shadow/95 backdrop-blur-md"
            : "bg-gradient-to-b from-shadow/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
          <Link to="/" aria-label="Brewtopia home" className="py-3">
            <Logo className="h-4 md:h-[18px]" />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item, location);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 text-[0.95rem] transition-colors duration-200 hover:text-grenadine ${
                        active
                          ? "text-cream after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-grenadine"
                          : "text-cream/75"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink to="#visit" className="hidden sm:inline-flex">
              Visit us
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-cream hover:bg-cream/10 md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              <PiList className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isOpen}
        onClose={closeDrawer}
        returnFocusRef={toggleRef}
      />
    </>
  );
}
