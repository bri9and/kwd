import { Phone, MapPin, Mail, Flag, Building2, Target, Trophy, TreePine, GraduationCap, Clock, Users, Calendar } from "lucide-react";

export const metadata = {
  title: "Cranberry Highlands Golf Course | Best Municipal Course in PA | Cranberry Twp, PA",
  description:
    "Premier 18-hole municipal golf course in Cranberry Township, PA. Par 70, 90+ sand bunkers, full practice facility. Resident rates from $32. Call (724) 776-7372.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "Bunker Alley", description: "A 385-yard dogleg right that demands precision off the tee. Seven fairway bunkers line the corridor, funneling your approach toward a heavily guarded green. The sand here is not decorative — it is the defense. Club selection off the tee determines whether you are playing from grass or spending the day in the beach.", stat: "7 bunkers guard the fairway and green" },
  { hole: 8, par: 3, title: "The Gauntlet", description: "At 195 yards, this par 3 plays longer than the card suggests. A quartet of deep bunkers ring the green, leaving no safe miss. The putting surface runs away from you in every direction. Par here is a trophy — bogey is the expected outcome.", stat: "195 yds — four bunkers, no bailout" },
  { hole: 13, par: 5, title: "The Township's Pride", description: "A sweeping 545-yard par 5 with a risk-reward second shot. Lay up short of the cross-bunkers and leave a wedge in, or carry the sand and set up eagle. The green complex is the most dramatic on the course — three tiers, framed by five bunkers and native fescue.", stat: "545 yds, three-tiered green" },
  { hole: 17, par: 4, title: "The Closer's Setup", description: "This 420-yard brute is the number-one handicap hole for good reason. A narrow fairway pinched by bunkers at the 260-yard mark forces a decision: driver and thread the needle, or iron off the tee and face a long-iron approach to a back-to-front sloping green. Most matches are won or lost right here.", stat: "#1 handicap hole — 420 yds" },
];

