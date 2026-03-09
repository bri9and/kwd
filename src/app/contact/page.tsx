"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business: formData.get("business") as string,
      website: formData.get("website") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error silently for now
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-brg-dark text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-burnt-orange text-sm uppercase tracking-[0.25em] font-medium mb-3"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              Let&apos;s build something.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your business and what you&apos;re looking for.
              We&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <Card className="border-warm-gray/50 bg-white">
                  <CardContent className="p-6">
                    <Mail className="h-5 w-5 text-brg mb-3" />
                    <p className="text-sm font-medium text-brg-dark">Email</p>
                    <a
                      href="mailto:hello@kielywebdesign.com"
                      className="text-sm text-muted-foreground hover:text-brg transition-colors"
                    >
                      hello@kielywebdesign.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Card className="border-warm-gray/50 bg-white">
                  <CardContent className="p-6">
                    <MapPin className="h-5 w-5 text-brg mb-3" />
                    <p className="text-sm font-medium text-brg-dark">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Pittsburgh, PA
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every project starts with a conversation. No sales pitch, no
                  pressure — just a real discussion about what you need.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="md:col-span-2"
            >
              {submitted ? (
                <Card className="border-brg/20 bg-white">
                  <CardContent className="p-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-brg/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-5 w-5 text-brg" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brg-dark mb-2">
                      Message sent.
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-warm-gray/50 bg-white">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business">Business Name</Label>
                          <Input
                            id="business"
                            name="business"
                            placeholder="Your business"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Current Website (if any)</Label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="www.example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Tell us about your project *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="What are you looking for? A new site, a redesign, drone photography, something else?"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brg hover:bg-brg-light text-cream"
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
