import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent web design pricing from $1,650. Custom websites, managed hosting plans, drone photography add-ons. No contracts, no lock-in — you own the code.",
  openGraph: {
    title: "Pricing | Kiely Web Design",
    description:
      "Transparent web design pricing from $1,650. No contracts, no lock-in — you own the code.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
