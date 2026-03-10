import {
  PenTool,
  Palette,
  Lamp,
  Home,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Camera,
  Mail,
  Clock,
  Eye,
  Ruler,
  Hammer,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Belmont Interior Design Studio | Shadyside, Pittsburgh",
  description:
    "Boutique interior design in Shadyside. Kitchens, living spaces, whole-home renovations. Pittsburgh's industrial charm meets modern warmth. Book a consultation.",
};

const services = [
  {
    icon: Home,
    title: "Full-Service Design",
    description:
      "From concept to completion. We manage every detail — space planning, material selection, vendor coordination, and installation oversight — so you can simply enjoy the transformation.",
  },
  {
    icon: Sparkles,
    title: "Room Refresh",
    description:
      "A focused, high-impact update to a single room. New furniture plan, curated accessories, updated finishes — all within a streamlined timeline and approachable budget.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description:
      "The right palette changes everything. We develop a whole-home color story that harmonizes with your architecture, light conditions, and the way you actually live.",
  },
  {
    icon: Lamp,
    title: "Kitchen & Bath",
    description:
      "Pittsburgh homes deserve kitchens and baths that honor their character. We blend original details — exposed brick, plaster moldings — with modern performance and elegance.",
  },
];

const portfolio = [
  {
    name: "Lawrenceville Loft",
    style: "Industrial Modern",
    description:
      "A former textile warehouse transformed into a light-filled residence. Steel beams preserved, walnut millwork added, open-plan kitchen anchored by a 12-foot marble island.",
    color: "bg-[#8B6F5C]",
  },
  {
    name: "Fox Chapel Colonial",
    style: "Refined Traditional",
    description:
      "A 1940s colonial reimagined for a young family. Original hardwoods restored, kitchen opened to the garden, primary suite wrapped in grasscloth and linen.",
    color: "bg-[#4A4A4A]",
  },
  {
    name: "Squirrel Hill Victorian",
    style: "Eclectic Heritage",
    description:
      "Period details celebrated, not hidden. Restored pocket doors, custom stained-glass lighting, jewel-toned rooms that feel collected over decades, not decorated overnight.",
    color: "bg-[#C9A96E]",
  },
  {
    name: "South Side Row House",
    style: "Modern Warmth",
    description:
      "A narrow 1890s row house opened up with strategic sightlines, built-in storage, and a restrained material palette of white oak, blackened steel, and unlacquered brass.",
    color: "bg-[#6B7B6E]",
  },
];

const processSteps = [
  {
    icon: Eye,
    step: "01",
    title: "Discovery",
    description:
      "We visit your home, listen to how you live, and understand your vision. No Pinterest boards required — just honest conversation about what matters to you.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Concept",
    description:
      "We develop mood boards, floor plans, and a curated direction rooted in your home's architecture and your personal aesthetic. Two to three concepts, refined to one.",
  },
  {
    icon: Ruler,
    step: "03",
    title: "Design",
    description:
      "Detailed drawings, material specifications, fixture selections, and a comprehensive procurement plan. Every element considered, every detail resolved on paper first.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Installation",
    description:
      "We coordinate every trade, manage every delivery, and oversee every detail of the install. You walk into a finished space — not a construction site.",
  },
];

const testimonials = [
  {
    name: "Catherine & James P.",
    location: "Fox Chapel",
    text: "Elena understood our home before we could articulate what we wanted. She preserved every detail that mattered and quietly transformed everything that didn't. It still feels like our house — just the best possible version of it.",
  },
  {
    name: "David M.",
    location: "Lawrenceville",
    text: "I bought a raw loft space and had no idea where to start. Elena turned it into something I'm genuinely proud to come home to. The kitchen alone changed how I live. Worth every penny and then some.",
  },
  {
    name: "Rachel & Tom K.",
    location: "Squirrel Hill",
    text: "We'd been paralyzed by paint swatches for two years. Elena walked through the house once and within a week presented a color story that made the whole home feel connected. Transformative is not an overstatement.",
  },
];

const pressFeatures = [
  { name: "Pittsburgh Magazine", detail: "Best of Design 2025" },
  { name: "Dwell", detail: "Small Studio, Big Impact" },
  {
    name: "Pittsburgh Post-Gazette",
    detail: "Home & Garden Feature",
  },
];

