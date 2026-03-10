import {
  Zap,
  Shield,
  BatteryCharging,
  Phone,
  MapPin,
  Star,
  Home,
  Building2,
  Plug,
  SunMedium,
  Clock,
  Award,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Steel City Electric Co. | Pittsburgh Electricians",
  description:
    "Licensed electrical contractors serving Pittsburgh since 2003. Residential, commercial, EV chargers, generators. Call (412) 555-0293.",
};

const services = [
  {
    icon: Home,
    title: "Residential Wiring",
    description:
      "Complete home wiring for new builds, renovations, and upgrades. Code-compliant work backed by our lifetime warranty.",
  },
  {
    icon: Building2,
    title: "Commercial Buildouts",
    description:
      "Full-scale electrical systems for offices, retail, and restaurants. We handle permitting, inspection, and commissioning.",
  },
  {
    icon: Plug,
    title: "EV Charger Installation",
    description:
      "Level 2 and DC fast charger installations for homes and businesses. Tesla, ChargePoint, and all major brands.",
  },
  {
    icon: BatteryCharging,
    title: "Generator Installation",
    description:
      "Whole-home and commercial standby generators. Automatic transfer switches with load management.",
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description:
      "100A to 200A+ panel upgrades, sub-panel installations, and circuit breaker replacements. Future-proof your electrical system.",
  },
  {
    icon: SunMedium,
    title: "Lighting Design",
    description:
      "Architectural, landscape, and commercial lighting design. LED retrofits, smart controls, and energy-efficient solutions.",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Master Electrician certified in PA and WV. Fully bonded and insured for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We show up when we say we will. Scheduled appointments with real-time arrival updates, no vague four-hour windows.",
  },
  {
    icon: Wrench,
    title: "Clean, Quality Work",
    description:
      "We treat your home like our own. Protective floor covers, dust containment, and a spotless finish every time.",
  },
  {
    icon: Award,
    title: "Lifetime Workmanship Warranty",
    description:
      "Every job is backed by our lifetime warranty on workmanship. If something is not right, we fix it at no cost.",
  },
];

const testimonials = [
  {
    name: "Mike D.",
    location: "Mt. Lebanon",
    rating: 5,
    text: "Had our entire panel upgraded and they added circuits for the workshop. Crew was professional, explained everything clearly, and cleaned up like they were never here. Best electrician we have ever used.",
  },
  {
    name: "Sarah K.",
    location: "Squirrel Hill",
    rating: 5,
    text: "Installed a Tesla Wall Connector and upgraded our panel in the same visit. The price was fair, the work was immaculate, and they handled the permit. Cannot recommend them enough.",
  },
  {
    name: "James R.",
    location: "Fox Chapel",
    rating: 5,
    text: "We hired Steel City Electric for a full commercial buildout for our new restaurant. They worked around our construction schedule, passed every inspection first try, and finished ahead of deadline.",
  },
];

const serviceAreas = [
  "Pittsburgh",
  "Mt. Lebanon",
  "Fox Chapel",
  "Squirrel Hill",
  "Shadyside",
  "Cranberry Twp",
  "Bethel Park",
  "Moon Twp",
  "Wexford",
  "Robinson Twp",
  "Peters Twp",
  "Upper St. Clair",
];

