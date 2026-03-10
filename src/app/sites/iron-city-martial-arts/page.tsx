import type { Metadata } from "next";
import {
  Swords,
  Shield,
  Users,
  Clock,
  Star,
  MapPin,
  Phone,
  Award,
  Flame,
  Heart,
  ChevronRight,
  Target,
  Trophy,
  Dumbbell,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Iron City Martial Arts | Lawrenceville, Pittsburgh",
  description:
    "BJJ, Muay Thai, boxing in Lawrenceville. First week free. Kids & adult programs. Founded by a Pitt wrestling alum. Call (412) 555-0612.",
};

/* ─── Data ──────────────────────────────────────────────────────────── */

const programs = [
  {
    name: "Brazilian Jiu-Jitsu",
    desc: "Ground game fundamentals through advanced competition technique. Gi and no-gi classes daily.",
    icon: Swords,
  },
  {
    name: "Muay Thai",
    desc: "The art of eight limbs. Clinch work, kicks, elbows, and knees drilled with Thai-style pad rounds.",
    icon: Flame,
  },
  {
    name: "Boxing",
    desc: "Footwork, head movement, and heavy bag work. Sharpen your hands whether you compete or not.",
    icon: Target,
  },
  {
    name: "Kids Program",
    desc: "Ages 6-14. Build discipline, confidence, and anti-bullying skills in a safe, structured environment.",
    icon: Users,
  },
  {
    name: "Women's Self-Defense",
    desc: "Practical techniques drawn from BJJ and Krav Maga. No experience needed — just show up.",
    icon: Shield,
  },
  {
    name: "Competition Team",
    desc: "For members ready to test themselves. Tournament prep, advanced sparring, and strength programming.",
    icon: Trophy,
  },
];

const coaches = [
  {
    name: "Coach Mike Radovic",
    specialty: "Brazilian Jiu-Jitsu & Wrestling",
    credentials:
      "4x PA State Wrestling Champion, Pitt D1 All-American, BJJ Black Belt under Ricardo Almeida",
    icon: Award,
  },
  {
    name: "Coach Dani Torres",
    specialty: "Muay Thai & Kickboxing",
    credentials:
      "Former WBC Muaythai ranked contender, 23-4 professional record, ISSA Certified Trainer",
    icon: Flame,
  },
  {
    name: "Coach Ray \"The Bull\" Kowalski",
    specialty: "Boxing & Conditioning",
    credentials:
      "Golden Gloves champion (2016, 2018), trained under Emanuel Steward lineage, CPR/AED certified",
    icon: Dumbbell,
  },
];

const schedule: { day: string; classes: string[] }[] = [
  {
    day: "Monday",
    classes: [
      "6:00 AM — Open Mat",
      "10:00 AM — BJJ Fundamentals",
      "5:30 PM — Muay Thai",
      "7:00 PM — BJJ All Levels",
    ],
  },
  {
    day: "Tuesday",
    classes: [
      "6:00 AM — Boxing Conditioning",
      "10:00 AM — Women's Self-Defense",
      "4:30 PM — Kids Program",
      "6:00 PM — Boxing",
    ],
  },
  {
    day: "Wednesday",
    classes: [
      "6:00 AM — Open Mat",
      "10:00 AM — BJJ Fundamentals",
      "5:30 PM — Muay Thai",
      "7:00 PM — Competition Team",
    ],
  },
  {
    day: "Thursday",
    classes: [
      "6:00 AM — Boxing Conditioning",
      "10:00 AM — BJJ Drills",
      "4:30 PM — Kids Program",
      "6:00 PM — Muay Thai Sparring",
    ],
  },
  {
    day: "Friday",
    classes: [
      "6:00 AM — Open Mat",
      "10:00 AM — BJJ All Levels",
      "5:00 PM — Boxing",
      "6:30 PM — BJJ Advanced",
    ],
  },
  {
    day: "Saturday",
    classes: [
      "9:00 AM — Competition Team",
      "10:30 AM — Kids Program",
      "12:00 PM — Open Mat",
    ],
  },
];

