"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Paintbrush,
    title: "Web Design",
    desc: "Custom-built sites that look modern and load fast. No templates, no page builders — clean, hand-written code.",
  },
  {
    icon: Globe,
    title: "Managed Hosting",
    desc: "SSL, daily backups, DDoS protection, and uptime monitoring. We handle the infrastructure so you don't have to.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Support",
    desc: "Malware scanning, firewall protection, and ongoing maintenance. Your site stays safe and up to date.",
  },
  {
    icon: Camera,
    title: "Drone Photography",
    desc: "FAA Part 107 certified aerial photography and video. Perfect for golf courses, real estate, and event venues.",
  },
  {
    icon: Code2,
    title: "Ecommerce",
    desc: "Online stores that convert. Product catalogs, payment processing, and inventory management built in.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Network, systems, cloud, and AI consulting. We help you plan, build, and optimize your technology infrastructure.",
  },
];

const portfolio = [
  {
    name: "Pittsburgh North Golf Club",
    url: "pittsburghnorthgc.com",
    category: "Golf Course",
    desc: "Full course website with tee time integration and membership portal.",
    color: "from-brg/20 to-brg-dark/30",
  },
  {
    name: "My Family Memory",
    url: "myfamilymemory.com",
    category: "Web Application",
    desc: "Digital platform for preserving and sharing family stories and memories.",
    color: "from-blue-900/20 to-blue-950/30",
  },
  {
    name: "WeatherMin",
    url: "weathermin.org",
    category: "Non-Profit",
    desc: "Weather monitoring organization with real-time data visualization.",
    color: "from-sky-900/20 to-sky-950/30",
  },
  {
    name: "Rental Helper",
    url: "rental-helper.com",
    category: "SaaS",
    desc: "Property management tool for landlords and tenants.",
    color: "from-amber-900/20 to-amber-950/30",
  },
  {
    name: "Vote for Charlie",
    url: "voteforcharlie.org",
    category: "Campaign",
    desc: "Political campaign website with donor engagement and event scheduling.",
    color: "from-red-900/20 to-red-950/30",
  },
  {
    name: "107 Certified",
    url: "107certified.me",
    category: "Professional",
    desc: "FAA drone certification resources and training portal.",
    color: "from-slate-800/20 to-slate-900/30",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We talk about your business, your goals, and what you need. No jargon, no pressure.",
  },
  {
    step: "02",
    title: "Design",
    desc: "You get a custom design mockup to review. We revise until it's exactly right.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Hand-coded from scratch using modern technology. Fast, secure, and built to last.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We deploy your site, hand over the code, and offer ongoing support if you want it.",
  },
];

const testimonials = [
  {
    quote:
      "We needed a way to preserve our family's stories before they were lost. Kiely built us something beautiful and simple enough for my 80-year-old mother to use. The whole family contributes now.",
    name: "Sarah M.",
    company: "My Family Memory",
  },
  {
    quote:
      "Our old site looked like it was built in 2010. Within three weeks we had a modern, fast site that actually helps tenants find what they need. Maintenance requests dropped 40% because the online form actually works now.",
    name: "David K.",
    company: "Rental Helper",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,66,37,0.8)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,90,26,0.15)_0%,_transparent_50%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-6"
          >
            Boutique Web Design Studio
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl font-bold text-cream leading-[1.1] mb-8"
          >
            Your website
            <br />
            <span className="text-burnt-orange-light">should work</span>
            <br />
            as hard as you do.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We take outdated websites and make them modern. Custom-built,
            hand-coded, and personally delivered. Serving golf courses,
            restaurants, and local businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-burnt-orange hover:bg-burnt-orange-light text-white text-base px-8"
              )}
            >
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
            >
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex items-center justify-center gap-8 text-cream/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span>Custom Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile First</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Secure Hosting</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark"
            >
              Everything your business needs online.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 hover:border-brg/20 transition-colors bg-white">
                  <CardContent className="p-8">
                    <service.icon className="h-8 w-8 text-brg mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-brg-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Selected Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark"
            >
              Sites we&apos;ve built.
            </motion.h2>
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
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="h-full border-warm-gray/50 hover:border-brg/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <span className="font-serif text-lg font-bold text-brg-dark/60 group-hover:text-brg-dark transition-colors">
                        {project.url}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-burnt-orange font-medium">
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
      <section id="process" className="py-24 bg-brg-dark text-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Simple, transparent process.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step) => (
              <motion.div key={step.step} variants={fadeUp}>
                <span className="font-serif text-5xl font-bold text-burnt-orange/30">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Client Feedback
            </motion.p>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 bg-white">
                  <CardContent className="p-8">
                    <Quote className="h-6 w-6 text-burnt-orange/40 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-brg-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About / CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-brg-dark mb-8"
            >
              Built by hand,
              <br />
              delivered with care.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              Kiely Web Design is a one-person studio based in Pittsburgh, PA. Every
              project is handled personally — from the first conversation to the
              final line of code. No account managers, no junior handoffs, no
              surprises.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              When your site is done, you get the code. It&apos;s yours. Full
              ownership, no lock-in. If you want ongoing hosting and support,
              we offer that too — but it&apos;s always your choice.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-brg hover:bg-brg-light text-cream text-base px-8"
                )}
              >
                Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
