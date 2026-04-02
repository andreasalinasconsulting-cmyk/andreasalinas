import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { ArrowRight, Phone, Users, ClipboardList, Mail, MessageSquare, Brain, ChevronRight } from 'lucide-react'

// Hero image - video village on-set producer
const HERO_IMAGE = 'https://fal.media/files/lion/GBzFmVJmLCFVSFCbMjJUl_image.webp'

// Client logos / names
const CLIENTS = [
  'Walmart', 'McDonald\'s', 'Hyundai', 'H-E-B', 'Mattress Firm',
  'Dos Equis', 'Baylor Scott & White', 'Univision', 'Telemundo',
  'NBCUniversal', 'Ford', 'Toyota'
]

// Services data - 4 cards in correct order
const SERVICES = [
  {
    number: '01',
    title: 'Production Bid Desk',
    subtitle: 'AI-Powered Budget & Bid Tool',
    description: 'Instantly generate professional production bids, budgets, and timelines. Built for Executive Producers, Production Managers, Producers, Cost Advisors, and Beginners starting out in production.',
    tags: ['Branded Campaigns', 'Commercial', 'Nonprofit', 'Social Content', 'Digital', 'Print'],
    cta: 'Try Production Bid Desk',
    ctaLink: 'https://preview--prod-bid-buddy.lovable.app',
    external: true,
  },
  {
    number: '02',
    title: 'Production Consulting',
    subtitle: 'Strategy & Execution',
    description: 'End-to-end production strategy for brands, agencies, and networks. From concept to final delivery — multicultural campaigns, integrated media, and Fortune 100 execution.',
    tags: ['Branded Campaigns', 'Commercial', 'Nonprofit', 'Social Content', 'Digital', 'Print'],
    cta: 'Book a Consultation',
    ctaLink: '#contact',
    external: false,
  },
  {
    number: '03',
    title: 'AI Automation & Agents',
    subtitle: 'VocaStack — Virtual Agent Platform',
    description: 'Custom AI agents that handle the repetitive work so you can focus on growing your business. Answer calls, capture leads, pre-qualify clients, handle intake, follow up automatically — 24/7.',
    tags: ['Real Estate', 'Home Services', 'Dental', 'Medical / Doctors', 'Small Businesses', 'Coaches', 'Teachers / Education'],
    cta: 'Explore VocaStack',
    ctaLink: 'https://vocastack.lovable.app',
    external: true,
    pricing: {
      solo: '$750–$1,500 setup · $299–$599/mo',
      enterprise: 'Custom Pricing',
    }
  },
  {
    number: '04',
    title: 'Reel Genius AI',
    subtitle: 'Listing Reel Generator',
    description: 'Turn any property listing into a fully produced marketing reel, flyer, and caption kit in seconds. Built specifically for real estate agents and brokerages.',
    tags: ['Real Estate', 'Realtors', 'Brokerages', 'Property Marketing'],
    cta: 'Coming Soon',
    ctaLink: '#',
    external: false,
    comingSoon: true,
  },
]

