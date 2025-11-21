import Header from '../components/Header'
import Footer from '../components/Footer'
import { ApproachSection } from '../components/Sections'

function Approach() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <div className="pt-8 pb-2 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Our Approach</h1>
          <p className="text-slate-300 mt-2">Consultative, multi-disciplinary and focused on sustainable change.</p>
        </div>
      </div>
      <ApproachSection />
      <Footer />
    </div>
  )
}

export default Approach
