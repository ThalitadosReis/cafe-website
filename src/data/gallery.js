const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const GALLERY = [
  {
    src: unsplash("1677825950108-57a3ed44195e", 1200),
    alt: "Smoked salmon on crumpets with edible flowers",
    span: "col-span-2 row-span-2",
  },
  {
    src: unsplash("1618495486072-409db92fc406"),
    alt: "Cappuccino with latte art",
    span: "",
  },
  {
    src: unsplash("1520714760316-984348992242"),
    alt: "A small latte held at a wooden table",
    span: "md:row-span-2",
  },
  {
    src: unsplash("1749280447562-d7e04018c42a"),
    alt: "A curly-haired dog joining brunch",
    span: "",
  },
  {
    src: unsplash("1665214081622-0e37b0b7c96b"),
    alt: "Chocolate dessert and espresso from above",
    span: "md:row-span-2",
  },
  {
    src: unsplash("1622532631316-5f8afb40812f", 1200),
    alt: "Pancakes with banana and whipped cream",
    span: "md:col-span-2",
  },
  {
    src: unsplash("1510972527921-ce03766a1cf1"),
    alt: "Lattes and an iced coffee shared between friends",
    span: "md:row-span-2",
  },
  {
    src: unsplash("1482350325005-eda5e677279b", 1200),
    alt: "Pendant lights glowing inside the café",
    span: "col-span-2",
  },
];
