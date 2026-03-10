import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
  ChevronRight,
  Flame,
  Building2,
  Bath,
  Construction,
  Award,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Kowalski & Sons Plumbing | Pittsburgh, PA",
  description:
    "Family-owned plumbing since 1974. Emergency service, drain cleaning, water heaters. Serving Allegheny County. Call (412) 555-0147.",
};

const services = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description:
      "Burst pipes, major leaks, and plumbing emergencies. We respond within 60 minutes, 24/7/365.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description:
      "Clogged drains, slow pipes, and sewer backups cleared fast with professional hydro-jetting equipment.",
  },
  {
    icon: Flame,
    title: "Water Heaters",
    description:
      "Tank and tankless installation, repair, and replacement. We service all major brands.",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description:
      "Full bathroom renovations from rough-in to finish. Showers, tubs, vanities, and tile work.",
  },
  {
    icon: Construction,
    title: "Sewer Line",
    description:
      "Sewer line inspection, repair, and trenchless replacement. Camera diagnostics included.",
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    description:
      "Restaurants, offices, and multi-unit buildings. Licensed for commercial projects across PA.",
  },
];

const testimonials = [
  {
    name: "Margaret D.",
    location: "Squirrel Hill",
    text: "Our basement was flooding at 2 AM on a Sunday. Tommy Kowalski was at our door in 40 minutes. They saved our finished basement and didn't gouge us on the price. This family is the real deal.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Mt. Lebanon",
    text: "We've used Kowalski & Sons for three bathroom remodels over the years. Their craftsmanship is outstanding — the tile work looks like it belongs in a magazine. Fair pricing, clean jobsite, always on time.",
    rating: 5,
  },
  {
    name: "Patricia K.",
    location: "Shadyside",
    text: "After two other companies couldn't figure out our recurring drain issue, Kowalski & Sons ran a camera and found the root cause in 20 minutes. Fixed it right the first time. They have a customer for life.",
    rating: 5,
  },
];

const serviceAreas = [
  "Squirrel Hill",
  "Shadyside",
  "Oakland",
  "Lawrenceville",
  "Strip District",
  "Mt. Lebanon",
  "Bethel Park",
  "Upper St. Clair",
  "Ross Township",
  "McCandless",
  "Cranberry Township",
  "Fox Chapel",
  "Monroeville",
  "Penn Hills",
  "Plum Borough",
  "North Hills",
  "South Hills",
  "Downtown Pittsburgh",
];

