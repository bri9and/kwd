import { Phone, MapPin, Mail, Flag, Mountain, Utensils, GraduationCap, Clock, TreePine, Footprints } from "lucide-react";

export const metadata = {
  title: "Olde Stonewall Golf Club | #1 Public Course in PA | Ellwood City, PA",
  description:
    "Nationally ranked 18-hole public golf course carved from a reclaimed strip mine. Par 70, 7,103 yards. Designed by Hurdzan/Fry. Walking only. Green fees from $95. Call (724) 752-4653.",
};

const signatureHoles = [
  { hole: 3, par: 4, title: "The Quarry Wall", description: "A 415-yard dogleg left that wraps around a massive exposed stone wall rising forty feet from the fairway floor. Your tee shot must thread between the wall and a cluster of native fescue mounds. The approach plays uphill to a green tucked behind the remnants of the old mine face — a geological canvas no architect could invent.", stat: "40-ft stone wall guards the dogleg" },
  { hole: 7, par: 3, title: "The Ridgeline", description: "From an elevated tee perched on the spine of the ridge, you look down 80 feet to a green carved into a natural amphitheater of stone outcroppings. Wind whips across the exposed plateau with nothing to stop it. Club selection is a guess, and the penalty for guessing wrong is a ball lost to the ravine.", stat: "80-ft elevation drop, tee to green" },
  { hole: 12, par: 5, title: "The Reclamation", description: "At 565 yards this is the longest hole on the course and the one that best tells the story of the land. The fairway follows the path of the old mining haul road, rising and falling through terrain that was barren earth twenty-five years ago. Native grasses and wildflowers now frame every shot. Reach the green in two and you have earned the eagle.", stat: "565 yds along the old haul road" },
  { hole: 17, par: 3, title: "The Precipice", description: "A do-or-die par 3 over a deep ravine to an exposed green with no bailout. Stone ledges frame the left side and a sheer drop guards the right. At 195 yards from the tips with the pin tucked behind a false front, this is where rounds are made and broken — two holes from the house.", stat: "195 yds, ravine carry, no bailout" },
];

const rates = [
  { category: "Prime Time (Weekend / Holiday)", eighteen: "$175" },
  { category: "Weekday", eighteen: "$125" },
  { category: "Twilight (after 2 PM)", eighteen: "$95" },
  { category: "Super Twilight (after 5 PM)", eighteen: "$65" },
  { category: "Replay Rate (same day)", eighteen: "$65" },
];

const extras = [
  { label: "Caddie Fee (suggested)", price: "$50+" },
  { label: "Pull Cart Rental", price: "$10" },
  { label: "Club Rental", price: "$50" },
  { label: "Range Balls (bucket)", price: "$10" },
];

const coursePhotos = [
  { src: "/sites/olde-stonewall/course1.jpg", alt: "Olde Stonewall Golf Club — stone outcropping along fairway" },
  { src: "/sites/olde-stonewall/course2.jpg", alt: "Olde Stonewall Golf Club — elevated tee box panorama" },
  { src: "/sites/olde-stonewall/course3.jpg", alt: "Olde Stonewall Golf Club — green with native fescue" },
  { src: "/sites/olde-stonewall/course4.jpg", alt: "Olde Stonewall Golf Club — dramatic elevation change" },
];

const pf = "'Playfair Display', serif";

