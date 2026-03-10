import {
  Home,
  Ruler,
  TreePine,
  Shield,
  Phone,
  MapPin,
  Star,
  PenTool,
  Hammer,
  CheckCircle,
  ArrowRight,
  Clock,
  FileCheck,
  Shovel,
  HardHat,
  Key,
  ChevronRight,
  Mail,
  Zap,
  Palette,
} from "lucide-react";

export const metadata = {
  title: "Allegheny Heritage Homes | Custom Home Builder Pittsburgh",
  description:
    "Custom homes on your lot. In-house architect, energy-efficient construction, fixed-price contracts. North Hills, Cranberry, Sewickley. Call (412) 555-0738.",
};

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description:
      "Walk your lot together. Discuss your vision, budget, and timeline over coffee.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our in-house architect creates your custom floor plans and 3D renderings.",
    icon: PenTool,
  },
  {
    step: 3,
    title: "Permitting",
    description:
      "We handle all municipal approvals, surveys, and engineering reviews.",
    icon: FileCheck,
  },
  {
    step: 4,
    title: "Foundation",
    description:
      "Site prep, excavation, and foundation pour — built to last generations.",
    icon: Shovel,
  },
  {
    step: 5,
    title: "Construction",
    description:
      "Framing through finish. Weekly walkthroughs keep you connected to every detail.",
    icon: HardHat,
  },
  {
    step: 6,
    title: "Move-In",
    description:
      "Final walkthrough, keys in hand, and a 2-year structural warranty.",
    icon: Key,
  },
];

const projects = [
  {
    name: "The Wexford Estate",
    location: "Cranberry Twp",
    sqft: "4,200",
    beds: 5,
    baths: 4,
    priceRange: "$1.1M – $1.3M",
    color: "bg-[#8B7355]",
    accent: "Craftsman",
  },
  {
    name: "Edgeworth Manor",
    location: "Sewickley",
    sqft: "3,800",
    beds: 4,
    baths: 3.5,
    priceRange: "$980K – $1.15M",
    color: "bg-[#5C6B45]",
    accent: "Colonial Revival",
  },
  {
    name: "Fox Chapel Cottage",
    location: "Fox Chapel",
    sqft: "2,900",
    beds: 3,
    baths: 2.5,
    priceRange: "$620K – $750K",
    color: "bg-[#6B5B4B]",
    accent: "Modern Farmhouse",
  },
  {
    name: "The Ingomar Residence",
    location: "North Hills",
    sqft: "3,400",
    beds: 4,
    baths: 3,
    priceRange: "$780K – $920K",
    color: "bg-[#4A5D3A]",
    accent: "Contemporary",
  },
];

const features = [
  {
    icon: Ruler,
    title: "In-House Architect",
    description:
      "No middleman. Our licensed architect works with you from first sketch to final blueprint, ensuring every room lives exactly as you imagined.",
  },
  {
    icon: TreePine,
    title: "Energy Efficient",
    description:
      "Spray-foam insulation, triple-pane windows, high-efficiency HVAC, and optional solar-ready wiring. Lower bills from day one.",
  },
  {
    icon: Shield,
    title: "Fixed-Price Contracts",
    description:
      "No surprises, no change-order games. Your price is locked before we break ground, backed by a transparent line-item budget.",
  },
  {
    icon: Palette,
    title: "Custom Everything",
    description:
      "Cabinetry, trim profiles, tile patterns, hardware — every finish is chosen by you. Our interior designer guides each selection.",
  },
];

const testimonials = [
  {
    quote:
      "They built our forever home exactly the way we dreamed it. Every penny was accounted for — no surprises, just craftsmanship. We still can't believe it's ours.",
    name: "Mark & Julie Stanton",
    location: "Cranberry Twp",
    detail: "4-bed Colonial, 2024",
  },
  {
    quote:
      "From the first lot walk to handing us the keys, they treated our project like it was their own home. The fixed-price contract gave us total peace of mind.",
    name: "Dr. Priya Mehta",
    location: "Sewickley",
    detail: "3-bed Modern Farmhouse, 2023",
  },
  {
    quote:
      "Our energy bills are half what our neighbors pay. The in-house architect nailed the layout on the second draft. Best decision we ever made.",
    name: "Tom & Angela Russo",
    location: "North Hills",
    detail: "5-bed Craftsman, 2024",
  },
];

export default function AlleghenyHeritageHomesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* ─── Header / Nav ─── */}
      <header className="bg-[#3E2723] text-[#F5F1EB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Home className="h-7 w-7 text-[#D4A574]" />
            <div>
              <span className="text-xl font-bold tracking-wide">
                Allegheny Heritage
              </span>
              <span className="ml-1 text-xl font-light tracking-wide">
                Homes
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            <a
              href="#process"
              className="transition-colors hover:text-[#D4A574]"
            >
              Process
            </a>
            <a
              href="#portfolio"
              className="transition-colors hover:text-[#D4A574]"
            >
              Portfolio
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-[#D4A574]"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="transition-colors hover:text-[#D4A574]"
            >
              Testimonials
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded bg-[#D4A574] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#3E2723] transition-all hover:bg-[#C49564]"
          >
            Start Your Build
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[#3E2723]">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#D4A574]" />
          <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[#5C6B45]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A574]">
              Custom Home Builder &middot; Pittsburgh, PA
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#F5F1EB] md:text-6xl md:leading-[1.1]">
              The home you&apos;ve always
              <span className="text-[#D4A574]"> imagined,</span>
              <br />
              built on the land
              <span className="text-[#D4A574]"> you love.</span>
            </h1>
            <p className="mt-6 text-xl font-light italic tracking-wide text-[#D4A574]/80">
              Your lot. Your legacy.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F5F1EB]/70">
              Design-build custom homes from $450K to $1.5M across Pittsburgh&apos;s
              North Hills, Cranberry Township, and Sewickley. In-house architect.
              Fixed-price contracts. Zero guesswork.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#D4A574] px-8 py-4 text-base font-semibold tracking-wide text-[#3E2723] transition-all hover:bg-[#C49564]"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded border border-[#F5F1EB]/20 px-8 py-4 text-base font-medium tracking-wide text-[#F5F1EB] transition-all hover:border-[#D4A574]/50 hover:text-[#D4A574]"
              >
                View Our Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-b border-[#D4A574]/20 bg-[#F5F1EB]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { value: "127+", label: "Homes Built" },
            { value: "18", label: "Years in Pittsburgh" },
            { value: "98%", label: "On-Time Completion" },
            { value: "2-Year", label: "Structural Warranty" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#3E2723]">{stat.value}</p>
              <p className="mt-1 text-sm tracking-wide text-[#3E2723]/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Process Timeline ─── */}
      <section id="process" className="bg-[#F5F1EB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5C6B45]">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3E2723] md:text-4xl">
              From First Conversation to Front Door
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#3E2723]/60">
              Six clear steps. No mystery timelines, no hidden phases. You know
              exactly where your home stands at every stage.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-lg border border-[#D4A574]/20 bg-white p-8 transition-all hover:border-[#D4A574]/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3E2723] text-[#D4A574]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4A574]">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-[#3E2723]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3E2723]/60">
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.step < 6 && (
                  <ChevronRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#D4A574]/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section id="portfolio" className="bg-[#3E2723] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A574]">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#F5F1EB] md:text-4xl">
              Recent Builds
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#F5F1EB]/50">
              Every home is one-of-a-kind, designed for the family who lives there
              and the land it sits on.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-lg border border-[#F5F1EB]/10 bg-[#4E3733] transition-all hover:border-[#D4A574]/30"
              >
                {/* Image placeholder */}
                <div
                  className={`${project.color} relative flex h-64 items-end justify-start p-6`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent" />
                  <div className="relative">
                    <span className="rounded-full bg-[#D4A574]/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#3E2723]">
                      {project.accent}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#F5F1EB]">
                        {project.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-[#F5F1EB]/50">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                    </div>
                    <p className="text-right text-sm font-semibold text-[#D4A574]">
                      {project.priceRange}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-6 border-t border-[#F5F1EB]/10 pt-4 text-sm text-[#F5F1EB]/60">
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-3.5 w-3.5 text-[#D4A574]/60" />
                      {project.sqft} sq ft
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Home className="h-3.5 w-3.5 text-[#D4A574]/60" />
                      {project.beds} bed / {project.baths} bath
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="bg-[#F5F1EB] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5C6B45]">
              Why Heritage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3E2723] md:text-4xl">
              Built Different. On Purpose.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#5C6B45]/10">
                  <feature.icon className="h-6 w-6 text-[#5C6B45]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3E2723]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#3E2723]/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional trust signals */}
          <div className="mt-16 rounded-lg border border-[#5C6B45]/20 bg-[#5C6B45]/5 p-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <Zap className="h-10 w-10 shrink-0 text-[#5C6B45]" />
              <div>
                <h3 className="text-lg font-bold text-[#3E2723]">
                  Energy Star Certified Builds
                </h3>
                <p className="mt-1 text-[#3E2723]/60">
                  Every Allegheny Heritage home meets or exceeds Energy Star
                  standards. Our homeowners report average energy savings of 30%
                  compared to conventionally built homes of the same size.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#5C6B45] px-4 py-2 text-sm font-semibold text-white">
                  <CheckCircle className="h-4 w-4" />
                  Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A574]">
              Homeowner Stories
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3E2723] md:text-4xl">
              What Our Families Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-lg border border-[#D4A574]/15 bg-[#F5F1EB]/50 p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#D4A574] text-[#D4A574]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#3E2723]/70 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-[#D4A574]/15 pt-4">
                  <p className="font-bold text-[#3E2723]">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-[#3E2723]/50">
                    {testimonial.detail} &middot; {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#3E2723] py-24"
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4A574]" />
          <div className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[#5C6B45]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Hammer className="mx-auto mb-6 h-10 w-10 text-[#D4A574]" />
          <h2 className="text-3xl font-bold tracking-tight text-[#F5F1EB] md:text-5xl">
            Ready to Build on Your Lot?
          </h2>
          <p className="mt-4 text-xl italic text-[#D4A574]/70">
            Your lot. Your legacy.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#F5F1EB]/60">
            Schedule a free, no-pressure consultation. We&apos;ll walk your
            property, discuss your vision, and give you a realistic budget range
            — all before you commit to anything.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+14125550738"
              className="inline-flex items-center gap-2 rounded bg-[#D4A574] px-8 py-4 text-base font-semibold tracking-wide text-[#3E2723] transition-all hover:bg-[#C49564]"
            >
              <Phone className="h-4 w-4" />
              (412) 555-0738
            </a>
            <a
              href="mailto:build@alleghenyheritage.com"
              className="inline-flex items-center gap-2 rounded border border-[#F5F1EB]/20 px-8 py-4 text-base font-medium tracking-wide text-[#F5F1EB] transition-all hover:border-[#D4A574]/50 hover:text-[#D4A574]"
            >
              <Mail className="h-4 w-4" />
              build@alleghenyheritage.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#2C1B17] text-[#F5F1EB]/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 text-[#F5F1EB]">
                <Home className="h-5 w-5 text-[#D4A574]" />
                <span className="text-lg font-bold tracking-wide">
                  Allegheny Heritage Homes
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Custom design-build homes in the greater Pittsburgh area. In-house
                architect, energy-efficient construction, and transparent
                fixed-price contracts.
              </p>
              <p className="mt-4 text-xs">
                PA Home Improvement Contractor #HC-087421
              </p>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D4A574]">
                Service Areas
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Cranberry Township",
                  "Sewickley & Edgeworth",
                  "North Hills & Ross Twp",
                  "Fox Chapel & O'Hara",
                  "Wexford & Pine Twp",
                  "Mars & Adams Twp",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-[#D4A574]/40" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D4A574]">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#D4A574]/40" />
                  <a
                    href="tel:+14125550738"
                    className="transition-colors hover:text-[#D4A574]"
                  >
                    (412) 555-0738
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#D4A574]/40" />
                  <a
                    href="mailto:build@alleghenyheritage.com"
                    className="transition-colors hover:text-[#D4A574]"
                  >
                    build@alleghenyheritage.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#D4A574]/40" />
                  <span>
                    4100 Brandt School Rd, Suite 200
                    <br />
                    Wexford, PA 15090
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#D4A574]/40" />
                  <span>Mon – Fri: 8am – 5pm &middot; Sat by appt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-[#F5F1EB]/10 pt-8 text-center text-xs">
            <p>
              &copy; {new Date().getFullYear()} Allegheny Heritage Homes LLC. All
              rights reserved. PA Home Improvement Contractor License #HC-087421.
            </p>
            <p className="mt-2">
              Site by{" "}
              <a
                href="/"
                className="text-[#D4A574] transition-colors hover:text-[#D4A574]/80"
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
