import logo from "../../assets/t-logo-white.png";

export default function Logo({ className = "h-4" }) {
  return (
    <img
      src={logo}
      alt="Brewtopia"
      width="426"
      height="52"
      className={`w-auto ${className}`}
    />
  );
}
