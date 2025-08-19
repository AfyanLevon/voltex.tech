import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f12] text-gray-100">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[#0b0f12]/80 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/voltex-logo.png" alt="Voltex logo" className="h-8 w-8 rounded bg-black/30 ring-1 ring-emerald-500/40 object-contain" />
            <span className="font-semibold tracking-wide">Voltex LLC</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-white/90 transition">Services</a>
            <a href="#bess" className="hover:text-white/90 transition">BESS</a>
            <a href="#projects" className="hover:text-white/90 transition">Portfolio</a>
            <a href="#contact" className="hover:text-white/90 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-xl border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:bg-white/5">EN/HY</button>
            <a
              href="https://voltex.tech"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center rounded-xl border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/10 transition"
              title="Go to Voltex.tech (BESS & Tech)"
            >
              Voltex.tech ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full blur-3xl opacity-30" style={{background:"radial-gradient(60% 60% at 50% 50%, #10b98133, transparent)"}}/>
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30" style={{background:"radial-gradient(60% 60% at 50% 50%, #34d39933, transparent)"}}/>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Building Excellence,
                <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"> Powering Progress</span>
              </h1>
              <p className="mt-5 max-w-xl text-white/70">
                Professional construction with innovative electrical solutions — BESS, smart home, and security systems.
                Real-world reliability, not futuristic hype.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition">Explore Services</a>
                <a href="#bess" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition">BESS & Tech</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-300">5-Year BESS Warranty</span>
                <span className="text-white/50">•</span>
                <span className="text-white/60">Licensed & Insured</span>
                <span className="text-white/50">•</span>
                <span className="text-white/60">On-site Assessment</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-2 shadow-2xl">
                <div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,#0b0f12,transparent),linear-gradient(0deg,#0b0f12,transparent)] relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-70">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02]" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="rounded-lg border border-white/10 bg-[#0b0f12]/80 px-3 py-2 text-xs text-white/70">Construction • Electrical • BESS</div>
                    <div className="rounded-lg bg-emerald-500/20 text-emerald-300 px-3 py-2 text-xs">Real Materials, Real Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Construction & Electrical Services</h2>
              <p className="mt-2 text-white/60">From foundations to finishes — plus complex micro-electrical work.</p>
            </div>
            <a href="#contact" className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition">Request Estimate</a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {title:"General Construction", desc:"Residential & commercial builds, remodeling, premium finishes."},
              {title:"Electrical & Lighting", desc:"Wiring, panel upgrades, LED design, smart integration."},
              {title:"Plumbing & HVAC", desc:"Installations, replacements, and maintenance."},
              {title:"Security Systems", desc:"CCTV, access control, alarms, intercoms — end-to-end."},
              {title:"Smart Home", desc:"Sensors, automation, energy monitoring, app control."},
              {title:"Micro-Electrical Solutions", desc:"Hard electrical problem-solving and diagnostics."},
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-emerald-500/40 transition">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30" />
                </div>
                <p className="mt-2 text-sm text-white/65">{item.desc}</p>
                <div className="mt-4 text-xs text-emerald-300/90">Scope • Materials • Execution • QA</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BESS */}
      <section id="bess" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Battery Energy Storage (BESS)</h2>
              <p className="mt-3 text-white/70 max-w-prose">
                We design and install reliable home and business storage — engineered for safety and longevity. Only we offer
                a <span className="text-emerald-300 font-semibold">5-year warranty</span> on BESS in our region.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Capacity planning & site survey</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Hybrid inverter selection & installation</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Smart monitoring & safety checks</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="https://voltex.tech" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 transition">Learn more at Voltex.tech ↗</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0d1216] p-6">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {[
                  {kpi:"5-Year", label:"BESS Warranty"},
                  {kpi:"24/7", label:"Monitoring"},
                  {kpi:"Safe", label:"Certified Install"},
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-white/10 py-6 bg-[#0b0f12]">
                    <div className="text-xl font-semibold text-emerald-400">{m.kpi}</div>
                    <div className="mt-1 text-xs text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-white/60">Replace with real photos later. We keep the style realistic, not futuristic.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {["Residential Loft", "Office Fit-Out", "Retail Renovation"].map((title, i) => (
              <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1216]">
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900" />
                <div className="p-4">
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-white/65">High-quality craft, realistic materials, precise scheduling.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/20 to-emerald-400/10 p-6">
            <h3 className="text-xl font-semibold">Ready to start your project?</h3>
            <p className="mt-1 text-white/70">Tell us about your construction or BESS needs and get a free on-site assessment.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition">Request a Quote</a>
              <a href="https://voltex.tech" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 transition">Visit Voltex.tech ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-white/60">We respond within 24 hours.</p>

          <form className="mt-8 grid md:grid-cols-2 gap-5 max-w-3xl">
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Full name" />
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" />
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:col-span-2" placeholder="Subject" />
            <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:col-span-2" placeholder="Project details" />
            <button type="button" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition md:col-span-2">Send Request</button>
          </form>

          <div className="mt-10 text-sm text-white/60 space-y-1">
            <div>📍 44/2 Acharyan str, Yerevan, Armenia</div>
            <div>✉️ info@voltex.am</div>
            <div>☎️ +374 95 933 939</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Voltex LLC. All rights reserved. Licensed & Insured.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#projects" className="hover:text-white/80">Portfolio</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
            <a href="https://voltex.tech" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200">Voltex.tech ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
