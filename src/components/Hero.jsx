import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 pointer-events-none" />
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10">
        <div className="text-white">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs tracking-wider uppercase">
            Trusted • Professional • Compliant
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Your Holistic and Systematic SHE Solutions.
          </h1>
          <p className="mt-6 text-slate-200 text-lg max-w-2xl">
            Strategic Occupational Health & Safety services for the private and public sectors. Delivering
            sustainable behavioral change and legislative compliance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="px-5 py-3 rounded-md bg-orange-500 text-slate-900 font-semibold hover:bg-orange-400 transition-colors">
              Request a Quote
            </Link>
            <Link to="/services" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
