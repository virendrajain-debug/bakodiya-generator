import { site } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}${site.logo}`,
    telephone: site.phone,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    sameAs: [site.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/`,
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}${site.logo}`,
    telephone: site.phone,
    description:
      "Bakodiya Generator House supplies generator options from 10 kVA to 500 kVA in Shahpur, Betul, Madhya Pradesh, including canopy and open configurations from Kirloskar, Mahindra, Eicher, Ashok Leyland and Escorts.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    sameAs: [site.instagram],
    areaServed: [
      { "@type": "City", name: "Shahpur" },
      { "@type": "City", name: "Betul" },
      { "@type": "State", name: "Madhya Pradesh" },
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Diesel generators 10 kVA to 500 kVA",
        category: "Diesel generator sets",
        description:
          "Canopy and open diesel generator options in a 10 kVA to 500 kVA capacity range.",
      },
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
