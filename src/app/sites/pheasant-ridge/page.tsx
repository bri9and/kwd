import { Phone, MapPin, Mail, Flag, Bird, Trees, Mountain, Leaf, GraduationCap, Clock, Users, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Pheasant Ridge Golf Club | 18 Holes in Gibsonia, PA",
  description:
    "Public 18-hole golf course in Gibsonia, PA. 6,600 yards of challenging terrain through wooded ridges. New management, fresh energy. Green fees from $28. Call (724) 502-4993.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Ridge Runner", description: "A sweeping 410-yard dogleg left that traces the spine of the ridge. The elevated tee gives you a panoramic view of the tree line, but the fairway narrows sharply at the bend. Favor the right side off the tee or risk punching out of thick Pennsylvania hardwoods.", stat: "410 yds — ridge-top dogleg" },
  { hole: 7, par: 3, title: "Pheasant's Nest", description: "A deceptive 185-yard carry over a native grass hollow to a well-bunkered green. When the wind sweeps through the gap in the trees, club selection becomes a guessing game. The safe play is the center — but the pin rarely sits there.", stat: "185 yds over native grass" },
  { hole: 12, par: 5, title: "The Long Hunt", description: "At 565 yards, it is the longest hole on the course and a true three-shot par 5. The fairway rolls through a valley flanked by mature oaks before climbing to a tiered green that punishes anything below the hole. Birdie here is earned, not given.", stat: "565 yds — longest on the course" },
  { hole: 16, par: 4, title: "The Gauntlet", description: "A 435-yard brute with a narrow chute off the tee and water guarding the left side of the green. The approach demands a precise mid-iron to a shallow putting surface. This is where rounds are made or broken coming down the stretch.", stat: "435 yds, water left on approach" },
];

