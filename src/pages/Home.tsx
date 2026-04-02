import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'

// Hero image - video village on-set producer
const HERO_IMAGE = 'https://fal.media/files/lion/GBzFmVJmLCFVSFCbMjJUl_image.webp'

// Client logos / names - full original list
const CLIENTS = [
  'Procter & Gamble', 'Walmart', 'Pepsi', 'Coca-Cola', 'McDonald\'s',
  'Dos Equis', 'BMW', 'Hyundai', 'Burger King', 'Frito-Lay',
  'Mattress Firm', 'H-E-B', 'Mary Kay', 'Garnier', 'L\'Oréal',
  'AstraZeneca', 'Baylor Health', 'Make-A-Wish'
]

// 3 Services
const SERVICES = [
  {
    number: '01',
    title: 'AI Video Production',
    subtitle: 'Cinematic Brand Content',
    description: 'Cinematic brand campaigns, nonprofit storytelling, and commercial content — produced with AI at a fraction of traditional cost. Character-consistent, photorealistic, and broadcast-quality.',
    tags: ['Branded Campaigns', 'Commercial', 'Nonprofit', 'Social Content', 'Digital', 'Print'],
    pricing: 'Starting at $500/video',
    cta: 'Book a Free 30-Min Call',
    ctaLink: '#contact',
    external: false,
  },
  {
    number: '02',
    title: 'Production Consulting',
    subtitle: 'Strategy & Execution',
    description: '23+ years managing multicultural, multi-million dollar campaigns for Fortune 100 brands. I help agencies and brands navigate bid strategy, logistics, risk mitigation, and production planning — now powered by AI tools.',
    tags: ['Branded Campaigns', 'Commercial', 'Print Production', 'Nonprofit', 'Digital', 'Pre-Production'],
    pricing: 'Starting at $250/hr · Retainers available',
    cta: 'Book a Free 30-Min Call',
    ctaLink: '#contact',
    external: false,
  },
  {
    number: '03',
    title: 'AI Automation & Agents',
    subtitle: 'VocaStack — Virtual Agent Platform',
    description: 'Custom AI agents that answer calls, capture leads, pre-qualify clients, and handle intake — 24/7, without you lifting a finger. Built for small businesses and service providers who are ready to stop losing leads and start scaling. Powered by VocaStack.',
    tags: ['Home Services', 'Dental', 'Medical / Doctor\'s Office', 'Real Estate', 'Small Businesses', 'Coaches', 'Teachers / Education', 'Nonprofits'],
    pricing: 'Solo: $750–$1,500 setup · $299–$599/mo · Enterprise: Custom',
    cta: 'Book a Free 30-Min Call',
    ctaLink: '#contact',
    external: false,
    secondaryCta: 'Explore VocaStack',
    secondaryCtaLink: 'https://vocastack.lovable.app',
  },
]

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-charcoal text-offwhite">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-16 pt-16 overflow-hidden">
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
              I partner with brands, agencies, consulting firms, small businesses, and nonprofits to build what moves people — branded content, AI-powered automation, strategic platforms, and production that delivers. 23 years of Fortune 100 campaigns. Now doing it faster, smarter, and with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-copper inline-flex items-center gap-2"
              >
                View Services <ArrowRight size={16} />
              </a>
              <a
                href="https://prod-bid-buddy.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Production Bid Desk <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats badge */}
        <div className="absolute bottom-8 right-8 bg-charcoal/80 border border-zinc-700 px-4 py-3 text-right hidden sm:block">
          <p className="text-copper font-display font-black text-2xl">23+</p>
          <p className="text-zinc-400 text-xs tracking-widest uppercase">Years in Production</p>
        </div>
      </section>

      {/* ── CLIENT TICKER ── */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap">
          <div className="flex gap-12 items-center px-6 animate-none">
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
            Three Ways I Can<br />
            <span className="text-gradient">Help Your Business</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-base leading-relaxed">
            From Fortune 100 production to AI automation — I bring the strategy, the tools, and the execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.number} className="card-dark relative group hover:border-zinc-700 transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-copper font-mono text-sm font-bold shrink-0">{service.number}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-offwhite">{service.title}</h3>
                  <p className="text-copper text-xs font-medium tracking-wide mt-0.5">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-zinc-500 text-xs mb-5 font-mono">{service.pricing}</p>

              <div className="mt-auto flex flex-col gap-3">
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
                  {service.cta} <ArrowRight size={14} />
                </a>
                {service.secondaryCta && (
                  <a
                    href={service.secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-offwhite transition-colors"
                  >
                    {service.secondaryCta} <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="mt-16 bg-zinc-900 border border-copper/30 p-8 sm:p-12 text-center">
          <p className="section-label mb-3">Ready to Work Together?</p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something<br />That Actually Works
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Whether you need AI video production, production consulting, or AI agents built for your business — I'm open for new clients. Book a free 30-minute call and let's talk.
          </p>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-copper inline-flex items-center gap-2"
          >
            Hire Me <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── PRODUCTION BID DESK FEATURED ── */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Featured Product</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2">
                Production<br />
                <span className="text-gradient">Bid Desk</span>
              </h2>
              <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">
                A standalone tool for producers — separate from consulting services.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                Your NDA-compliant AI partner for production strategy. Drop in your creative board and instantly get ballpark budgets, timelines, and logistical realities — catching red flags before they become expensive mistakes.
              </p>
              <p className="text-copper text-sm italic mb-8">"Never go into a client meeting blind again."</p>
              <a
                href="https://prod-bid-buddy.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-copper inline-flex items-center gap-2"
              >
                Try Production Bid Desk <ExternalLink size={15} />
              </a>
              <p className="text-zinc-600 text-xs mt-3">Live App · Free to Try</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
              <iframe
                src="https://prod-bid-buddy.lovable.app"
                className="w-full h-80 sm:h-96"
                title="Production Bid Desk Demo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-10 px-4 sm:px-6 lg:px-8">
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
              Global Integrated Producer · AI Consultant · 23 years managing multi-million dollar campaigns for Fortune 100 brands including Walmart, McDonald's, Hyundai, Pepsi, and more. Now building AI tools and agents that give brands and businesses a real edge.
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
          <p className="section-label mb-3">Let's Work Together</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Ready to Produce<br />
            <span className="text-gradient">Something Great?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base leading-relaxed">
            Whether you need AI video production, production consulting, or AI automation for your agency — I'm open for new clients. Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@aigrouptech.co"
              className="btn-copper inline-flex items-center gap-2 text-base"
            >
              <Mail size={18} /> Send an Email
            </a>
            <a
              href="https://linkedin.com/in/andreasalinas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-base"
            >
              LinkedIn <ExternalLink size={14} />
            </a>
          </div>
          <p className="text-zinc-600 text-sm mt-6">Houston, TX · Available for remote & on-site projects worldwide</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-lg">
            <span className="text-offwhite">ANDREA</span>
            <span className="text-copper"> SALINAS</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-zinc-500 text-xs">
            <span>AI VIDEO PRODUCTION</span>
            <span>·</span>
            <span>PRODUCTION CONSULTING</span>
            <span>·</span>
            <span>AI AUTOMATION</span>
            <span>·</span>
            <span>PRODUCTION BID DESK</span>
          </div>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Andrea Salinas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
