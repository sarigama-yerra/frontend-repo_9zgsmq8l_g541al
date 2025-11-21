import Header from '../components/Header'
import Footer from '../components/Footer'
import { ServicesSection } from '../components/Sections'

function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <div className="pt-8 pb-2 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Our Services</h1>
          <p className="text-slate-300 mt-2">Comprehensive SHE solutions tailored to your needs.</p>
        </div>
      </div>
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default Services
