import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Pittsburgh PA | Custom Websites for Local Businesses",
  description:
    "Pittsburgh web design studio building modern, custom-coded websites for local businesses, golf courses, and restaurants. Hand-crafted sites from $1,650. Free consultation.",
  openGraph: {
    title: "Web Design Pittsburgh PA | Kiely Web Design",
    description:
      "Local Pittsburgh web designer. Custom websites, drone photography, managed hosting. Personal attention, no templates.",
  },
};

export default function PittsburghLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
