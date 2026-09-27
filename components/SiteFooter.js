import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/images/logo/logo.png"
              width="512"
              height="341"
              alt={`${site.name} logo`}
              loading="lazy"
              decoding="async"
            />
            <p>
              <strong>Bakodiya Generator House</strong>
              <br />
              Generator solutions from 10 kVA to 500 kVA in Shahpur, Betul,
              Madhya Pradesh.
            </p>
            <p className="footer-phone">
              <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
              <span aria-hidden="true"> · </span>
              <a href={`tel:${site.phone2}`}>{site.phone2Label}</a>
            </p>
            <div className="social-row">
              <a className="social-btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a
                className="social-btn"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Navigate</h3>
            <ul>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Visit</h3>
            <ul>
              <li>Shahpur, Betul, Madhya Pradesh</li>
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bakodiya Generator House on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            Copyright {year} Bakodiya Generator House. All rights reserved.
          </span>
          <span>{site.locationLabel}, India</span>
        </div>

        <p className="credits">
          Brand names and logos are trademarks of their respective owners and
          are used only to identify the generator brands available for enquiry.
          Product imagery sourced from Wikimedia Commons under CC BY / CC BY-SA
          licences. Location coordinates derived from the Google Maps link
          supplied by the business.
        </p>
      </div>
    </footer>
  );
}
