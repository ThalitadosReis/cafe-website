import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import Logo from "../assets/t-logo-white.png";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/", key: "home" },
    { name: "Menu", to: "/menu", key: "menu" },
    { name: "Gallery", to: "/gallery", key: "gallery" },
    { name: "Contact Us", to: "/contact", key: "contact" },
  ];

  const isActiveRoute = (itemTo) => {
    if (itemTo === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(itemTo);
  };

  const getNavLinkClasses = (itemTo) => {
    const baseClasses = "hover:text-grenadine transition-colors duration-200";
    const activeClasses = "text-grenadine";
    const inactiveClasses = "text-white";

    return `${baseClasses} ${
      isActiveRoute(itemTo) ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <>
      <nav className="w-full z-50 transition-all duration-300 uppercase font-openSans bg-shadow md:bg-transparent">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            {/* logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={Logo} alt="Brewtopia Logo" className="h-5" />
              </Link>
            </div>

            {/* menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.to}
                    className={getNavLinkClasses(item.to)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* mobile-menu buttons */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white/90"
              >
                {isMenuOpen ? (
                  <HiX className="h-5 w-5" />
                ) : (
                  <HiOutlineMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile-menu slide-down */}
      <div
        className={`w-full bg-shadow z-40 transform transition-transform duration-300 ease-in-out md:hidden uppercase font-openSans ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-8 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.key}
              to={item.to}
              className={`flex items-center justify-between py-1 text-sm ${getNavLinkClasses(
                item.to
              )} ${
                index !== navItems.length - 1 ? "border-b border-white/20" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.name}</span>
              {!isActiveRoute(item.to) && (
                <MdKeyboardArrowRight className="text-xl" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