const pricing = [
  {
    tier: "Drop-In",
    price: "$25",
    period: "per class",
    features: [
      "Any single class",
      "No commitment",
      "Gear rental included",
      "Great for visitors",
    ],
    highlight: false,
  },
  {
    tier: "Monthly Unlimited",
    price: "$149",
    period: "/mo",
    features: [
      "Unlimited classes",
      "Open mat access",
      "Locker included",
      "Cancel anytime",
    ],
    highlight: true,
  },
  {
    tier: "Annual",
    price: "$1,299",
    period: "/yr",
    features: [
      "Everything in Monthly",
      "2 months free",
      "Priority competition slots",
      "Free gear discount (15%)",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "I walked in 40 pounds overweight with zero fight experience. A year later I competed in my first BJJ tournament and won silver. This gym changed my life.",
    name: "Marcus T.",
    detail: "Member since 2022",
  },
  {
    quote:
      "As a woman training here, I've never once felt out of place. The coaches are respectful, the culture is legit, and the self-defense skills are real.",
    name: "Alexis R.",
    detail: "Women's Self-Defense & BJJ",
  },
  {
    quote:
      "My 10-year-old son went from shy and unfocused to confident and disciplined. Coach Mike treats every kid like they matter. Best money I've ever spent.",
    name: "Dave K.",
    detail: "Kids Program parent",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function IronCityMartialArtsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans antialiased">
      {/* ── Header / Nav ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur border-b border-[#B22222]/30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Swords className="h-7 w-7 text-[#B22222]" />
            <span className="text-xl font-extrabold tracking-tight uppercase">
              Iron City{" "}
              <span className="text-[#B22222]">Martial Arts</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#F5F5F5]/70">
            <a href="#programs" className="hover:text-[#FFD700] transition-colors">
              Programs
            </a>
            <a href="#coaches" className="hover:text-[#FFD700] transition-colors">
              Coaches
            </a>
            <a href="#schedule" className="hover:text-[#FFD700] transition-colors">
              Schedule
            </a>
            <a href="#pricing" className="hover:text-[#FFD700] transition-colors">
              Pricing
            </a>
          </nav>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
          >
            Start Free Trial
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a0a0a] to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(178,34,34,0.15),_transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-center">
          <p className="text-[#FFD700] font-bold uppercase tracking-[0.25em] text-sm mb-6">
            Lawrenceville, Pittsburgh
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6">
            Train Like
            <br />
            <span className="text-[#B22222]">Your Life</span>
            <br />
            Depends on It
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5]/60 font-light max-w-2xl mx-auto mb-4">
            BJJ. Muay Thai. Boxing. 6,000 sq ft of mat space.
            <br className="hidden md:block" />
            No ego. Just work.
          </p>
          <p className="text-[#FFD700] font-bold text-lg tracking-wide uppercase mb-10">
            Forged in the &apos;Burgh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white text-lg font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              <Flame className="h-5 w-5" />
              First Week Free
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 border-2 border-[#F5F5F5]/20 hover:border-[#FFD700] text-[#F5F5F5]/80 hover:text-[#FFD700] text-lg font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              View Programs
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "6,000", label: "Sq Ft Facility" },
              { value: "500+", label: "Active Members" },
              { value: "12+", label: "Years Training" },
              { value: "87", label: "Tournament Medals" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-[#FFD700]">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#F5F5F5]/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ──────────────────────────────────────────────── */}
      <section id="programs" className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[#B22222] font-bold uppercase tracking-[0.2em] text-sm text-center mb-3">
            What We Teach
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center tracking-tight mb-16">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.name}
                className="group border border-[#F5F5F5]/10 hover:border-[#B22222]/60 bg-[#0D0D0D] p-8 transition-colors"
              >
                <p.icon className="h-10 w-10 text-[#B22222] mb-5 group-hover:text-[#FFD700] transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                  {p.name}
                </h3>
                <p className="text-[#F5F5F5]/50 leading-relaxed text-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coaches ───────────────────────────────────────────────── */}
      <section id="coaches" className="py-24 bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[#B22222] font-bold uppercase tracking-[0.2em] text-sm text-center mb-3">
            World-Class Instruction
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center tracking-tight mb-16">
            Meet the Coaches
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((c) => (
              <div
                key={c.name}
                className="relative border border-[#F5F5F5]/10 bg-[#111111] overflow-hidden"
              >
                {/* Accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#B22222] to-[#FFD700]" />

                <div className="p-8">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-full bg-[#B22222]/20 border-2 border-[#B22222]/40 flex items-center justify-center mb-6">
                    <c.icon className="h-9 w-9 text-[#B22222]" />
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wide mb-1">
                    {c.name}
                  </h3>
                  <p className="text-[#FFD700] text-sm font-semibold uppercase tracking-wider mb-4">
                    {c.specialty}
                  </p>
                  <p className="text-[#F5F5F5]/50 text-sm leading-relaxed">
                    {c.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule Preview ──────────────────────────────────────── */}
      <section id="schedule" className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[#B22222] font-bold uppercase tracking-[0.2em] text-sm text-center mb-3">
            Train on Your Time
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center tracking-tight mb-4">
            Weekly Schedule
          </h2>
          <p className="text-center text-[#F5F5F5]/40 text-sm mb-16 max-w-lg mx-auto">
            Classes run Monday through Saturday. Doors open 15 minutes before
            each session. Open mat is free for all active members.
          </p>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-6 min-w-[800px] gap-px bg-[#F5F5F5]/5">
              {schedule.map((day) => (
                <div key={day.day} className="bg-[#0D0D0D]">
                  <div className="bg-[#B22222]/90 px-4 py-3 text-center">
                    <p className="text-sm font-bold uppercase tracking-wider">
                      {day.day}
                    </p>
                  </div>
                  <div className="p-4 space-y-3">
                    {day.classes.map((cls, i) => (
                      <div
                        key={i}
                        className="text-xs text-[#F5F5F5]/60 leading-relaxed border-l-2 border-[#FFD700]/30 pl-3"
                      >
                        {cls}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[#B22222] font-bold uppercase tracking-[0.2em] text-sm text-center mb-3">
            Invest in Yourself
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center tracking-tight mb-16">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.tier}
                className={`relative border p-8 text-center ${
                  p.highlight
                    ? "border-[#FFD700] bg-[#111111]"
                    : "border-[#F5F5F5]/10 bg-[#111111]"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#0D0D0D] text-xs font-bold uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
                  {p.tier}
                </h3>
                <p className="mb-1">
                  <span className="text-4xl font-black text-[#FFD700]">
                    {p.price}
                  </span>
                  <span className="text-[#F5F5F5]/40 text-sm ml-1">
                    {p.period}
                  </span>
                </p>

                <ul className="mt-8 space-y-3 text-left">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[#F5F5F5]/60"
                    >
                      <Star className="h-4 w-4 text-[#B22222] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`mt-8 block text-center text-sm font-bold uppercase tracking-wider px-6 py-3 transition-colors ${
                    p.highlight
                      ? "bg-[#B22222] hover:bg-[#8B1A1A] text-white"
                      : "border border-[#F5F5F5]/20 hover:border-[#B22222] text-[#F5F5F5]/80 hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[#B22222] font-bold uppercase tracking-[0.2em] text-sm text-center mb-3">
            Real Members, Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center tracking-tight mb-16">
            Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-[#F5F5F5]/10 bg-[#0D0D0D] p-8"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[#FFD700] fill-[#FFD700]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#F5F5F5]/60 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-[#F5F5F5]/30 text-xs uppercase tracking-wider">
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        id="cta"
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#B22222] via-[#8B1A1A] to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,215,0,0.1),_transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Flame className="h-12 w-12 text-[#FFD700] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Your First Week
            <br />
            Is on Us
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            No contracts. No pressure. Walk in, train hard, and decide if Iron
            City is home. All programs included during your trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14125550612"
              className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#e6c200] text-[#0D0D0D] text-lg font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (412) 555-0612
            </a>
            <a
              href="mailto:info@ironcitymma.com"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white text-lg font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0a0a] border-t border-[#F5F5F5]/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Swords className="h-6 w-6 text-[#B22222]" />
                <span className="text-lg font-extrabold uppercase tracking-tight">
                  Iron City <span className="text-[#B22222]">MA</span>
                </span>
              </div>
              <p className="text-[#F5F5F5]/30 text-sm leading-relaxed">
                Pittsburgh&apos;s premier martial arts academy. BJJ, Muay Thai,
                and boxing for all levels. Founded by a Pitt D1 wrestling alum.
              </p>
            </div>

            {/* Location & Hours */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">
                Location &amp; Hours
              </h4>
              <div className="space-y-3 text-sm text-[#F5F5F5]/40">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#B22222] mt-0.5 shrink-0" />
                  <span>
                    4517 Butler Street
                    <br />
                    Lawrenceville, Pittsburgh PA 15201
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-[#B22222] mt-0.5 shrink-0" />
                  <span>
                    Mon&ndash;Fri: 6:00 AM &ndash; 9:00 PM
                    <br />
                    Saturday: 9:00 AM &ndash; 2:00 PM
                    <br />
                    Sunday: Closed
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-[#B22222] mt-0.5 shrink-0" />
                  <a
                    href="tel:+14125550612"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    (412) 555-0612
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-[#F5F5F5]/10 hover:border-[#B22222] flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5 text-[#F5F5F5]/40 hover:text-[#B22222]" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 border border-[#F5F5F5]/10 hover:border-[#B22222] flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5 text-[#F5F5F5]/40 hover:text-[#B22222]" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 border border-[#F5F5F5]/10 hover:border-[#B22222] flex items-center justify-center transition-colors"
                >
                  <Youtube className="h-5 w-5 text-[#F5F5F5]/40 hover:text-[#B22222]" />
                </a>
              </div>

              <p className="mt-6 text-[#F5F5F5]/20 text-xs">
                <Heart className="h-3 w-3 inline mr-1 text-[#B22222]" />
                Built by{" "}
                <a
                  href="https://kielywebdesign.com"
                  className="hover:text-[#FFD700] transition-colors underline underline-offset-2"
                >
                  Kiely Web Design
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#F5F5F5]/5 text-center text-[#F5F5F5]/15 text-xs">
            &copy; {new Date().getFullYear()} Iron City Martial Arts. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
