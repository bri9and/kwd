import { Phone, MapPin, Mail, Flag, Utensils, GraduationCap, Clock, TreePine, Droplets, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Aubrey's Dubbs Dred Golf Course | Family Golf Since 1964 | Butler, PA",
  description:
    "Family-owned 18-hole public golf course in Butler, PA. Par 71, 6,945 yards of rolling Butler County farmland. Green fees from $22. Eva's Tee House on site. Call (724) 287-4832.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Creek Crossing", description: "A 385-yard dogleg left that demands respect from the tee. Your drive must carry the creek that cuts diagonally across the fairway at 220 yards. Play it safe to the right and you leave a long iron into a sloping green guarded by a pair of mature oaks. The bold play is a draw over the water — and the reward is a wedge in.", stat: "Creek carry at 220 yards" },
  { hole: 7, par: 3, title: "The Family Stone", description: "The shortest hole on the course at 155 yards, but the most photographed. A downhill par 3 to an elevated green framed by the original stone wall the Aubrey family built when they cleared this farmland in the early 1960s. Club selection is everything — the wind swirls in the valley below.", stat: "155 yds — original 1964 stone wall" },
  { hole: 12, par: 5, title: "The Long Valley", description: "At 545 yards this is the longest hole on the course and the one that defines Dubbs Dred. The fairway rolls through open farmland with the creek running the entire left side. Big hitters can reach in two, but the green sits in a natural bowl that rejects anything off-line. Three good shots is the smart play.", stat: "545 yds, creek runs full left side" },
  { hole: 18, par: 4, title: "The Homecoming", description: "A fitting finish — 410 yards straight back toward the clubhouse with Eva's Tee House watching from behind the green. The fairway narrows between mature trees at the 280 mark, and the approach plays slightly uphill to a two-tiered green. Finish strong and walk straight into a cold one.", stat: "410 yds, uphill finish to the clubhouse" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$25", nine: "$16" },
  { category: "Weekend / Holiday", eighteen: "$35", nine: "$22" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$22", nine: "$14" },
  { category: "Junior Under 18", eighteen: "$18", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$20", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$18" },
  { label: "Cart — 9 Holes", price: "$12" },
  { label: "Club Rental", price: "$15" },
  { label: "Pull Cart", price: "$5" },
];

const coursePhotos = [
  { src: "/sites/dubbs-dred/course1.jpg", alt: "Aubrey's Dubbs Dred Golf Course — rolling fairway" },
  { src: "/sites/dubbs-dred/course2.jpg", alt: "Aubrey's Dubbs Dred Golf Course — creek hazard" },
  { src: "/sites/dubbs-dred/course3.jpg", alt: "Aubrey's Dubbs Dred Golf Course — green and treeline" },
  { src: "/sites/dubbs-dred/course4.jpg", alt: "Aubrey's Dubbs Dred Golf Course — farmland panorama" },
];

const pf = "'Playfair Display', serif";

export default function DubbsDredGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#2D5016] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/dubbs-dred/logo.png" alt="Aubrey's Dubbs Dred Golf Course" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1964 &middot; Butler, Pennsylvania
            </span>
          </div>
          <a href="tel:7242874832" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 287-4832
          </a>
        </div>
      </div>

      {/* Hero — hero.jpg background */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/dubbs-dred/hero.jpg" alt="Aubrey's Dubbs Dred Golf Course — rolling Butler County fairway" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#2D5016]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/dubbs-dred/logo.png" alt="Aubrey's Dubbs Dred Golf Course" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            The Aubrey Family Welcomes You
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            DUBBS DRED<br />
            <span className="text-[#C9A84C] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Golf Course</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            60+ years of family tradition on the rolling farmland of Butler County. Honest golf, fair prices, and a welcome that feels like home.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "71" }, { label: "Yards", value: "6,945" }, { label: "Holes", value: "18" }, { label: "Since", value: "1964" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7242874832" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 124 Aubrey Dr, Butler, PA 16003
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#1E3A0F] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Family-Owned &amp; Operated by the Aubrey Family Since 1964
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#2D5016]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5016]" style={{ fontFamily: pf }}>Butler County&rsquo;s Best Kept Secret</h2>
            <p className="text-[#2D5016]/50 text-sm mt-3 max-w-lg mx-auto">
              Rolling farmland, mature hardwoods, and creek hazards that have tested Butler County golfers for over six decades.
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
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5016]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#2D5016]/15 bg-white p-8 sm:p-10 relative group hover:border-[#C9A84C]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#2D5016]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#2D5016]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#2D5016] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#2D5016]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#2D5016]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2D5016]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#2D5016]/40 text-sm mt-8 italic">The creek claims its share of golf balls every season — bring extras.</p>
        </div>
      </section>

      {/* Pull quote — family tradition */}
      <section className="py-20 bg-white border-y border-[#2D5016]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>Family Tradition</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#2D5016] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Three generations of the Aubrey family have welcomed golfers to this land. The fairways change with the seasons, but the handshake at the first tee never does.&rdquo;
          </blockquote>
          <p className="text-[#2D5016]/40 text-sm mt-6">60+ Years of Butler County Golf</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: TreePine, label: "Rolling Farmland" }, { icon: Droplets, label: "Creek Hazards" }, { icon: Users, label: "Family Owned" }, { icon: Heart, label: "Community Course" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#2D5016]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#2D5016]/50" />
                </div>
                <span className="text-xs text-[#2D5016]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5016]" style={{ fontFamily: pf }}>Affordable Golf, Every Day</h2>
            <p className="text-[#2D5016]/50 text-sm mt-3">Great golf does not have to break the bank. Walk-ons welcome.</p>
          </div>
          <div className="border border-[#2D5016]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D5016] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#2D5016] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#2D5016] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#2D5016] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#2D5016]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#2D5016]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#2D5016]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#2D5016]/30 text-xs mt-6 tracking-wide">Season passes and league rates available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Eva's Tee House — restaurant.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/dubbs-dred/restaurant.jpg" alt="Eva's Tee House restaurant at Aubrey's Dubbs Dred Golf Course" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Eva&rsquo;s Tee House</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            The on-site restaurant at Dubbs Dred. Cold drinks, hot food, and the kind of post-round atmosphere that keeps you in the chair longer than you planned. Open to golfers and the public alike.
          </p>
          <a href="tel:7242874832" className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call for Hours
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#2D5016]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>Our Story</p>
          <p className="text-xl sm:text-2xl text-[#2D5016] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#C9A84C]" style={{ fontFamily: pf }}>I</span>
            n 1964, the Aubrey family looked at their rolling farmland in Butler County and saw something more than fields &mdash; they saw fairways. They cleared the land, shaped the greens by hand, and opened Dubbs Dred Golf Course to their neighbors. Sixty years later, the course still carries the family name and the family values: honest golf at a fair price, a genuine welcome at the first tee, and a cold drink waiting at Eva&rsquo;s Tee House when you finish. The layout follows the natural contours of the land &mdash; creek hazards that have been here longer than the course, rolling terrain that rewards smart play over raw power, and mature hardwoods that frame every hole. Three generations of the Aubrey family have tended these 18 holes, and three generations of Butler County golfers have called Dubbs Dred their home course.
          </p>
        </div>
      </section>

      {/* Events & Outings */}
      <section className="relative text-white py-20 overflow-hidden bg-[#2D5016]">
        <div className="absolute inset-0 bg-[#2D5016]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Outing at Dubbs Dred</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity scrambles, family reunions, and league play &mdash; Dubbs Dred has hosted them all for over 60 years. On-site catering from Eva&rsquo;s Tee House, customizable formats, and a staff that knows how to make your event run smoothly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7242874832" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Outing
            </a>
            <a href="mailto:info@dubbsdredgolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons CTA */}
      <section className="bg-[#1E3A0F] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Golf Lessons Available</h3>
              <p className="text-white/50 text-sm mt-0.5">All skill levels welcome &middot; Call the pro shop for scheduling</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7242874832" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Book a Lesson
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#132A08] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/dubbs-dred/logo.png" alt="Aubrey's Dubbs Dred Golf Course" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Dubbs Dred Golf Course</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Aubrey Family &middot; Since 1964</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7242874832" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Phone className="w-4 h-4 text-[#C9A84C]" />(724) 287-4832</a>
                <a href="mailto:info@dubbsdredgolf.com" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Mail className="w-4 h-4 text-[#C9A84C]" />info@dubbsdredgolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5" /><span>124 Aubrey Dr<br />Butler, PA 16003</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#C9A84C]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 71"], ["Yardage", "6,945"], ["Type", "Public"], ["Established", "1964"], ["Owners", "The Aubrey Family"], ["On-Site Dining", "Eva's Tee House"], ["Events", "Outings, Leagues & Tournaments"], ["Walk-Ons", "Always Welcome"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Aubrey&rsquo;s Dubbs Dred Golf Course. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#C9A84C] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
