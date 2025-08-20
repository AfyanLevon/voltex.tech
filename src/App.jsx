import React from "react";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#b9f6a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Header(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg" style={{background:"linear-gradient(135deg,#6ee777,#2e7d32)"}}/>
          <span className="text-xl font-semibold tracking-wide">
            voltex<span className="text-[var(--voltex-green)]">.tech</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--fg-300)]">
          <a href="#bess" className="hover:text-white">BESS</a>
          <a href="#smart" className="hover:text-white">Smart Home</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="mailto:info@voltex.am" className="btn">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}

function Hero(){
  return (
    <section className="section pt-20">
      <span className="badge">5-year Warranty on BESS</span>
      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        Reliable <span className="text-[var(--voltex-green)]">Energy Storage</span>,<br/> Smart Homes & Security
      </h1>
      <p className="mt-5 max-w-2xl text-[var(--fg-500)]">
        We design and install Battery Energy Storage Systems (BESS), practical smart-home automations
        and robust security systems. Real hardware, certified installers, clean handover.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#bess" className="btn">Explore BESS</a>
        <a href="#contact" className="btn-outline">Talk to an Engineer</a>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold">Residential & Commercial</h3>
          <p className="mt-2 text-[var(--fg-500)]">Sizing, design and installation tailored to your load profile.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Local Support</h3>
          <p className="mt-2 text-[var(--fg-500)]">On-site diagnostics, maintenance and 5-year warranty.</p>
        </div>
      </div>
    </section>
  );
}

function Feature({title,items}){
  return (
    <div className="card h-full">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-[var(--fg-300)]">
        {items.map((t,i)=>(
          <li key={i} className="flex items-start gap-2">
            <Check/><span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sections(){
  return (
    <>
      <section id="bess" className="section">
        <h2 className="text-3xl font-bold">Battery Energy Storage (BESS)</h2>
        <p className="mt-3 text-[var(--fg-500)]">
          Grid-tied & hybrid systems with safe LiFePO₄ batteries, proper BMS and surge protection.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Design & Sizing" items={["Load study & simulation","Hybrid/UPS modes","DC/AC coupling"]}/>
          <Feature title="Hardware" items={["LiFePO₄ packs • IP65","Certified inverters","Type-2 surge protectors"]}/>
          <Feature title="Commissioning" items={["Testing & handover","Monitoring setup","5-year warranty"]}/>
        </div>
      </section>

      <section id="smart" className="section">
        <h2 className="text-3xl font-bold">Smart Home</h2>
        <p className="mt-3 text-[var(--fg-500)]">Lighting, climate, blinds, metering and scenes without vendor lock-in.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Comfort" items={["Lighting scenes","HVAC schedules","Voice & app control"]}/>
          <Feature title="Efficiency" items={["Energy metering","Automation rules","Peak-shaving with BESS"]}/>
          <Feature title="Open Standards" items={["KNX, Modbus, Zigbee","Local control options","Secure remote access"]}/>
        </div>
      </section>

      <section id="security" className="section">
        <h2 className="text-3xl font-bold">Security Systems</h2>
        <p className="mt-3 text-[var(--fg-500)]">CCTV, access control and alarm systems designed for high uptime.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="CCTV" items={["PoE cameras","NVR with backups","Remote viewing"]}/>
          <Feature title="Access / Alarm" items={["Readers & controllers","Perimeter sensors","Fail-safe power"]}/>
          <Feature title="Networking" items={["UPS & surge protection","VLAN segregation","Secure storage"]}/>
        </div>
      </section>
    </>
  );
}

function CTA(){
  return (
    <section id="contact" className="section text-center">
      <div className="inline-flex items-center gap-2 badge">Licensed installers • Local support</div>
      <h2 className="mt-5 text-3xl font-bold">Ready to start?</h2>
      <p className="mt-2 text-[var(--fg-500)]">Tell us about your project and we’ll size a solution you can trust.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a className="btn" href="mailto:info@voltex.am">info@voltex.am</a>
        <a className="btn-outline" href="tel:+37495933939">+374 95 933 939</a>
      </div>
      <p className="mt-3 text-sm text-[var(--fg-500)]">44/2 Acharyan str, Yerevan, Armenia</p>
    </section>
  );
}

function Footer(){
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-[var(--fg-500)]">
        <span>© {new Date().getFullYear()} Voltex LLC — voltex.tech</span>
        <div className="flex items-center gap-4">
          <a href="https://voltex.am">Construction: voltex.am</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <>
      <Header/>
      <Hero/>
      <Sections/>
      <CTA/>
      <Footer/>
    </>
  );
}
