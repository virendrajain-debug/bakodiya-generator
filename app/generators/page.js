import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  brands,
  capacityRanges,
  generatorImages,
  generatorTypes,
} from "@/lib/data";

export const metadata = pageMeta({
  title: "Generators 10 kVA to 500 kVA | Bakodiya Generator House",
  description:
    "Explore generator options from 10 kVA to 500 kVA in Shahpur, Betul, including canopy and open generator configurations.",
  path: "/generators",
});

export default function GeneratorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Generators</li>
            </ol>
          </nav>
          <h1>Generator Solutions for Different Power Requirements</h1>
          <p>
            Everything starts with what you need to run. Tell us the load, the
            site and the brand you prefer — we deal in canopy and open
            generator sets from 10 kVA to 500 kVA in Shahpur, Betul.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Capacity Range</span>
            <h2>10 kVA to 500 kVA</h2>
            <div className="prose">
              <p>
                Generator sets are grouped across a 10 kVA to 500 kVA range,
                from small backup requirements to heavy commercial and
                industrial loads.
              </p>
              <p>
                The groups below are navigation ranges, not a stock list.
                Call with your load and site details and we will confirm what
                fits.
              </p>
            </div>
            <div className="chip-grid" style={{ marginTop: 20 }}>
              {capacityRanges.map((item) => (
                <div className="chip" key={item.range}>
                  <strong>{item.range}</strong>
                  <span>{item.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="media-frame">
            <img
              src={generatorImages[0].src}
              width={generatorImages[0].width}
              height={generatorImages[0].height}
              alt={generatorImages[0].alt}
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Generator Types</span>
            <h2>Canopy and Open Configurations</h2>
            <p>
              Which one you pick depends on where the set will sit, how much
              space is available and how much noise the site can take.
            </p>
          </div>

          <div className="grid-2">
            {generatorTypes.map((type) => (
              <article className="card type-card" key={type.slug}>
                <img
                  src={type.image}
                  width={type.width}
                  height={type.height}
                  alt={type.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="type-card-body">
                  <h3>{type.title}</h3>
                  <p className="card-muted">{type.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Brand Selection</span>
            <h2>Brands We Deal In</h2>
            <p>
              Kirloskar, Mahindra, Eicher, Ashok Leyland and Escorts — tell us
              which one you prefer, or tell us the load and we will suggest
              what suits it.
            </p>
          </div>

          <div className="logo-row">
            {brands.map((brand) => (
              <img
                key={brand.slug}
                src={brand.logo}
                width={brand.width}
                height={brand.height}
                alt={`${brand.name} generator brand logo`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href="/brands" className="btn btn-secondary">
              View Brand Details
            </Link>
            <a href={`tel:${site.phone}`} className="btn btn-primary">
              Call {site.phoneLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Product Range</span>
            <h2>Generator Sets in Canopy and Open Builds</h2>
            <p>
              A look at the kind of sets we handle. For models, specifications
              and rates, give us a call.
            </p>
          </div>

          <div className="gallery">
            {generatorImages.map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Tell Us Your Required Capacity</h2>
            <p>
              Call with the load you need to run and we will tell you which
              capacity group fits.
            </p>
          </div>
          <div className="btn-row">
            <a href={`tel:${site.phone}`} className="btn btn-primary">
              Call {site.phoneLabel}
            </a>
            <Link href="/brands" className="btn btn-secondary">
              View Brands
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Generators", path: "/generators" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Generators 10 kVA to 500 kVA",
          url: `${site.url}/generators`,
          description:
            "Generator options from 10 kVA to 500 kVA including canopy and open configurations in Shahpur, Betul.",
          isPartOf: { "@id": `${site.url}/#website` },
        }}
      />
    </>
  );
}
