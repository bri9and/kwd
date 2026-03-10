"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Globe,
  Paintbrush,
  ShieldCheck,
  Camera,
  ArrowRight,
  Monitor,
  Smartphone,
  Code2,
  Quote,
  Lightbulb,
  ExternalLink,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Zap,
  Heart,
  ChevronDown,
  Star,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, fadeIn, scaleUp, slideLeft, slideRight, stagger, staggerSlow } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BrowserMockup } from "@/components/browser-mockup";

/* ── Data ── */

const services = [
  {
    icon: Paintbrush,
    title: "Web Design",
    desc: "Custom-built sites that look modern and load fast. No templates, no page builders — clean, hand-written code.",
    color: "text-brg",
  },
  {
    icon: Globe,
    title: "Managed Hosting",
    desc: "SSL, daily backups, DDoS protection, and uptime monitoring. We handle the infrastructure so you don't have to.",
    color: "text-brg",
  },
  {
    icon: ShieldCheck,
    title: "Security & Support",
    desc: "Malware scanning, firewall protection, and ongoing maintenance. Your site stays safe and up to date.",
    color: "text-brg",
  },
  {
    icon: Camera,
    title: "Drone Photography",
    desc: "FAA Part 107 certified aerial photography and video. Perfect for golf courses, real estate, and event venues.",
    color: "text-brg",
  },
  {
    icon: Code2,
    title: "Ecommerce",
    desc: "Online stores that convert. Product catalogs, payment processing, and inventory management built in.",
    color: "text-brg",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Network, systems, cloud, and AI consulting. We help you plan, build, and optimize your technology infrastructure.",
    color: "text-brg",
  },
];

const portfolio = [
  {
    name: "Pittsburgh North Golf Club",
    url: "pittsburghnorthgc.com",
    category: "Golf Course",
    desc: "Full course website with tee time integration and membership portal.",
  },
  {
    name: "Kowalski & Sons Plumbing",
    url: "kowalskiplumbing.com",
    href: "/sites/kowalski-sons-plumbing",
    category: "Plumbing",
    desc: "Family-owned plumbing since 1974. Emergency service, drain cleaning, and bathroom remodeling across Allegheny County.",
  },
  {
    name: "Steel City Electric Co.",
    url: "steelcityelectric.com",
    href: "/sites/steel-city-electric",
    category: "Electrical",
    desc: "Licensed electrical contractors. Residential wiring, EV chargers, generators, and commercial buildouts.",
  },
  {
    name: "Ridgeline Roofing & Exteriors",
    url: "ridgelineroofing.com",
    href: "/sites/ridgeline-roofing",
    category: "Roofing",
    desc: "GAF Master Elite certified. Shingle and metal roofing, storm damage repair, siding and gutters.",
  },
  {
    name: "Mon Valley Pest Solutions",
    url: "monvalleypest.com",
    href: "/sites/mon-valley-pest",
    category: "Pest Control",
    desc: "Eco-friendly pest control for the Mon Valley and South Hills. Termites, rodents, mosquitoes, and wildlife.",
  },
  {
    name: "Confluence Golf Club",
    url: "confluencegolfclub.com",
    href: "/sites/confluence-golf-club",
    category: "Golf Course",
    desc: "Semi-private 18-hole course in Moon Township. Tee times, memberships, events, and a full-service clubhouse.",
  },
  {
    name: "Iron City Martial Arts",
    url: "ironcitymartialarts.com",
    href: "/sites/iron-city-martial-arts",
    category: "Martial Arts",
    desc: "BJJ, Muay Thai, and boxing in Lawrenceville. Kids and adult programs with first week free.",
  },
  {
    name: "Three Rivers Pickleball Club",
    url: "3riverspickleball.com",
    href: "/sites/three-rivers-pickleball",
    category: "Sports & Rec",
    desc: "12 indoor courts, pro shop, and craft beer lounge. Open play, leagues, and tournaments in Robinson Township.",
  },
  {
    name: "Allegheny Heritage Homes",
    url: "alleghenyheritagehomes.com",
    href: "/sites/allegheny-heritage-homes",
    category: "Home Builder",
    desc: "Custom homes on your lot. In-house architect, energy-efficient construction, and fixed-price contracts.",
  },
  {
    name: "Fort Pitt Property Group",
    url: "fortpittproperty.com",
    href: "/sites/fort-pitt-property",
    category: "Property Mgmt",
    desc: "Full-service property management. 600+ units, 98% occupancy. Tenant placement, maintenance, and reporting.",
  },
  {
    name: "Belmont Interior Design Studio",
    url: "belmontdesignstudio.com",
    href: "/sites/belmont-interior-design",
    category: "Interior Design",
    desc: "Boutique residential design in Shadyside. Kitchens, living spaces, and whole-home renovations with Pittsburgh character.",
  },
  {
    name: "My Family Memory",
    url: "myfamilymemory.com",
    category: "Web Application",
    desc: "Digital platform for preserving and sharing family stories and memories.",
  },
  {
    name: "WeatherMin",
    url: "weathermin.org",
    category: "Non-Profit",
    desc: "Weather monitoring organization with real-time data visualization.",
  },
  {
    name: "Rental Helper",
    url: "rental-helper.com",
    category: "SaaS",
    desc: "Property management tool for landlords and tenants.",
  },
  {
    name: "Vote for Charlie",
    url: "voteforcharlie.org",
    category: "Campaign",
    desc: "Political campaign website with donor engagement and event scheduling.",
  },
  {
    name: "107 Certified",
    url: "107certified.me",
    category: "Professional",
    desc: "FAA drone certification resources and training portal.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We talk about your business, your goals, and what you need. No jargon, no pressure — just an honest conversation.",
    icon: Users,
  },
  {
    step: "02",
    title: "Design",
    desc: "You get a custom design mockup to review. We revise until it's exactly right. No compromises.",
    icon: Paintbrush,
  },
  {
    step: "03",
    title: "Build",
    desc: "Hand-coded from scratch using modern technology. Fast, secure, and built to last for years.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We deploy your site, hand over the code, and offer ongoing support. You own everything.",
    icon: Zap,
  },
];

