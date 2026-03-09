import Link from "next/link";

const pageLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/drone", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Web Design", href: "/#services" },
  { label: "Managed Hosting", href: "/pricing" },
  { label: "Drone Photography", href: "/drone" },
  { label: "Ecommerce", href: "/pricing" },
  { label: "IT Consulting", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-brg-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight group-hover:text-burnt-orange transition-colors">
                KWD
              </span>
            </Link>
            <p className="text-cream/60 text-sm mt-3 max-w-xs leading-relaxed">
              Hand-crafted websites for businesses that care about their online
              presence. Every project handled personally from Pittsburgh, PA.
            </p>
            <a
              href="mailto:hello@kielywebdesign.com"
              className="text-sm text-burnt-orange hover:text-burnt-orange-light transition-colors mt-3 inline-block"
            >
              hello@kielywebdesign.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cream/40">
              Pages
            </h4>
            <nav className="flex flex-col gap-2">
              {pageLinks.map((link) => (
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

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cream/40">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cream/40">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-cream/60">
              <a
                href="mailto:hello@kielywebdesign.com"
                className="hover:text-cream transition-colors"
              >
                hello@kielywebdesign.com
              </a>
              <span>Pittsburgh, PA</span>
              <span>Mon-Fri, 9am-6pm EST</span>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm text-burnt-orange hover:text-burnt-orange-light transition-colors"
              >
                Start a Project &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Kiely Web Design. All rights
            reserved.
          </p>
          <p className="text-xs text-cream/40">
            Hand-crafted with care in Pittsburgh, PA
          </p>
        </div>
      </div>
    </footer>
  );
}