// AI Agent capabilities
const AGENT_CAPABILITIES = [
  { icon: Phone, title: 'Answer Calls & Voicemails', desc: 'Your AI agent picks up every call, 24/7 — no missed leads, no voicemail purgatory.' },
  { icon: Users, title: 'Capture & Pre-Qualify Leads', desc: 'Automatically filters serious prospects from tire-kickers before they ever reach you.' },
  { icon: ClipboardList, title: 'Client Intake & Onboarding', desc: 'Collects forms, gathers info, and gets clients ready — perfect for dental, medical, real estate, and agencies.' },
  { icon: Mail, title: 'Write Emails & Follow-Ups', desc: 'Personalized outreach and follow-up sequences running on autopilot.' },
  { icon: MessageSquare, title: 'Answer Customer Questions', desc: 'FAQs, pricing, scheduling, appointments — handled instantly without you lifting a finger.' },
  { icon: Brain, title: 'Organize, Decide & Scale', desc: 'Stop doing monotonous daily tasks. Start focusing on the work that actually grows your business.' },
]

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-charcoal text-offwhite">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-16 pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Andrea Salinas on set at video village"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Executive Producer · AI Strategist</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Andrea<br />
              <span className="text-gradient">Salinas</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4 font-light">
              Global Integrated Producer · AI Consultant · Virtual Agent Architect · Emerging Technology Strategist
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              20+ years producing Fortune 100 campaigns. Now building AI systems that automate the work that keeps businesses stuck — so you can focus on scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work" className="btn-copper inline-flex items-center gap-2">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href="#services" className="btn-outline inline-flex items-center gap-2"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT TICKER ── */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-4 overflow-hidden">
        <div className="flex gap-12 animate-none whitespace-nowrap">
          <div className="flex gap-12 items-center px-6">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span key={i} className="text-zinc-500 text-sm font-medium tracking-widest uppercase shrink-0">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" ref={servicesRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-3">What I Do</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            4 Ways I Can Help<br />
            <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-base leading-relaxed">
            From Fortune 100 production to AI automation — I bring the strategy, the tools, and the execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div key={service.number} className="card-dark relative group hover:border-zinc-700 transition-all duration-300">
              {service.comingSoon && (
                <span className="absolute top-4 right-4 bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded tracking-wide uppercase">
                  Coming Soon
                </span>
              )}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-copper font-mono text-sm font-bold">{service.number}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-offwhite">{service.title}</h3>
                  <p className="text-copper text-xs font-medium tracking-wide mt-0.5">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Pricing for AI Agents */}
              {service.pricing && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-zinc-800 p-3 rounded">
                    <p className="text-copper text-xs font-bold uppercase tracking-wide mb-1">Solo</p>
                    <p className="text-offwhite text-xs">{service.pricing.solo}</p>
                  </div>
                  <div className="bg-zinc-800 p-3 rounded">
                    <p className="text-copper text-xs font-bold uppercase tracking-wide mb-1">Enterprise</p>
                    <p className="text-offwhite text-xs">{service.pricing.enterprise}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {!service.comingSoon && (
                service.external ? (
                  <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-copper text-sm font-medium hover:text-copper-light transition-colors"
                  >
                    {service.cta} <ChevronRight size={14} />
                  </a>
                ) : (
                  <a
                    href={service.ctaLink}
                    onClick={e => {
                      if (service.ctaLink === '#contact') {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="inline-flex items-center gap-2 text-copper text-sm font-medium hover:text-copper-light transition-colors"
                  >
                    {service.cta} <ChevronRight size={14} />
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="mt-16 bg-zinc-900 border border-copper/30 p-8 sm:p-12 text-center">
          <p className="section-label mb-3">Ready to Work Together?</p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Hire Me
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Whether you need a seasoned executive producer, an AI strategy session, or a custom automation system — let's talk about what you're building.
          </p>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-copper inline-flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── VOCASTACK / AI AGENTS DEEP DIVE ── */}
      <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="section-label mb-3">VocaStack · AI Automation</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Your Business,<br />
              <span className="text-gradient">Running on Autopilot</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Most people are either scared of AI or don't know where to start. That's exactly why I build these for you. Your AI agent works while you sleep — handling the repetitive tasks that eat your day so you can focus on what actually moves the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENT_CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-copper/40 transition-all duration-300">
                <div className="w-10 h-10 bg-copper/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-copper" />
                </div>
                <h4 className="font-display text-base font-bold text-offwhite mb-2">{title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://vocastack.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center gap-2"
            >
              Explore VocaStack <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION BID DESK ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Production Bid Desk</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Bid Smarter.<br />
              <span className="text-gradient">Win More Jobs.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-4">
              Upload a script or storyboard and get a complete production bid — budget breakdown, timeline, crew requirements, and logistics — in seconds.
            </p>
            <p className="text-zinc-500 text-sm mb-6">
              Built for Executive Producers, Production Managers, Producers, Cost Advisors, and Beginners starting out in production.
            </p>
            <a
              href="https://preview--prod-bid-buddy.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center gap-2"
            >
              Try It Free <ArrowRight size={16} />
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
            <iframe
              src="https://preview--prod-bid-buddy.lovable.app"
              className="w-full h-80 sm:h-96"
              title="Production Bid Desk Demo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-copper shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
              alt="Andrea Salinas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-offwhite text-lg">Andrea Salinas</p>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              20+ years producing campaigns for Fortune 100 brands. Now building AI tools that give businesses back their time.
            </p>
          </div>
          <div className="sm:ml-auto shrink-0">
            <Link to="/about" className="btn-outline text-sm">Full Bio</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-zinc-400 mb-10 text-base leading-relaxed">
            Whether you're a brand, agency, realtor, dental practice, or entrepreneur — let's talk about how AI can work for you.
          </p>
          <a
            href="mailto:hello@aigrouptech.co"
            className="btn-copper inline-flex items-center gap-2 text-base"
          >
            <Mail size={18} /> hello@aigrouptech.co
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-lg">
            <span className="text-offwhite">ANDREA</span>
            <span className="text-copper"> SALINAS</span>
          </p>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Andrea Salinas · aigrouptech.co
          </p>
          <div className="flex gap-6">
            <Link to="/work" className="text-zinc-500 hover:text-offwhite text-sm transition-colors">Work</Link>
            <Link to="/about" className="text-zinc-500 hover:text-offwhite text-sm transition-colors">About</Link>
            <a href="mailto:hello@aigrouptech.co" className="text-zinc-500 hover:text-offwhite text-sm transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
