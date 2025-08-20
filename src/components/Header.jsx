export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base-900/80 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/voltex-logo.png" alt="Voltex" className="h-8 w-8 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
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
