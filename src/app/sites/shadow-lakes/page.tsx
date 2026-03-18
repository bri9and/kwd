import { Phone, MapPin, Mail, Flag, Waves, Trees, Sunset, Droplets, Utensils, GraduationCap, Clock, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Shadow Lakes Golf Club | Lake-Lined Golf in Aliquippa, PA",
  description:
    "Public 18-hole golf course winding through shadow-casting tree lines and lake-lined fairways near Raccoon Creek State Park. Green fees from $25. Call (724) 375-5511.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Narrows", description: "A tight 385-yard dogleg left that threads between two lakes. Your drive must carry the water on the left while avoiding the tree line that shadows the right side of the fairway. The green sits on a peninsula — three-quarters surrounded by still, dark water.", stat: "Peninsula green between two lakes" },
  { hole: 7, par: 3, title: "Mirror Shot", description: "165 yards over a glassy lake that reflects the tree canopy on calm mornings. The green is shallow and slopes back toward the water. Club selection is everything — long is gone, short is wet, and the wind off the lake adds a ghost club.", stat: "165 yds over mirror-still water" },
  { hole: 12, par: 5, title: "Shadow Run", description: "The longest hole on the course at 535 yards. A corridor of towering oaks casts deep shadows across the fairway all afternoon. Two strategic layups around a creek crossing set up an approach to a green framed by beaver lakes and cattails.", stat: "535 yds through shadowed tree corridor" },
  { hole: 16, par: 4, title: "The Beaver Dam", description: "A deceptively short 340 yards with water running the entire left side. The namesake beaver dam sits just off the 150-yard marker, and the approach must carry a final pond guarding the front of the green. Par here feels like birdie anywhere else.", stat: "Water hazard runs full 340 yds" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$28", nine: "$18" },
  { category: "Weekend / Holiday", eighteen: "$38", nine: "$24" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$25", nine: "$16" },
  { category: "Junior (under 18)", eighteen: "$20", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$22", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$18" },
  { label: "Cart — 9 Holes", price: "$12" },
  { label: "Club Rental", price: "$15" },
  { label: "Range Bucket (lg)", price: "$8" },
];

const coursePhotos = [
  { src: "/sites/shadow-lakes/course1.jpg", alt: "Shadow Lakes Golf Club — lake-lined fairway" },
  { src: "/sites/shadow-lakes/course2.jpg", alt: "Shadow Lakes Golf Club — tree shadows on green" },
  { src: "/sites/shadow-lakes/course3.jpg", alt: "Shadow Lakes Golf Club — water hazard reflection" },
  { src: "/sites/shadow-lakes/course4.jpg", alt: "Shadow Lakes Golf Club — beaver lakes at sunset" },
];

const pf = "'Playfair Display', serif";

export default function ShadowLakesGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1E293B] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/shadow-lakes/logo.png" alt="Shadow Lakes Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Shadow Lakes Golf Club &middot; Aliquippa, Pennsylvania
            </span>
          </div>
          <a href="tel:7243755511" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 375-5511
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/shadow-lakes/hero.jpg" alt="Shadow Lakes Golf Club — lake and tree-lined fairway at dusk" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#1E293B]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/shadow-lakes/logo.png" alt="Shadow Lakes Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#D4AF37] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Shadow Lakes Golf Club Presents
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            SHADOW<br />
            <span className="text-[#D4AF37] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Lakes</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            18 holes winding through shadow-casting tree lines and lake-lined fairways. Where still water reflects the sky and every approach carries risk.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Holes", value: "18" }, { label: "Lakes", value: "7" }, { label: "Water Holes", value: "12" }, { label: "Acres", value: "180" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7243755511" className="bg-[#D4AF37] hover:bg-[#c4a030] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 2000 Beaver Lakes Blvd, Aliquippa, PA 15001
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#0D0D0D] text-white/50 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        18 Holes &middot; Lake-Lined Fairways &middot; Near Raccoon Creek State Park &middot; Aliquippa, PA
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1E293B]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B]" style={{ fontFamily: pf }}>Where Water Meets Shadow</h2>
            <p className="text-[#1E293B]/50 text-sm mt-3 max-w-lg mx-auto">
              Seven lakes, ancient tree lines, and fairways that disappear into long afternoon shadows. Every hole tells a different story.
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
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1E293B]/15 bg-white p-8 sm:p-10 relative group hover:border-[#D4AF37]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1E293B]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#D4AF37] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1E293B]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1E293B]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1E293B]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1E293B]/40 text-sm mt-8 italic">Twelve of eighteen holes feature water hazards. Bring extra balls.</p>
        </div>
      </section>

      {/* Pull Quote — the lakes */}
      <section className="py-20 bg-white border-y border-[#1E293B]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Setting</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1E293B] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;The lakes are so still in the morning they look like glass. You can see the tree line reflected perfectly &mdash; until your ball breaks the surface.&rdquo;
          </blockquote>
          <p className="text-[#1E293B]/40 text-sm mt-6">Shadow Lakes &mdash; Aliquippa, PA</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Waves, label: "Seven Lakes" }, { icon: Trees, label: "Old-Growth Tree Lines" }, { icon: Droplets, label: "Beaver Creek Crossings" }, { icon: Sunset, label: "Golden Hour Views" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1E293B]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1E293B]/50" />
                </div>
                <span className="text-xs text-[#1E293B]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E293B]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1E293B]/50 text-sm mt-3">Lake views, shadow-lined fairways, and honest public pricing.</p>
          </div>
          <div className="border border-[#1E293B]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1E293B] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1E293B] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1E293B] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1E293B] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1E293B]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1E293B]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1E293B]/30 text-xs mt-6 tracking-wide">Season passes and memberships available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Magg's Restaurant */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/shadow-lakes/restaurant.jpg" alt="Magg's Restaurant at Shadow Lakes Golf Club" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D0D0D]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Magg&rsquo;s Restaurant</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            On-site dining overlooking the course. Cold drinks after your round, a full menu for lunch and dinner, and a patio with views across the lakes. The perfect finish to 18 at Shadow Lakes.
          </p>
          <a href="tel:7243755511" className="inline-flex items-center gap-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call for Reservations
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#1E293B]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1E293B] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#D4AF37]" style={{ fontFamily: pf }}>S</span>
            hadow Lakes Golf Club sits on land shaped by the beaver dams and creek systems that carved the valleys of western Beaver County. The course was built around the natural lakes that give it its name &mdash; seven bodies of water that wind through 180 acres of hardwood forest and rolling terrain near Raccoon Creek State Park. Over the decades, Shadow Lakes has become a favorite of local golfers who appreciate an honest layout where water is not a decoration but a defining feature of every round. The tree-lined fairways cast long shadows in the afternoon light, and the lakes go mirror-still at dawn. With Magg&rsquo;s Restaurant on site and a welcoming clubhouse, Shadow Lakes is the kind of place where you play 18, eat well, and come back next weekend.
          </p>
        </div>
      </section>

      {/* Events & Outings */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/shadow-lakes/hero.jpg" alt="Shadow Lakes Golf Club fairway and lake at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1E293B]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Outing at Shadow Lakes</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity tournaments, bachelor parties, and league play &mdash; all on a scenic lake-lined course with on-site catering from Magg&rsquo;s Restaurant. Custom packages for groups of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7243755511" className="bg-[#D4AF37] hover:bg-[#c4a030] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Outing
            </a>
            <a href="mailto:info@shadowlakesgolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons & Pro Shop CTA */}
      <section className="bg-[#1E293B] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Lessons &amp; Pro Shop</h3>
              <p className="text-white/50 text-sm mt-0.5">Individual and group instruction &middot; Full-service pro shop</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7243755511" className="bg-[#D4AF37] hover:bg-[#c4a030] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
            <a href="tel:7243755511" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <ShoppingBag className="w-3.5 h-3.5" /> Shop Gear
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/shadow-lakes/logo.png" alt="Shadow Lakes Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Shadow Lakes Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Lake-Lined Golf &middot; Aliquippa, PA</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7243755511" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors"><Phone className="w-4 h-4 text-[#D4AF37]" />(724) 375-5511</a>
                <a href="mailto:info@shadowlakesgolf.com" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors"><Mail className="w-4 h-4 text-[#D4AF37]" />info@shadowlakesgolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5" /><span>2000 Beaver Lakes Blvd<br />Aliquippa, PA 15001</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>Open daily &middot; Dawn to dusk</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18"], ["Type", "Public"], ["Water Hazards", "12 holes with water"], ["Lakes", "7 on-course lakes"], ["Terrain", "Rolling, tree-lined fairways"], ["Near", "Raccoon Creek State Park"], ["On-Site Dining", "Magg's Restaurant"], ["Pro Shop", "Full-service"], ["Events", "Corporate outings & tournaments"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Shadow Lakes Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#D4AF37] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
