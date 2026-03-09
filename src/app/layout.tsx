import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kiely Web Design | Modern Websites for Local Businesses",
    template: "%s | Kiely Web Design",
  },
  description:
    "Boutique web design studio in Pittsburgh, PA. Hand-crafted, custom-coded websites for golf courses, restaurants, and local businesses. No templates, no lock-in — you own the code.",
  keywords: [
    "web design",
    "web design Pittsburgh",
    "golf course website",
    "restaurant website",
    "small business website",
    "drone photography",
    "aerial photography Pittsburgh",
    "custom website development",
    "hand-coded websites",
    "local business web design",
  ],
  authors: [{ name: "Kiely Web Design" }],
  creator: "Kiely Web Design",
  publisher: "Kiely Web Design",
  metadataBase: new URL("https://kielywebdesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kiely Web Design",
    title: "Kiely Web Design | Modern Websites for Local Businesses",
    description:
      "Boutique web design studio in Pittsburgh, PA. Hand-crafted websites for golf courses, restaurants, and local businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiely Web Design | Modern Websites for Local Businesses",
    description:
      "Boutique web design studio in Pittsburgh, PA. Hand-crafted websites for golf courses, restaurants, and local businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kiely Web Design",
    description:
      "Boutique web design studio specializing in modern, hand-crafted websites for golf courses, restaurants, and local businesses.",
    url: "https://kielywebdesign.com",
    email: "hello@kielywebdesign.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pittsburgh",
      addressRegion: "PA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.4406,
        longitude: -79.9959,
      },
      geoRadius: "100",
    },
    priceRange: "$$",
    serviceType: [
      "Web Design",
      "Web Development",
      "Drone Photography",
      "IT Consulting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