export default function OldeStonewallGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#0D0D0D] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/olde-stonewall/logo.png" alt="Olde Stonewall Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1999 &middot; Ellwood City, Pennsylvania
            </span>
          </div>
          <a href="tel:7247524653" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (724) 752-4653
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/olde-stonewall/hero.jpg" alt="Olde Stonewall Golf Club — panoramic course view with stone outcroppings" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#0D0D0D]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/olde-stonewall/logo.png" alt="Olde Stonewall Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Olde Stonewall Golf Club Presents
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            CARVED FROM<br />
            <span className="text-[#C9A84C] italic font-normal text-5xl sm:text-6xl lg:text-7xl">Stone &amp; Earth</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            Nationally ranked. Walking only. Eighteen holes cut from a reclaimed strip mine in Western Pennsylvania &mdash; dramatic elevation changes, ancient stone walls, and a purity of golf found nowhere else.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "70" }, { label: "Yards", value: "7,103" }, { label: "Holes", value: "18" }, { label: "Ranked", value: "#1 in PA" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7247524653" className="bg-[#C9A84C] hover:bg-[#B8963E] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 1495 Mercer Rd, Ellwood City, PA 16117
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#1A1A1A] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Designed by Dr. Michael Hurdzan &amp; Dana Fry, ASGCA &middot; Opened 1999 &middot; Walking Only
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#0D0D0D]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>Reclaimed. Reborn. Ranked.</h2>
            <p className="text-[#1A1A1A]/50 text-sm mt-3 max-w-lg mx-auto">
              Where strip mines once scarred the earth, eighteen world-class holes now wind through stone outcroppings, native fescue, and dramatic ridgelines.
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1A1A1A]/15 bg-white p-8 sm:p-10 relative group hover:border-[#C9A84C]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1A1A1A]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1A1A1A]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1A1A1A]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#4A3B20]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1A1A1A]/40 text-sm mt-8 italic">Walking only. No carts. Pure golf the way it was meant to be played.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 bg-white border-y border-[#0D0D0D]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Experience</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1A1A1A] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;What Hurdzan and Fry pulled out of this land is nothing short of miraculous &mdash; a world-class course carved from what was once an environmental scar. Walking it is the only way to understand it.&rdquo;
          </blockquote>
          <p className="text-[#1A1A1A]/40 text-sm mt-6">Golfweek &mdash; Best Courses You Can Play</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Mountain, label: "Dramatic Elevation" }, { icon: TreePine, label: "Native Fescue & Wildflowers" }, { icon: Footprints, label: "Walking Only" }, { icon: Flag, label: "#1 Public in PA" }].map((v) => (
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
            <p className="text-[#1A1A1A]/50 text-sm mt-3">Walking only &mdash; the way championship golf was meant to be played. Caddies available.</p>
          </div>
          <div className="border border-[#1A1A1A]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0D0D0D] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1A1A1A] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1A1A1A] font-bold">{r.eighteen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {extras.map((item) => (
              <div key={item.label} className="border border-[#1A1A1A]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1A1A1A]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1A1A1A]/30 text-xs mt-6 tracking-wide">Rates subject to seasonal adjustment &mdash; call the pro shop to confirm.</p>
        </div>
      </section>

      {/* Shakespeare's Restaurant */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/olde-stonewall/restaurant.jpg" alt="Shakespeare's Restaurant at Olde Stonewall Golf Club" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Shakespeare&rsquo;s Restaurant</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            On-site dining with sweeping views of the course. From post-round drinks to full dinner service, Shakespeare&rsquo;s is the perfect complement to a day on the links at Olde Stonewall.
          </p>
          <a href="tel:7247524653" className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Reserve a Table
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#0D0D0D]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1A1A1A] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#C9A84C]" style={{ fontFamily: pf }}>B</span>
            efore there were fairways, there were coal seams. For decades, strip mining operations carved deep into the hillsides of Lawrence County, leaving behind barren terraces of exposed rock and scarred earth. In the late 1990s, renowned golf course architects Dr. Michael Hurdzan and Dana Fry &mdash; both members of the American Society of Golf Course Architects &mdash; saw what no one else could: a championship golf course hiding inside the wounds. Olde Stonewall Golf Club opened in 1999 and immediately stunned the golf world. The ancient stone walls, dramatic elevation changes of over 200 feet, and vast native fescue areas created a links-style experience unlike anything in the eastern United States. Walking-only by design, the course demands that you earn every hole on foot &mdash; and rewards you with views and shotmaking challenges that rank among the best public golf in America. Golfweek, Golf Digest, and Golf Magazine have all recognized Olde Stonewall as one of the top public courses in Pennsylvania and the nation.
          </p>
        </div>
      </section>

      {/* Events & Banquets */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/olde-stonewall/banquet.jpg" alt="Olde Stonewall Golf Club banquet and event space" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D0D0D]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Banquets</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Event at Olde Stonewall</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Corporate outings, charity tournaments, rehearsal dinners, and private events &mdash; set against one of the most dramatic backdrops in American golf. Full catering by Shakespeare&rsquo;s available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7247524653" className="bg-[#C9A84C] hover:bg-[#B8963E] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Event
            </a>
            <a href="mailto:info@oldestonewall.com" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Pro Shop CTA */}
      <section className="bg-[#0D0D0D] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Pro Shop &amp; Caddie Program</h3>
              <p className="text-white/50 text-sm mt-0.5">Full-service pro shop &middot; Experienced caddies available every round</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7247524653" className="bg-[#C9A84C] hover:bg-[#B8963E] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Call Pro Shop
            </a>
            <a href="mailto:info@oldestonewall.com" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/olde-stonewall/logo.png" alt="Olde Stonewall Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Olde Stonewall Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Carved from Stone &amp; Earth</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:7247524653" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Phone className="w-4 h-4 text-[#C9A84C]" />(724) 752-4653</a>
                <a href="mailto:info@oldestonewall.com" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Mail className="w-4 h-4 text-[#C9A84C]" />info@oldestonewall.com</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5" /><span>1495 Mercer Rd<br />Ellwood City, PA 16117</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#C9A84C]" /><span>Open daily &middot; Dawn to dusk (seasonal)</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 70"], ["Yardage", "7,103 (tips)"], ["Designers", "Dr. Michael Hurdzan & Dana Fry"], ["Affiliation", "ASGCA"], ["Established", "1999"], ["Type", "Public — Walking Only"], ["On-Site Dining", "Shakespeare's Restaurant"], ["Ranking", "#1 Public Course in PA"], ["Caddies", "Available every round"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Olde Stonewall Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#C9A84C] transition-colors">Kiely Web Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
