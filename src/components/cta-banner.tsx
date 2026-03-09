"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  eyebrow?: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
  variant?: "dark" | "light" | "accent";
}

export function CtaBanner({
  eyebrow,
  heading,
  description,
  cta,
  href,
  variant = "dark",
}: CtaBannerProps) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  return (
    <section
      className={cn(
        "py-16 relative overflow-hidden",
        isDark && "bg-brg-dark text-cream grain-overlay",
        isAccent && "bg-gradient-to-r from-brg-dark to-brg text-cream",
        !isDark && !isAccent && "bg-cream"
      )}
    >
      {isDark && <div className="absolute inset-0 bg-grid-pattern-light" />}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-serif text-2xl md:text-3xl font-bold mb-4",
              !isDark && !isAccent && "text-brg-dark"
            )}
          >
            {heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={cn(
              "text-base leading-relaxed mb-6 max-w-xl mx-auto",
              isDark || isAccent ? "text-cream/60" : "text-muted-foreground"
            )}
          >
            {description}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href={href}
              className={cn(
                buttonVariants({ size: "lg" }),
                isDark || isAccent
                  ? "bg-burnt-orange hover:bg-burnt-orange-light text-white shadow-lg shadow-burnt-orange/20"
                  : "bg-brg hover:bg-brg-light text-cream"
              )}
            >
              {cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