const rates = [
  { category: "Weekday (Mon-Fri)", eighteen: "$28", nine: "$18" },
  { category: "Weekend / Holiday", eighteen: "$38", nine: "$25" },
  { category: "Weekday w/ Cart", eighteen: "$38", nine: "$28" },
  { category: "Weekend w/ Cart", eighteen: "$48", nine: "$35" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$25", nine: "$16" },
  { category: "Junior Under 18", eighteen: "$20", nine: "$12" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$16" },
  { label: "Cart — 9 Holes", price: "$10" },
  { label: "Club Rental", price: "$20" },
  { label: "Range Bucket (Lg)", price: "$10" },
];

const coursePhotos = [
  { src: "/sites/pheasant-ridge/course1.jpg", alt: "Pheasant Ridge Golf Club — fairway through the trees" },
  { src: "/sites/pheasant-ridge/course2.jpg", alt: "Pheasant Ridge Golf Club — elevated green" },
  { src: "/sites/pheasant-ridge/course3.jpg", alt: "Pheasant Ridge Golf Club — ridge-line panorama" },
  { src: "/sites/pheasant-ridge/course4.jpg", alt: "Pheasant Ridge Golf Club — wooded hole" },
];

const pf = "'Playfair Display', serif";

export default function PheasantRidgeGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1B4332] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/pheasant-ridge/logo.png" alt="Pheasant Ridge Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1998 &middot; Gibsonia, Pennsylvania
            </span>
          </div>
          <a href="tel:7245024993" className="hover:text-[#CC5500] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 502-4993
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/pheasant-ridge/hero.jpg" alt="Pheasant Ridge Golf Club — aerial view of the course" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#1B4332]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/pheasant-ridge/logo.png" alt="Pheasant Ridge Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#CC5500] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Pheasant Ridge Golf Club
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            NEW SEASON<br />
            <span className="text-[#CC5500] italic font-normal text-5xl sm:text-6xl lg:text-7xl">New Energy</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            6,600 yards of challenging golf through wooded ridges and rolling terrain in Gibsonia. Under new management and better than ever — come see the difference.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Holes", value: "18" }, { label: "Yards", value: "6,600" }, { label: "Est.", value: "1998" }, { label: "Terrain", value: "Ridge" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7245024993" className="bg-[#CC5500] hover:bg-[#b34a00] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 6065 Rittman Rd, Gibsonia, PA 15044
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#2D5016] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Established 1998 &middot; Gibsonia, PA &middot; Richland Township &middot; New Management
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1B4332]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>6,600 Yards Through the Ridge</h2>
            <p className="text-[#1B4332]/50 text-sm mt-3 max-w-lg mx-auto">
              Mature hardwoods, rolling elevation changes, and a layout that rewards smart course management over raw power.
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
            <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1B4332]/15 bg-white p-8 sm:p-10 relative group hover:border-[#CC5500]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1B4332]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#CC5500] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Bird className="w-5 h-5 text-[#1B4332]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4332] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1B4332]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1B4332]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2D5016]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B4332]/40 text-sm mt-8 italic">6,600 yards of ridge golf — bring your course management game.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-white border-y border-[#1B4332]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Experience</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1B4332] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;Pheasant Ridge is the kind of course where you forget you are twenty minutes from Pittsburgh. Tall pines, rolling fairways, and not a house in sight &mdash; just you and the course.&rdquo;
          </blockquote>
          <p className="text-[#1B4332]/40 text-sm mt-6">A local golfer&rsquo;s take on the Ridge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Trees, label: "Wooded Fairways" }, { icon: Mountain, label: "Rolling Terrain" }, { icon: Bird, label: "Wildlife Habitat" }, { icon: Leaf, label: "Natural Beauty" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1B4332]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1B4332]/50" />
                </div>
                <span className="text-xs text-[#1B4332]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1B4332]/50 text-sm mt-3">Challenging golf at honest prices. Walk or ride — your call.</p>
          </div>
          <div className="border border-[#1B4332]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B4332] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1B4332] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1B4332] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1B4332] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1B4332]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1B4332]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B4332]/30 text-xs mt-6 tracking-wide">Season passes and memberships available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Clubhouse — clubhouse.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/pheasant-ridge/clubhouse.jpg" alt="Pheasant Ridge Golf Club clubhouse and patio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Flag className="w-8 h-8 text-[#CC5500] mx-auto mb-4" />
          <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>The Clubhouse</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Grab a cold drink and recap the round on the patio. The clubhouse at Pheasant Ridge is the kind of place where post-round stories turn into plans for the next tee time.
          </p>
          <a href="tel:7245024993" className="inline-flex items-center gap-2 border border-[#CC5500]/40 text-[#CC5500] hover:bg-[#CC5500]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Call the Clubhouse
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#1B4332]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1B4332] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#CC5500]" style={{ fontFamily: pf }}>P</span>
            heasant Ridge Golf Club opened in 1998 on a stretch of wooded ridgeline in Gibsonia, Richland Township &mdash; just north of Pittsburgh. The course was carved through mature hardwoods and natural terrain, creating 18 holes that demand precision and reward patience. At 6,600 yards, it plays longer than the scorecard suggests thanks to elevation changes and tight landing areas. After years of steady play, the club is now under new management bringing fresh energy, course improvements, and a commitment to making Pheasant Ridge one of the best public golf experiences in the northern suburbs. The fairways are tighter, the greens are faster, and the welcome mat is out.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/pheasant-ridge/hero.jpg" alt="Pheasant Ridge Golf Club course aerial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B4332]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#CC5500] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Outings</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Outing at the Ridge</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity scrambles, league play, and private group events. Customizable packages with food, beverage, and on-course contests. Let us handle the logistics while you enjoy the day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7245024993" className="bg-[#CC5500] hover:bg-[#b34a00] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Outing
            </a>
            <a href="mailto:info@pheasantridgegolf.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons / Pro Shop CTA */}
      <section className="bg-[#1B4332] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#CC5500]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#CC5500]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Lessons &amp; Pro Shop</h3>
              <p className="text-white/50 text-sm mt-0.5">Improve your game with professional instruction &middot; Fully stocked pro shop</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7245024993" className="bg-[#CC5500] hover:bg-[#b34a00] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
            <a href="mailto:info@pheasantridgegolf.com" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2B1E] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/pheasant-ridge/logo.png" alt="Pheasant Ridge Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Pheasant Ridge Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Gibsonia, Pennsylvania</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7245024993" className="flex items-center gap-2.5 hover:text-[#CC5500] transition-colors"><Phone className="w-4 h-4 text-[#CC5500]" />(724) 502-4993</a>
                <a href="mailto:info@pheasantridgegolf.com" className="flex items-center gap-2.5 hover:text-[#CC5500] transition-colors"><Mail className="w-4 h-4 text-[#CC5500]" />info@pheasantridgegolf.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#CC5500] mt-0.5" /><span>6065 Rittman Rd<br />Gibsonia, PA 15044</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#CC5500]" /><span>Open daily &middot; Dawn to dusk &middot; Seasonal</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18"], ["Yardage", "6,600"], ["Type", "Public"], ["Established", "1998"], ["Location", "Gibsonia (Richland Twp)"], ["Management", "New ownership group"], ["Pro Shop", "Fully stocked"], ["Driving Range", "Available"], ["Outings", "Corporate & charity events"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Pheasant Ridge Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#CC5500] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
