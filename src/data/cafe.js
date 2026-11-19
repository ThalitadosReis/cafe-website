const ADDRESS_QUERY = encodeURIComponent("Bahnhofstrasse 1, 8001 Zürich");

export const CAFE = {
  name: "Brewtopia",
  foundedYear: 2023,
  handle: "@brewtopia",
  timeZone: "Europe/Zurich",
  email: "brewtopia@example.com",
  phone: { display: "+41 12 345 6789", href: "tel:+41123456789" },
  address: {
    street: "Bahnhofstrasse 1",
    city: "8001 Zürich",
    country: "Switzerland",
  },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
  ],
};

export const HOURS = [
  {
    label: "Monday – Friday",
    days: [1, 2, 3, 4, 5],
    open: "07:00",
    close: "18:00",
  },
  { label: "Saturday", days: [6], open: "08:00", close: "18:00" },
  { label: "Sunday", days: [0], open: "09:00", close: "17:00" },
];
