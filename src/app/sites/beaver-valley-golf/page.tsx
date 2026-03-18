import { Phone, MapPin, Mail, Flag, Clock, GraduationCap, TreePine, Mountain, Landmark, Calendar, Users, Trophy } from "lucide-react";

export const metadata = {
  title: "Beaver Valley Golf Club | Est. 1898 | 4th Oldest in Pennsylvania",
  description:
    "Historic 18-hole public golf course in Patterson Heights, PA. Est. 1898 — the 4th oldest course in Pennsylvania. Par 72, 6,300 yards with panoramic Beaver River valley views. Green fees from $25. Call (724) 846-2212.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Valley Vista", description: "A sweeping dogleg left that traces the ridgeline above the Beaver River valley. The elevated tee reveals the full panorama — river, hills, and a century of golf history spread out below. A well-placed drive to the right side of the fairway opens the green for a short iron approach.", stat: "Panoramic river valley views" },
  { hole: 7, par: 3, title: "The Heritage", description: "This par 3 has been played since 1898 and the green sits in nearly the same position the founders set it. A mid-iron over a gentle swale to a green tucked among mature oaks. Simple in design, unforgiving in execution — the way golf was meant to be.", stat: "Original 1898 green site" },
  { hole: 12, par: 5, title: "The Riverbank", description: "A long, elegant par 5 that descends toward the valley floor. The fairway narrows through a corridor of century-old hardwoods before opening to a wide, receptive green. Big hitters can reach in two, but the trees demand respect and precision off the tee.", stat: "530 yds through century-old hardwoods" },
  { hole: 16, par: 4, title: "The Settler", description: "Named for the early settlers who farmed this hillside before golf arrived. A blind tee shot over a crest gives way to a steep downhill approach to a green protected by deep bunkers on both sides. Local knowledge is king — newcomers rarely walk away with par.", stat: "Blind tee shot, downhill approach" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$28", nine: "$18" },
  { category: "Weekend / Holiday", eighteen: "$38", nine: "$24" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$25", nine: "$16" },
  { category: "Junior 17 & Under", eighteen: "$18", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$22", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$18" },
  { label: "Cart — 9 Holes", price: "$11" },
  { label: "Club Rental", price: "$15" },
  { label: "Pull Cart", price: "$5" },
];

const coursePhotos = [
  { src: "/sites/beaver-valley/course1.jpg", alt: "Beaver Valley Golf Club — fairway with valley panorama" },
  { src: "/sites/beaver-valley/course2.jpg", alt: "Beaver Valley Golf Club — historic tree-lined hole" },
  { src: "/sites/beaver-valley/course3.jpg", alt: "Beaver Valley Golf Club — green with rolling hills" },
  { src: "/sites/beaver-valley/course4.jpg", alt: "Beaver Valley Golf Club — Beaver River valley overlook" },
];

const pf = "'Playfair Display', serif";

export default function BeaverValleyGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1B2A4A] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/beaver-valley/logo.png" alt="Beaver Valley Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1898 &middot; Patterson Heights, Pennsylvania
            </span>
          </div>
          <a href="tel:7248462212" className="hover:text-[#B8963E] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 846-2212
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/beaver-valley/hero.jpg" alt="Beaver Valley Golf Club — panoramic view of the Beaver River valley" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#1B2A4A]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/beaver-valley/logo.png" alt="Beaver Valley Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#B8963E] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Since 1898 &middot; Patterson Heights, PA
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            4th OLDEST<br />
            <span className="text-[#B8963E] italic font-normal text-4xl sm:text-5xl lg:text-6xl">in Pennsylvania</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            Over 125 years of golf above the Beaver River valley. A classic 18-hole layout where every fairway carries the weight of history and every green rewards tradition.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "72" }, { label: "Yards", value: "6,300" }, { label: "Holes", value: "18" }, { label: "Est.", value: "1898" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248462212" className="bg-[#B8963E] hover:bg-[#a6862f] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 725 6th Ave, Patterson Heights, PA 15010
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#14203A] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Established 1898 &middot; Patterson Heights, Pennsylvania &middot; Beaver County
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1B2A4A]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2A4A]" style={{ fontFamily: pf }}>A Classic Pennsylvania Layout</h2>
            <p className="text-[#1B2A4A]/50 text-sm mt-3 max-w-lg mx-auto">
              Rolling hills, mature hardwoods, and sweeping river valley vistas — a traditional course that has stood the test of time.
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
            <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2A4A]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1B2A4A]/15 bg-white p-8 sm:p-10 relative group hover:border-[#B8963E]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1B2A4A]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#B8963E] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1B2A4A]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1B2A4A]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1B2A4A]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#14203A]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B2A4A]/40 text-sm mt-8 italic">Four generations of golfers have walked these fairways since 1898.</p>
        </div>
      </section>

      {/* Pull quote — history */}
      <section className="py-20 bg-white border-y border-[#1B2A4A]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>125+ Years of Golf</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1B2A4A] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;When you stand on the first tee at Beaver Valley, you are stepping onto the same ground where Pennsylvanians have played golf since the McKinley administration.&rdquo;
          </blockquote>
          <p className="text-[#1B2A4A]/40 text-sm mt-6">One of only a handful of 19th-century courses still in play</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Landmark, label: "Founded 1898" }, { icon: Mountain, label: "River Valley Views" }, { icon: TreePine, label: "Century-Old Hardwoods" }, { icon: Trophy, label: "4th Oldest in PA" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1B2A4A]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1B2A4A]/50" />
                </div>
                <span className="text-xs text-[#1B2A4A]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2A4A]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1B2A4A]/50 text-sm mt-3">Historic golf at public prices. Walking welcomed on this classic layout.</p>
          </div>
          <div className="border border-[#1B2A4A]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B2A4A] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1B2A4A] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1B2A4A] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1B2A4A] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1B2A4A]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1B2A4A]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1B2A4A]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B2A4A]/30 text-xs mt-6 tracking-wide">Season passes and memberships available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Clubhouse */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/beaver-valley/clubhouse.jpg" alt="Beaver Valley Golf Club clubhouse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Landmark className="w-8 h-8 text-[#B8963E] mx-auto mb-4" />
          <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The Clubhouse</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>The 19th Hole</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            A welcoming clubhouse with full-service pro shop, lounge, and snack bar. Relax on the patio with a cold drink and panoramic views of the valley after your round — a Beaver Valley tradition for over a century.
          </p>
          <a href="tel:7248462212" className="inline-flex items-center gap-2 border border-[#B8963E]/40 text-[#B8963E] hover:bg-[#B8963E]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call the Pro Shop
          </a>
        </div>
      </section>

      {/* History — THE KEY SECTION */}
      <section className="py-20 bg-white border-t border-[#1B2A4A]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>Our History</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2A4A] text-center mb-10" style={{ fontFamily: pf }}>125+ Years on the Hillside</h2>
          <div className="text-xl sm:text-2xl text-[#1B2A4A] leading-relaxed" style={{ fontFamily: pf }}>
            <p className="mb-6">
              <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#B8963E]" style={{ fontFamily: pf }}>I</span>
              n 1898 &mdash; the year the Spanish-American War ended, the year Caleb Powers became Kentucky&rsquo;s Secretary of State, the year Pepsi-Cola was born &mdash; a group of golfers in Beaver County, Pennsylvania broke ground on what would become one of the state&rsquo;s most enduring courses. Beaver Valley Golf Club opened its first nine holes on the rolling hillside above the Beaver River, making it just the fourth golf course established in all of Pennsylvania.
            </p>
            <p className="mb-6">
              The course predates the Wright Brothers&rsquo; first flight by five years, the sinking of the Titanic by fourteen, and the founding of the PGA of America by eighteen. When the first tee shots were struck at Beaver Valley, William McKinley was President, there were only forty-five states in the Union, and the automobile was still a novelty reserved for the very wealthy.
            </p>
            <p className="mb-6">
              Through the early decades of the 20th century, the club expanded to a full 18 holes, threading fairways through the natural contours of the Beaver River valley. The layout was designed in the classic tradition &mdash; wide, forgiving fairways bordered by mature hardwoods, greens that reward touch over power, and a routing that uses the terrain rather than fighting it. No gimmicks, no artificial mounding, no forced carries over water. Just honest golf.
            </p>
            <p className="mb-6">
              The course weathered two World Wars, the Great Depression, and the rise and fall of the steel industry that built the towns around it. While factories closed and populations shifted, Beaver Valley endured. The oaks that line the fairways today were saplings when the founders marked the first pin positions. The stone walls along several holes date to the farmsteads that preceded the course.
            </p>
            <p>
              Today, Beaver Valley Golf Club stands as a living monument to the game&rsquo;s deepest roots in western Pennsylvania. It is not a museum &mdash; it is a working, breathing golf course where four generations of families have learned the game, where Saturday morning foursomes have gathered for decades, and where the Beaver River valley panorama looks much the same as it did when those first nine holes opened more than 125 years ago.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Outings */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/beaver-valley/hero.jpg" alt="Beaver Valley Golf Club course aerial view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#B8963E] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Tournament at Beaver Valley</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity tournaments, league play, and private events on one of Pennsylvania&rsquo;s most historic courses. Customizable packages with catering, beverage service, and on-course contests available.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {[{ icon: Users, label: "Corporate Outings" }, { icon: Trophy, label: "Tournaments" }, { icon: Calendar, label: "League Play" }, { icon: Flag, label: "Charity Events" }].map((e) => (
              <div key={e.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <e.icon className="w-4 h-4 text-[#B8963E]" />
                </div>
                <span className="text-xs text-white/60 font-medium">{e.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248462212" className="bg-[#B8963E] hover:bg-[#a6862f] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Event
            </a>
            <a href="mailto:info@beavervalleygolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons / Pro Shop CTA */}
      <section className="bg-[#1B2A4A] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#B8963E]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#B8963E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Lessons &amp; Pro Shop</h3>
              <p className="text-white/50 text-sm mt-0.5">Individual and group instruction available &middot; Full-service pro shop</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7248462212" className="bg-[#B8963E] hover:bg-[#a6862f] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
            <a href="mailto:info@beavervalleygolf.com" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1A30] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/beaver-valley/logo.png" alt="Beaver Valley Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Beaver Valley Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Est. 1898 &middot; 4th Oldest in PA</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7248462212" className="flex items-center gap-2.5 hover:text-[#B8963E] transition-colors"><Phone className="w-4 h-4 text-[#B8963E]" />(724) 846-2212</a>
                <a href="mailto:info@beavervalleygolf.com" className="flex items-center gap-2.5 hover:text-[#B8963E] transition-colors"><Mail className="w-4 h-4 text-[#B8963E]" />info@beavervalleygolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#B8963E] mt-0.5" /><span>725 6th Ave<br />Patterson Heights, PA 15010</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#B8963E]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 72"], ["Yardage", "6,300"], ["Type", "Public"], ["Established", "1898"], ["Distinction", "4th oldest course in Pennsylvania"], ["Terrain", "Rolling hills, Beaver River valley"], ["Walking", "Welcomed and encouraged"], ["Pro Shop", "Full-service"], ["Events", "Corporate outings, tournaments, leagues"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Beaver Valley Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#B8963E] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