const testimonials = [
  {
    quote:
      "We needed a way to preserve our family's stories before they were lost. Kiely built us something beautiful and simple enough for my 80-year-old mother to use. The whole family contributes now.",
    name: "Sarah M.",
    company: "My Family Memory",
    role: "Founder",
    rating: 5,
  },
  {
    quote:
      "Our old site looked like it was built in 2010. Within three weeks we had a modern, fast site that actually helps tenants find what they need. Maintenance requests dropped 40% because the online form actually works now.",
    name: "David K.",
    company: "Rental Helper",
    role: "Owner",
    rating: 5,
  },
  {
    quote:
      "Brian captured our entire course in stunning aerial footage. The flyover videos on our website have become a real talking point with members and visitors alike. Worth every penny.",
    name: "Tom R.",
    company: "Pittsburgh North GC",
    role: "General Manager",
    rating: 5,
  },
];

const stats = [
  { value: 16, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most projects take 1–4 weeks depending on complexity. A simple 3–5 page site can be done in a week. Larger projects with ecommerce or custom features take 2–4 weeks.",
  },
  {
    q: "Do I own the code when it's done?",
    a: "Yes, 100%. When your site is finished, we deliver the complete source code. It's yours — no lock-in, no proprietary platforms, no monthly fees unless you want hosting and support.",
  },
  {
    q: "What if I already have a website?",
    a: "We handle the full migration. We'll redesign and rebuild your site, move your content, and set up redirects so you don't lose any search engine rankings.",
  },
  {
    q: "Do you work with businesses outside Pittsburgh?",
    a: "Absolutely. While we're based in Pittsburgh, most of our work is done remotely. We've built sites for clients across Pennsylvania and beyond.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern frameworks like Next.js, React, and Tailwind CSS. Your site will be fast, secure, and built with the same tools used by top tech companies.",
  },
  {
    q: "Can you help with SEO?",
    a: "Every site we build includes foundational SEO — proper meta tags, fast load times, mobile responsiveness, and clean code structure. We also offer ongoing SEO optimization as part of our Growth Plan.",
  },
];

const industries = [
  "Golf Courses",
  "Restaurants",
  "Real Estate",
  "Non-Profits",
  "Local Services",
  "Healthcare",
  "Construction",
  "Hospitality",
];

/* ── Counter Component ── */

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    setHasAnimated(true);
    setDisplayValue(0);
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

