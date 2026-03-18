import { Phone, MapPin, Mail, Flag, TreePine, Mountain, Sunrise, Utensils, GraduationCap, Clock, Users } from "lucide-react";

export const metadata = {
  title: "Strawberry Ridge Golf Course | Ridge-Top Golf in Harmony, PA",
  description:
    "Public 18-hole golf course on a scenic ridge top in Harmony, PA. Par 70, 6,000+ yards, affordable rates from $22. Bar & restaurant on site. Call (724) 452-4022.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Ridge Line", description: "A sweeping 385-yard dogleg left that traces the spine of the ridge. The elevated tee reveals the entire valley below, tempting you to stare instead of swing. A well-placed drive leaves a mid-iron into a green shelved into the hillside with no margin for error on the right.", stat: "385 yds along the ridge crest" },
  { hole: 7, par: 3, title: "Berry Drop", description: "A dramatic downhill par 3 that plays a full club shorter than the card says. The green sits in a natural bowl framed by wild strawberry patches and mature oaks. Front pin placements are deceptive — the slope feeds everything toward the back bunker.", stat: "165 yds, 80-ft elevation drop" },
  { hole: 12, par: 5, title: "The Long View", description: "At 528 yards this is the course's reachable par 5 — if you are willing to challenge the creek that crosses the fairway at 260. Big hitters who clear it have a genuine eagle look. Everyone else faces a strategic layup and a tricky approach to a tiered green.", stat: "528 yds, creek at 260" },
  { hole: 16, par: 4, title: "Sunset Turn", description: "A 410-yard par 4 that bends right along the western ridge. In late afternoon the setting sun sits directly in your line off the tee, earning its name and your respect. The approach plays uphill to a crowned green that rejects anything off-center.", stat: "410 yds, crowned green" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$25", nine: "$16" },
  { category: "Weekend / Holiday", eighteen: "$33", nine: "$22" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$22", nine: "$14" },
  { category: "Junior under 18", eighteen: "$18", nine: "$12" },
  { category: "Twilight (after 3 PM)", eighteen: "$20", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$16" },
  { label: "Cart — 9 Holes", price: "$10" },
  { label: "Club Rental", price: "$15" },
  { label: "Pull Cart", price: "$5" },
];

const coursePhotos = [
  { src: "/sites/strawberry-ridge/course1.jpg", alt: "Strawberry Ridge Golf Course — ridge-top fairway" },
  { src: "/sites/strawberry-ridge/course2.jpg", alt: "Strawberry Ridge Golf Course — scenic valley view" },
  { src: "/sites/strawberry-ridge/course3.jpg", alt: "Strawberry Ridge Golf Course — green and tree line" },
  { src: "/sites/strawberry-ridge/course4.jpg", alt: "Strawberry Ridge Golf Course — rolling terrain" },
];

const pf = "'Playfair Display', serif";

export default function StrawberryRidgeGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#722F37] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/strawberry-ridge/logo.png" alt="Strawberry Ridge Golf Course" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Harmony, Pennsylvania
            </span>
          </div>
          <a href="tel:7244524022" className="hover:text-[#E8C872] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 452-4022
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/strawberry-ridge/hero.jpg" alt="Strawberry Ridge Golf Course — scenic ridge-top setting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#722F37]/25" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/strawberry-ridge/logo.png" alt="Strawberry Ridge Golf Course" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#E8C872] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Ridge-Top Golf in Harmony, PA
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            STRAWBERRY<br />
            <span className="text-[#E8C872] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Ridge</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            18 holes of ridge-top golf with sweeping views of the Harmony countryside. Affordable public course with a bar, restaurant, and the kind of scenery that makes you forget the scorecard.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "70" }, { label: "Yards", value: "6,000+" }, { label: "Holes", value: "18" }, { label: "Est.", value: "Harmony, PA" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7244524022" className="bg-[#E8C872] hover:bg-[#d4b560] text-[#722F37] px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 135 McNulty Lane, Harmony, PA 16037
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#2D5016] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        18 Holes &middot; Par 70 &middot; 6,000+ Yards &middot; Public Course
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#722F37]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#722F37]" style={{ fontFamily: pf }}>Ridge-Top Beauty</h2>
            <p className="text-[#722F37]/50 text-sm mt-3 max-w-lg mx-auto">
              Rolling fairways, mature tree lines, and panoramic countryside views from every angle of the ridge.
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
            <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#722F37]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#722F37]/15 bg-white p-8 sm:p-10 relative group hover:border-[#E8C872]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#722F37]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#E8C872] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#722F37]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#722F37] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#722F37]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#722F37]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2D5016]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#722F37]/40 text-sm mt-8 italic">Elevation changes across the ridge make club selection an art form.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-white border-y border-[#722F37]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Setting</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#722F37] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Up on the ridge you can see for miles &mdash; rolling farmland, church steeples, and not a single highway. Just you, the course, and the kind of quiet that makes a round feel like a vacation.&rdquo;
          </blockquote>
          <p className="text-[#722F37]/40 text-sm mt-6">A regular at Strawberry Ridge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Mountain, label: "Ridge-Top Views" }, { icon: TreePine, label: "Mature Tree Lines" }, { icon: Sunrise, label: "Sunset Panoramas" }, { icon: Flag, label: "Challenging Terrain" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#722F37]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#722F37]/50" />
                </div>
                <span className="text-xs text-[#722F37]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#722F37]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#722F37]/50 text-sm mt-3">Great golf does not have to break the bank. Walk-ons welcome.</p>
          </div>
          <div className="border border-[#722F37]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#722F37] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#722F37] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#722F37] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#722F37] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#722F37]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#722F37]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#722F37]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#722F37]/30 text-xs mt-6 tracking-wide">Season passes and league rates available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Bar & Restaurant — bar.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/strawberry-ridge/bar.jpg" alt="Bar and restaurant at Strawberry Ridge Golf Course" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#E8C872] mx-auto mb-4" />
          <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Bar &amp; Restaurant</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Cold drafts, hot food, and good company after your round. The clubhouse bar at Strawberry Ridge serves up burgers, sandwiches, and daily specials with a view of the 18th green. Open to golfers and the public alike.
          </p>
          <a href="tel:7244524022" className="inline-flex items-center gap-2 border border-[#E8C872]/40 text-[#E8C872] hover:bg-[#E8C872]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call for Hours
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#722F37]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#722F37] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#E8C872]" style={{ fontFamily: pf }}>N</span>
            estled atop the rolling hills of Harmony, Pennsylvania, Strawberry Ridge Golf Course takes its name from the wild strawberries that once blanketed the ridge each spring. The course was carved into the natural contours of the land, preserving the mature hardwoods and scenic vistas that make this corner of Butler County so distinctive. At 6,000-plus yards and par 70, Strawberry Ridge offers a genuine test of golf without the pretension or price tag of a private club. Generations of local families have made this course their home track &mdash; the kind of place where the starter knows your name and the bartender remembers your drink. The ridge-top setting provides natural elevation changes that rival courses twice the price, and on a clear day the views stretch across miles of Pennsylvania countryside.
          </p>
        </div>
      </section>

      {/* Events & Outings */}
      <section className="relative text-white py-20 overflow-hidden bg-[#722F37]">
        <div className="absolute inset-0 bg-[#722F37]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Users className="w-8 h-8 text-[#E8C872] mx-auto mb-4" />
          <p className="text-[#E8C872] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Outing at Strawberry Ridge</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, fundraiser scrambles, league play, and private group events. Customizable packages include green fees, carts, food and beverage, and on-course contests. The ridge-top setting makes every event feel special.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7244524022" className="bg-[#E8C872] hover:bg-[#d4b560] text-[#722F37] px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Event
            </a>
            <a href="mailto:info@strawberryridgegolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons CTA */}
      <section className="bg-[#2D5016] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#E8C872]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#E8C872]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Golf Lessons Available</h3>
              <p className="text-white/50 text-sm mt-0.5">All skill levels welcome &middot; Call the pro shop for scheduling</p>
            </div>
          </div>
          <a href="tel:7244524022" className="bg-[#E8C872] hover:bg-[#d4b560] text-[#2D5016] px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Book a Lesson
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D1520] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/strawberry-ridge/logo.png" alt="Strawberry Ridge Golf Course" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Strawberry Ridge</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Golf Course</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7244524022" className="flex items-center gap-2.5 hover:text-[#E8C872] transition-colors"><Phone className="w-4 h-4 text-[#E8C872]" />(724) 452-4022</a>
                <a href="mailto:info@strawberryridgegolf.com" className="flex items-center gap-2.5 hover:text-[#E8C872] transition-colors"><Mail className="w-4 h-4 text-[#E8C872]" />info@strawberryridgegolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#E8C872] mt-0.5" /><span>135 McNulty Lane<br />Harmony, PA 16037</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#E8C872]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 70"], ["Yardage", "6,000+"], ["Type", "Public"], ["Terrain", "Ridge-top, rolling hills"], ["Bar & Restaurant", "On-site, open to public"], ["Carts", "Available every round"], ["Walk-Ons", "Welcome"], ["Leagues", "Men's, women's, and seniors"], ["Outings", "Corporate & charity packages"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Strawberry Ridge Golf Course. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#E8C872] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
