import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactSection } from '../components/Sections'

function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <div className="pt-8 pb-2 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Contact</h1>
          <p className="text-slate-300 mt-2">Get in touch for quotes, training, or audits.</p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
