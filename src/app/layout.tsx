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
  title: "Kiely Web Design | Modern Websites for Local Businesses",
  description:
    "Boutique web design studio specializing in modern, hand-crafted websites for golf courses, restaurants, and local businesses. Custom code delivered on completion.",
  keywords: [
    "web design",
    "golf course website",
    "restaurant website",
    "small business website",
    "drone photography",
    "drone photography",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
