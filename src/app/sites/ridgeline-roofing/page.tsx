import {
  Home,
  Shield,
  CloudRain,
  Phone,
  Award,
  Star,
  MapPin,
  ArrowRight,
  Hammer,
  ChevronRight,
  DollarSign,
  Clock,
  CheckCircle,
  Layers,
  Wrench,
  FileText,
  Menu,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Ridgeline Roofing & Exteriors | Pittsburgh Roofers",
  description:
    "GAF Master Elite certified roofers in Cranberry Township. Shingles, metal, storm damage. Free estimates. Call (412) 555-0521.",
};

const COLORS = {
  charcoal: "#2C3E50",
  brick: "#C0392B",
  white: "#ECF0F1",
  copper: "#E67E22",
};

const services = [
  {
    icon: Home,
    title: "Asphalt Shingles",
    desc: "GAF Timberline HDZ lifetime shingles with industry-leading wind warranty. Pittsburgh's most popular roofing choice.",
  },
  {
    icon: Layers,
    title: "Metal Roofing",
    desc: "Standing seam and corrugated metal systems rated for 50+ years. Energy efficient and built for heavy snow loads.",
  },
  {
    icon: Shield,
    title: "Flat Roofing",
    desc: "TPO, EPDM, and modified bitumen for commercial and residential flat roofs. Fully warrantied waterproof systems.",
  },
  {
    icon: Wrench,
    title: "Siding & Gutters",
    desc: "James Hardie fiber cement siding and seamless aluminum gutters. Complete exterior protection for your home.",
  },
  {
    icon: CloudRain,
    title: "Storm Damage & Insurance",
    desc: "24-hour emergency tarping. We work directly with your insurance adjuster to maximize your claim.",
  },
  {
    icon: Hammer,
    title: "Roof Repair",
    desc: "Leak detection, flashing repair, and shingle replacement. Fast turnaround to stop damage before it spreads.",
  },
];

const projects = [
  {
    title: "Cranberry Township Colonial",
    beforeColor: "#7f8c8d",
    afterColor: "#2C3E50",
    tag: "Asphalt Shingles",
    desc: "Complete tear-off and replacement with GAF Timberline HDZ Charcoal. 25-square roof completed in 2 days.",
  },
  {
    title: "Mars Borough Farmhouse",
    beforeColor: "#95a5a6",
    afterColor: "#C0392B",
    tag: "Metal Roofing",
    desc: "Aging asphalt replaced with standing seam metal in Barn Red. 50-year warranty, zero maintenance.",
  },
  {
    title: "Wexford Storm Recovery",
    beforeColor: "#6c757d",
    afterColor: "#E67E22",
    tag: "Insurance Claim",
    desc: "Hail damage claim fully covered by insurance. New roof, gutters, and ridge vent in 3 days.",
  },
];

const testimonials = [
  {
    name: "Mike & Sarah D.",
    location: "Cranberry Township",
    rating: 5,
    text: "After the July storm took half our shingles, Ridgeline had a tarp up the same night and a new roof on within the week. They handled the entire insurance claim. Couldn't have been easier.",
  },
  {
    name: "Tom Kowalski",
    location: "Wexford",
    rating: 5,
    text: "Got four quotes. Ridgeline wasn't the cheapest, but they were the only GAF Master Elite contractor. Three years later, not a single issue. You get what you pay for.",
  },
  {
    name: "Janet R.",
    location: "Mars, PA",
    rating: 5,
    text: "They replaced our 30-year-old roof and added new gutters. The crew was professional, cleaned up everything, and finished a day early. Highly recommend.",
  },
];

const serviceAreas = [
  "Cranberry Township",
  "Wexford",
  "Mars",
  "Zelienople",
  "Evans City",
  "Seven Fields",
  "Adams Township",
  "Pine Township",
  "Gibsonia",
  "Warrendale",
  "Valencia",
  "Butler",
];

