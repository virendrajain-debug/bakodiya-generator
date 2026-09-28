import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site, waLink } from "@/lib/site";
import { brands, generatorImages } from "@/lib/data";

export const metadata = pageMeta({
  title: "Kirloskar, Mahindra, Eicher & More | Bakodiya Generator House",
  description:
    "Explore generator brand options including Kirloskar, Mahindra, Eicher, Ashok Leyland and Escorts at Bakodiya Generator House.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <Reveal tag="section" className="page-hero" immediate>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Brands</li>
            </ol>
          </nav>
          <h1>Generator Brands at Bakodiya Generator House</h1>
          <p>
            Five brands, one shop in Shahpur, Betul, Madhya Pradesh, covering
            generator sets from 10 kVA to 500 kVA. Tell us the brand you
            trust, or tell us the load you need to run and we will suggest
            what suits it.
          </p>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Brand Options</span>
            <h2>Brands Available for Enquiry</h2>
            <p>
              These are the brands we deal in. What is available in a given
              capacity changes, so call and we will confirm for your
              requirement.
            </p>
          </div>

          <div className="brand-grid">
            {brands.map((brand) => (
              <article className="brand-card" key={brand.slug}>
                <div className="brand-logo">
                  <img
                    src={brand.logo}
                    width={brand.width}
                    height={brand.height}
                    alt={`${brand.name} generator brand logo`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <a
                  className="btn btn-primary"
                  href={waLink(`Hi, I would like to know about ${brand.name} generators.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask About {brand.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section section-soft">
        <div className="container split">
          <div className="media-frame">
            <img
              src={generatorImages[2].src}
              width={generatorImages[2].width}
              height={generatorImages[2].height}
              alt={generatorImages[2].alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="eyebrow">Product Range</span>
            <h2>Generator Sets We Handle</h2>
            <div className="prose">
              <p>
                Canopy and open sets across the 10 kVA to 500 kVA range, from
                each of the brands listed above. Model numbers, specifications
                and rates are shared over a call.
              </p>
              <ul className="list-check">
                <li>Five generator brands</li>
                <li>Canopy and open configurations</li>
                <li>Capacity grouping from 10 kVA to 500 kVA</li>
                <li>Shop in Shahpur, Betul, Madhya Pradesh</li>
              </ul>
            </div>
            <div className="btn-row">
              <Link href="/generators" className="btn btn-secondary">
                View Generators
              </Link>
              <a href={`tel:${site.phone}`} className="btn btn-primary">
                Call {site.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Not sure which brand fits your load?</h2>
            <p>
              Call with the capacity and the usage and we will tell you which
              brands to look at.
            </p>
          </div>
          <div className="btn-row">
            <a href={`tel:${site.phone}`} className="btn btn-primary">
              Call {site.phoneLabel}
            </a>
            <a
              href={waLink()}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </Reveal>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Generator Brands at Bakodiya Generator House",
          url: `${site.url}/brands`,
          description:
            "Kirloskar, Mahindra, Eicher, Ashok Leyland and Escorts generator brand options in Shahpur, Betul.",
          isPartOf: { "@id": `${site.url}/#website` },
        }}
      />
    </>
  );
}
