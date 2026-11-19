export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function isActive(item, { pathname }) {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
}
