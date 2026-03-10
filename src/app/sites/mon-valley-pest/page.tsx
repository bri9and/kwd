import {
  Bug,
  Shield,
  Leaf,
  Phone,
  MapPin,
  CheckCircle,
  Home,
  Star,
  Clock,
  ChevronRight,
  Rat,
  Zap,
  TreePine,
  Building2,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Mon Valley Pest Solutions | Pittsburgh Pest Control",
  description:
    "Locally owned pest control serving the Mon Valley and South Hills. Termites, rodents, mosquitoes. Free inspections. Call (412) 555-0384.",
};

export default function MonValleyPestPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Header / Nav ─────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "#2D5F2D",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                Mon Valley Pest Solutions
              </span>
              <span
                className="block text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Locally Owned &amp; Operated
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "How It Works", "Reviews", "Areas"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="tel:4125550384"
            className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ backgroundColor: "#E63946" }}
          >
            <Phone className="h-4 w-4" />
            Free Inspection
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #2D5F2D 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "rgba(45,95,45,0.1)",
                color: "#2D5F2D",
              }}
            >
              <Leaf className="h-4 w-4" />
              Eco-friendly treatments safe for kids &amp; pets
            </div>

            <h1
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              style={{ color: "#1a1a1a" }}
            >
              Pittsburgh Homes
              <br />
              Deserve to Be
              <br />
              <span style={{ color: "#2D5F2D" }}>Pest-Free.</span>
            </h1>

            <p
              className="mb-4 text-xl font-medium italic md:text-2xl"
              style={{ color: "#8B4513" }}
            >
              &ldquo;Your home. Our problem.&rdquo;
            </p>

            <p
              className="mb-10 max-w-xl text-lg leading-relaxed"
              style={{ color: "#555" }}
            >
              Locally owned pest control covering the Mon Valley corridor and
              South Hills. We eliminate termites, rodents, mosquitoes, bed bugs,
              and wildlife — with treatments safe for your family.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:4125550384"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{ backgroundColor: "#E63946" }}
              >
                <Phone className="h-5 w-5" />
                (412) 555-0384
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border-2 px-8 py-4 text-lg font-bold transition-all hover:bg-opacity-5"
                style={{ borderColor: "#2D5F2D", color: "#2D5F2D" }}
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              {[
                { icon: Award, text: "Licensed & Insured" },
                { icon: CheckCircle, text: "Free Inspections" },
                { icon: Clock, text: "Same-Day Service" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "#666" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#2D5F2D" }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────── */}
      <section id="services" className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Comprehensive Pest Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#666" }}>
              From termites in the basement to wildlife in the attic, we handle
              every pest challenge across the Mon Valley.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bug,
                title: "Termite Treatment",
                description:
                  "Advanced liquid barriers and bait systems to protect your home's structure. We use Termidor and Sentricon for proven results.",
                color: "#8B4513",
              },
              {
                icon: Rat,
                title: "Rodent Exclusion",
                description:
                  "Complete rodent-proofing: sealing entry points, trapping, and long-term exclusion to keep mice and rats out for good.",
                color: "#2D5F2D",
              },
              {
                icon: Zap,
                title: "Mosquito & Tick Programs",
                description:
                  "Seasonal barrier treatments for your yard. Enjoy your deck again — reduce mosquito and tick populations by up to 90%.",
                color: "#E63946",
              },
              {
                icon: Shield,
                title: "Bed Bug Treatment",
                description:
                  "Heat treatments and targeted applications. We eliminate bed bugs at every life stage with a follow-up guarantee.",
                color: "#8B4513",
              },
              {
                icon: TreePine,
                title: "Wildlife Removal",
                description:
                  "Humane removal of raccoons, squirrels, bats, and birds. We repair entry points and install exclusion devices.",
                color: "#2D5F2D",
              },
              {
                icon: Building2,
                title: "Commercial Pest Control",
                description:
                  "Restaurants, offices, warehouses. Customized IPM programs with discreet service and detailed compliance documentation.",
                color: "#E63946",
              },
            ].map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="group rounded-xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: "#e8e8e0",
                  backgroundColor: "#FAFAF5",
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color }} />
                </div>
                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ color: "#1a1a1a" }}
                >
                  {title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#666" }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Three Steps to a Pest-Free Home
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#666" }}>
              We make it simple. No high-pressure sales, no hidden fees — just
              honest service from your neighbors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Free Inspection",
                description:
                  "We visit your home, identify the problem, and assess the full scope — crawl space to attic. No cost, no obligation.",
                icon: Home,
              },
              {
                step: "02",
                title: "Custom Plan",
                description:
                  "Every home is different. We build a treatment plan tailored to your pest issue, your budget, and your family's safety needs.",
                icon: CheckCircle,
              },
              {
                step: "03",
                title: "Ongoing Protection",
                description:
                  "After treatment, we monitor and re-treat as needed. Our quarterly plans keep pests from coming back — guaranteed.",
                icon: Shield,
              },
            ].map(({ step, title, description, icon: Icon }, index) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                {/* Connector line on larger screens */}
                {index < 2 && (
                  <div
                    className="absolute right-0 top-12 hidden h-0.5 w-1/2 translate-x-1/2 md:block"
                    style={{ backgroundColor: "rgba(45,95,45,0.2)" }}
                  />
                )}

                <div
                  className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full"
                  style={{ backgroundColor: "#2D5F2D" }}
                >
                  <Icon className="h-8 w-8 text-white" />
                  <span
                    className="absolute -bottom-2 rounded-full px-3 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: "#8B4513" }}
                  >
                    STEP {step}
                  </span>
                </div>

                <h3
                  className="mb-3 mt-4 text-xl font-bold"
                  style={{ color: "#1a1a1a" }}
                >
                  {title}
                </h3>
                <p
                  className="max-w-xs leading-relaxed"
                  style={{ color: "#666" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="tel:4125550384"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "#E63946" }}
            >
              <Phone className="h-5 w-5" />
              Schedule Your Free Inspection
            </a>
          </div>
        </div>
      </section>

      {/* ── Eco-Friendly Badge Section ────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#2D5F2D" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            <div className="flex-shrink-0">
              <div
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <Leaf className="mb-2 h-16 w-16 text-white" />
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  Eco-Safe
                </span>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
                Safe for Kids. Safe for Pets.
                <br />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>
                  Tough on Pests.
                </span>
              </h2>
              <p
                className="mb-8 max-w-2xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                We offer eco-friendly treatment options that eliminate pests
                without exposing your family to harsh chemicals. Our
                reduced-risk products are EPA-registered and applied by certified
                technicians who care about your home as much as you do.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "EPA-registered reduced-risk products",
                  "Integrated Pest Management (IPM)",
                  "No unnecessary broadcast spraying",
                  "Safe re-entry times for families",
                  "Targeted application methods",
                  "Green Pro certified technicians",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "#90EE90" }}
                    />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section
        id="reviews"
        className="py-20"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              What Our Neighbors Say
            </h2>
            <p className="text-lg" style={{ color: "#666" }}>
              Real reviews from Mon Valley homeowners.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Maria G.",
                location: "Charleroi, PA",
                text: "We had a termite scare and they came out the same day. Thorough inspection, explained everything, no pressure. Treatment was done in one day and they followed up twice. Can't recommend them enough.",
                rating: 5,
              },
              {
                name: "Dave R.",
                location: "Bethel Park, PA",
                text: "Been using Mon Valley Pest for our restaurant for two years. Always on time, always discreet, always professional. Our health inspections have been spotless since we switched to them.",
                rating: 5,
              },
              {
                name: "Jennifer T.",
                location: "Monongahela, PA",
                text: "I was worried about chemicals around my kids and dogs. They used their eco-friendly options and the ants were gone within a week. The technician even sealed up where they were getting in. Great service.",
                rating: 5,
              },
            ].map(({ name, location, text, rating }) => (
              <div
                key={name}
                className="rounded-xl border p-8"
                style={{ borderColor: "#e8e8e0", backgroundColor: "#fff" }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill="#E6A817"
                      style={{ color: "#E6A817" }}
                    />
                  ))}
                </div>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#444" }}
                >
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: "#2D5F2D" }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#1a1a1a" }}
                    >
                      {name}
                    </div>
                    <div className="text-xs" style={{ color: "#999" }}>
                      {location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────── */}
      <section id="areas" className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold md:text-4xl"
              style={{ color: "#1a1a1a" }}
            >
              Proudly Serving the Mon Valley &amp; South Hills
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#666" }}>
              We cover a wide service area across southwestern Pennsylvania.
              Don&apos;t see your town? Give us a call — we probably cover it.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Monongahela",
              "Charleroi",
              "Donora",
              "Belle Vernon",
              "Rostraver",
              "Monessen",
              "California",
              "Coal Center",
              "Elrama",
              "Clairton",
              "Elizabeth",
              "McKeesport",
              "White Oak",
              "West Mifflin",
              "Bethel Park",
              "South Park",
              "Upper St. Clair",
              "Mt. Lebanon",
              "Peters Township",
              "McMurray",
              "Canonsburg",
              "Washington",
              "Brownsville",
              "Uniontown",
            ].map((town) => (
              <span
                key={town}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
                style={{
                  borderColor: "#e8e8e0",
                  backgroundColor: "#FAFAF5",
                  color: "#2D5F2D",
                }}
              >
                <MapPin className="h-3.5 w-3.5" />
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#8B4513" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Ready for a Pest-Free Home?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Call now for a free, no-obligation inspection. Same-day
            appointments available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:4125550384"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold transition-all hover:bg-gray-100"
              style={{ color: "#8B4513" }}
            >
              <Phone className="h-5 w-5" />
              (412) 555-0384
            </a>
            <a
              href="mailto:info@monvalleypest.com"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#1a1a1a" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Company */}
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-7 w-7" style={{ color: "#2D5F2D" }} />
                <span className="text-lg font-bold text-white">
                  Mon Valley Pest Solutions
                </span>
              </div>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Locally owned pest control serving the Mon Valley and South
                Hills since 2015. Licensed, insured, and committed to keeping
                your home safe.
              </p>
              <p
                className="text-sm italic"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                &ldquo;Your home. Our problem.&rdquo;
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:4125550384"
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <Phone className="h-4 w-4" />
                    (412) 555-0384
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@monvalleypest.com"
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <Mail className="h-4 w-4" />
                    info@monvalleypest.com
                  </a>
                </li>
                <li>
                  <span
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <MapPin className="h-4 w-4" />
                    Monongahela, PA 15063
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Hours
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <li className="flex justify-between">
                  <span>Mon &ndash; Fri</span>
                  <span>7:00 AM &ndash; 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM &ndash; 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
                <li className="mt-3 flex items-center gap-2" style={{ color: "#E63946" }}>
                  <Phone className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">
                    Emergency service available 24/7
                  </span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Services
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {[
                  "Termite Treatment",
                  "Rodent Exclusion",
                  "Mosquito & Tick Programs",
                  "Bed Bug Treatment",
                  "Wildlife Removal",
                  "Commercial Pest Control",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span>
              &copy; {new Date().getFullYear()} Mon Valley Pest Solutions. All
              rights reserved.
            </span>
            <span>
              PA Pesticide Applicator License #PB-00XXXX &middot; Fully Licensed
              &amp; Insured
            </span>
            <span>
              Built by{" "}
              <a
                href="https://kielywebdesign.com"
                className="underline transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kiely Web Design
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
