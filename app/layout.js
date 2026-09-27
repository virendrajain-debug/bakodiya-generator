import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "generator in Shahpur",
    "generator dealer in Betul",
    "diesel generator Betul Madhya Pradesh",
    "10 kVA to 500 kVA generator",
    "canopy generator",
    "open generator",
  ],
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