const rates = [
  { category: "Resident — Weekday", eighteen: "$32", nine: "$22" },
  { category: "Resident — Weekend", eighteen: "$42", nine: "$28" },
  { category: "Non-Resident — Weekday", eighteen: "$42", nine: "$28" },
  { category: "Non-Resident — Weekend", eighteen: "$55", nine: "$35" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$28", nine: "$18" },
  { category: "Junior 17 & Under", eighteen: "$20", nine: "$14" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$18" },
  { label: "Cart — 9 Holes", price: "$12" },
  { label: "Club Rental", price: "$20" },
  { label: "Range Bucket (Lg)", price: "$10" },
];

const coursePhotos = [
  { src: "/sites/cranberry-highlands/course1.jpg", alt: "Cranberry Highlands Golf Course — fairway and bunker view" },
  { src: "/sites/cranberry-highlands/course2.jpg", alt: "Cranberry Highlands Golf Course — green complex with sand traps" },
  { src: "/sites/cranberry-highlands/course3.jpg", alt: "Cranberry Highlands Golf Course — tree-lined fairway" },
  { src: "/sites/cranberry-highlands/course4.jpg", alt: "Cranberry Highlands Golf Course — signature bunker hole" },
];

const pf = "'Playfair Display', serif";

export default function CranberryHighlands() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#042864] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/cranberry-highlands/logo.png" alt="Cranberry Highlands Golf Course" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 2002 &middot; Cranberry Township, Pennsylvania
            </span>
          </div>
          <a href="tel:7247767372" className="hover:text-[#E5C778] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 776-7372
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/cranberry-highlands/hero.jpg" alt="Cranberry Highlands Golf Course — aerial view of bunker-laden fairways" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#042864]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/cranberry-highlands/logo.png" alt="Cranberry Highlands Golf Course" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#E5C778] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Cranberry Township Presents
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            CRANBERRY<br />
            <span className="text-[#E5C778] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Highlands</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            The best municipal golf course in Pennsylvania. 18 holes, 90+ sand bunkers, and a challenge worthy of any golfer brave enough to take it on.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "70" }, { label: "Holes", value: "18" }, { label: "Bunkers", value: "90+" }, { label: "Opened", value: "2002" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7247767372" className="bg-[#A22B38] hover:bg-[#8c2430] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 5601 Freshcorn Rd, Cranberry Twp, PA 16066
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#A22B38] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Cranberry Township Municipal Course &middot; Opened 2002 &middot; 90+ Sand Bunkers
      </div>

      {/* Photo Gallery -- 2x2 */}
      <section className="py-20 bg-white border-b border-[#042864]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#042864]" style={{ fontFamily: pf }}>90+ Bunkers. Zero Mercy.</h2>
            <p className="text-[#042864]/50 text-sm mt-3 max-w-lg mx-auto">
              Every fairway earns respect. Every green demands precision. This is the municipal course that plays like a private club.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coursePhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden group">
                <img src={photo.src} alt={photo.alt} width={1200} height={675} className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Holes */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#042864]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#042864]/15 bg-white p-8 sm:p-10 relative group hover:border-[#E5C778]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#042864]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#A22B38] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#042864]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#042864] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#042864]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#042864]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#A22B38]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#042864]/40 text-sm mt-8 italic">With 90+ bunkers across 18 holes, you will see more sand than a beach vacation.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-white border-y border-[#042864]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Reputation</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#042864] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Cranberry Highlands is the finest municipal golf course in Pennsylvania &mdash; a layout that rivals private clubs with its championship conditioning, strategic bunkering, and immaculate greens.&rdquo;
          </blockquote>
          <p className="text-[#042864]/40 text-sm mt-6">Ranked #1 Municipal Course in PA</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Trophy, label: "#1 Municipal in PA" }, { icon: Target, label: "90+ Sand Bunkers" }, { icon: TreePine, label: "Championship Layout" }, { icon: Building2, label: "Cranberry Township" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#042864]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#042864]/50" />
                </div>
                <span className="text-xs text-[#042864]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#042864]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#042864]/50 text-sm mt-3">Championship golf at municipal prices. Resident discounts for Cranberry Township taxpayers.</p>
          </div>
          <div className="border border-[#042864]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#042864] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#042864] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#042864] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#042864] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#042864]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#042864]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#042864]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#042864]/30 text-xs mt-6 tracking-wide">Season passes and loyalty cards available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Clubhouse — clubhouse.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/cranberry-highlands/clubhouse.jpg" alt="Cranberry Highlands Golf Course clubhouse and banquet facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#042864]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Building2 className="w-8 h-8 text-[#E5C778] mx-auto mb-4" />
          <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>The Clubhouse</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            A modern clubhouse with a full-service grill room, banquet space for up to 200 guests, and panoramic views of the course. The ideal setting to recap your round or celebrate your next milestone.
          </p>
          <a href="tel:7247767372" className="inline-flex items-center gap-2 border border-[#E5C778]/40 text-[#E5C778] hover:bg-[#E5C778]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Reserve the Banquet Room
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#042864]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#042864] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#A22B38]" style={{ fontFamily: pf }}>I</span>
            n 2002, Cranberry Township opened a golf course that would redefine what a municipal layout could be. Built on rolling terrain along Freshcorn Road, Cranberry Highlands was designed to deliver a championship experience at public prices &mdash; and it delivered beyond all expectations. With more than 90 sand bunkers woven into its 18 holes, the course quickly earned a reputation as one of the most strategically demanding public courses in the Mid-Atlantic. Pristine conditioning, challenging green complexes, and a layout that rewards thinking golfers over big hitters propelled Cranberry Highlands to the top of every &ldquo;Best Municipal Course in Pennsylvania&rdquo; list. Two decades later, it remains the crown jewel of Cranberry Township&rsquo;s parks system &mdash; proof that public golf can stand shoulder to shoulder with the best private clubs in the state.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/cranberry-highlands/hero.jpg" alt="Cranberry Highlands Golf Course panoramic fairway view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#042864]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#E5C778] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Tournament at Cranberry Highlands</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity tournaments, league play, and private events. Full tournament coordination, on-course beverage service, and banquet catering for groups of 16 to 200.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7247767372" className="bg-[#A22B38] hover:bg-[#8c2430] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Outing
            </a>
            <a href="mailto:golf@cranberryhighlands.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Practice Facility / Lessons CTA */}
      <section className="bg-[#042864] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#E5C778]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#E5C778]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Practice Facility &amp; Lessons</h3>
              <p className="text-white/50 text-sm mt-0.5">Full driving range &middot; Short game area &middot; Putting green &middot; Professional instruction</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7247767372" className="bg-[#A22B38] hover:bg-[#8c2430] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Book a Lesson
            </a>
            <a href="mailto:golf@cranberryhighlands.com" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#021A42] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/cranberry-highlands/logo.png" alt="Cranberry Highlands Golf Course" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Cranberry Highlands</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Best Municipal Course in PA</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7247767372" className="flex items-center gap-2.5 hover:text-[#E5C778] transition-colors"><Phone className="w-4 h-4 text-[#E5C778]" />(724) 776-7372</a>
                <a href="mailto:golf@cranberryhighlands.com" className="flex items-center gap-2.5 hover:text-[#E5C778] transition-colors"><Mail className="w-4 h-4 text-[#E5C778]" />golf@cranberryhighlands.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#E5C778] mt-0.5" /><span>5601 Freshcorn Rd<br />Cranberry Twp, PA 16066</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#E5C778]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 70"], ["Bunkers", "90+"], ["Type", "Municipal — Public"], ["Owner", "Cranberry Township"], ["Established", "2002"], ["Practice Facility", "Driving range, short game, putting green"], ["Clubhouse", "Grill room + banquet space (200 capacity)"], ["Best Known For", "#1 Municipal Course in PA"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Cranberry Highlands Golf Course. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#E5C778] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
