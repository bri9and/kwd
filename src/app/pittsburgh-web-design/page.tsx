"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Star,
  Globe,
  Code2,
  Camera,
  Shield,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const localBenefits = [
  {
    title: "We Know Pittsburgh",
    desc: "Born and raised in the Steel City. We understand the local market, local customers, and what Pittsburgh businesses need to stand out online.",
  },
  {
    title: "Face-to-Face Available",
    desc: "While we work remotely, we're always available for in-person meetings in the Greater Pittsburgh area. Coffee's on us.",
  },
  {
    title: "Local Portfolio",
    desc: "Check out the Pittsburgh-area businesses we've already helped. Real sites, real results, right in your backyard.",
  },
  {
    title: "Supporting Local Economy",
    desc: "When you hire KWD, your money stays in Pittsburgh. We're a small business helping small businesses grow.",
  },
];

const pittsburghClients = [
  { name: "Pittsburgh North Golf Club", type: "Golf Course" },
  { name: "My Family Memory", type: "Web Application" },
  { name: "Rental Helper", type: "Property Management" },
];

const neighborhoods = [
  "Downtown", "Strip District", "Lawrenceville", "Shadyside",
  "Squirrel Hill", "South Side", "North Shore", "Oakland",
  "Mt. Lebanon", "Cranberry Township", "Wexford", "Monroeville",
  "Robinson Township", "Moon Township", "Butler", "Gibsonia",
];

export default function PittsburghWebDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-burnt-orange/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-cream/5 border border-cream/10 rounded-full px-4 py-1.5 mb-6"
            >
              <MapPin className="h-3.5 w-3.5 text-burnt-orange" />
              <span className="text-cream/70 text-sm">Pittsburgh, PA</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              Web Design in
              <br />
              <span className="text-burnt-orange-light">Pittsburgh, PA</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Local web design studio building modern, hand-coded websites for
              Pittsburgh businesses. No templates, no lock-in — just clean code
              and personal attention from a fellow Pittsburgher.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Local */}
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
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Local Advantage
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Why hire a local web designer?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {localBenefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-brg-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services for Pittsburgh */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
                >
                  Our Services
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl md:text-4xl font-bold text-brg-dark mb-6"
                >
                  What we build for
                  <br />
                  Pittsburgh businesses.
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4">
                  {[
                    { icon: Globe, text: "Custom websites for restaurants, shops, and service businesses" },
                    { icon: Camera, text: "Aerial drone photography of your Pittsburgh property" },
                    { icon: Code2, text: "Ecommerce stores with payment processing" },
                    { icon: Shield, text: "Managed hosting with security and daily backups" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brg/5 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-brg" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={scaleUp}>
                <Card className="border-warm-gray/50 bg-cream/50">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-brg-dark mb-4">
                      Pittsburgh Clients
                    </h3>
                    <div className="space-y-4">
                      {pittsburghClients.map((client) => (
                        <div
                          key={client.name}
                          className="flex items-center justify-between py-3 border-b border-warm-gray/30 last:border-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium text-brg-dark text-sm">
                              {client.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {client.type}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className="h-3 w-3 fill-burnt-orange text-burnt-orange"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/#work"
                      className="inline-flex items-center text-sm text-brg hover:text-brg-light mt-4 font-medium"
                    >
                      See all projects <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Service Area
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Serving Greater Pittsburgh.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-3"
            >
              We work with businesses across the Pittsburgh metro area and beyond.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {neighborhoods.map((area) => (
              <motion.span
                key={area}
                variants={scaleUp}
                className="px-4 py-2 rounded-lg bg-white border border-warm-gray/50 text-sm text-brg-dark hover:border-brg/20 hover:shadow-sm transition-all"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
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
              Investment
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark mb-6"
            >
              Pittsburgh-friendly pricing.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Quality web design doesn&apos;t have to cost a fortune. Our packages
              start at <strong className="text-brg-dark">$1,650</strong> for a
              custom 3-5 page website — less than most agencies charge for a
              consultation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-brg/20 text-brg hover:bg-brg/5"
                )}
              >
                View All Pricing
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white shadow-lg shadow-burnt-orange/20"
                )}
              >
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl" />
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
              Ready to upgrade your
              <br />
              Pittsburgh business online?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed mb-8"
            >
              Let&apos;s talk about your website. Free consultation, no
              pressure, no sales pitch — just an honest conversation about
              what your business needs.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white text-base px-8 shadow-lg shadow-burnt-orange/20"
                )}
              >
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
