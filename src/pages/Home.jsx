import Header from '../components/Header'
import Hero from '../components/Hero'
import { AboutSection, ServicesSection, ApproachSection, TeamSection, ContactSection } from '../components/Sections'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
