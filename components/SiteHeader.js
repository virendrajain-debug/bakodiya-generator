"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1];

export default function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const menu = {
    hidden: { height: 0, opacity: 0 },
    show: { height: "auto", opacity: 1 },
  };

  const item = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
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
            {navLinks.map((item2) => (
              <Link
                key={item2.href}
                href={item2.href}
                aria-current={isActive(item2.href) ? "page" : undefined}
              >
                {item2.label}
              </Link>
            ))}
          </nav>

          <a href={`tel:${site.phone}`} className="btn btn-primary header-cta">
            <PhoneIcon />
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

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-menu"
              className="nav-mobile"
              aria-label="Mobile"
              variants={reduce ? undefined : menu}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : "show"}
              exit={reduce ? undefined : "hidden"}
              transition={{ duration: 0.3, ease: EASE }}
              style={{ overflow: "hidden" }}
            >
              <motion.div
                className="nav-mobile-inner"
                variants={reduce ? undefined : { show: { transition: { staggerChildren: 0.05 } } }}
                initial={reduce ? false : "hidden"}
                animate={reduce ? undefined : "show"}
              >
                {navLinks.map((item2) => (
                  <motion.div key={item2.href} variants={reduce ? undefined : item}>
                    <Link
                      href={item2.href}
                      aria-current={isActive(item2.href) ? "page" : undefined}
                    >
                      {item2.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div className="nav-mobile-actions" variants={reduce ? undefined : item}>
                  <a href={`tel:${site.phone}`} className="btn btn-primary btn-block">
                    <PhoneIcon />
                    Call {site.phoneLabel}
                  </a>
                  <a
                    href={site.whatsapp}
                    className="btn btn-secondary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="mobile-cta">
        <a href={`tel:${site.phone}`} className="btn btn-primary">
          <PhoneIcon />
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
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="btn-icon"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
