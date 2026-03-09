import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brg-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight">
              Kiely
            </span>
            <p className="text-cream/60 text-sm mt-3 max-w-xs leading-relaxed">
              Hand-crafted websites for businesses that care about their online
              presence. Every project handled personally.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cream/40">
              Pages
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#work", label: "Portfolio" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
                { href: "/drone", label: "Photography" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cream/40">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-cream/60">
              <a
                href="mailto:hello@kielywebdesign.com"
                className="hover:text-cream transition-colors"
              >
                hello@kielywebdesign.com
              </a>
              <span>Pittsburgh, PA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Kiely Web Design. All rights
            reserved.
          </p>
          <p className="text-xs text-cream/40">
            Hand-crafted with care in Pittsburgh.
          </p>
        </div>
      </div>
    </footer>
  );
}
