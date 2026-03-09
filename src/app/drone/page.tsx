"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Video, MapPin, Shield, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";

const droneServices = [
  {
    icon: Camera,
    title: "Aerial Photography",
    desc: "High-resolution aerial photos of your property, business, or event. Perfect for website hero images, marketing materials, and social media.",
    price: "$195–$520",
  },
  {
    icon: Video,
    title: "Promotional Video",
    desc: "Cinematic 30–60 second aerial video with professional editing. Ideal for landing pages, social ads, and Google Business profiles.",
    price: "$325–$975",
  },
  {
    icon: MapPin,
    title: "Golf Course Flyovers",
    desc: "Hole-by-hole aerial flyover footage with yardage, par, and hole information overlays. Give members and visitors a bird's-eye preview of every hole.",
    price: "$200–$400/hole",
  },
  {
    icon: Shield,
    title: "Full 18-Hole Package",
    desc: "Complete course flyover including clubhouse, facilities, and all 18 holes. Professional editing, licensed music, hole-by-hole graphics (yardage, par, handicap), color grading, and delivery optimized for web, social, and broadcast.",
    price: "$5,000–$8,500",
  },
];

const industries = [
  "Golf Courses",
  "Restaurants & Venues",
  "Real Estate",
  "Hotels & Resorts",
  "Construction Sites",
  "Event Venues",
  "Farms & Vineyards",
  "Marinas & Waterfront",
];

export default function DronePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brg-dark text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Drone Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              See your business
              <br />
              from above.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              FAA Part 107 certified aerial photography and videography. We
              capture stunning footage that makes your website and marketing
              stand out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {droneServices.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="h-full border-warm-gray/50 hover:border-brg/20 transition-colors bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <service.icon className="h-8 w-8 text-brg" />
                      <span className="text-burnt-orange font-semibold text-sm">
                        {service.price}
                      </span>
                    </div>
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
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-brg-dark"
            >
              Industries we serve.
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
                key={industry}
                variants={fadeUp}
                className="text-center py-6 px-4 rounded-lg border border-warm-gray/50 bg-cream/50"
              >
                <span className="text-sm font-medium text-brg-dark">
                  {industry}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Drone */}
      <section className="py-24 bg-brg-dark text-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold mb-8"
            >
              Why add drone content?
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-cream/70 text-left max-w-xl mx-auto">
              <p>
                <span className="text-burnt-orange font-semibold">84%</span> of
                consumers say video content convinced them to make a purchase.
              </p>
              <p>
                Landing pages with video see up to{" "}
                <span className="text-burnt-orange font-semibold">80%</span>{" "}
                higher conversion rates.
              </p>
              <p>
                Most small businesses still use stock photos. Professional
                aerial content is an{" "}
                <span className="text-cream font-medium">
                  immediate differentiator
                </span>
                .
              </p>
              <p>
                Adding $500–$1,500 of drone content to a web project is only{" "}
                <span className="text-burnt-orange font-semibold">
                  5–15%
                </span>{" "}
                of the total cost — but massively elevates the final product.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-burnt-orange hover:bg-burnt-orange-light text-white px-8"
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
