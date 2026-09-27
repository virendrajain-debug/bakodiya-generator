import { site } from "@/lib/site";

const routes = ["/", "/generators", "/brands", "/work", "/contact"];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: route === "/" ? `${site.url}/` : `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
