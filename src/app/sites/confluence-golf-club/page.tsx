import {
  MapPin,
  Calendar,
  Users,
  Trophy,
  Star,
  Phone,
  Clock,
  Utensils,
  ShoppingBag,
  Flag,
  TreePine,
  ChevronRight,
  Mail,
  Mountain,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Confluence Golf Club | Moon Township, PA",
  description:
    "18-hole semi-private golf course overlooking the Ohio River valley. Tee times, memberships, events. Moon Township, PA.",
};

export default function ConfluenceGolfClubPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* ─── HEADER / NAV ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4332]/95 backdrop-blur-sm border-b border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#DAA520] flex items-center justify-center">
              <Flag className="w-5 h-5 text-[#DAA520]" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#FAF9F6] tracking-wide">
                Confluence
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#DAA520]">
                Golf Club
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Course", "Amenities", "Membership", "Events", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#FAF9F6]/80 hover:text-[#DAA520] transition-colors tracking-wide"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <a
            href="#book"
            className="bg-[#DAA520] text-[#1B4332] px-6 py-2.5 text-sm font-bold tracking-wide hover:bg-[#DAA520]/90 transition-colors rounded"
          >
            Book Tee Time
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient simulating a dramatic course landscape */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#2d6b4e] to-[#1B4332]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(218,165,32,0.15),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1B4332] to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-20 opacity-10">
          <TreePine className="w-64 h-64 text-[#DAA520]" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <Mountain className="w-48 h-48 text-[#DAA520]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#DAA520]/60" />
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              Est. 1962
            </span>
            <div className="h-px w-16 bg-[#DAA520]/60" />
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-[#FAF9F6] mb-6 leading-tight">
            Confluence
            <br />
            <span className="text-[#DAA520]">Golf Club</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FAF9F6]/70 mb-4 italic">
            Where three rivers meet the fairway.
          </p>

          <p className="text-base text-[#FAF9F6]/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            An 18-hole championship course carved into the rolling hills of Moon
            Township, overlooking the Ohio River valley. Semi-private
            memberships and daily play available April through November.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="bg-[#DAA520] text-[#1B4332] px-8 py-4 text-base font-bold tracking-wide hover:bg-[#DAA520]/90 transition-colors rounded flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Reserve Your Tee Time
            </a>
            <a
              href="#course"
              className="border border-[#FAF9F6]/30 text-[#FAF9F6] px-8 py-4 text-base tracking-wide hover:border-[#DAA520] hover:text-[#DAA520] transition-colors rounded flex items-center gap-2"
            >
              Explore the Course
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#FAF9F6]/10 pt-10">
            {[
              { label: "Holes", value: "18" },
              { label: "Par", value: "72" },
              { label: "Yards", value: "6,847" },
              { label: "Since", value: "1962" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#DAA520]">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSE OVERVIEW ─── */}
      <section id="course" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              The Course
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1B4332] mt-4 mb-6">
              Championship Caliber
            </h3>
            <p className="text-lg text-[#2C2C2C]/60 max-w-2xl mx-auto leading-relaxed">
              Designed by Robert Trent Jones Sr. and refined over six decades,
              our layout rewards precision and punishes complacency. Elevated
              tees frame panoramic views of the Ohio River while strategic
              bunkering demands thoughtful club selection on every approach.
            </p>
          </div>

          {/* Scorecard-style stats */}
          <div className="bg-[#1B4332] rounded-2xl p-10 md:p-14 text-[#FAF9F6]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { label: "Par", value: "72", sub: "36 out / 36 in" },
                { label: "Championship", value: "6,847", sub: "yards" },
                { label: "Course Rating", value: "73.2", sub: "USGA" },
                { label: "Slope", value: "131", sub: "rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#DAA520]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#FAF9F6]/80 mt-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-[#FAF9F6]/40 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Tee boxes */}
            <div className="border-t border-[#FAF9F6]/10 pt-8">
              <h4 className="text-sm uppercase tracking-[0.2em] text-[#DAA520] mb-6 text-center">
                Tee Options
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Championship",
                    yards: "6,847",
                    color: "bg-[#1a1a2e]",
                    rating: "73.2 / 131",
                  },
                  {
                    name: "Member",
                    yards: "6,342",
                    color: "bg-blue-800",
                    rating: "71.0 / 126",
                  },
                  {
                    name: "Senior",
                    yards: "5,814",
                    color: "bg-[#FAF9F6]",
                    rating: "68.5 / 119",
                  },
                  {
                    name: "Forward",
                    yards: "5,108",
                    color: "bg-red-700",
                    rating: "70.8 / 122",
                  },
                ].map((tee) => (
                  <div
                    key={tee.name}
                    className="bg-[#FAF9F6]/5 rounded-lg p-4 text-center"
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${tee.color} mx-auto mb-2 border border-[#FAF9F6]/20`}
                    />
                    <p className="text-sm font-semibold">{tee.name}</p>
                    <p className="text-xl font-bold text-[#DAA520] mt-1">
                      {tee.yards}
                    </p>
                    <p className="text-xs text-[#FAF9F6]/40 mt-1">
                      {tee.rating}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature holes */}
            <div className="border-t border-[#FAF9F6]/10 pt-8 mt-8">
              <h4 className="text-sm uppercase tracking-[0.2em] text-[#DAA520] mb-6 text-center">
                Signature Holes
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    hole: "#4",
                    par: "Par 3",
                    yards: "218 yds",
                    name: "The Overlook",
                    desc: "Elevated tee with a 160-foot drop to a peninsula green framed by the river valley. All carry over native fescue.",
                  },
                  {
                    hole: "#11",
                    par: "Par 5",
                    yards: "567 yds",
                    name: "Three Rivers",
                    desc: "A sweeping dogleg left that traces the ridgeline. Eagles reward the bold second shot over the ravine to a shallow, well-bunkered green.",
                  },
                  {
                    hole: "#17",
                    par: "Par 4",
                    yards: "442 yds",
                    name: "The Gauntlet",
                    desc: "Water down the entire left side, fairway bunkers squeezing the right. The approach plays uphill to a two-tiered green with wicked back-to-front slope.",
                  },
                ].map((hole) => (
                  <div
                    key={hole.hole}
                    className="bg-[#FAF9F6]/5 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-[#DAA520]">
                        {hole.hole}
                      </span>
                      <div className="text-right">
                        <span className="text-sm text-[#FAF9F6]/60">
                          {hole.par}
                        </span>
                        <span className="text-sm text-[#FAF9F6]/40 ml-2">
                          {hole.yards}
                        </span>
                      </div>
                    </div>
                    <h5 className="text-lg font-semibold mb-2">{hole.name}</h5>
                    <p className="text-sm text-[#FAF9F6]/50 leading-relaxed">
                      {hole.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AMENITIES ─── */}
      <section id="amenities" className="py-24 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              Amenities
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#FAF9F6] mt-4 mb-6">
              Beyond the Fairway
            </h3>
            <p className="text-lg text-[#FAF9F6]/50 max-w-2xl mx-auto leading-relaxed">
              A complete golf experience from first swing to final toast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Flag className="w-8 h-8" />,
                title: "The Course",
                features: [
                  "18 holes, par 72",
                  "Bentgrass greens & fairways",
                  "Full driving range with grass tees",
                  "Short game practice area",
                  "GPS-equipped cart fleet",
                  "Walking encouraged",
                ],
              },
              {
                icon: <Utensils className="w-8 h-8" />,
                title: "The Grill Room",
                features: [
                  "Casual dining with river views",
                  "Scratch kitchen, local sourcing",
                  "Craft beer & bourbon selection",
                  "Patio seating overlooking #18",
                  "Open for lunch & dinner",
                  "Sunday brunch (members)",
                ],
              },
              {
                icon: <ShoppingBag className="w-8 h-8" />,
                title: "Pro Shop",
                features: [
                  "PGA-certified professionals",
                  "Club fitting & repair",
                  "Premium brand apparel",
                  "Custom lesson packages",
                  "Demo day events",
                  "Junior golf programs",
                ],
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Events & Outings",
                features: [
                  "Banquet space for 200 guests",
                  "Corporate tournament packages",
                  "Wedding receptions",
                  "Dedicated event coordinator",
                  "Custom catering menus",
                  "A/V & presentation setup",
                ],
              },
            ].map((amenity) => (
              <div
                key={amenity.title}
                className="bg-[#FAF9F6]/5 rounded-xl p-8 border border-[#FAF9F6]/10 hover:border-[#DAA520]/40 transition-colors"
              >
                <div className="text-[#DAA520] mb-5">{amenity.icon}</div>
                <h4 className="text-xl font-bold text-[#FAF9F6] mb-4">
                  {amenity.title}
                </h4>
                <ul className="space-y-2.5">
                  {amenity.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#FAF9F6]/60"
                    >
                      <CheckCircle className="w-4 h-4 text-[#DAA520]/60 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP TIERS ─── */}
      <section id="membership" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              Membership
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1B4332] mt-4 mb-6">
              Join the Club
            </h3>
            <p className="text-lg text-[#2C2C2C]/60 max-w-2xl mx-auto leading-relaxed">
              Three membership tiers designed for every level of commitment.
              All members enjoy preferred tee times, Grill Room privileges, and
              reciprocal play at partner courses throughout western Pennsylvania.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: "Individual",
                price: "$2,400",
                period: "/year",
                highlight: false,
                features: [
                  "Unlimited green fees",
                  "Preferred tee time booking (3 days)",
                  "10% pro shop discount",
                  "Grill Room charging privileges",
                  "GHIN handicap included",
                  "Member guest rates",
                  "Access to club tournaments",
                ],
              },
              {
                tier: "Family",
                price: "$3,800",
                period: "/year",
                highlight: true,
                features: [
                  "Everything in Individual",
                  "Spouse & dependents under 23",
                  "Preferred tee time booking (5 days)",
                  "15% pro shop discount",
                  "Junior golf clinics included",
                  "Pool & fitness center access",
                  "Two complimentary guest passes/month",
                  "Sunday brunch reservation priority",
                ],
              },
              {
                tier: "Corporate",
                price: "$8,500",
                period: "/year",
                highlight: false,
                features: [
                  "Four named members",
                  "Preferred tee time booking (7 days)",
                  "20% pro shop discount",
                  "One complimentary outing per year (up to 24)",
                  "Dedicated event coordinator",
                  "Banquet room priority booking",
                  "Branded scorecards & tee markers",
                  "Client entertainment concierge",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-xl p-8 border-2 transition-shadow ${
                  plan.highlight
                    ? "bg-[#1B4332] text-[#FAF9F6] border-[#DAA520] shadow-2xl scale-105"
                    : "bg-white text-[#2C2C2C] border-[#2C2C2C]/10 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-[#DAA520] text-[#1B4332] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h4
                  className={`text-xl font-bold text-center mb-2 ${plan.highlight ? "text-[#FAF9F6]" : "text-[#1B4332]"}`}
                >
                  {plan.tier}
                </h4>
                <div className="text-center mb-6">
                  <span
                    className={`text-5xl font-bold ${plan.highlight ? "text-[#DAA520]" : "text-[#1B4332]"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-[#FAF9F6]/60" : "text-[#2C2C2C]/50"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-[#FAF9F6]/70" : "text-[#2C2C2C]/60"}`}
                    >
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-[#DAA520]" : "text-[#1B4332]/60"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className={`block text-center py-3 rounded font-bold text-sm tracking-wide transition-colors ${
                    plan.highlight
                      ? "bg-[#DAA520] text-[#1B4332] hover:bg-[#DAA520]/90"
                      : "bg-[#1B4332] text-[#FAF9F6] hover:bg-[#1B4332]/90"
                  }`}
                >
                  Inquire About {plan.tier}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#2C2C2C]/40 mt-10">
            Initiation fee waived for 2026 season. Monthly payment plans
            available. Contact the membership office for details.
          </p>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section id="events" className="py-24 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              Events
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#FAF9F6] mt-4 mb-6">
              Host at Confluence
            </h3>
            <p className="text-lg text-[#FAF9F6]/50 max-w-2xl mx-auto leading-relaxed">
              From shotgun-start corporate outings to black-tie receptions,
              our events team delivers seamless execution against the backdrop
              of the Ohio River valley.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10" />,
                title: "Corporate Outings",
                desc: "Full-service tournament management for groups of 16 to 144. Custom formats, branded materials, on-course beverage service, and post-round awards reception in the banquet hall.",
                details: [
                  "Shotgun or tee-time formats",
                  "Custom scorecards & signage",
                  "On-course contests (closest-to-pin, long drive)",
                  "Catered lunch & dinner options",
                ],
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Charity Tournaments",
                desc: "We have hosted over 60 charity events since 2010, collectively raising more than $2.4 million for local and national causes. Our team handles registration, scoring, and sponsorship fulfillment.",
                details: [
                  "Online registration portal",
                  "Sponsor package coordination",
                  "Live leaderboard & awards",
                  "Tax-deductible receipt management",
                ],
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Private Celebrations",
                desc: "Wedding receptions, rehearsal dinners, milestone birthdays, and retirement celebrations in our banquet space accommodating up to 200 guests with panoramic river views.",
                details: [
                  "Indoor & terrace reception options",
                  "In-house catering with custom menus",
                  "Full bar & sommelier service",
                  "A/V, lighting & decor coordination",
                ],
              },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-[#FAF9F6]/5 rounded-xl p-8 border border-[#FAF9F6]/10"
              >
                <div className="text-[#DAA520] mb-5">{event.icon}</div>
                <h4 className="text-2xl font-bold text-[#FAF9F6] mb-4">
                  {event.title}
                </h4>
                <p className="text-sm text-[#FAF9F6]/50 leading-relaxed mb-6">
                  {event.desc}
                </p>
                <ul className="space-y-2">
                  {event.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-[#FAF9F6]/60"
                    >
                      <ChevronRight className="w-3 h-3 text-[#DAA520]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#book"
              className="inline-flex items-center gap-2 border border-[#DAA520] text-[#DAA520] px-8 py-3 rounded text-sm font-bold tracking-wide hover:bg-[#DAA520] hover:text-[#1B4332] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Request Event Proposal
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#DAA520] text-xs uppercase tracking-[0.4em]">
              Testimonials
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1B4332] mt-4 mb-6">
              Member Voices
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "I have played courses up and down the East Coast, and Confluence consistently delivers conditions that rival clubs at three times the price. The greens are immaculate and the staff treats you like family.",
                name: "Tom Callahan",
                title: "Member since 2014",
                handicap: "8.2 HCP",
              },
              {
                quote:
                  "We held our company outing here for the third year running. The events team is unbelievably organized — from registration to the awards dinner, everything was handled. Our clients always ask to come back.",
                name: "Sandra Voss",
                title: "Regional VP, Allegheny Financial Group",
                handicap: "Corporate Member",
              },
              {
                quote:
                  "My daughter had her wedding reception in the banquet room last September. The sunset over the river, the food, the service — it was perfect. Half the guests did not even know it was a golf club.",
                name: "Richard Muir",
                title: "Member since 2008",
                handicap: "14.6 HCP",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-8 border border-[#2C2C2C]/5 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-[#DAA520] fill-[#DAA520]"
                    />
                  ))}
                </div>
                <p className="text-[#2C2C2C]/70 leading-relaxed mb-6 text-sm italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-[#2C2C2C]/5 pt-4">
                  <p className="font-bold text-[#1B4332]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#2C2C2C]/50">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-[#DAA520] mt-1">
                    {testimonial.handicap}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: EXPERIENCE CONFLUENCE ─── */}
      <section
        id="book"
        className="py-24 bg-gradient-to-br from-[#1B4332] to-[#2d6b4e] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(218,165,32,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#DAA520]/60" />
            <Award className="w-6 h-6 text-[#DAA520]" />
            <div className="h-px w-16 bg-[#DAA520]/60" />
          </div>

          <h3 className="text-4xl md:text-6xl font-bold text-[#FAF9F6] mb-6">
            Experience Confluence
          </h3>
          <p className="text-xl text-[#FAF9F6]/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your tee time today and discover why Confluence has been western
            Pennsylvania&apos;s premier semi-private club for over sixty years.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+17245551962"
              className="bg-[#DAA520] text-[#1B4332] px-8 py-4 text-base font-bold tracking-wide hover:bg-[#DAA520]/90 transition-colors rounded flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (724) 555-1962
            </a>
            <a
              href="mailto:teetimes@confluencegolfclub.com"
              className="border border-[#FAF9F6]/30 text-[#FAF9F6] px-8 py-4 text-base tracking-wide hover:border-[#DAA520] hover:text-[#DAA520] transition-colors rounded flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Book Online
            </a>
          </div>

          {/* Quick info cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Daily Tee Times",
                value: "6:00 AM - 5:30 PM",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                label: "Season",
                value: "April 1 - November 15",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "Location",
                value: "Moon Township, PA",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-[#FAF9F6]/5 rounded-lg p-4 border border-[#FAF9F6]/10"
              >
                <div className="text-[#DAA520] flex justify-center mb-2">
                  {info.icon}
                </div>
                <p className="text-xs uppercase tracking-wider text-[#FAF9F6]/40">
                  {info.label}
                </p>
                <p className="text-sm font-semibold text-[#FAF9F6] mt-1">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="contact" className="bg-[#2C2C2C] py-16 border-t border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#DAA520] flex items-center justify-center">
                  <Flag className="w-4 h-4 text-[#DAA520]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#FAF9F6]">
                    Confluence
                  </h4>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#DAA520]">
                    Golf Club
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#FAF9F6]/40 leading-relaxed italic">
                Where three rivers meet the fairway.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-sm font-bold text-[#FAF9F6] uppercase tracking-wider mb-4">
                Contact
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-[#FAF9F6]/50">
                  <MapPin className="w-4 h-4 text-[#DAA520] mt-0.5 shrink-0" />
                  <span>
                    1200 Confluence Drive
                    <br />
                    Moon Township, PA 15108
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#FAF9F6]/50">
                  <Phone className="w-4 h-4 text-[#DAA520] shrink-0" />
                  (724) 555-1962
                </li>
                <li className="flex items-center gap-2 text-sm text-[#FAF9F6]/50">
                  <Mail className="w-4 h-4 text-[#DAA520] shrink-0" />
                  info@confluencegolfclub.com
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h5 className="text-sm font-bold text-[#FAF9F6] uppercase tracking-wider mb-4">
                Hours & Season
              </h5>
              <ul className="space-y-2 text-sm text-[#FAF9F6]/50">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#DAA520] shrink-0" />
                  Pro Shop: 6:00 AM - 7:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#DAA520] shrink-0" />
                  Grill Room: 11:00 AM - 9:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#DAA520] shrink-0" />
                  Season: April 1 - November 15
                </li>
                <li className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-[#DAA520] shrink-0" />
                  First tee: 6:00 AM daily
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-sm font-bold text-[#FAF9F6] uppercase tracking-wider mb-4">
                Quick Links
              </h5>
              <ul className="space-y-2">
                {[
                  "Book Tee Time",
                  "Membership Inquiry",
                  "Event Inquiry",
                  "Course Conditions",
                  "Pro Shop",
                  "Gift Cards",
                  "Employment",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#FAF9F6]/50 hover:text-[#DAA520] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FAF9F6]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#FAF9F6]/30">
              &copy; 2026 Confluence Golf Club. All rights reserved. Moon
              Township, Pennsylvania.
            </p>
            <p className="text-xs text-[#FAF9F6]/20">
              A{" "}
              <a
                href="https://kielywebdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520]/40 hover:text-[#DAA520] transition-colors"
              >
                Kiely Web Design
              </a>{" "}
              production
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
