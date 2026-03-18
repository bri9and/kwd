import { Phone, MapPin, Mail, Flag, Utensils, GraduationCap, Clock, Trophy, Users, TreePine, Mountain } from "lucide-react";

export const metadata = {
  title: "Black Hawk Golf Course | 36 Holes Since 1927 | Beaver Falls, PA",
  description:
    "36-hole public golf course in Beaver Falls, PA. Two championship 18-hole courses, 5th generation family-owned since 1927. Hawk's Nest Taverne on site. Green fees from $28. Call (724) 843-5512.",
};

const signatureHoles = [
  { hole: 3, par: 4, course: "Course 1", title: "The Ridge Runner", description: "A sweeping 410-yard dogleg left that traces the ridgeline above Blackhawk Road. The elevated tee demands a precise draw off the fairway bunker — too aggressive and the hillside swallows your ball. A well-placed approach to the crowned green rewards accurate iron play over raw power.", stat: "410 yds — ridge elevation changes" },
  { hole: 12, par: 3, course: "Course 1", title: "The Hawk's Eye", description: "At 185 yards, this par 3 drops sharply from an elevated tee box to a narrow green guarded by sand on three sides. Club selection is everything — the wind funnels through the valley and plays tricks on every ball flight. One of the most photographed holes in Beaver County.", stat: "185 yds — three bunkers guard the green" },
  { hole: 7, par: 5, course: "Course 2", title: "The Long Corridor", description: "A 545-yard par 5 that threads through a tree-lined corridor with a creek bisecting the fairway at the 300-yard mark. Big hitters can carry the water for an eagle look, but the safer layup leaves a demanding long iron to a well-protected green. Risk and reward at its finest.", stat: "545 yds — creek crossing at 300" },
  { hole: 16, par: 4, course: "Course 2", title: "The Homestead", description: "The signature finishing stretch begins here — a 395-yard par 4 where the approach must carry over a ravine to a green framed by century-old oaks. The backdrop of the original homestead property gives this hole its name and its character. Miss the green and the short game will be tested.", stat: "395 yds — ravine carry approach" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$28", nine: "$18" },
  { category: "Weekend / Holiday", eighteen: "$38", nine: "$24" },
  { category: "Weekday w/ Cart", eighteen: "$42", nine: "$28" },
  { category: "Weekend w/ Cart", eighteen: "$56", nine: "$36" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$24", nine: "$15" },
  { category: "Junior 17 & Under", eighteen: "$18", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$22", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$16" },
  { label: "Cart — 9 Holes", price: "$10" },
  { label: "Club Rental", price: "$20" },
  { label: "Range Bucket (Lg)", price: "$10" },
];

const coursePhotos = [
  { src: "/sites/black-hawk/course1.jpg", alt: "Black Hawk Golf Course — fairway view on Course 1" },
  { src: "/sites/black-hawk/course2.jpg", alt: "Black Hawk Golf Course — scenic green on Course 2" },
  { src: "/sites/black-hawk/course3.jpg", alt: "Black Hawk Golf Course — tree-lined hole" },
  { src: "/sites/black-hawk/course4.jpg", alt: "Black Hawk Golf Course — panoramic course view" },
];

const pf = "'Playfair Display', serif";

export default function BlackHawkGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1A1A1A] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/black-hawk/logo.png" alt="Black Hawk Golf Course" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1927 &middot; Beaver Falls, Pennsylvania
            </span>
          </div>
          <a href="tel:7248435512" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 843-5512
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/black-hawk/hero.jpg" alt="Black Hawk Golf Course — aerial view of 36 holes in Beaver Falls, PA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#8B0000]/15" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/black-hawk/logo.png" alt="Black Hawk Golf Course" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Beaver County&rsquo;s Premier Public Course
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            36 HOLES<br />
            <span className="text-[#C9A84C] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Since 1927</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            Two championship 18-hole courses carved through the rolling hills of Western Pennsylvania. Five generations of family stewardship. Nearly a century of golf tradition.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Holes", value: "36" }, { label: "Courses", value: "2" }, { label: "Founded", value: "1927" }, { label: "Generations", value: "5th" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248435512" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 644 Blackhawk Rd, Beaver Falls, PA 15010
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#8B0000] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        5th Generation Family-Owned &middot; Est. 1927 &middot; 36 Championship Holes
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Courses</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>Two 18-Hole Championships</h2>
            <p className="text-[#1A1A1A]/50 text-sm mt-3 max-w-lg mx-auto">
              Rolling fairways, mature hardwoods, and strategic bunkering across 36 holes of Western Pennsylvania&rsquo;s finest public golf.
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
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>Signature Holes</h2>
            <p className="text-[#1A1A1A]/40 text-sm mt-3">Standout holes from both championship courses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={`${hole.course}-${hole.hole}`} className="border border-[#1A1A1A]/15 bg-white p-8 sm:p-10 relative group hover:border-[#C9A84C]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1A1A1A]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par} &middot; {hole.course}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1A1A1A]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1A1A1A]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#8B0000]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1A1A1A]/40 text-sm mt-8 italic">36 holes. Two distinct challenges. One legendary property.</p>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 bg-white border-y border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Legacy</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1A1A1A] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Thirty-six holes of championship golf, five generations of one family, and nearly a century of Western Pennsylvania tradition &mdash; there is nothing else like Black Hawk in Beaver County.&rdquo;
          </blockquote>
          <p className="text-[#1A1A1A]/40 text-sm mt-6">A Beaver County Institution Since 1927</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Trophy, label: "36 Championship Holes" }, { icon: Users, label: "5th Gen Family-Owned" }, { icon: TreePine, label: "Mature Hardwood Fairways" }, { icon: Mountain, label: "Rolling PA Hills" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1A1A1A]/50" />
                </div>
                <span className="text-xs text-[#1A1A1A]/60 font-medium text-center">{v.label}</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1A1A1A]/50 text-sm mt-3">36 holes of championship golf at public-course prices. Walk or ride.</p>
          </div>
          <div className="border border-[#1A1A1A]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1A1A1A] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1A1A1A] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1A1A1A] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1A1A1A]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1A1A1A]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1A1A1A]/30 text-xs mt-6 tracking-wide">Season passes and 36-hole packages available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Hawk's Nest Taverne */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/black-hawk/taverne.jpg" alt="Hawk's Nest Taverne restaurant at Black Hawk Golf Course" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Hawk&rsquo;s Nest Taverne</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            The on-site restaurant and bar where every round ends right. Cold drafts, scratch-made food, and the camaraderie of 36 holes worth of stories. Open to golfers and the public alike.
          </p>
          <a href="tel:7248435512" className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call for Hours &amp; Reservations
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#1A1A1A]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1A1A1A] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#C9A84C]" style={{ fontFamily: pf }}>I</span>
            n 1927, a family in Beaver Falls, Pennsylvania broke ground on what would become one of Western PA&rsquo;s most enduring golf properties. What started as a single 18-hole layout carved through the rolling hills along Blackhawk Road has grown into a 36-hole facility spanning two full championship courses. Now in its fifth generation of family ownership, Black Hawk Golf Course has quietly become the top public course in Beaver County &mdash; not through flash or fanfare, but through nearly a century of careful stewardship, honest green fees, and a deep respect for the game. The original family vision remains unchanged: great golf, open to everyone, maintained with pride.
          </p>
        </div>
      </section>

      {/* Events & Outings */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/black-hawk/banquet.jpg" alt="Black Hawk Golf Course events and tournament space" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>36 Holes Built for Tournaments</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Two full courses mean Black Hawk can host what single-course facilities cannot. Large-field corporate outings, charity scrambles with 144+ players, league play across both courses, and private events &mdash; all with on-site catering from Hawk&rsquo;s Nest Taverne.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7248435512" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Outing
            </a>
            <a href="mailto:info@blackhawkgolfcourse.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons / Pro Shop CTA */}
      <section className="bg-[#1A1A1A] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Lessons &amp; Pro Shop</h3>
              <p className="text-white/50 text-sm mt-0.5">Individual and group instruction &middot; Full-service pro shop</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7248435512" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
            <a href="mailto:info@blackhawkgolfcourse.com" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/black-hawk/logo.png" alt="Black Hawk Golf Course" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Black Hawk Golf Course</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>36 Holes Since 1927</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7248435512" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Phone className="w-4 h-4 text-[#C9A84C]" />(724) 843-5512</a>
                <a href="mailto:info@blackhawkgolfcourse.com" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Mail className="w-4 h-4 text-[#C9A84C]" />info@blackhawkgolfcourse.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5" /><span>644 Blackhawk Rd<br />Beaver Falls, PA 15010</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#C9A84C]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "36 — Two 18-Hole Courses"], ["Type", "Public"], ["Established", "1927"], ["Ownership", "5th Generation Family"], ["On-Site Dining", "Hawk's Nest Taverne"], ["Pro Shop", "Full Service"], ["Events", "Tournaments & Corporate Outings"], ["Location", "Beaver Falls, PA"], ["County", "Beaver County"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Black Hawk Golf Course. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#C9A84C] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
