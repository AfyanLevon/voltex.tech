import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Badge from "./components/Badge.jsx";
import Section from "./components/Section.jsx";

function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/5">
      {/* soft green glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 20% -10%, rgba(107,209,109,0.18), transparent 60%), radial-gradient(800px 400px at 80% -20%, rgba(107,209,109,0.10), transparent 60%)",
        }}
      />
      {/* watermark logo, controlled size */}
      <img
        src="/fulllogo_transparent.png"
        alt=""
        aria-hidden="true"
        className="hero-mark"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Badge>Building Excellence · Powering Progress</Badge>
        <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight">
          BESS, Smart Home & Security —{" "}
          <span className="text-voltex">done right</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          We design, install and maintain Battery Energy Storage Systems, smart
          home automation and professional security. Only at Voltex —{" "}
          <span className="text-white">5-year warranty for BESS</span>. We also
          operate a construction arm for turnkey delivery and hard microelectric
          challenges.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-voltex px-5 py-3 font-semibold text-black shadow-soft transition hover:opacity-90"
          >
            Get Free Quote →
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-voltex/50 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    {
      title: "BESS (Battery Energy Storage)",
      desc: "Design & deployment for homes and businesses. Grid-tie, backup, hybrid inverters. 5-year warranty.",
      emoji: "⚡",
    },
    {
      title: "Smart Home",
      desc: "Lighting, climate, access control, voice assistants, energy monitoring. Real-world reliable stacks.",
      emoji: "🏠",
    },
    {
      title: "Security Systems",
      desc: "CCTV, alarms, access control, perimeter & fire systems. Remote monitoring and maintenance.",
      emoji: "🛡️",
    },
    {
      title: "Hard Microelectric Solutions",
      desc: "Diagnostics, custom panels, tricky retrofits & industrial integrations led by senior engineers.",
      emoji: "🧰",
    },
  ];

  return (
    <Section id="services" title="Our Services" kicker="What we do">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-neutral-800/60 p-6 backdrop-blur transition hover:border-voltex/30"
          >
            <div className="text-3xl">{x.emoji}</div>
            <h3 className="mt-3 font-semibold">{x.title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              {x.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const bullets = [
    "5-year warranty for BESS",
    "Construction + Energy under one roof",
    "Realistic solutions — not just futuristic demos",
    "Engineering-first approach, on-time delivery",
  ];
  return (
    <Section id="why" title="Why Choose Voltex?" kicker="Trust & advantages">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-neutral-800/60 p-6 backdrop-blur transition hover:border-voltex/30">
          <h3 className="font-semibold">Value you can measure</h3>
          <p className="mt-2 text-white/70">
            Our teams combine construction experience with deep electrical
            engineering. We design systems that are safe, scalable and
            maintainable.
          </p>
          <ul className="mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-voltex"></span>
                <span className="text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-neutral-800/60 p-6 backdrop-blur transition hover:border-voltex/30">
          <h3 className="font-semibold">Tech stack</h3>
          <p className="mt-2 text-white/70">
            We work with tier-1 batteries/inverters, proven sensors and
            controllers, neat wiring and clean panels. Integrations with
            mobile/voice, smart meters and dashboards.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Lithium BESS",
              "Hybrid Inverters",
              "KNX/Zigbee",
              "PoE CCTV",
              "Access Control",
              "Fire Safety",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-xs border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Ready to start?" kicker="Contact">
      <div className="rounded-2xl border border-white/5 bg-neutral-800/60 p-6 backdrop-blur transition hover:border-voltex/30">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-white/80">
              Tell us about your project — home or commercial. We’ll audit your
              needs and propose a realistic plan.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div>
                <span className="text-white/60">Email:</span>{" "}
                <a className="hover:text-voltex" href="mailto:info@voltex.am">
                  info@voltex.am
                </a>
              </div>
              <div>
                <span className="text-white/60">Phone:</span>{" "}
                <a className="hover:text-voltex" href="tel:+37495933939">
                  +374 95 933 939
                </a>
              </div>
              <div>
                <span className="text-white/60">Address:</span> 44/2 Acharyan
                str, Yerevan, Armenia
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:info@voltex.am"
                className="inline-flex items-center gap-2 rounded-xl bg-voltex px-5 py-3 font-semibold text-black shadow-soft transition hover:opacity-90"
              >
                Email us
              </a>
              <a
                href="tel:+37495933939"
                className="inline-flex items-center gap-2 rounded-xl border border-voltex/50 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Call now
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-800/60 p-4">
            <iframe
              title="Voltex location"
              className="h-72 w-full rounded-lg border border-white/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=44.0,40.1,45.2,41.0&layer=mapnik"
            ></iframe>
            <p className="mt-2 text-xs text-white/50">
              Approximate location for demo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}
