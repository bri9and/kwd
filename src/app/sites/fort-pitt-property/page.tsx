import {
  Building,
  Key,
  DollarSign,
  BarChart,
  Shield,
  Phone,
  MapPin,
  Star,
  Users,
  Wrench,
  CheckCircle,
  ChevronRight,
  TrendingUp,
  Clock,
  Mail,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Fort Pitt Property Group | Pittsburgh Property Management",
  description:
    "Full-service property management in Allegheny County. 600+ units, 98% occupancy. Tenant placement, maintenance, reporting. Call (412) 555-0845.",
};

const services = [
  {
    icon: Users,
    title: "Tenant Screening & Placement",
    description:
      "Rigorous background checks, credit verification, employment confirmation, and rental history review. We place qualified tenants fast — average vacancy fill in 18 days.",
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    description:
      "Automated online payments, ACH direct deposit to your account, and proactive late-fee enforcement. Owners receive funds by the 10th of every month.",
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description:
      "24/7 tenant maintenance portal, vetted contractor network, and preventive maintenance programs. Emergency response within 2 hours, every time.",
  },
  {
    icon: BarChart,
    title: "Financial Reporting",
    description:
      "Monthly owner statements, year-end tax packages, real-time portal access. Know exactly where every dollar goes — no surprises, no hidden fees.",
  },
  {
    icon: Shield,
    title: "Eviction Management",
    description:
      "Full legal coordination from notice to court filing to possession. We handle the paperwork, the process servers, and the stress — so you don't have to.",
  },
  {
    icon: TrendingUp,
    title: "Investment Sales",
    description:
      "Licensed real estate sales division for investor clients. Market analysis, 1031 exchange guidance, and off-market deal flow across Allegheny County.",
  },
];

const stats = [
  { value: "600+", label: "Units Managed" },
  { value: "98%", label: "Occupancy Rate" },
  { value: "17", label: "Years in Business" },
  { value: "4.9", label: "Star Rating" },
];

const ownerBenefits = [
  "Dedicated property manager assigned to your portfolio",
  "Transparent pricing — no hidden markups on maintenance",
  "Guaranteed rent program available for qualifying properties",
  "Real-time owner portal with financial dashboards",
  "Annual property inspections with photo documentation",
  "Market rent analysis to maximize your return",
];

const tenantBenefits = [
  "Online rent payments and autopay setup",
  "24/7 emergency maintenance hotline",
  "Self-service maintenance request portal",
  "Move-in condition reports with photos",
  "Responsive communication — replies within 24 hours",
  "Well-maintained properties that feel like home",
];

const neighborhoods = [
  "Shadyside",
  "Squirrel Hill",
  "Oakland",
  "Lawrenceville",
  "East Liberty",
  "Bloomfield",
  "Highland Park",
  "Point Breeze",
  "Regent Square",
  "Greenfield",
  "South Side",
  "Mt. Washington",
  "Dormont",
  "Mt. Lebanon",
  "Brookline",
  "Beechview",
  "North Side",
  "Strip District",
  "Polish Hill",
  "Morningside",
  "Wilkinsburg",
  "Edgewood",
  "Swissvale",
  "Forest Hills",
];

const testimonials = [
  {
    name: "Richard M.",
    detail: "12-unit portfolio, Lawrenceville",
    text: "I self-managed for six years before hiring Fort Pitt. Within the first year, my vacancy rate dropped from 12% to under 3% and my net income actually went up — even after management fees. I should have done this years ago.",
    rating: 5,
  },
  {
    name: "Sandra K.",
    detail: "Duplex owner, Squirrel Hill",
    text: "As an out-of-state owner, I needed someone I could trust completely. Fort Pitt sends detailed monthly reports, handles everything from tenant calls to contractor bids, and deposits rent like clockwork. Total peace of mind.",
    rating: 5,
  },
  {
    name: "Dr. James W.",
    detail: "8 units across South Side & Mt. Washington",
    text: "The investment sales team helped me acquire three properties off-market last year at prices well below what was listed publicly. Their market knowledge is exceptional, and managing the transition was seamless.",
    rating: 5,
  },
];