export default function KowalskiSonsPlumbing() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <header className="bg-[#1B3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm border-b border-white/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                24/7 Emergency Service
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Serving All of Allegheny County
              </span>
            </div>
            <a
              href="tel:4125550147"
              className="flex items-center gap-1.5 font-semibold hover:text-[#D4462A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (412) 555-0147
            </a>
          </div>

          {/* Main nav */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4462A] rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight leading-tight">
                  Kowalski & Sons
                </div>
                <div className="text-xs text-white/60 tracking-widest uppercase">
                  Plumbing
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-[#D4462A] transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-[#D4462A] transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="hover:text-[#D4462A] transition-colors">
                Reviews
              </a>
              <a href="#areas" className="hover:text-[#D4462A] transition-colors">
                Service Areas
              </a>
              <a
                href="tel:4125550147"
                className="bg-[#D4462A] hover:bg-[#b83a23] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1B3A5C] text-white pb-20 pt-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-[#D4462A]" />
              Family-Owned Since 1974
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Pittsburgh&rsquo;s Most Trusted
              <br />
              <span className="text-[#D4462A]">Plumbing Company</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 font-light mb-2 tracking-tight">
              Three generations. One standard.
            </p>
            <p className="text-lg text-white/50 mb-8 max-w-xl">
              From emergency repairs to full bathroom remodels, Kowalski & Sons
              has been keeping Pittsburgh flowing for over 50 years.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:4125550147"
                className="bg-[#D4462A] hover:bg-[#b83a23] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 shadow-lg shadow-[#D4462A]/20"
              >
                <Phone className="w-5 h-5" />
                (412) 555-0147
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  60-minute emergency response &mdash; guaranteed
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4462A]" />
                <span className="text-sm text-white/70">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#D4462A]" />
                <span className="text-sm text-white/70">4.9 Stars on Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4462A]" />
                <span className="text-sm text-white/70">BBB A+ Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#D4462A]" />
                <span className="text-sm text-white/70">PA License #PA089217</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4462A] font-semibold text-sm tracking-widest uppercase mb-2">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From a dripping faucet to a full commercial buildout, we handle it all
              with the same attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#1B3A5C] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#D4462A] transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#D4462A] font-semibold text-sm">
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4462A] font-semibold text-sm tracking-widest uppercase mb-2">
              Why Kowalski & Sons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] tracking-tight">
              Built on Reputation, Not Advertising
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Most of our work comes from referrals. That says everything about how we
              treat our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 50+ Years */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#E8E4DD] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-8 h-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-4xl font-bold text-[#1B3A5C] mb-1">50+</h3>
              <p className="text-lg font-semibold text-[#1B3A5C] mb-3">
                Years of Experience
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stanley Kowalski Sr. started this company in 1974 with a van and a
                handshake. Three generations later, the same values drive every job
                we take on: show up on time, do it right, clean up after yourself.
              </p>
            </div>

            {/* Licensed & Insured */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#E8E4DD] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-8 h-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-4xl font-bold text-[#1B3A5C] mb-1">100%</h3>
              <p className="text-lg font-semibold text-[#1B3A5C] mb-3">
                Licensed & Insured
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fully licensed by the Commonwealth of Pennsylvania. Bonded and
                insured up to $2M. Every technician is a journeyman or master
                plumber &mdash; no subcontractors, no shortcuts.
              </p>
            </div>

            {/* 60-Min Response */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#E8E4DD] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Clock className="w-8 h-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-4xl font-bold text-[#1B3A5C] mb-1">60</h3>
              <p className="text-lg font-semibold text-[#1B3A5C] mb-3">
                Minute Response Time
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plumbing emergencies don&rsquo;t wait, and neither do we. Our
                dispatch team guarantees a technician at your door within 60
                minutes for any emergency call in Allegheny County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4462A] font-semibold text-sm tracking-widest uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What Our Customers Say
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
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/40 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4462A] font-semibold text-sm tracking-widest uppercase mb-2">
              Coverage Area
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] tracking-tight">
              Serving All of Allegheny County
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Based in Pittsburgh with crews dispatched across the county. If
              you&rsquo;re in Allegheny County, we&rsquo;ll be there.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-[#1B3A5C] shadow-sm border border-gray-100"
              >
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-[#D4462A]" />
                {area}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don&rsquo;t see your neighborhood? Call us &mdash; we likely serve your area too.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#D4462A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Need a Plumber? Call Now.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Available 24 hours a day, 7 days a week. No voicemail, no runaround
            &mdash; a real person answers every call.
          </p>
          <a
            href="tel:4125550147"
            className="inline-flex items-center gap-3 bg-white text-[#D4462A] hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6" />
            (412) 555-0147
          </a>
          <p className="text-white/60 text-sm mt-4">
            60-minute response for emergencies &mdash; guaranteed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#D4462A] rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">
                    Kowalski & Sons
                  </div>
                  <div className="text-xs text-white/50 tracking-widest uppercase">
                    Plumbing
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Three generations of master plumbers serving Pittsburgh and
                Allegheny County since 1974.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4462A]" />
                  <a href="tel:4125550147" className="hover:text-white transition-colors">
                    (412) 555-0147
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4462A] mt-0.5" />
                  <span>
                    2847 Carson Street
                    <br />
                    Pittsburgh, PA 15203
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold text-sm tracking-widest uppercase text-white/40 mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="text-white/90">7 AM &ndash; 6 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/90">8 AM &ndash; 2 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/90">Closed</span>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <span className="text-[#D4462A] font-medium">
                    24/7 Emergency Line Always Open
                  </span>
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
                  <CheckCircle className="w-4 h-4 text-[#D4462A]" />
                  PA License #PA089217
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4462A]" />
                  Fully Bonded & Insured
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4462A]" />
                  BBB Accredited (A+)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4462A]" />
                  Allegheny County Certified
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} Kowalski & Sons Plumbing. All
              rights reserved.
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
