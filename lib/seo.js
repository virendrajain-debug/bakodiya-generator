import { site } from "./site";

export function pageMeta({ title, description, path = "/", type = "website" }) {
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      images: [
        {
          url: `${site.url}${site.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${site.name} diesel generator range in Shahpur, Betul`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}${site.ogImage}`],
    },
  };
}
