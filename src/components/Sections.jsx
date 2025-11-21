import { CheckCircle } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-white">About Us</h2>
          <p className="mt-4 text-slate-300">
            TSHESSA is a 100% Black-owned company based in East London, Eastern Cape. We provide
            vast richness in Safety, Health, and Environmental (SHE) systems and training.
          </p>
          <div className="mt-6 space-y-4 text-slate-200">
            <p><span className="font-semibold text-white">Vision:</span> To be the most trusted, holistic, and systematic health and safety solutions-driven service provider of choice.</p>
            <p><span className="font-semibold text-white">Mission:</span> To act as agents of change in the industry through a consultative, comprehensive, and systematic approach.</p>
            <p><span className="font-semibold text-white">Objectives:</span> Facilitating a positive, motivated workforce through training and mentoring to ensure a healthy, safe, and productive working environment.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['Construction sites','Safety audits','Training workshops','Professionals with PPE'].map((label, idx) => (
            <div key={idx} className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-slate-300 text-sm border border-white/10">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: 'Site Inspections & Audits',
      desc: 'Periodic inspections to mitigate risk and full system audits to ensure construction regulation compliance.'
    },
    {
      title: 'SHE Files',
      desc: 'Professional development of safety files in accordance with client specifications, including detailed handover explanations.'
    },
    {
      title: 'Workshops & Training',
      desc: 'Risk-related and legal training needs analysis. Training available in Xhosa. Accredited by MerSeta.'
    },
    {
      title: 'Risk Assessments',
      desc: 'The backbone of our SHE management system, using simple or client-preferred methodologies for risk quantification.'
    },
    {
      title: 'Mentoring Programs',
      desc: 'Mentoring a database of inexperienced individuals until maturity to close the skills gap.'
    },
    {
      title: 'Motivational Talks',
      desc: 'Behavioral-based safety talks (available in Xhosa) to boost morale and reduce incidents.'
    },
  ]

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-slate-900 p-6 text-slate-200 hover:bg-slate-900/80 transition">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-yellow-400" size={22} />
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ApproachSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-white">Our Approach</h2>
          <ul className="mt-6 space-y-3 text-slate-200 list-disc pl-6">
            <li>Consultative & Multi-disciplinary Approach</li>
            <li>Focus on sustainable behavioral change and long-term relationships</li>
            <li>Emphasis on self-reliance: We train clients to eventually manage safety independently</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-6">The Team</h2>
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6 text-slate-200">
          <h3 className="text-white font-semibold">Managing Director: Mr. Xolani Gomo</h3>
          <p className="mt-2 text-slate-300">
            19 years of experience in OHS (6 years at Aberdare Cables, 7 years as a top facilitator at NOSA).
            Formerly established the NOSA East London branch.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Qualifications: National Diploma in Safety Management (UNISA), SAMTRAC, ITIS, and ISO 14001/OHSAS 18001 Auditor.
          </p>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-4 text-slate-300">We’d love to partner with you. Reach out for a free consultation or request a quote.</p>
          <div className="mt-6 text-slate-200 space-y-2 text-sm">
            <p><span className="font-semibold text-white">Address:</span> 8 Cuyler Street, Eureka, Wilsonia, East London</p>
            <p><span className="font-semibold text-white">Phone:</span> 078 794 3374</p>
            <p><span className="font-semibold text-white">Email:</span> xolanigomo@gmail.com</p>
            <p className="pt-4 italic text-slate-300">"Your holistic and systematic SHE solutions"</p>
          </div>
        </div>
        <form className="rounded-xl border border-white/10 bg-slate-950 p-6 text-slate-200 space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="(+27)" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={4} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="How can we help?" />
          </div>
          <button type="button" className="w-full py-2 rounded-md bg-orange-500 text-slate-900 font-semibold hover:bg-orange-400 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  )
}
