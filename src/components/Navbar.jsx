import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import Logo from "../assets/t-logo-white.png";

const NAV_ITEMS = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/menu" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const linkClass = (to) =>
    `text-[10px] font-body tracking-[0.25em] uppercase transition-colors duration-200 hover:text-grenadine ${
      isActive(to) ? "text-grenadine" : "text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-shadow/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="relative z-50 mx-auto px-8 md:px-12">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="relative z-50 flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={Logo} alt="Brewtopia" className="h-4" />
            </Link>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* mobile toggle */}
            <button
              onClick={() => setIsMenuOpen((o) => !o)}
              className="relative z-50 cursor-pointer text-white transition-colors hover:text-white/75 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <HiX className="h-5 w-5" />
              ) : (
                <HiOutlineMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-400 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-shadow/80 backdrop-blur-xs"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* centered links */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${80 + index * 60}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(14px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
              className={`transition-all duration-300 font-display text-2xl leading-none ${
                isActive(item.to)
                  ? "text-grenadine"
                  : "text-white hover:text-grenadine"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
