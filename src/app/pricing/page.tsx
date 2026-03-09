"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Clock,
  Code2,
  Star,
  Zap,
  Calculator,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";

const designTiers = [
  {
    name: "Starter",
    price: "$1,650",
    desc: "Perfect for small businesses that need a clean, modern online presence.",
    features: [
      "3-5 page custom website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "1-week turnaround",
      "Full source code delivered",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,750",
    desc: "For businesses ready for a serious online upgrade with advanced features.",
    features: [
      "5-10 page custom website",
      "Custom design from scratch",
      "Content management system",
      "Content migration",
      "SEO optimization",
      "Analytics integration",
      "2-week turnaround",
      "Full source code delivered",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$5,500",
    desc: "Full-service build with ecommerce, integrations, and brand strategy.",
    features: [
      "10+ page custom website",
      "Ecommerce integration",
      "Third-party integrations",
      "Brand strategy & consultation",
      "Advanced animations",
      "Performance optimization",
      "4-week turnaround",
      "Full source code delivered",
    ],
    popular: false,
  },
];

const monthlyPlans = [
  {
    name: "Basic Hosting",
    price: "$32",
    features: [
      "Managed hosting",
      "SSL certificate",
      "Daily backups",
      "Uptime monitoring",
    ],
  },
  {
    name: "Care Plan",
    price: "$97",
    features: [
      "Everything in Basic",
      "Security scanning",
      "Monthly updates",
      "1 hour of edits/mo",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Growth Plan",
    price: "$195",
    features: [
      "Everything in Care",
      "CDN & DDoS protection",
      "Performance optimization",
      "3 hours of edits/mo",
      "Priority phone support",
      "Monthly analytics report",
    ],
  },
];

const addons = [
  {
    name: "Drone Photography",
    desc: "Exterior and aerial shots",
    price: "$200/hr",
  },
  {
    name: "Drone Video",
    desc: "30-60 second promotional video",
    price: "$1,000",
  },
  {
    name: "Golf Course Flyover",
    desc: "Raw footage, per hole",
    price: "$100/hole",
  },
  {
    name: "Full 18-Hole Package",
    desc: "Clubhouse, facilities, editing, music, graphics",
    price: "$3,600",
  },
  {
    name: "Ecommerce Integration",
    desc: "Online store setup and configuration",
    price: "$1,650-$5,500",
  },
  {
    name: "IT Consulting",
    desc: "Network, systems, cloud, AI",
    price: "$100/hr",
  },
];

const guarantees = [
  {
    icon: Code2,
    title: "You Own the Code",
    desc: "Full source code delivered on completion. No lock-in ever.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We hit our deadlines. If we're late, your next month of hosting is free.",
  },
  {
    icon: Shield,
    title: "30-Day Support",
    desc: "Free bug fixes and adjustments for 30 days after launch.",
  },
];

const estimatorOptions = [
  { label: "Website Size", options: [
    { name: "Small (3-5 pages)", price: 1650 },
    { name: "Medium (5-10 pages)", price: 2750 },
    { name: "Large (10+ pages)", price: 5500 },
  ]},
  { label: "Add Drone Content?", options: [
    { name: "No drone content", price: 0 },
    { name: "Aerial photos ($200)", price: 200 },
    { name: "Promo video ($1,000)", price: 1000 },
    { name: "Full 18-hole package ($3,600)", price: 3600 },
  ]},
  { label: "Monthly Plan?", options: [
    { name: "No monthly plan", price: 0 },
    { name: "Basic Hosting ($32/mo)", price: 32 },
    { name: "Care Plan ($97/mo)", price: 97 },
    { name: "Growth Plan ($195/mo)", price: 195 },
  ]},
];

function ProjectEstimator() {
  const [selections, setSelections] = useState([0, 0, 0]);

  const handleSelect = (groupIdx: number, optionIdx: number) => {
    const next = [...selections];
    next[groupIdx] = optionIdx;
    setSelections(next);
  };

  const oneTime = estimatorOptions[0].options[selections[0]].price +
    estimatorOptions[1].options[selections[1]].price;
  const monthly = estimatorOptions[2].options[selections[2]].price;

  return (
    <div className="bg-cream/50 rounded-xl border border-warm-gray/50 p-8">
      <div className="space-y-8">
        {estimatorOptions.map((group, gi) => (
          <div key={group.label}>
            <p className="text-sm font-medium text-brg-dark mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option, oi) => (
                <button
                  key={option.name}
                  onClick={() => handleSelect(gi, oi)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                    selections[gi] === oi
                      ? "bg-brg text-cream border-brg shadow-md"
                      : "bg-white text-brg-dark border-warm-gray/50 hover:border-brg/30"
                  )}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-warm-gray/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Estimated project cost</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-brg-dark">
                ${oneTime.toLocaleString()}
              </span>
              {monthly > 0 && (
                <span className="text-muted-foreground text-sm">
                  + ${monthly}/mo
                </span>
              )}
            </div>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brg hover:bg-brg-light text-cream"
            )}
          >
            Get Exact Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          This is an estimate only. Final pricing may vary based on project specifics.
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-burnt-orange/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Pricing
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              Transparent pricing.
              <br />
              No surprises.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Every project is custom, but here&apos;s where we start. All code
              is delivered to you on completion — you own everything.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="py-12 bg-brg border-t border-cream/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {guarantees.map((g) => (
              <motion.div
                key={g.title}
                variants={fadeUp}
                className="flex items-start gap-4 text-cream"
              >
                <div className="w-10 h-10 rounded-lg bg-cream/5 flex items-center justify-center shrink-0">
                  <g.icon className="h-5 w-5 text-burnt-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{g.title}</h4>
                  <p className="text-cream/50 text-xs mt-0.5">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Packages */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Web Design Packages
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
              One-time project pricing. No contracts, no lock-in.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {designTiers.map((tier) => (
              <motion.div key={tier.name} variants={fadeUp}>
                <Card
                  className={cn(
                    "h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white relative",
                    tier.popular
                      ? "border-brg shadow-lg ring-1 ring-brg/20"
                      : "border-warm-gray/50 hover:border-brg"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-brg text-cream text-xs font-medium px-3 py-1 rounded-full">
                        <Star className="h-3 w-3 fill-burnt-orange text-burnt-orange" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-brg-dark">
                      {tier.name}
                    </h3>
                    <div className="mt-4 mb-2">
                      <span className="text-4xl font-bold text-brg-dark">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                      {tier.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-brg mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "w-full",
                        tier.popular
                          ? "bg-brg hover:bg-brg-light text-cream"
                          : "bg-brg/5 hover:bg-brg/10 text-brg"
                      )}
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Monthly Plans
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
              Optional hosting and support. Cancel anytime.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {monthlyPlans.map((plan) => (
              <motion.div key={plan.name} variants={fadeUp}>
                <Card
                  className={cn(
                    "h-full transition-all duration-300 hover:shadow-lg",
                    plan.popular
                      ? "border-brg bg-brg/[0.02] shadow-md"
                      : "border-warm-gray/50 bg-cream/50"
                  )}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-semibold text-brg-dark">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="text-xs font-medium text-burnt-orange bg-burnt-orange/5 px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="mt-4 mb-6">
                      <span className="text-3xl font-bold text-brg-dark">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-brg mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full border-brg/20 text-brg hover:bg-brg/5"
                      )}
                    >
                      Choose Plan
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Add-On Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
              Enhance your project with premium features.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {addons.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-warm-gray/50 hover:border-brg/20 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <span className="font-medium text-brg-dark text-sm">
                    {addon.name}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {addon.desc}
                  </p>
                </div>
                <span className="font-semibold text-brg-dark whitespace-nowrap ml-4 text-sm bg-brg/5 px-3 py-1 rounded-lg">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 bg-brg/5 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-brg" />
              <span className="text-sm text-brg-dark font-medium">
                Ad-hoc support outside of a plan: $80/hour
              </span>
            </div>
            <div className="block">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white px-8 shadow-lg shadow-burnt-orange/20"
                )}
              >
                Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Estimator */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-3">
              <Calculator className="h-4 w-4 text-burnt-orange" />
              <span className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium">
                Quick Estimate
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Estimate your project.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-3"
            >
              Select what you need for a rough ballpark. Final pricing after consultation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ProjectEstimator />
          </motion.div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
            >
              Not sure which package is right?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed mb-4"
            >
              Every project is different. Reach out for a free consultation and
              we&apos;ll put together a custom proposal that fits your goals and budget.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-cream/40 text-sm mb-8"
            >
              No commitment required. We&apos;ll give you an honest assessment of what you need.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-cream text-brg-dark hover:bg-cream/90 text-base px-8"
                )}
              >
                Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
