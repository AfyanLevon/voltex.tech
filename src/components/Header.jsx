export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-neutral-900/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-4 md:gap-6">
          <img
            src="/voltex-logo.png"
            alt="Voltex"
            className="block h-[28px] md:h-[32px] lg:h-[36px] w-auto object-contain"
            width="144"
            height="36"
            style={{ height: '28px' }}  // fallback to ensure size even if Tailwind fails
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="text-lg font-bold tracking-wide">
            voltex<span className="text-voltex">.tech</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="hover:text-voltex">Services</a>
          <a href="#why" className="hover:text-voltex">Why Us</a>
          <a href="#contact" className="hover:text-voltex">Contact</a>
        </nav>

        <a
          href="mailto: info@voltex.am"
          className="inline-flex items-center gap-2 rounded-xl bg-voltex px-5 py-3 font-semibold text-black shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voltex/60"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
