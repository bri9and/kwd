"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brg-dark text-cream relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-grid-pattern-light" />
      <div className="absolute top-1/4 left-[20%] w-64 h-64 rounded-full bg-brg/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-[20%] w-48 h-48 rounded-full bg-burnt-orange/10 blur-3xl animate-float-reverse" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 max-w-lg mx-auto px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="font-serif text-[120px] md:text-[180px] font-bold leading-none text-cream/5 select-none"
        >
          404
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-3xl md:text-4xl font-bold -mt-12 mb-4"
        >
          Page not found.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-cream/50 text-lg mb-8 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-burnt-orange hover:bg-burnt-orange-light text-white px-8"
            )}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
