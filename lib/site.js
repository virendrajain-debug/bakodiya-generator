export const site = {
  name: "Bakodiya Generator House",
  url: "https://bakodiya-generator.vercel.app",
  description:
    "Generator solutions from 10 kVA to 500 kVA in Shahpur, Betul, Madhya Pradesh.",
  capacity: "10 kVA to 500 kVA",
  locationLabel: "Shahpur, Betul, Madhya Pradesh",
  address: {
    streetAddress: "Shahpur",
    addressLocality: "Shahpur",
    addressRegion: "Madhya Pradesh",
    postalCode: "",
    addressCountry: "IN",
  },
  addressLine: "Shahpur, Betul, Madhya Pradesh, India",
  district: "Betul",
  geo: { latitude: 22.2003142, longitude: 77.9038003 },
  instagram: "https://www.instagram.com/bakodiya_generator_house/",
  maps: "https://maps.app.goo.gl/5AwCZr5yzHzyepgPA?g_st=aw",
  mapsEmbed:
    "https://maps.google.com/maps?q=22.2003142%2C77.9038003&z=15&hl=en&output=embed",
  phone: "+918982894406",
  phoneLabel: "8982894406",
  phone2: "+917000408709",
  phone2Label: "7000408709",
  whatsapp: "https://wa.me/918982894406",
  logo: "/images/logo/logo.png",
  ogImage: "/images/generators/og-cover.jpg",
};

export const waLink = (text = "Hi, I want to know about generators.") =>
  `${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/generators", label: "Generators" },
  { href: "/brands", label: "Brands" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];
