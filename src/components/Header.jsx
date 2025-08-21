export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base-900/80 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-4 md:gap-6">
          <img
            src="/voltex-logo.png"
            alt="Voltex"
            className="block h-[28px] md:h-[32px] lg:h-[36px] w-auto object-contain"
            width="144"
            height="36"
            style={{ height: '28px' }}     // fallback՝ նույնիսկ առանց Tailwind
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
           />
          <div className="text-lg font-bold tracking-wide">voltex<span className="text-voltex">.tech</span></div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-voltex">Services</a>
          <a href="#why" className="hover:text-voltex">Why Voltex</a>
          <a href="#contact" className="hover:text-voltex">Contact</a>
          <a href="mailto:info@voltex.am" className="btn-primary">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}
