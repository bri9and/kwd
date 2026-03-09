"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Heart,
  MapPin,
  Award,
  Coffee,
  Wrench,
  GraduationCap,
  Camera,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const timeline = [
  {
    year: "2021",
    title: "First Client Website",
    desc: "Built our first professional website for a local Pittsburgh business. Word of mouth did the rest.",
  },
  {
    year: "2022",
    title: "FAA Part 107 Certified",
    desc: "Added aerial drone photography and videography to our service offering.",
  },
  {
    year: "2023",
    title: "Expanded Services",
    desc: "Launched managed hosting plans, ecommerce builds, and IT consulting for small businesses.",
  },
  {
    year: "2024",
    title: "Golf Course Specialty",
    desc: "Became the go-to web designer for golf courses in Western Pennsylvania with aerial flyover packages.",
  },
  {
    year: "2025",
    title: "Growing Strong",
    desc: "Continuing to deliver hand-crafted websites to local businesses that care about their online presence.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Craft Over Volume",
    desc: "We take on a limited number of projects so every client gets our full attention and best work.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "No bloated templates or page builders. Every site is written from scratch with modern, maintainable code.",
  },
  {
    icon: Wrench,
    title: "Honest Work",
    desc: "We tell you what you need, not what makes us the most money. If a simple site is right for you, that's what we'll build.",
  },
  {
    icon: Award,
    title: "Full Ownership",
    desc: "When it's done, it's yours. No lock-in, no proprietary platforms, no monthly surprises.",
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Vercel", category: "Hosting" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-burnt-orange/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              One person.
              <br />
              One vision.
              <br />
              <span className="text-burnt-orange-light">Zero compromises.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Kiely Web Design is a solo operation, and that&apos;s by choice.
              When you hire us, you get the person who designs, codes, and
              deploys your site — not a middleman.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
                >
                  Our Story
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl md:text-4xl font-bold text-brg-dark mb-6"
                >
                  From IT to web design.
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  Before starting Kiely Web Design, I spent years working in IT —
                  building networks, managing systems, and solving complex technical
                  problems for businesses of all sizes. I saw firsthand how many local
                  businesses were held back by outdated, slow, or confusing websites.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  So I started building them better ones. Not with WordPress templates or
                  drag-and-drop builders, but with real code — the same modern frameworks
                  used by tech companies. The difference in speed, reliability, and design
                  quality was immediately obvious to every client.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed"
                >
                  Today, Kiely Web Design serves local businesses, golf courses, and
                  organizations across Western Pennsylvania. Every project gets the same
                  level of personal attention and technical craftsmanship.
                </motion.p>
              </div>

              <motion.div variants={scaleUp}>
                <Card className="border-warm-gray/50 bg-white overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-brg/10 to-brg/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-brg/10 flex items-center justify-center mx-auto mb-3">
                        <Coffee className="h-8 w-8 text-brg" />
                      </div>
                      <p className="text-brg font-serif font-semibold">Brian Kiely</p>
                      <p className="text-brg/60 text-sm">Founder & Developer</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-brg shrink-0" />
                        <span>Pittsburgh, PA</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-brg shrink-0" />
                        <span>IT Background, Self-taught Developer</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Camera className="h-4 w-4 text-brg shrink-0" />
                        <span>FAA Part 107 Certified Drone Pilot</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Code2 className="h-4 w-4 text-brg shrink-0" />
                        <span>5+ Years Professional Experience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
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
              What We Believe
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Our values drive every project.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brg/5 flex items-center justify-center shrink-0">
                    <v.icon className="h-6 w-6 text-brg" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-brg-dark mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
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
              Our Journey
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold"
            >
              How we got here.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-cream/10" />

            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-1 w-4 h-4 rounded-full bg-burnt-orange/60 border-2 border-brg-dark" />
                <span className="text-burnt-orange font-mono text-sm font-medium">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
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
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Technology
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Built with the best tools.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-4 max-w-xl mx-auto"
            >
              We use enterprise-grade technology to build small business websites.
              The result? Sites that are faster, more secure, and more reliable
              than anything built with WordPress or Squarespace.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleUp}
                className="text-center py-6 px-4 rounded-xl bg-white border border-warm-gray/50 hover:border-brg/20 hover:shadow-md transition-all duration-300"
              >
                <p className="font-semibold text-brg-dark">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-white">
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
              The Difference
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              KWD vs. the alternatives.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="overflow-hidden rounded-xl border border-warm-gray/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brg-dark text-cream">
                    <th className="text-left p-4 font-medium"></th>
                    <th className="p-4 font-semibold text-burnt-orange">KWD</th>
                    <th className="p-4 font-medium text-cream/60">Big Agency</th>
                    <th className="p-4 font-medium text-cream/60">DIY Builder</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Custom code", kwd: true, agency: true, diy: false },
                    { feature: "You own the code", kwd: true, agency: false, diy: false },
                    { feature: "Personal attention", kwd: true, agency: false, diy: false },
                    { feature: "Modern tech stack", kwd: true, agency: true, diy: false },
                    { feature: "Fast load times", kwd: true, agency: false, diy: false },
                    { feature: "No monthly lock-in", kwd: true, agency: false, diy: false },
                    { feature: "Drone photography", kwd: true, agency: false, diy: false },
                    { feature: "Under $3,000", kwd: true, agency: false, diy: true },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-cream/50" : "bg-white"}
                    >
                      <td className="p-4 font-medium text-brg-dark">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {row.kwd ? (
                          <span className="text-brg font-bold">&#10003;</span>
                        ) : (
                          <span className="text-muted-foreground">&#8212;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.agency ? (
                          <span className="text-brg/50">&#10003;</span>
                        ) : (
                          <span className="text-muted-foreground">&#8212;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.diy ? (
                          <span className="text-brg/50">&#10003;</span>
                        ) : (
                          <span className="text-muted-foreground">&#8212;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl" />
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
              Ready to work together?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed mb-8"
            >
              Whether you need a brand new website, a redesign, or drone
              photography, we&apos;d love to hear from you. Every conversation starts
              with understanding your goals.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white text-base px-8 shadow-lg shadow-burnt-orange/20"
                )}
              >
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
