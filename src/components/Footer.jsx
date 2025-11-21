function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold">TSHESSA SOLUTIONS</p>
          <p className="text-xs text-slate-400">Your holistic and systematic SHE solutions</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 text-slate-100">SACPCMP</span>
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 text-slate-100">MerSeta - Accredited</span>
            <span className="px-2 py-1 text-[10px] rounded bg-white/10 text-slate-100">SAIOSH</span>
          </div>
        </div>
        <div className="text-slate-300 text-sm">
          <p className="font-semibold text-white mb-2">Contact</p>
          <p>8 Cuyler Street, Eureka, Wilsonia, East London</p>
          <p>Phone: 078 794 3374</p>
          <p>Email: xolanigomo@gmail.com</p>
        </div>
        <div className="text-slate-300 text-sm">
          <p className="font-semibold text-white mb-2">Navigation</p>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Approach</li>
            <li>The Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TSHESSA SOLUTIONS (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
