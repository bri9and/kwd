import { Phone, MapPin, Mail, Flag, Utensils, GraduationCap, Clock, Trees, Waves, Mountain, Sun } from "lucide-react";

export const metadata = {
  title: "Lake Arthur Golf Club | Classic Western PA Golf | Butler, PA",
  description:
    "Public 18-hole golf course in Butler, PA. Designed by Wynn Tredway in 1958. Rolling terrain, mature trees, lake views. Fully irrigated. Green fees from $25. Call (724) 865-2765.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Lakeshore", description: "A sweeping dogleg left that traces the shoreline of Lake Arthur for its entire 385 yards. The lake guards the left side from tee to green, tempting aggressive players to cut the corner. A well-placed drive down the right side leaves a mid-iron approach to a green that slopes gently toward the water.", stat: "385 yds — lake left, trees right" },
  { hole: 7, par: 3, title: "The Cathedral", description: "A 175-yard par 3 played through a towering corridor of century-old oaks. The canopy frames the green like a cathedral ceiling, filtering the light and narrowing your focus. Club selection is everything — the green is wide but shallow, and anything long disappears into the woods.", stat: "175 yds through cathedral oaks" },
  { hole: 12, par: 5, title: "Tredway's Ridge", description: "The crown jewel of the back nine. A 520-yard par 5 that climbs steadily uphill before cresting a ridge with panoramic views of the lake and surrounding countryside. The second shot is blind over the ridge, and the downhill approach to a tucked green rewards only the brave.", stat: "520 yds — ridge-top lake panorama" },
  { hole: 16, par: 4, title: "The Peninsula", description: "A short but treacherous 340-yard par 4. The fairway narrows to a peninsula green jutting into a pond, with water on three sides. Big hitters can reach the green off the tee, but the margin for error is razor thin. Most play a long iron off the tee and wedge in — if their nerves hold.", stat: "340 yds — water on three sides" },
];

const rates = [
  { category: "Weekday (Mon–Fri)", eighteen: "$28", nine: "$18" },
  { category: "Weekend / Holiday", eighteen: "$38", nine: "$24" },
  { category: "Senior 62+ (Mon–Fri)", eighteen: "$25", nine: "$16" },
  { category: "Junior 17 & Under", eighteen: "$20", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$22", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$18" },
  { label: "Cart — 9 Holes", price: "$11" },
  { label: "Club Rental", price: "$15" },
  { label: "Pull Cart", price: "$5" },
];

const coursePhotos = [
  { src: "/sites/lake-arthur/course1.jpg", alt: "Lake Arthur Golf Club — fairway with lake view" },
  { src: "/sites/lake-arthur/course2.jpg", alt: "Lake Arthur Golf Club — tree-lined fairway" },
  { src: "/sites/lake-arthur/course3.jpg", alt: "Lake Arthur Golf Club — green and rolling terrain" },
  { src: "/sites/lake-arthur/course4.jpg", alt: "Lake Arthur Golf Club — autumn lake panorama" },
];

const pf = "'Playfair Display', serif";

