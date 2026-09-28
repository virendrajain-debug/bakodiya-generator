import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ReelCard from "@/components/ReelCard";
import Reveal from "@/components/Reveal";
import { localBusinessSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site, waLink } from "@/lib/site";
import {
  brands,
  capacityRanges,
  generatorImages,
  generatorTypes,
  quickFacts,
  reels,
  trustPoints,
} from "@/lib/data";

export const metadata = pageMeta({
  title: "Bakodiya Generator House | Generator Dealer in Shahpur, Betul",
  description:
    "Bakodiya Generator House in Shahpur, Betul offers generator options from 10 kVA to 500 kVA, including Kirloskar, Mahindra, Eicher, Ashok Leyland and Escorts.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <Reveal tag="div" immediate delay={0.05}>
            <span className="eyebrow">Bakodiya Generator House</span>
            <h1>Generators from 10 kVA to 500 kVA in Shahpur, Betul</h1>
            <p className="hero-lead">
              Canopy and open diesel generator sets for homes, shops, farms and
              factories, from Kirloskar, Mahindra, Eicher, Ashok Leyland and
              Escorts.
            </p>
            <p className="hero-location">Shahpur, Betul, Madhya Pradesh</p>
            <div className="btn-row">
              <a href={`tel:${site.phone}`} className="btn btn-primary">
                Call {site.phoneLabel}
              </a>
              <Link href="/generators" className="btn btn-secondary">
                View Generators
              </Link>
            </div>
          </Reveal>

          <Reveal tag="div" className="hero-media" immediate delay={0.2}>
            <img
              src="/images/generators/hero-generator.webp"
              width="1280"
              height="850"
              alt="Industrial diesel generator set in canopy configuration"
              fetchPriority="high"
              decoding="async"
            />
            <p className="hero-caption">
              Diesel generator sets in canopy and open configurations
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal tag="section" className="facts" aria-label="Quick facts" immediate delay={0.4}>
        <div className="container">
          <div className="facts-grid">
            {quickFacts.map((fact) => (
              <div className="fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Capacity Range</span>
            <h2>Generator Capacity: 10 kVA to 500 kVA</h2>
            <p>
              Add up everything the generator has to run — lights, pumps,
              machines, coolers — and that total points you to a kVA range.
              Call with your load list and we will narrow it down.
            </p>
          </div>

          <div className="chip-grid">
            {capacityRanges.map((item) => (
              <div className="chip" key={item.range}>
                <strong>{item.range}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 26 }}>
            <a href={`tel:${site.phone}`} className="btn btn-primary">
              Ask About Availability
            </a>
            <Link href="/generators" className="btn btn-secondary">
              See Capacity Details
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Brands</span>
            <h2>Generator Brands We Deal In</h2>
            <p>
              Five brands under one roof. Pick the one you trust, or tell us
              the load and we will suggest what suits it.
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
                  className="btn btn-secondary"
                  href={waLink(`Hi, I would like to know about ${brand.name} generators.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask About {brand.name}
                </a>
              </article>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 26 }}>
            <Link href="/brands" className="btn btn-primary">
              View All Brands
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Configurations</span>
            <h2>Canopy and Open Generators</h2>
            <p>
              A canopy set suits rooftops, shops and residences where noise
              matters. An open set suits a shed, plant room or anywhere an
              enclosure already exists.
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
      </Reveal>

      <Reveal tag="section" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Call Us</span>
            <h2>Why Bakodiya Generator House</h2>
          </div>

          <div className="grid-3">
            {trustPoints.map((point) => (
              <article className="card" key={point.title}>
                <h3>{point.title}</h3>
                <p className="card-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Work</span>
            <h2>Generator Work and Reels</h2>
            <p>
              Deliveries, installations and new stock — the day-to-day work
              from our team in Shahpur.
            </p>
          </div>

          {reels.length > 0 ? (
            <div className="reel-grid">
              {reels.map((item) => (
                <ReelCard key={item.instagramUrl} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>Fresh reels go up on Instagram first.</strong>
              <p>
                Site videos and photos are being collected for this page.
                Until then, catch them on Instagram as they happen.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href="/work" className="btn btn-secondary">
                  Watch Our Work
                </Link>
                <a
                  className="btn btn-primary"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal tag="section" className="section section-soft">
        <div className="container split">
          <div className="media-frame">
            <img
              src={generatorImages[0].src}
              width={generatorImages[0].width}
              height={generatorImages[0].height}
              alt={generatorImages[0].alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="eyebrow">Local Search</span>
            <h2>Looking for a generator in Shahpur, Betul?</h2>
            <div className="prose">
              <p>
                Bakodiya Generator House is based in{" "}
                <strong>Shahpur, Betul, Madhya Pradesh</strong> and deals in
                diesel generator sets from 10 kVA to 500 kVA, in canopy and
                open configurations.
              </p>
              <p>
                If you are looking for a generator dealer in Shahpur or a
                generator supplier in Betul, call with the capacity you need
                and the site details, and we will point you to the right set.
              </p>
            </div>
            <ul className="list-links">
              <li>
                <Link href="/generators">10 kVA to 500 kVA Generators</Link>
              </li>
              <li>
                <Link href="/brands">Brand Options</Link>
              </li>
              <li>
                <Link href="/contact">Contact in Shahpur</Link>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Visit Us</span>
            <h2>Visit Bakodiya Generator House</h2>
            <div className="prose">
              <p>
                Find us in Shahpur, Betul, Madhya Pradesh. Open the location in
                Google Maps for directions, or give us a call before you come.
              </p>
            </div>
            <div className="btn-row">
              <a
                href={site.maps}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              <a href={`tel:${site.phone}`} className="btn btn-secondary">
                Call {site.phoneLabel}
              </a>
            </div>

            <div className="location-card" style={{ marginTop: 22 }}>
              <h3>Bakodiya Generator House</h3>
              <address>{site.addressLine}</address>
              <ul className="info-list">
                <li>
                  <span>Capacity</span>
                  <strong>10 kVA to 500 kVA</strong>
                </li>
                <li>
                  <span>Brands</span>
                  <strong>5 major brands</strong>
                </li>
                <li>
                  <span>Types</span>
                  <strong>Open &amp; Canopy</strong>
                </li>
              </ul>
              <a
                className="btn btn-primary btn-block"
                href={`tel:${site.phone}`}
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src={site.mapsEmbed}
              title="Map showing Bakodiya Generator House, Shahpur, Betul, Madhya Pradesh"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Tell Us Your Required Capacity</h2>
            <p>
              One call with your load requirement is enough to get started.
              We deal in canopy and open sets across 10 kVA to 500 kVA.
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

      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
