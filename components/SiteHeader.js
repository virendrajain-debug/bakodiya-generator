"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <img
            src="/images/logo/logo.webp"
            width="720"
            height="480"
            alt={`${site.name} logo`}
          />
          <span className="brand-name">
            <strong>Bakodiya Generator House</strong>
            <span>Shahpur, Betul, Madhya Pradesh</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={`tel:${site.phone}`} className="btn btn-primary header-cta">
          Call Now
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className="nav-mobile"
        aria-label="Mobile"
        hidden={!open}
      >
        <div className="container" style={{ padding: 0 }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.phone}`} className="btn btn-primary btn-block">
            Call Now
          </a>
          <a
            href={site.whatsapp}
            className="btn btn-secondary btn-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>

      <div className="mobile-cta">
        <a href={`tel:${site.phone}`} className="btn btn-primary">
          Call Now
        </a>
        <a
          href={site.whatsapp}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
