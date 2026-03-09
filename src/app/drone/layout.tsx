import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Photography",
  description:
    "FAA Part 107 certified aerial photography and videography in Pittsburgh, PA. Golf course flyovers, real estate aerials, promotional videos from $100/hole.",
  openGraph: {
    title: "Drone Photography | Kiely Web Design",
    description:
      "FAA Part 107 certified aerial photography. Golf course flyovers, real estate aerials, promotional videos.",
  },
};

export default function DroneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
