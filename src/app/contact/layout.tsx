import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kiely Web Design. Free consultation for your web design, drone photography, or IT project. Based in Pittsburgh, PA — serving businesses everywhere.",
  openGraph: {
    title: "Contact | Kiely Web Design",
    description:
      "Free consultation for your next web project. Based in Pittsburgh, PA.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