export default function LakeArthurGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1B5E20] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/lake-arthur/logo.png" alt="Lake Arthur Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1958 &middot; Butler, Pennsylvania
            </span>
          </div>
          <a href="tel:7248652765" className="hover:text-[#D4A84C] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 865-2765
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/lake-arthur/hero.jpg" alt="Lake Arthur Golf Club — scenic lake and fairway view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#1B5E20]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/lake-arthur/logo.png" alt="Lake Arthur Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#D4A84C] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Lake Arthur Golf Club Presents
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            LAKE ARTHUR<br />
            <span className="text-[#D4A84C] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Golf Club</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            18 holes of classic Western Pennsylvania golf. Rolling terrain, mature hardwoods, and lake views on a layout that has tested players since 1958.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Holes", value: "18" }, { label: "Est.", value: "1958" }, { label: "Terrain", value: "Rolling" }, { label: "Irrigation", value: "Full" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248652765" className="bg-[#D4A84C] hover:bg-[#c0963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 255 Isle Rd, Butler, PA 16001
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#2E7D32] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Designed by Wynn Tredway &middot; Established 1958 &middot; Fully Irrigated 18 Holes
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1B5E20]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B5E20]" style={{ fontFamily: pf }}>Where Land Meets Lake</h2>
            <p className="text-[#1B5E20]/50 text-sm mt-3 max-w-lg mx-auto">
              Rolling fairways, towering hardwoods, and peaceful lake views — a Western PA classic that plays different every season.
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
            <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B5E20]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1B5E20]/15 bg-white p-8 sm:p-10 relative group hover:border-[#D4A84C]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1B5E20]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#D4A84C] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1B5E20]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1B5E20]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1B5E20]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2E7D32]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B5E20]/40 text-sm mt-8 italic">A Wynn Tredway design that has challenged Western PA golfers for over six decades.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-white border-y border-[#1B5E20]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Setting</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1B5E20] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Mature oaks line every fairway, the lake catches the afternoon light, and on a quiet morning you can hear nothing but birdsong and the crack of a well-struck iron.&rdquo;
          </blockquote>
          <p className="text-[#1B5E20]/40 text-sm mt-6">A course that feels like it has always been here</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Waves, label: "Lake Views" }, { icon: Trees, label: "Mature Hardwoods" }, { icon: Mountain, label: "Rolling Terrain" }, { icon: Sun, label: "All-Day Sunlight" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1B5E20]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1B5E20]/50" />
                </div>
                <span className="text-xs text-[#1B5E20]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B5E20]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1B5E20]/50 text-sm mt-3">Affordable public golf on a championship-caliber layout.</p>
          </div>
          <div className="border border-[#1B5E20]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B5E20] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1B5E20] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1B5E20] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1B5E20] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1B5E20]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1B5E20]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1B5E20]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B5E20]/30 text-xs mt-6 tracking-wide">Season passes and memberships available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Clubhouse / Restaurant */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/lake-arthur/clubhouse.jpg" alt="Lake Arthur Golf Club clubhouse and restaurant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#D4A84C] mx-auto mb-4" />
          <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Clubhouse Bar &amp; Grill</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Cold drinks, hot food, and lake views from the deck. The clubhouse restaurant serves breakfast, lunch, and dinner with a full bar — the perfect way to close out your round or kick off the weekend.
          </p>
          <a href="tel:7248652765" className="inline-flex items-center gap-2 border border-[#D4A84C]/40 text-[#D4A84C] hover:bg-[#D4A84C]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call for Hours
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#1B5E20]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1B5E20] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#D4A84C]" style={{ fontFamily: pf }}>I</span>
            n 1958, course architect Wynn Tredway walked the rolling farmland along Lake Arthur in Butler County and saw what few others could &mdash; eighteen holes waiting to be carved from the hills and hardwoods of Western Pennsylvania. The course he built honors the natural terrain: fairways rise and fall with the contours of the land, century-old oaks and maples frame every shot, and the lake itself comes into play on some of the most memorable holes in the region. For over six decades, Lake Arthur Golf Club has been a gathering place for families, leagues, and weekend warriors who appreciate honest golf on a course that demands every club in the bag. Fully irrigated and meticulously maintained, the layout plays as true today as it did when Tredway first staked the pins.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/lake-arthur/hero.jpg" alt="Lake Arthur Golf Club course panorama" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B5E20]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#D4A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Event at Lake Arthur</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity tournaments, league play, and private parties — all on a classic 18-hole layout with on-site catering from the clubhouse kitchen. Lake views included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248652765" className="bg-[#D4A84C] hover:bg-[#c0963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Event
            </a>
            <a href="mailto:info@lakearthurgolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons / Pro Shop CTA */}
      <section className="bg-[#1B5E20] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#D4A84C]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#D4A84C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Pro Shop &amp; Lessons</h3>
              <p className="text-white/50 text-sm mt-0.5">Full-service pro shop &middot; Individual and group lessons available</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7248652765" className="bg-[#D4A84C] hover:bg-[#c0963e] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D3B12] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/lake-arthur/logo.png" alt="Lake Arthur Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Lake Arthur Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Classic Western PA Golf Since 1958</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7248652765" className="flex items-center gap-2.5 hover:text-[#D4A84C] transition-colors"><Phone className="w-4 h-4 text-[#D4A84C]" />(724) 865-2765</a>
                <a href="mailto:info@lakearthurgolf.com" className="flex items-center gap-2.5 hover:text-[#D4A84C] transition-colors"><Mail className="w-4 h-4 text-[#D4A84C]" />info@lakearthurgolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#D4A84C] mt-0.5" /><span>255 Isle Rd<br />Butler, PA 16001</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#D4A84C]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18"], ["Type", "Public"], ["Irrigation", "Fully Irrigated"], ["Designer", "Wynn Tredway"], ["Established", "1958"], ["Terrain", "Rolling hills, mature trees, lake views"], ["Pro Shop", "Full service"], ["On-Site Dining", "Clubhouse Bar & Grill"], ["Events", "Corporate outings, tournaments, parties"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Lake Arthur Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#D4A84C] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
