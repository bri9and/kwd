"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  MapPin,
  Shield,
  ArrowRight,
  CheckCircle2,
  Plane,
  Eye,
  Mountain,
  Building,
  TreePine,
  Waves,
  ChevronDown,
  Zap,
  Clock,
  FileVideo,
} from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";

const droneServices = [
  {
    icon: Camera,
    title: "Aerial Photography",
    desc: "High-resolution aerial photos of your property, business, or event. Perfect for website hero images, marketing materials, and social media.",
    price: "$200/hr",
    features: [
      "4K resolution photos",
      "Multiple angles & altitudes",
      "Same-day delivery available",
      "Commercial usage rights",
    ],
  },
  {
    icon: Video,
    title: "Promotional Video",
    desc: "Cinematic 30-60 second aerial video with professional editing. Ideal for landing pages, social ads, and Google Business profiles.",
    price: "$1,000",
    features: [
      "Professional color grading",
      "Licensed background music",
      "Optimized for web & social",
      "2 rounds of revisions",
    ],
  },
  {
    icon: MapPin,
    title: "Golf Course Flyovers",
    desc: "Raw, unedited hole-by-hole aerial flyover footage. Perfect for courses that want to handle their own post-production.",
    price: "$100/hole",
    features: [
      "Individual hole footage",
      "Multiple flight paths",
      "Raw unedited files",
      "Quick turnaround",
    ],
  },
  {
    icon: Shield,
    title: "Full 18-Hole Package",
    desc: "Complete course flyover including clubhouse, facilities, and all 18 holes with full post-production.",
    price: "$3,600",
    features: [
      "All 18 holes + clubhouse",
      "Hole-by-hole graphics (yardage, par, handicap)",
      "Professional editing & music",
      "Web, social & broadcast formats",
    ],
  },
];

const industries = [
  { name: "Golf Courses", icon: TreePine },
  { name: "Restaurants & Venues", icon: Building },
  { name: "Real Estate", icon: Building },
  { name: "Hotels & Resorts", icon: Building },
  { name: "Construction Sites", icon: Mountain },
  { name: "Event Venues", icon: Eye },
  { name: "Farms & Vineyards", icon: TreePine },
  { name: "Marinas & Waterfront", icon: Waves },
];

const droneSpecs = [
  { label: "Camera", value: "4K Ultra HD" },
  { label: "Sensor", value: "1-inch CMOS" },
  { label: "Photo Resolution", value: "20MP" },
  { label: "Video", value: "4K/60fps" },
  { label: "Flight Time", value: "40 min" },
  { label: "Certification", value: "FAA Part 107" },
];

const processSteps = [
  {
    icon: Clock,
    title: "Book & Plan",
    desc: "Tell us about your property and goals. We'll schedule a shoot and plan flight paths.",
  },
  {
    icon: Plane,
    title: "Fly & Capture",
    desc: "We arrive on-site, set up, and capture your property from the best angles.",
  },
  {
    icon: FileVideo,
    title: "Edit & Deliver",
    desc: "Professional editing, color grading, and delivery in all formats you need.",
  },
];

const droneFaqs = [
  {
    q: "Are you FAA certified?",
    a: "Yes. We hold a current FAA Part 107 Remote Pilot Certificate, which is required for all commercial drone operations in the United States. We also carry liability insurance.",
  },
  {
    q: "What if the weather is bad on shoot day?",
    a: "We monitor weather closely and will reschedule at no charge if conditions aren't safe or won't produce good results. We never fly in rain, high winds, or poor visibility.",
  },
  {
    q: "How quickly can I get my photos/video?",
    a: "Aerial photography is typically delivered same-day or next-day. Edited video projects take 3-5 business days. Rush delivery is available for an additional fee.",
  },
  {
    q: "Can you fly over my business in a city?",
    a: "In most cases, yes. We're experienced with FAA airspace authorization (LAANC) for controlled airspace. We'll handle all the regulatory requirements.",
  },
  {
    q: "Do I own the footage?",
    a: "Yes. You receive full commercial usage rights to all photos and video. Use them on your website, social media, print materials — anywhere you want.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-gray/50 last:border-0">
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
    </div>
  );
}

