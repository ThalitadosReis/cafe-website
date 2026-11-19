export default function InfoCard({ icon, title, children }) {
  const Icon = icon;

  return (
    <li className="h-full rounded-card border border-shadow/10 bg-white p-6">
      <Icon className="size-8 text-grenadine-deep" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-normal text-shadow">{title}</h3>
      <div className="mt-2 leading-relaxed text-muted">{children}</div>
    </li>
  );
}