export default function FortPittPropertyGroup() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <header className="bg-[#1A237E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm border-b border-white/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Allegheny County, PA
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Mon&ndash;Fri 8 AM &ndash; 6 PM
              </span>
            </div>
            <a
              href="tel:4125550845"
              className="flex items-center gap-1.5 font-semibold hover:text-[#FF8F00] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (412) 555-0845
            </a>
          </div>

          {/* Main nav */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF8F00] rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight leading-tight">
                  Fort Pitt Property Group
                </div>
                <div className="text-xs text-white/60 tracking-widest uppercase">
                  Property Management
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#services"
                className="hover:text-[#FF8F00] transition-colors"
              >
                Services
              </a>
              <a
                href="#owners-tenants"
                className="hover:text-[#FF8F00] transition-colors"
              >
                Owners & Tenants
              </a>
              <a
                href="#areas"
                className="hover:text-[#FF8F00] transition-colors"
              >
                Areas
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#FF8F00] transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="bg-[#FF8F00] hover:bg-[#e07e00] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1A237E] text-white pb-20 pt-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Building className="w-4 h-4 text-[#FF8F00]" />
              Protecting Pittsburgh investments since 2008.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Hassle-Free
              <br />
              <span className="text-[#FF8F00]">Property Management</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 font-light mb-2 tracking-tight">
              You own the investment. We handle everything else.
            </p>
            <p className="text-lg text-white/50 mb-8 max-w-xl">
              Full-service property management for residential investors across
              Allegheny County. From tenant placement to financial reporting
              &mdash; 600+ units and counting.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#contact"
                className="bg-[#FF8F00] hover:bg-[#e07e00] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 shadow-lg shadow-[#FF8F00]/20"
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="#services"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                View our services
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF8F00]" />
                <span className="text-sm text-white/70">
                  Licensed & Bonded
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FF8F00]" />
                <span className="text-sm text-white/70">
                  4.9 Stars on Google
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[#FF8F00]" />
                <span className="text-sm text-white/70">600+ Units</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF8F00]" />
                <span className="text-sm text-white/70">
                  PA Broker #RB068741
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF8F00] font-semibold text-sm tracking-widest uppercase mb-2">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A237E] tracking-tight">
              Full-Service Property Management
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Everything your investment property needs &mdash; under one roof.
              No nickel-and-diming, no surprise fees, no excuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#FF8F00] transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1A237E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#FF8F00] mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Owners / For Tenants */}
      <section id="owners-tenants" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF8F00] font-semibold text-sm tracking-widest uppercase mb-2">
              Built for Both Sides
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A237E] tracking-tight">
              Owners & Tenants
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Great property management means everyone wins. Happy tenants stay
              longer, and longer tenancies mean better returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Owners */}
            <div className="bg-[#1A237E] rounded-2xl p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FF8F00] rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Owners</h3>
                  <p className="text-white/50 text-sm">
                    Maximize returns, minimize headaches
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {ownerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8F00] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#FF8F00] hover:bg-[#e07e00] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors mt-8"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* For Tenants */}
            <div className="bg-[#CFD8DC] rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A237E]">
                    For Tenants
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A better rental experience
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {tenantBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1A237E] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:4125550845"
                className="inline-flex items-center gap-2 bg-[#1A237E] hover:bg-[#151c6b] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors mt-8"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Manage */}
      <section id="areas" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF8F00] font-semibold text-sm tracking-widest uppercase mb-2">
              Coverage Area
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A237E] tracking-tight">
              Areas We Manage
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Managing residential properties across Pittsburgh&rsquo;s most
              active rental markets and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {neighborhoods.map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-[#1A237E] shadow-sm border border-gray-100"
              >
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-[#FF8F00]" />
                {area}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            We manage properties throughout Allegheny County. Don&rsquo;t see
            your area? Give us a call.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#1A237E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF8F00] font-semibold text-sm tracking-widest uppercase mb-2">
              Client Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Property Owners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF8F00] fill-[#FF8F00]"
                    />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-sm flex items-center gap-1.5">
                    <Building className="w-3 h-3" />
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-[#FF8F00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Stop managing. Start earning.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free consultation and get a custom management proposal
            for your property &mdash; no obligations, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4125550845"
              className="inline-flex items-center gap-3 bg-[#1A237E] hover:bg-[#151c6b] text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              (412) 555-0845
            </a>
            <a
              href="mailto:info@fortpittpropertygroup.com"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Or email info@fortpittpropertygroup.com &mdash; we respond within
            one business day
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1453] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF8F00] rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">
                    Fort Pitt Property Group
                  </div>
                  <div className="text-xs text-white/50 tracking-widest uppercase">
                    Property Management
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Full-service property management and real estate sales for
                residential investors across Allegheny County since 2008.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF8F00]" />
                  <a
                    href="tel:4125550845"
                    className="hover:text-white transition-colors"
                  >
                    (412) 555-0845
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF8F00]" />
                  <a
                    href="mailto:info@fortpittpropertygroup.com"
                    className="hover:text-white transition-colors"
                  >
                    info@fortpittpropertygroup.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FF8F00] mt-0.5" />
                  <span>
                    436 Forbes Avenue, Suite 300
                    <br />
                    Pittsburgh, PA 15219
                  </span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Tenant Screening & Placement
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Rent Collection
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Maintenance Coordination
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Financial Reporting
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Eviction Management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[#FF8F00]" />
                  Investment Sales
                </li>
              </ul>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-4">
                Credentials
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8F00]" />
                  PA Broker License #RB068741
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8F00]" />
                  Fully Bonded & Insured
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8F00]" />
                  NARPM Member
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8F00]" />
                  Greater Pittsburgh REALTORS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8F00]" />
                  BBB Accredited (A+)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} Fort Pitt Property Group. All
              rights reserved. PA Broker License #RB068741.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="text-white/60 hover:text-white transition-colors"
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
