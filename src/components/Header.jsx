import { Link, NavLink } from 'react-router-dom'

function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-100 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-md">
              <span className="text-slate-900 font-extrabold">TS</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold tracking-wide">TSHESSA SOLUTIONS</p>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">Pty Ltd</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/services" className={navLinkClass}>Our Services</NavLink>
            <NavLink to="/approach" className={navLinkClass}>Our Approach</NavLink>
            <NavLink to="/team" className={navLinkClass}>The Team</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-500 text-slate-900 font-semibold hover:bg-orange-400 transition-colors">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
