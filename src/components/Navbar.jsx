import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import Logo from "../assets/t-logo-white.png";

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
      <nav className="fixed w-full z-50 transition-all duration-300 uppercase font-openSans">
        <div className="container mx-auto px-4 lg:px-16">
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
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiOutlineMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile-menu slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-shadow z-40 transform transition-transform duration-300 ease-in-out md:hidden uppercase font-openSans ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`block px-3 py-2 text-base ${getNavLinkClasses(
                item.to
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