export default function SteelCityElectricPage() {
  return (
    <div className="min-h-screen bg-[#EDEDED] text-[#1A1A2E]">
      {/* ── Header / Nav ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#1A1A2E] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-[#F5A623]" />
            <div>
              <span className="text-xl font-bold tracking-tight">
                Steel City Electric
              </span>
              <span className="ml-1 text-xs font-medium text-[#F5A623]">
                Co.
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-[#F5A623]"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="transition-colors hover:text-[#F5A623]"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="transition-colors hover:text-[#F5A623]"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[#F5A623]"
            >
              Contact
            </a>
          </nav>

          <a
            href="tel:+14125550293"
            className="flex items-center gap-2 rounded-lg bg-[#F5A623] px-5 py-2.5 text-sm font-bold text-[#1A1A2E] transition-all hover:bg-[#e5961e] hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(412) 555-0293</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1A2E] text-white">
        {/* Decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px w-12 bg-[#F5A623]" />
              <span className="text-sm font-semibold tracking-widest text-[#F5A623] uppercase">
                Licensed Electrical Contractors Since 2003
              </span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
              Pittsburgh&rsquo;s Most
              <br />
              <span className="text-[#F5A623]">Trusted Electricians</span>
            </h1>

            <p className="mb-4 text-2xl font-light text-gray-300 italic md:text-3xl">
              Wired for Pittsburgh.
            </p>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
              From panel upgrades to complete commercial buildouts, we deliver
              safe, code-compliant electrical work with a lifetime warranty on
              every job.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-8 py-4 text-lg font-bold text-[#1A1A2E] transition-all hover:bg-[#e5961e] hover:shadow-xl hover:shadow-[#F5A623]/20"
              >
                Request Free Estimate
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Decorative bolt */}
          <div className="pointer-events-none absolute right-10 bottom-10 hidden opacity-10 lg:block">
            <Zap className="h-64 w-64 text-[#F5A623]" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="bg-[#3D85C6]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/20 text-center text-white md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex flex-col items-center gap-2 px-8 py-8">
            <Home className="h-8 w-8 text-white/80" />
            <span className="text-4xl font-extrabold">3,000+</span>
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">
              Homes Wired
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 px-8 py-8">
            <Clock className="h-8 w-8 text-white/80" />
            <span className="text-4xl font-extrabold">20+</span>
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">
              Years of Service
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 px-8 py-8">
            <Award className="h-8 w-8 text-white/80" />
            <span className="text-4xl font-extrabold">Master</span>
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">
              Electrician Certified
            </span>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section id="services" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-[#3D85C6] uppercase">
              What We Do
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Full-service electrical solutions for homes and businesses across
              Greater Pittsburgh.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-[#EDEDED]/40 p-8 transition-all hover:border-[#F5A623]/30 hover:shadow-xl hover:shadow-[#F5A623]/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1A1A2E] text-[#F5A623] transition-colors group-hover:bg-[#F5A623] group-hover:text-[#1A1A2E]">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section id="why-us" className="bg-[#1A1A2E] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-[#F5A623] uppercase">
              The Steel City Difference
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-[#F5A623]">
                  <reason.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section id="testimonials" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-[#3D85C6] uppercase">
              Customer Reviews
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              What Pittsburgh Says
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-gray-100 bg-[#EDEDED]/40 p-8"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-gray-700 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A2E] text-sm font-bold text-[#F5A623]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ─────────────────────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#1A1A2E] py-20 text-white md:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F5A623 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Zap className="mx-auto mb-6 h-12 w-12 text-[#F5A623]" />
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Ready to Power Up?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-gray-400">
            Get a free, no-obligation estimate. We respond to every inquiry
            within two hours during business days.
          </p>

          <div className="mx-auto max-w-xl rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-500 ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-[#F5A623] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-500 ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-[#F5A623] focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-500 ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-[#F5A623] focus:outline-none"
              />
              <select className="rounded-lg bg-white/10 px-4 py-3 text-gray-400 ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-[#F5A623] focus:outline-none">
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="Describe your project..."
                className="resize-none rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-500 ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-[#F5A623] focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#F5A623] px-8 py-4 text-lg font-bold text-[#1A1A2E] transition-all hover:bg-[#e5961e] hover:shadow-xl hover:shadow-[#F5A623]/20"
              >
                Request Free Estimate
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#F5A623]" />
              Free estimates
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#F5A623]" />
              2-hour response
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#F5A623]" />
              No obligation
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="bg-[#111122] py-16 text-gray-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-[#F5A623]" />
                <span className="text-lg font-bold text-white">
                  Steel City Electric
                  <span className="ml-0.5 text-xs text-[#F5A623]">Co.</span>
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                Licensed electrical contractors serving Greater Pittsburgh since
                2003. Master Electrician certified in Pennsylvania and West
                Virginia.
              </p>
              <p className="text-xs text-gray-600">
                PA License #EL-2003-04812
                <br />
                WV License #WV-E-08291
              </p>
            </div>

            {/* Services Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="transition-colors hover:text-[#F5A623]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Service Areas
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#3D85C6]" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+14125550293"
                    className="flex items-center gap-2 transition-colors hover:text-[#F5A623]"
                  >
                    <Phone className="h-4 w-4 text-[#F5A623]" />
                    (412) 555-0293
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@steelcityelectric.co"
                    className="flex items-center gap-2 transition-colors hover:text-[#F5A623]"
                  >
                    <Mail className="h-4 w-4 text-[#F5A623]" />
                    info@steelcityelectric.co
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#F5A623]" />
                  Pittsburgh, PA 15222
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="mb-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
                  Hours
                </h5>
                <p className="text-sm">
                  Mon &ndash; Fri: 7:00 AM &ndash; 6:00 PM
                  <br />
                  Sat: 8:00 AM &ndash; 2:00 PM
                  <br />
                  <span className="text-[#F5A623]">
                    24/7 Emergency Service
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Steel City Electric Co. All
              rights reserved. &nbsp;&middot;&nbsp; Licensed &amp; Insured
              &nbsp;&middot;&nbsp; Master Electrician PA &amp; WV
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
