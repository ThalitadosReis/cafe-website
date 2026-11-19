import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-grenadine-deep text-white hover:bg-grenadine-dark",
  outline:
    "border border-shadow/30 text-shadow hover:border-shadow hover:bg-shadow hover:text-cream",
  outlineLight:
    "border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-shadow",
};

const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-200";

export default function ButtonLink({
  to,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const isInternalRoute = to.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} className={classes} {...rest}>
      {children}
    </a>
  );
}
