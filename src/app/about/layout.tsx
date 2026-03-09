import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kiely Web Design — a one-person boutique web studio based in Pittsburgh, PA. Hand-crafted websites built with modern technology and personal attention.",
  openGraph: {
    title: "About | Kiely Web Design",
    description:
      "A one-person boutique web studio based in Pittsburgh, PA. Personal attention, clean code, full ownership.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