export default function DronePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-burnt-orange/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full bg-brg/20 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-cream/5 border border-cream/10 rounded-full px-4 py-1.5 mb-6"
            >
              <Shield className="h-3.5 w-3.5 text-burnt-orange" />
              <span className="text-cream/70 text-sm">FAA Part 107 Certified</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              See your business
              <br />
              <span className="text-burnt-orange-light">from above.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Professional aerial photography and videography that makes your
              website and marketing stand out. Stunning footage that your
              competitors don&apos;t have.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-brg border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="flex items-start gap-4 text-cream"
              >
                <div className="w-10 h-10 rounded-lg bg-cream/5 flex items-center justify-center shrink-0">
                  <step.icon className="h-5 w-5 text-burnt-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-burnt-orange/40 font-mono text-xs">0{i + 1}</span>
                    <h4 className="font-semibold text-sm">{step.title}</h4>
                  </div>
                  <p className="text-cream/50 text-xs mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Aerial content packages.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {droneServices.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 hover:border-brg/20 transition-all duration-300 hover:shadow-lg bg-white group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brg/5 flex items-center justify-center group-hover:bg-brg/10 transition-colors">
                        <service.icon className="h-6 w-6 text-brg" />
                      </div>
                      <span className="text-burnt-orange font-bold text-lg">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-brg-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brg/50 shrink-0" />
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

      {/* Gallery Placeholder */}
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
              Sample Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              What aerial content looks like.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { label: "Course Overview", aspect: "aspect-video", gradient: "from-brg/20 to-brg/5" },
              { label: "Hole Flyover", aspect: "aspect-square", gradient: "from-brg/15 to-burnt-orange/5" },
              { label: "Clubhouse", aspect: "aspect-square", gradient: "from-brg/10 to-brg/20" },
              { label: "Aerial Pan", aspect: "aspect-video", gradient: "from-burnt-orange/10 to-brg/10" },
              { label: "Property Shot", aspect: "aspect-square", gradient: "from-brg/5 to-brg/15" },
              { label: "Sunset Capture", aspect: "aspect-video", gradient: "from-burnt-orange/15 to-brg/5" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                className={cn(
                  "rounded-xl bg-gradient-to-br overflow-hidden relative group cursor-pointer",
                  item.aspect,
                  item.gradient,
                  i === 0 && "md:col-span-2",
                  i === 3 && "md:col-span-2",
                )}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Camera className="h-8 w-8 text-brg/20 group-hover:text-brg/40 transition-colors mb-2" />
                  <span className="text-xs text-brg/30 font-medium">{item.label}</span>
                </div>
                <div className="absolute inset-0 bg-brg/0 group-hover:bg-brg/5 transition-colors" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              Sample imagery. Your property will look even better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-cream relative">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
                >
                  Equipment
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl md:text-4xl font-bold text-brg-dark mb-6"
                >
                  Professional-grade gear.
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed mb-6"
                >
                  We fly the latest commercial drones with stabilized 4K cameras,
                  obstacle avoidance, and extended flight times. Every shoot
                  produces crisp, cinematic footage.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed"
                >
                  All flights are conducted by an FAA Part 107 certified pilot
                  with commercial liability insurance. Your property and people
                  are always safe.
                </motion.p>
              </div>

              <motion.div variants={scaleUp}>
                <Card className="border-warm-gray/50 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-brg-dark mb-4">
                      Specs at a Glance
                    </h3>
                    <div className="space-y-4">
                      {droneSpecs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-center justify-between text-sm border-b border-warm-gray/30 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium text-brg-dark">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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
              Industries
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Who we fly for.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={scaleUp}
                className="text-center py-6 px-4 rounded-xl border border-warm-gray/50 bg-cream/30 hover:border-brg/20 hover:shadow-md transition-all duration-300 group"
              >
                <industry.icon className="h-6 w-6 text-brg/30 mx-auto mb-2 group-hover:text-brg/60 transition-colors" />
                <span className="text-sm font-medium text-brg-dark">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Drone */}
      <section className="py-24 bg-brg-dark text-cream relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3">
                The Impact
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Why add drone content?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="text-center">
                <div className="font-serif text-5xl font-bold text-burnt-orange mb-2">
                  84%
                </div>
                <p className="text-cream/50 text-sm leading-relaxed">
                  of consumers say video content convinced them to make a purchase
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="font-serif text-5xl font-bold text-burnt-orange mb-2">
                  80%
                </div>
                <p className="text-cream/50 text-sm leading-relaxed">
                  higher conversion rates on landing pages with video content
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="font-serif text-5xl font-bold text-burnt-orange mb-2">
                  5-15%
                </div>
                <p className="text-cream/50 text-sm leading-relaxed">
                  of total project cost for drone content that massively elevates results
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              className="text-center text-cream/40 text-sm mt-12 max-w-xl mx-auto"
            >
              Most small businesses still use stock photos. Professional aerial
              content is an immediate differentiator that sets you apart from
              every competitor in your market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Common questions.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {droneFaqs.map((faq) => (
              <motion.div key={faq.q} variants={fadeUp}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark mb-4"
            >
              Ready to elevate your marketing?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Book a drone shoot and give your website the aerial content it
              deserves. Available throughout Western Pennsylvania.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white px-8 shadow-lg shadow-burnt-orange/20"
                )}
              >
                Book a Drone Shoot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
