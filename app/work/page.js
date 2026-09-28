import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ReelCard from "@/components/ReelCard";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { reels, workPhotos } from "@/lib/data";

export const metadata = pageMeta({
  title: "Generator Work & Installations | Bakodiya Generator House",
  description:
    "See generator work, products and reels from Bakodiya Generator House in Shahpur, Betul.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Reveal tag="section" className="page-hero" immediate>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Work</li>
            </ol>
          </nav>
          <h1>Our Work</h1>
          <p>
            Generator installations, deliveries and product reels from
            Bakodiya Generator House in Shahpur, Betul, Madhya Pradesh.
          </p>
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Reels</span>
            <h2>Video Reels of Our Generator Work</h2>
            <p>
              Short videos from deliveries, installations and new stock. They
              play on their own, without sound.
            </p>
          </div>

          {reels.length > 0 ? (
            <div className="reel-grid">
              {reels.map((item) => (
                <ReelCard key={item.title + item.video} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>Reels are being added.</strong>
              <p>
                Until they land here, the day-to-day work goes up on
                Instagram.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <a
                  className="btn btn-primary"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal tag="section" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Photos</span>
            <h2>Generator Deliveries and Site Photos</h2>
          </div>

          {workPhotos.length > 0 ? (
            <div className="gallery">
              {workPhotos.map((photo) => (
                <figure key={photo.src}>
                  <img
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>Site photos are being collected.</strong>
              <p>
                Delivery and installation pictures will be posted here as
                they come in.
              </p>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal tag="section" className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Instagram</span>
            <h2>Follow Bakodiya Generator House on Instagram</h2>
            <div className="prose">
              <p>
                New sets, deliveries and site work from Shahpur, Betul.
                Follow along and you will see what left the shop this week.
              </p>
            </div>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="media-frame">
            <img
              src="/images/generators/open-generator-fleet.webp"
              width="1024"
              height="768"
              alt="Row of open type diesel generator sets"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Reveal>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
    </>
  );
}
