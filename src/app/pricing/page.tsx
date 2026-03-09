"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, stagger } from "@/lib/animations";

const designTiers = [
  {
    name: "Starter",
    price: "$3,000",
    priceSuffix: "–$5,000",
    desc: "Perfect for small businesses that need a clean, modern online presence.",
    features: [
      "3–5 page custom website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "2-week turnaround",
      "Full source code delivered",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    priceSuffix: "–$10,000",
    desc: "For businesses ready for a serious online upgrade with advanced features.",
    features: [
      "5–10 page custom website",
      "Custom design from scratch",
      "Content management system",
      "Content migration",
      "SEO optimization",
      "Analytics integration",
      "4–6 week turnaround",
      "Full source code delivered",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$10,000",
    priceSuffix: "–$20,000",
    desc: "Full-service build with ecommerce, integrations, and brand strategy.",
    features: [
      "10+ page custom website",
      "Ecommerce integration",
      "Third-party integrations",
      "Brand strategy & consultation",
      "Advanced animations",
      "Performance optimization",
      "6–12 week turnaround",
      "Full source code delivered",
    ],
    popular: false,
  },
];

const monthlyPlans = [
  {
    name: "Basic Hosting",
    price: "$49",
    features: [
      "Managed hosting",
      "SSL certificate",
      "Daily backups",
      "Uptime monitoring",
    ],
  },
  {
    name: "Care Plan",
    price: "$149",
    features: [
      "Everything in Basic",
      "Security scanning",
      "Monthly updates",
      "1 hour of edits/mo",
      "Priority email support",
    ],
  },
  {
    name: "Growth Plan",
    price: "$299",
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
  { name: "Drone Photography (exteriors & aerials)", price: "$300–$800" },
  { name: "Drone Video (30–60s promo)", price: "$500–$1,500" },
  { name: "Golf Course Flyover (per hole)", price: "$150–$350" },
  { name: "Full 18-Hole Flyover Package", price: "$2,700–$5,000" },
  { name: "AI Voice Agent (24/7 phone answering)", price: "$397–$697/mo" },
  { name: "AI Chatbot (website assistant)", price: "$197–$397/mo" },
  { name: "Ecommerce Integration", price: "$3,000–$10,000" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brg-dark text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
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

      {/* Design Packages */}
      <section className="py-24 bg-cream">
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
                  className={`h-full relative ${
                    tier.popular
                      ? "border-brg shadow-lg scale-[1.02]"
                      : "border-warm-gray/50"
                  } bg-white`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burnt-orange text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-brg-dark">
                      {tier.name}
                    </h3>
                    <div className="mt-4 mb-2">
                      <span className="text-3xl font-bold text-brg-dark">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground text-lg">
                        {tier.priceSuffix}
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
                        buttonVariants(),
                        "w-full",
                        tier.popular
                          ? "bg-brg hover:bg-brg-light text-cream"
                          : "bg-brg-dark/10 hover:bg-brg-dark/20 text-brg-dark"
                      )}
                    >
                      Get Started
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
                <Card className="h-full border-warm-gray/50 bg-cream/50">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-brg-dark">
                      {plan.name}
                    </h3>
                    <div className="mt-4 mb-6">
                      <span className="text-3xl font-bold text-brg-dark">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-brg mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
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
            className="space-y-4"
          >
            {addons.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                className="flex items-center justify-between py-4 border-b border-warm-gray/50"
              >
                <span className="text-foreground">{addon.name}</span>
                <span className="font-semibold text-brg-dark whitespace-nowrap ml-4">
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
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm mb-6">
              Ad-hoc support outside of a plan is available at $125/hour.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-burnt-orange hover:bg-burnt-orange-light text-white px-8"
              )}
            >
              Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
