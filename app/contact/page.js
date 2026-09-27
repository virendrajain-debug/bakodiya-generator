import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site, waLink } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Bakodiya Generator House | Shahpur, Betul",
  description:
    "Contact Bakodiya Generator House in Shahpur, Betul for generator availability, capacity requirements and enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact</li>
            </ol>
          </nav>
          <h1>Contact Bakodiya Generator House</h1>
          <p>
            Call us, send a WhatsApp message, or visit the shop in Shahpur,
            Betul. Directions are one tap away.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Location</span>
            <h2>Bakodiya Generator House, Shahpur</h2>
            <div className="location-card" style={{ marginBottom: 18 }}>
              <h3>Bakodiya Generator House</h3>
              <address>
                Shahpur, Betul, Madhya Pradesh, India
                <br />
                District Betul, State Madhya Pradesh
              </address>
              <div className="btn-row">
                <a
                  href={site.maps}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <a
                  href={site.maps}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <ul className="info-list">
              <li>
                <span>Capacity</span>
                <strong>10 kVA to 500 kVA</strong>
              </li>
              <li>
                <span>Types</span>
                <strong>Open &amp; Canopy</strong>
              </li>
              <li>
                <span>Brands</span>
                <strong>Kirloskar, Mahindra, Eicher, Ashok Leyland, Escorts</strong>
              </li>
            </ul>
          </div>

          <div>
            <div className="map-frame" style={{ marginBottom: 18 }}>
              <iframe
                src={site.mapsEmbed}
                title="Map showing Bakodiya Generator House, Shahpur, Betul, Madhya Pradesh"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="btn btn-secondary btn-block"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bakodiya Generator House on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="call">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Call or WhatsApp</span>
            <h2>Talk to Us</h2>
            <p>
              Two numbers and a WhatsApp line — whichever is easier for you.
              Keep your load requirement handy and most questions get settled
              on the first call.
            </p>
          </div>

          <div className="contact-cards">
            <a className="contact-card" href={`tel:${site.phone}`}>
              <span>Call</span>
              <strong>{site.phoneLabel}</strong>
            </a>
            <a className="contact-card" href={`tel:${site.phone2}`}>
              <span>Call</span>
              <strong>{site.phone2Label}</strong>
            </a>
            <a
              className="contact-card contact-card-dark"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>Send a message</strong>
            </a>
          </div>

          <div className="split" style={{ marginTop: 34 }}>
            <div>
              <h3>Handy to know before you call</h3>
              <ul className="list-check">
                <li>The total load you need to run</li>
                <li>Canopy or open configuration</li>
                <li>Preferred brand, if you have one</li>
              </ul>
            </div>
            <div>
              <p className="card-muted">
                Not sure about any of it? Call anyway — tell us what the
                generator has to run and we will work out the rest with you.
              </p>
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
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Prefer a quick message?</h2>
            <p>
              Send us a WhatsApp message, or plan your visit with Google Maps
              directions.
            </p>
          </div>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
            <Link href="/generators" className="btn btn-secondary">
              View Generators
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Bakodiya Generator House",
          url: `${site.url}/contact`,
          about: { "@id": `${site.url}/#business` },
        }}
      />
    </>
  );
}
