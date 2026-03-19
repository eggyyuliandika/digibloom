const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Trusted Expertise',
    description: 'Our team consists of experienced professionals dedicated to delivering high-quality digital solutions tailored to your business needs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'Strategic Approach',
    description: 'We combine data, creativity, and strategy to develop solutions that are both innovative, adaptable and impactful results.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: 'Fast & Responsive Communication',
    description: 'We are committed to delivering quick and efficient communication, ensuring your project runs smoothly from start to end.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Comprehensive Digital Solutions',
    description: 'From branding and website design to development and marketing, we provide end-to-end services in one place.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Why Work<br />with DigiBloom?
          </h2>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            We help businesses grow through innovative digital solutions that are strategic, creative, and results driven. Partner with DigiBloom to elevate your brand with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#1B3A6B] rounded-3xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#0F2347] transition-all duration-300">
              <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center text-white">
                {r.icon}
              </div>
              <h3 className="text-white font-bold text-sm leading-snug">{r.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