export default function BelmontInteriorDesignPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#4A4A4A]">
      {/* ── Header / Nav ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#4A4A4A]/10 bg-[#F7F5F0]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <span className="text-xl font-light tracking-[0.25em] uppercase">
              Belmont
            </span>
            <span className="ml-2 text-xs font-light tracking-[0.15em] text-[#8B6F5C] uppercase">
              Interior Design
            </span>
          </div>

          <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.15em] uppercase md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-[#C9A96E]"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="transition-colors hover:text-[#C9A96E]"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="transition-colors hover:text-[#C9A96E]"
            >
              Process
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-[#C9A96E]"
            >
              About
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#C9A96E] px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-[#C9A96E] uppercase transition-all hover:bg-[#C9A96E] hover:text-white"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Subtle decorative line pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 120px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-44">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-16 bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                Shadyside, Pittsburgh
              </span>
            </div>

            <h1 className="mb-8 text-4xl leading-[1.15] font-light tracking-tight md:text-6xl lg:text-7xl">
              Transforming
              <br />
              Pittsburgh homes into
              <br />
              <span className="font-normal text-[#C9A96E] italic">
                spaces that endure
              </span>
            </h1>

            <p className="mb-6 max-w-lg text-lg leading-relaxed font-light text-[#8B6F5C] italic">
              Spaces that feel like Pittsburgh — and feel like you.
            </p>

            <p className="mb-12 max-w-lg text-base leading-relaxed text-[#4A4A4A]/70">
              Boutique residential interior design rooted in Pittsburgh&rsquo;s
              industrial character and shaped by how you actually live. Exposed
              brick meets quiet luxury. Steel beams meet Sunday morning light.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#4A4A4A] px-8 py-4 text-xs font-medium tracking-[0.15em] text-[#F7F5F0] uppercase transition-all hover:bg-[#C9A96E]"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] text-[#8B6F5C] uppercase transition-colors hover:text-[#C9A96E]"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gold corner accent */}
        <div className="pointer-events-none absolute top-0 right-0 hidden lg:block">
          <div className="h-72 w-72 border-t-2 border-r-2 border-[#C9A96E]/20" />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section id="services" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-16 bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-5xl">
              Design services for
              <br />
              <span className="italic">every stage</span> of home
            </h2>
            <p className="text-base leading-relaxed text-[#4A4A4A]/70">
              Whether you need a single room reimagined or a whole-home
              transformation, we bring the same level of craft, care, and
              obsessive attention to detail.
            </p>
          </div>

          <div className="grid gap-px bg-[#4A4A4A]/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white p-10 transition-all hover:bg-[#F7F5F0]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#C9A96E]/30 text-[#C9A96E] transition-colors group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A]/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────── */}
      <section id="portfolio" className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                Selected Work
              </span>
              <div className="h-px w-16 bg-[#C9A96E]" />
            </div>
            <h2 className="text-3xl font-light tracking-tight md:text-5xl">
              Recent projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {portfolio.map((project) => (
              <div key={project.name} className="group">
                {/* Colored placeholder for project image */}
                <div
                  className={`${project.color} relative mb-6 flex aspect-[4/3] items-end overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="relative flex w-full items-end justify-between p-8">
                    <div>
                      <p className="mb-1 text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                        {project.style}
                      </p>
                      <h3 className="text-2xl font-light tracking-tight text-white">
                        {project.name}
                      </h3>
                    </div>
                    <Camera className="h-5 w-5 text-white/50 transition-colors group-hover:text-[#C9A96E]" />
                  </div>
                </div>
                <p className="px-1 text-sm leading-relaxed text-[#4A4A4A]/70">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section id="process" className="bg-[#4A4A4A] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-16 bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                How We Work
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-5xl">
              A process built on
              <br />
              <span className="italic">trust and transparency</span>
            </h2>
            <p className="text-base leading-relaxed text-white/50">
              No surprises, no scope creep, no design-by-committee. Four clear
              stages from first meeting to finished space.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="group bg-[#4A4A4A] p-10 transition-colors hover:bg-[#555555]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-light text-[#C9A96E]">
                    {step.step}
                  </span>
                  <step.icon className="h-5 w-5 text-white/30 transition-colors group-hover:text-[#C9A96E]" />
                </div>
                <h3 className="mb-4 text-lg font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the Designer ────────────────────────────────── */}
      <section id="about" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] bg-[#8B6F5C]/20" />
              {/* Offset gold frame */}
              <div className="absolute -right-4 -bottom-4 -z-10 hidden aspect-[3/4] w-full border-2 border-[#C9A96E]/30 lg:block" />
            </div>

            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-16 bg-[#C9A96E]" />
                <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                  The Designer
                </span>
              </div>

              <h2 className="mb-2 text-3xl font-light tracking-tight md:text-5xl">
                Elena Belmont
              </h2>
              <p className="mb-8 text-sm font-medium tracking-[0.1em] text-[#8B6F5C] uppercase">
                Founder &amp; Principal Designer
              </p>

              <div className="mb-8 space-y-4 text-base leading-relaxed text-[#4A4A4A]/70">
                <p>
                  A Pittsburgh native and Carnegie Mellon School of Design
                  alumna, Elena founded Belmont Interior Design Studio in 2018
                  after nearly a decade working with architecture firms in
                  Pittsburgh and New York.
                </p>
                <p>
                  Her work is defined by a deep respect for Pittsburgh&rsquo;s
                  built heritage — the exposed brick, the arched doorways, the
                  industrial bones that give our homes their character. She
                  doesn&rsquo;t cover those details. She builds around them.
                </p>
                <p>
                  Eight years of residential design experience. Over forty
                  completed projects. Every one of them rooted in the same
                  principle: your home should feel unmistakably, irreplaceably
                  yours.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 border-t border-[#4A4A4A]/10 pt-8 text-center">
                <div>
                  <span className="block text-2xl font-light text-[#C9A96E]">
                    8+
                  </span>
                  <span className="text-xs tracking-[0.1em] text-[#4A4A4A]/50 uppercase">
                    Years
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-light text-[#C9A96E]">
                    40+
                  </span>
                  <span className="text-xs tracking-[0.1em] text-[#4A4A4A]/50 uppercase">
                    Projects
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-light text-[#C9A96E]">
                    CMU
                  </span>
                  <span className="text-xs tracking-[0.1em] text-[#4A4A4A]/50 uppercase">
                    School of Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press / Features ──────────────────────────────────── */}
      <section className="border-y border-[#4A4A4A]/10 bg-[#F7F5F0] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-10 text-center text-xs font-medium tracking-[0.2em] text-[#8B6F5C] uppercase">
            As Seen In
          </p>
          <div className="grid grid-cols-1 divide-y divide-[#4A4A4A]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {pressFeatures.map((pub) => (
              <div key={pub.name} className="px-8 py-6 text-center sm:py-2">
                <p className="text-lg font-light tracking-wide italic text-[#4A4A4A]">
                  {pub.name}
                </p>
                <p className="mt-1 text-xs tracking-[0.1em] text-[#C9A96E] uppercase">
                  {pub.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#C9A96E]" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                Client Stories
              </span>
              <div className="h-px w-16 bg-[#C9A96E]" />
            </div>
            <h2 className="text-3xl font-light tracking-tight md:text-5xl">
              In their words
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative border-t border-[#C9A96E]/30 pt-10"
              >
                <Quote className="absolute -top-4 left-0 h-8 w-8 bg-white pr-2 text-[#C9A96E]/30" />
                <p className="mb-8 text-base leading-relaxed font-light text-[#4A4A4A]/80 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#C9A96E]/30 text-xs font-medium text-[#C9A96E]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-xs text-[#8B6F5C]">
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#4A4A4A] py-24 text-white md:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C9A96E]" />
            <Sparkles className="h-5 w-5 text-[#C9A96E]" />
            <div className="h-px w-16 bg-[#C9A96E]" />
          </div>

          <h2 className="mb-6 text-3xl font-light tracking-tight md:text-5xl">
            Let&rsquo;s reimagine
            <br />
            <span className="italic">your space</span>
          </h2>

          <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-white/50">
            Every project begins with a conversation. Tell us about your home,
            your vision, and how you want to feel when you walk through the
            door. Consultations are complimentary.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:hello@belmontdesignstudio.com"
              className="inline-flex items-center gap-3 border border-[#C9A96E] bg-[#C9A96E] px-10 py-4 text-xs font-medium tracking-[0.15em] text-[#4A4A4A] uppercase transition-all hover:bg-transparent hover:text-[#C9A96E]"
            >
              <Mail className="h-4 w-4" />
              Schedule Consultation
            </a>
            <a
              href="tel:+14125550147"
              className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-all hover:border-[#C9A96E] hover:text-[#C9A96E]"
            >
              <Phone className="h-4 w-4" />
              (412) 555-0147
            </a>
          </div>

          <p className="mt-10 text-xs tracking-[0.1em] text-white/30 uppercase">
            By appointment only
          </p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="bg-[#3A3A3A] py-16 text-white/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span className="text-lg font-light tracking-[0.25em] text-white uppercase">
                  Belmont
                </span>
                <span className="ml-2 text-xs tracking-[0.15em] text-[#C9A96E] uppercase">
                  Interior Design
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Boutique residential interior design in Shadyside, Pittsburgh.
                Transforming homes with intention, craft, and a deep respect for
                the city we call home.
              </p>
            </div>

            {/* Studio */}
            <div>
              <h4 className="mb-4 text-xs font-medium tracking-[0.15em] text-white uppercase">
                Studio
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A96E]" />
                  <span>
                    5432 Walnut Street, Suite 2F
                    <br />
                    Shadyside, Pittsburgh, PA 15232
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#C9A96E]" />
                  By appointment only
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-xs font-medium tracking-[0.15em] text-white uppercase">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+14125550147"
                    className="flex items-center gap-2 transition-colors hover:text-[#C9A96E]"
                  >
                    <Phone className="h-4 w-4 text-[#C9A96E]" />
                    (412) 555-0147
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@belmontdesignstudio.com"
                    className="flex items-center gap-2 transition-colors hover:text-[#C9A96E]"
                  >
                    <Mail className="h-4 w-4 text-[#C9A96E]" />
                    hello@belmontdesignstudio.com
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex gap-6">
                <a
                  href="#"
                  className="text-xs tracking-[0.1em] uppercase transition-colors hover:text-[#C9A96E]"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs tracking-[0.1em] uppercase transition-colors hover:text-[#C9A96E]"
                >
                  Pinterest
                </a>
                <a
                  href="#"
                  className="text-xs tracking-[0.1em] uppercase transition-colors hover:text-[#C9A96E]"
                >
                  Houzz
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/20">
            <p>
              &copy; {new Date().getFullYear()} Belmont Interior Design Studio.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
