"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/drone", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brg-dark/95 backdrop-blur-md shadow-lg border-b border-cream/10"
          : "bg-brg-dark/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-serif text-2xl font-bold text-cream tracking-tight group-hover:text-burnt-orange transition-colors duration-200">
            KWD
          </span>
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-cream/50 font-medium">
            Kiely Web Design
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm px-3 py-2 rounded-md transition-all duration-200 hover:text-cream hover:bg-cream/10",
                isActive(link.href)
                  ? "text-cream bg-cream/10"
                  : "text-cream/70"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-burnt-orange rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "ml-3 bg-burnt-orange hover:bg-burnt-orange-light text-white shadow-md hover:shadow-lg transition-all duration-200"
            )}
          >
            Get a Quote
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" render={<span />}>
              <Menu className="h-5 w-5 text-cream" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-brg-dark border-cream/10">
            <nav className="flex flex-col gap-2 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg py-2 px-3 rounded-lg transition-all duration-200 hover:text-cream hover:bg-cream/5",
                    isActive(link.href)
                      ? "text-cream bg-cream/10"
                      : "text-cream/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white mt-4"
                )}
              >
                Get a Quote
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
