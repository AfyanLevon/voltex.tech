export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container-xl py-10 text-sm text-white/70">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-semibold text-white">Voltex Tech</div>
            <p className="mt-2">
              BESS · Smart Home · Security · Hard microelectric solutions.
              <br/>5-year warranty for BESS. Construction + Energy under one roof.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1">
              <li><a href="mailto:info@voltex.am" className="hover:text-voltex">info@voltex.am</a></li>
              <li><a href="tel:+37495933939" className="hover:text-voltex">+374 95 933 939</a></li>
              <li>44/2 Acharyan str, Yerevan, Armenia</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Company</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:text-voltex">Services</a></li>
              <li><a href="#why" className="hover:text-voltex">Why Voltex</a></li>
              <li><a href="#contact" className="hover:text-voltex">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Voltex LLC. All rights reserved.</span>
          <a href="https://voltex.am" className="hover:text-voltex">voltex.am →</a>
        </div>
      </div>
    </footer>
  );
}