/* ── FAQ Item ── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className="border-b border-warm-gray/50 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-brg-dark group-hover:text-brg transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-brg/40 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground text-sm leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ── */

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,92,53,0.6)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,90,26,0.12)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-grid-pattern-light" />

        {/* KWD watermark */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
          <span className="font-serif text-[22rem] xl:text-[28rem] font-bold text-cream/[0.02] leading-none tracking-tighter">
            KWD
          </span>
        </div>

        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-6 md:left-12 lg:left-24 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-burnt-orange/40 to-transparent origin-top hidden md:block"
        />

        {/* Floating accent shapes */}
        <div className="absolute top-1/4 right-[20%] w-48 h-48 rounded-full bg-brg/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-[40%] w-64 h-64 rounded-full bg-burnt-orange/8 blur-3xl animate-float-reverse" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-7"
            >
              <motion.h1
                variants={fadeUp}
                className="font-serif font-bold text-cream leading-[1.02] mb-8"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Your website</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-burnt-orange-light mt-1">should work</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">as hard as you do.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-cream/55 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
              >
                We take outdated websites and make them modern. Custom-built,
                hand-coded, and personally delivered. Serving golf courses,
                restaurants, and local businesses across Pittsburgh and beyond.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-burnt-orange hover:bg-burnt-orange-light text-white text-base px-8 shadow-lg shadow-burnt-orange/20 hover:shadow-xl hover:shadow-burnt-orange/30 transition-all duration-300"
                  )}
                >
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
                >
                  See Our Work
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/30 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Custom Code</span>
                </div>
                <span className="hidden sm:inline text-cream/15">|</span>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile First</span>
                </div>
                <span className="hidden sm:inline text-cream/15">|</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure Hosting</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column — stacked geometric cards */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <div className="relative w-full aspect-[4/5]">
                  {/* Back card */}
                  <div className="absolute top-8 right-0 w-[85%] h-[75%] rounded-2xl bg-brg/30 border border-cream/10 backdrop-blur-sm hero-card-back" />
                  {/* Middle card */}
                  <div className="absolute top-4 right-4 w-[85%] h-[75%] rounded-2xl bg-brg/20 border border-cream/8 backdrop-blur-sm hero-card-mid" />
                  {/* Front card */}
                  <div className="absolute top-0 right-8 w-[85%] h-[75%] rounded-2xl bg-gradient-to-br from-cream/5 to-cream/[0.02] border border-cream/10 backdrop-blur-md p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-burnt-orange/20 flex items-center justify-center mb-6">
                        <Code2 className="h-5 w-5 text-burnt-orange" />
                      </div>
                      <p className="font-serif text-cream/80 text-lg font-medium mb-2">Hand-crafted code</p>
                      <p className="text-cream/30 text-sm leading-relaxed">Every site built from scratch. No templates, no shortcuts.</p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-brg border-2 border-brg-dark flex items-center justify-center text-cream text-xs font-bold">P</div>
                        <div className="w-8 h-8 rounded-full bg-burnt-orange border-2 border-brg-dark flex items-center justify-center text-cream text-xs font-bold">M</div>
                        <div className="w-8 h-8 rounded-full bg-brg-light border-2 border-brg-dark flex items-center justify-center text-cream text-xs font-bold">R</div>
                      </div>
                      <span className="text-cream/30 text-xs">Happy clients</span>
                    </div>
                  </div>
                  {/* Floating accent orb */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-burnt-orange/20 blur-xl animate-pulse-glow" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-cream/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 bg-brg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleUp}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-cream mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-cream/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brg/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-burnt-orange" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                What We Do
              </p>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark max-w-xl"
            >
              Everything your business needs online.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-4 max-w-2xl"
            >
              From initial design to ongoing support, we handle every aspect of
              your digital presence so you can focus on running your business.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={cn(
                  i === 0 && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div className={cn(
                  "group relative h-full rounded-xl border transition-all duration-500 overflow-hidden",
                  i === 0
                    ? "bg-brg-dark text-cream border-brg-dark hover:border-brg"
                    : "bg-white border-warm-gray/50 hover:border-brg/30 hover:shadow-xl"
                )}>
                  {/* Large background number */}
                  <span className={cn(
                    "absolute -right-4 -top-6 font-serif text-[8rem] font-bold leading-none select-none pointer-events-none transition-opacity duration-500",
                    i === 0 ? "text-cream/[0.03]" : "text-brg/[0.03] group-hover:text-brg/[0.06]"
                  )}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-burnt-orange transition-all duration-500 rounded-full" />
                  <div className={cn("relative p-8", i === 0 && "md:p-10")}>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
                      i === 0
                        ? "bg-cream/10 group-hover:bg-cream/15"
                        : "bg-brg/5 group-hover:bg-brg/10"
                    )}>
                      <service.icon className={cn("h-6 w-6", i === 0 ? "text-burnt-orange-light" : "text-brg")} />
                    </div>
                    <h3 className={cn(
                      "font-serif text-xl font-semibold mb-3",
                      i === 0 ? "text-cream md:text-2xl" : "text-brg-dark"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      i === 0 ? "text-cream/60 md:max-w-md" : "text-muted-foreground"
                    )}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-brg/20 text-brg hover:bg-brg/5"
              )}
            >
              View Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Industries Marquee ── */}
      <section className="py-8 bg-white border-y border-warm-gray/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industries, ...industries, ...industries, ...industries].map((ind, i) => (
            <span
              key={i}
              className="mx-8 text-sm uppercase tracking-[0.2em] text-brg/20 font-medium"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-burnt-orange/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-burnt-orange" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                Featured Project
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              <motion.div variants={fadeUp}>
                <a
                  href="https://pittsburghnorthgc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <BrowserMockup url="pittsburghnorthgc.com" className="border-cream/10 bg-brg/10 shadow-2xl shadow-black/20">
                    <div className="aspect-video bg-gradient-to-br from-brg/20 to-brg/5 relative">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Globe className="h-10 w-10 text-cream/15 group-hover:text-cream/30 transition-colors mb-2" />
                        <span className="text-cream/20 text-xs font-medium">Live Preview</span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="text-xs uppercase tracking-wider text-burnt-orange font-medium bg-burnt-orange/10 px-2 py-1 rounded">
                          Golf Course
                        </span>
                      </div>
                    </div>
                  </BrowserMockup>
                </a>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Pittsburgh North Golf Club
                </h3>
                <p className="text-cream/60 leading-relaxed mb-6">
                  A complete website rebuild for one of Western Pennsylvania&apos;s
                  premier golf courses. Custom tee time integration, membership portal,
                  and aerial drone footage of all 18 holes bring the course to life online.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream/5 rounded-lg p-4 border border-cream/10">
                    <p className="text-burnt-orange font-serif text-2xl font-bold">18</p>
                    <p className="text-cream/40 text-xs mt-1">Holes Filmed</p>
                  </div>
                  <div className="bg-cream/5 rounded-lg p-4 border border-cream/10">
                    <p className="text-burnt-orange font-serif text-2xl font-bold">2 wks</p>
                    <p className="text-cream/40 text-xs mt-1">Delivered</p>
                  </div>
                </div>
                <a
                  href="https://pittsburghnorthgc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-cream/20 text-cream hover:bg-cream/10"
                  )}
                >
                  Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="work" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-burnt-orange/50" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                Selected Work
              </p>
              <div className="h-px w-12 bg-burnt-orange/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark"
            >
              Sites we&apos;ve built.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-4 max-w-xl mx-auto"
            >
              Real projects for real businesses. Every site is hand-coded,
              mobile-responsive, and built to perform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolio.map((project) => (
              <motion.div key={project.url} variants={fadeUp}>
                <a
                  href={(project as { href?: string }).href ?? `https://${project.url}`}
                  {...((project as { href?: string }).href ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="block group"
                >
                  <Card className="card-shine group h-full border-warm-gray/50 hover:border-brg/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-cream/30">
                    {/* Placeholder visual for the card top */}
                    <div className="h-36 bg-gradient-to-br from-brg/5 to-brg/10 rounded-t-lg flex items-center justify-center border-b border-warm-gray/30">
                      <div className="flex flex-col items-center gap-2">
                        <Globe className="h-8 w-8 text-brg/20 group-hover:text-brg/40 transition-colors" />
                        <span className="text-xs text-brg/30 font-medium">{project.url}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-burnt-orange font-medium bg-burnt-orange/5 px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-brg-dark mb-2 group-hover:text-brg transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-brg/20 text-brg hover:bg-brg/5"
              )}
            >
              Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-burnt-orange/40" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                How It Works
              </p>
              <div className="h-px w-12 bg-burnt-orange/40" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Simple, transparent process.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/50 mt-4 max-w-xl mx-auto"
            >
              No surprises, no runaround. Here&apos;s exactly how we work together
              from start to finish.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step) => (
              <motion.div key={step.step} variants={fadeUp} className="relative group">
                <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-burnt-orange/5 group-hover:bg-burnt-orange/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-4xl font-bold text-burnt-orange/30">
                      {step.step}
                    </span>
                    <step.icon className="h-5 w-5 text-burnt-orange/50" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process timeline connector (desktop) */}
          <div className="hidden lg:block mt-12">
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-burnt-orange/30" />
              <div className="w-2 h-2 rounded-full bg-burnt-orange/40" />
              <div className="h-0.5 flex-1 bg-burnt-orange/20" />
              <div className="w-2 h-2 rounded-full bg-burnt-orange/40" />
              <div className="h-0.5 flex-1 bg-burnt-orange/20" />
              <div className="w-2 h-2 rounded-full bg-burnt-orange/40" />
              <div className="h-0.5 flex-1 bg-burnt-orange/20" />
              <div className="w-2 h-2 rounded-full bg-burnt-orange/40" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-burnt-orange/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-burnt-orange" />
                  <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                    Why KWD
                  </p>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-brg-dark mb-8"
                >
                  Not your average
                  <br />
                  web agency.
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brg/5 flex items-center justify-center shrink-0">
                      <Heart className="h-5 w-5 text-brg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brg-dark mb-1">Personal Attention</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        One person handles your entire project from start to finish. No account managers, no handoffs, no surprises.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brg/5 flex items-center justify-center shrink-0">
                      <Code2 className="h-5 w-5 text-brg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brg-dark mb-1">You Own the Code</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        No proprietary platforms. No lock-in. When it&apos;s done, you get the full source code. It&apos;s yours forever.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brg/5 flex items-center justify-center shrink-0">
                      <Zap className="h-5 w-5 text-brg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brg-dark mb-1">Modern Technology</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Built with the same frameworks used by Fortune 500 companies. Your site will be fast, secure, and future-proof.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brg/5 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-brg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brg-dark mb-1">Below Market Rates</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Agency-quality work at freelancer prices. No overhead means we pass the savings on to you.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Visual element */}
              <motion.div variants={scaleUp} className="relative hidden lg:block">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Decorative background */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brg/5 to-burnt-orange/5 border border-warm-gray/30" />
                  <div className="absolute inset-4 rounded-2xl bg-white border border-warm-gray/50 shadow-lg flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-brg/10 flex items-center justify-center mb-6">
                      <span className="font-serif text-3xl font-bold text-brg">KWD</span>
                    </div>
                    <p className="text-center text-brg-dark font-serif text-xl font-semibold mb-2">
                      Boutique Quality
                    </p>
                    <p className="text-center text-muted-foreground text-sm mb-6">
                      Every detail matters. Every line of code is intentional.
                    </p>
                    <div className="w-full space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-brg shrink-0" />
                        <span className="text-muted-foreground">Hand-coded, no templates</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-brg shrink-0" />
                        <span className="text-muted-foreground">Lightning-fast load times</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-brg shrink-0" />
                        <span className="text-muted-foreground">SEO optimized from day one</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-brg shrink-0" />
                        <span className="text-muted-foreground">Ongoing support available</span>
                      </div>
                    </div>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-burnt-orange/30 rounded-tr-lg" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-burnt-orange/30 rounded-bl-lg" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-burnt-orange/50" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                Client Feedback
              </p>
              <div className="h-px w-12 bg-burnt-orange/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark"
            >
              What our clients say.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 bg-cream/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-burnt-orange text-burnt-orange" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-burnt-orange/20 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 text-sm">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-warm-gray/30 pt-4">
                      <p className="font-semibold text-sm text-brg-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-burnt-orange/50" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                Common Questions
              </p>
              <div className="h-px w-12 bg-burnt-orange/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark"
            >
              Frequently asked.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm mb-4">
              Still have questions?
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-brg/20 text-brg hover:bg-brg/5"
              )}
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Built With ── */}
      <section className="py-16 bg-white border-t border-warm-gray/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-8"
            >
              Built with industry-leading technology
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
            >
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-brg/25 hover:text-brg/60 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About / CTA ── */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-brg/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-burnt-orange/40" />
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                About
              </p>
              <div className="h-px w-12 bg-burnt-orange/40" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold mb-8"
            >
              Built by hand,
              <br />
              delivered with care.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed mb-6"
            >
              Kiely Web Design is a one-person studio based in Pittsburgh, PA. Every
              project is handled personally — from the first conversation to the
              final line of code. No account managers, no junior handoffs, no
              surprises.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed mb-10"
            >
              When your site is done, you get the code. It&apos;s yours. Full
              ownership, no lock-in. If you want ongoing hosting and support,
              we offer that too — but it&apos;s always your choice.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white text-base px-8 shadow-lg shadow-burnt-orange/20"
                )}
              >
                Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