export default function RidgelineRoofingPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      {/* ===== HEADER / NAV ===== */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: COLORS.charcoal }}
      >
        {/* Top bar */}
        <div
          className="text-sm py-2 px-4 text-center"
          style={{ backgroundColor: COLORS.brick, color: COLORS.white }}
        >
          <span className="flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            24/7 Emergency Service &mdash; Call{" "}
            <strong>(412) 555-0521</strong>
          </span>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded flex items-center justify-center"
              style={{ backgroundColor: COLORS.copper }}
            >
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <div
                className="font-bold text-lg leading-tight tracking-tight"
                style={{ color: COLORS.white }}
              >
                Ridgeline
              </div>
              <div
                className="text-xs uppercase tracking-widest leading-tight"
                style={{ color: COLORS.copper }}
              >
                Roofing & Exteriors
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Projects", "Financing", "Reviews", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: COLORS.white }}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: COLORS.copper, color: "#fff" }}
          >
            Free Estimate
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile menu icon */}
          <button
            className="md:hidden"
            style={{ color: COLORS.white }}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: COLORS.charcoal,
          backgroundImage: `linear-gradient(135deg, ${COLORS.charcoal} 0%, #1a252f 50%, #0f1923 100%)`,
        }}
      >
        {/* Decorative roof ridge lines */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0 400 L300 200 L600 400 L900 200 L1200 400 L1200 600 L0 600Z"
              fill="white"
            />
            <path
              d="M0 450 L200 300 L400 450 L600 300 L800 450 L1000 300 L1200 450 L1200 600 L0 600Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                backgroundColor: "rgba(192, 57, 43, 0.15)",
                color: COLORS.brick,
                border: `1px solid rgba(192, 57, 43, 0.3)`,
              }}
            >
              <Award className="w-3.5 h-3.5" />
              GAF Master Elite Certified
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: COLORS.white }}
            >
              Pittsburgh&rsquo;s roof is on{" "}
              <span style={{ color: COLORS.copper }}>our shoulders.</span>
            </h1>

            <p
              className="text-xl sm:text-2xl font-light mb-4 leading-relaxed"
              style={{ color: "rgba(236, 240, 241, 0.8)" }}
            >
              Built to weather Pittsburgh.
            </p>

            <p
              className="text-base sm:text-lg mb-10 max-w-xl leading-relaxed"
              style={{ color: "rgba(236, 240, 241, 0.6)" }}
            >
              GAF Master Elite certified roofing contractor serving Cranberry
              Township, the North Hills, and Butler County. Top 2% of roofers
              nationwide. Free estimates, financing available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-base transition-transform hover:scale-105"
                style={{ backgroundColor: COLORS.brick, color: "#fff" }}
              >
                <Phone className="w-5 h-5" />
                Get Your Free Estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-base transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "transparent",
                  color: COLORS.white,
                  border: `2px solid rgba(236, 240, 241, 0.3)`,
                }}
              >
                Our Services
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { value: "500+", label: "Roofs Installed" },
                { value: "15+", label: "Years Experience" },
                { value: "4.9", label: "Google Rating" },
                { value: "$0", label: "Down Payment" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: COLORS.copper }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "rgba(236, 240, 241, 0.5)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 sm:py-28" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: COLORS.copper }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: COLORS.charcoal }}
            >
              Full-Service Roofing & Exteriors
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7f8c8d" }}>
              From emergency repairs to complete replacements, we handle every
              aspect of your roof and exterior with certified precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-8 rounded-lg transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #dfe6e9",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(44, 62, 80, 0.06)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: COLORS.charcoal }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: COLORS.charcoal }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#7f8c8d" }}
                  >
                    {service.desc}
                  </p>
                  <div className="mt-5">
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: COLORS.brick }}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GAF CERTIFICATION BADGE ===== */}
      <section
        className="py-20 sm:py-24"
        style={{
          backgroundColor: COLORS.charcoal,
          backgroundImage: `linear-gradient(135deg, ${COLORS.charcoal} 0%, #1a252f 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Badge visual */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-full flex flex-col items-center justify-center text-center p-8"
                style={{
                  border: `4px solid ${COLORS.copper}`,
                  backgroundColor: "rgba(230, 126, 34, 0.08)",
                }}
              >
                <Award
                  className="w-16 h-16 mb-4"
                  style={{ color: COLORS.copper }}
                />
                <div
                  className="text-2xl font-extrabold leading-tight mb-1"
                  style={{ color: COLORS.white }}
                >
                  GAF Master Elite
                </div>
                <div
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: COLORS.copper }}
                >
                  Certified Contractor
                </div>
                <div
                  className="text-xs mt-3 leading-relaxed"
                  style={{ color: "rgba(236, 240, 241, 0.6)" }}
                >
                  Only 2% of roofing contractors <br /> in North America qualify
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ color: COLORS.white }}
              >
                Why GAF Master Elite <br />
                <span style={{ color: COLORS.copper }}>matters to you</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Golden Pledge Warranty",
                    desc: "50-year non-prorated material warranty plus 25-year workmanship coverage. The strongest warranty in roofing.",
                  },
                  {
                    title: "Factory-Certified Installers",
                    desc: "Every crew member is factory-trained on GAF installation standards. No subcontractors, no shortcuts.",
                  },
                  {
                    title: "Annual Recertification",
                    desc: "We're re-evaluated every year for proper licensing, insurance, and customer satisfaction scores.",
                  },
                  {
                    title: "Top 2% Nationwide",
                    desc: "Out of 10,000+ roofing contractors in the region, fewer than 200 hold this certification.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: COLORS.copper }}
                      />
                    </div>
                    <div>
                      <div
                        className="font-bold text-base mb-1"
                        style={{ color: COLORS.white }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(236, 240, 241, 0.6)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER GALLERY ===== */}
      <section id="projects" className="py-20 sm:py-28" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: COLORS.copper }}
            >
              Our Work
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: COLORS.charcoal }}
            >
              Recent Projects
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7f8c8d" }}>
              Real results from real homes in the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #dfe6e9",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* Before/After simulated visual */}
                <div className="relative h-52 flex">
                  <div
                    className="w-1/2 flex items-center justify-center"
                    style={{ backgroundColor: project.beforeColor }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        color: "#fff",
                      }}
                    >
                      Before
                    </span>
                  </div>
                  <div
                    className="w-1/2 flex items-center justify-center"
                    style={{ backgroundColor: project.afterColor }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "#fff",
                      }}
                    >
                      After
                    </span>
                  </div>
                  {/* Divider line */}
                  <div
                    className="absolute top-0 bottom-0 left-1/2 w-0.5"
                    style={{ backgroundColor: COLORS.white }}
                  />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: "rgba(230, 126, 34, 0.1)",
                      color: COLORS.copper,
                    }}
                  >
                    {project.tag}
                  </span>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: COLORS.charcoal }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#7f8c8d" }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINANCING ===== */}
      <section
        id="financing"
        className="py-20 sm:py-24"
        style={{
          backgroundColor: "#f8f9fa",
          borderTop: "1px solid #dfe6e9",
          borderBottom: "1px solid #dfe6e9",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: COLORS.copper }}
              >
                Flexible Financing
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                A new roof doesn&rsquo;t have to <br />
                <span style={{ color: COLORS.brick }}>break the bank.</span>
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "#7f8c8d" }}
              >
                We partner with top-tier lenders to offer monthly payment plans
                that fit your budget. Many homeowners qualify for 0% interest for
                up to 18 months.
              </p>
              <div className="space-y-4">
                {[
                  "Payments as low as $89/month",
                  "0% interest options available",
                  "No prepayment penalties",
                  "Fast approval in under 5 minutes",
                  "No impact to your credit score to check rates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: COLORS.copper }}
                    />
                    <span
                      className="text-base"
                      style={{ color: COLORS.charcoal }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment card visual */}
            <div className="flex justify-center">
              <div
                className="w-full max-w-sm rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: COLORS.charcoal,
                  boxShadow: "0 20px 60px rgba(44, 62, 80, 0.3)",
                }}
              >
                <DollarSign
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: COLORS.copper }}
                />
                <p
                  className="text-sm uppercase tracking-wider mb-2"
                  style={{ color: "rgba(236, 240, 241, 0.6)" }}
                >
                  Average Monthly Payment
                </p>
                <div
                  className="text-5xl font-extrabold mb-1"
                  style={{ color: COLORS.white }}
                >
                  $89
                </div>
                <p
                  className="text-sm mb-8"
                  style={{ color: "rgba(236, 240, 241, 0.5)" }}
                >
                  /month for 60 months *
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded font-bold text-base transition-transform hover:scale-105"
                  style={{ backgroundColor: COLORS.copper, color: "#fff" }}
                >
                  Check My Rate
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p
                  className="text-xs mt-5 leading-relaxed"
                  style={{ color: "rgba(236, 240, 241, 0.4)" }}
                >
                  * Example based on $5,340 loan at 6.99% APR.
                  <br />
                  Actual terms vary by credit profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="reviews" className="py-20 sm:py-28" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: COLORS.copper }}
            >
              Reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: COLORS.charcoal }}
            >
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-current"
                  style={{ color: COLORS.copper }}
                />
              ))}
              <span
                className="ml-2 font-bold text-lg"
                style={{ color: COLORS.charcoal }}
              >
                4.9/5
              </span>
              <span className="text-sm" style={{ color: "#7f8c8d" }}>
                (127 reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #dfe6e9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: COLORS.copper }}
                    />
                  ))}
                </div>

                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: COLORS.charcoal }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(44, 62, 80, 0.08)",
                      color: COLORS.charcoal,
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: COLORS.charcoal }}
                    >
                      {review.name}
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "#7f8c8d" }}>
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY CTA ===== */}
      <section
        id="contact"
        className="py-20 sm:py-24"
        style={{
          backgroundColor: COLORS.brick,
          backgroundImage: `linear-gradient(135deg, ${COLORS.brick} 0%, #a93226 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CloudRain className="w-16 h-16 mx-auto mb-6" style={{ color: "rgba(255,255,255,0.3)" }} />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6"
            style={{ color: "#fff" }}
          >
            Don&rsquo;t wait for the next storm.
          </h2>
          <p
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Every day you delay is another day your home is at risk. Get a free,
            no-obligation roof inspection from a GAF Master Elite contractor.
            We&rsquo;ll be there within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4125550521"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#fff", color: COLORS.brick }}
            >
              <Phone className="w-6 h-6" />
              (412) 555-0521
            </a>
            <a
              href="mailto:info@ridgelineroofing.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded font-bold text-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Clock, text: "24-Hour Emergency Service" },
              { icon: Shield, text: "Fully Licensed & Insured" },
              { icon: FileText, text: "Free Written Estimates" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="py-16"
        style={{
          backgroundColor: COLORS.charcoal,
          backgroundImage: `linear-gradient(180deg, #1a252f 0%, ${COLORS.charcoal} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ backgroundColor: COLORS.copper }}
                >
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div
                    className="font-bold text-lg leading-tight"
                    style={{ color: COLORS.white }}
                  >
                    Ridgeline
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest leading-tight"
                    style={{ color: COLORS.copper }}
                  >
                    Roofing & Exteriors
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(236, 240, 241, 0.6)" }}
              >
                Family-owned and operated since 2009. Proudly serving the North
                Hills and Butler County communities with honest, dependable
                roofing services.
              </p>
              <div
                className="text-xs"
                style={{ color: "rgba(236, 240, 241, 0.4)" }}
              >
                PA HIC License #PA123456
                <br />
                Fully Licensed &amp; Insured
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3
                className="font-bold text-sm uppercase tracking-wider mb-5"
                style={{ color: COLORS.copper }}
              >
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: "rgba(236, 240, 241, 0.6)" }}
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-bold text-sm uppercase tracking-wider mb-5"
                style={{ color: COLORS.copper }}
              >
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: COLORS.copper }}
                  />
                  <a
                    href="tel:4125550521"
                    className="text-sm hover:underline"
                    style={{ color: "rgba(236, 240, 241, 0.8)" }}
                  >
                    (412) 555-0521
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: COLORS.copper }}
                  />
                  <a
                    href="mailto:info@ridgelineroofing.com"
                    className="text-sm hover:underline"
                    style={{ color: "rgba(236, 240, 241, 0.8)" }}
                  >
                    info@ridgelineroofing.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: COLORS.copper }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(236, 240, 241, 0.8)" }}
                  >
                    1247 Freedom Rd, Suite 3<br />
                    Cranberry Township, PA 16066
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: COLORS.copper }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(236, 240, 241, 0.8)" }}
                  >
                    Mon&ndash;Fri 7am&ndash;6pm &bull; Sat 8am&ndash;2pm
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{
              borderTop: "1px solid rgba(236, 240, 241, 0.1)",
            }}
          >
            <p
              className="text-xs"
              style={{ color: "rgba(236, 240, 241, 0.4)" }}
            >
              &copy; {new Date().getFullYear()} Ridgeline Roofing & Exteriors.
              All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(236, 240, 241, 0.3)" }}
            >
              Website by{" "}
              <a
                href="/"
                className="hover:underline"
                style={{ color: COLORS.copper }}
              >
                Kiely Web Design
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
