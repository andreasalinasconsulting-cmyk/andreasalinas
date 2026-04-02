import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'

const HERO_IMAGE = 'https://fal.media/files/lion/GBzFmVJmLCFVSFCbMjJUl_image.webp'

const CLIENTS = [
  'Procter & Gamble', 'Walmart', 'Pepsi', 'Coca-Cola', "McDonald's",
  'Dos Equis', 'BMW', 'Hyundai', 'Burger King', 'Frito-Lay',
  'Mattress Firm', 'H-E-B', 'Mary Kay', 'Garnier', "L'Oréal",
  'AstraZeneca', 'Baylor Health', 'Make-A-Wish'
]

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
    secondaryCta: null,
    secondaryCtaLink: null,
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
    secondaryCta: null,
    secondaryCtaLink: null,
  },
  {
    number: '03',
    title: 'AI Automation & Agents',
    subtitle: 'VocaStack — Virtual Agent Platform',
    description: 'Custom AI agents that answer calls, capture leads, pre-qualify clients, and handle intake — 24/7, without you lifting a finger. Built for small businesses and service providers who are ready to stop losing leads and start scaling.',
    tags: ['Home Services', 'Dental', 'Medical', 'Real Estate', 'Small Businesses', 'Coaches', 'Teachers', 'Nonprofits'],
    pricing: 'Solo: $750–$1,500 setup · $299–$599/mo · Enterprise: Custom',
    cta: 'Book a Free 30-Min Call',
    ctaLink: '#contact',
    secondaryCta: 'Explore VocaStack',
    secondaryCtaLink: 'https://vocastack.lovable.app',
  },
]

const cream = '#F5F0E8'
const sand = '#EDE8DE'
const border = '#D9D2C4'
const charcoal = '#1C1C1C'
const copper = '#B87333'
const muted = '#5A5A5A'
const faint = '#8A8070'
const tagBorder = '#C8C0B0'
const tagText = '#6A6050'

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen" style={{ backgroundColor: cream, color: charcoal }}>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Andrea Salinas on set" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${cream}F5 40%, ${cream}99 65%, ${cream}22 100%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${cream}BB 0%, transparent 40%)` }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Executive Producer · AI Strategist · Houston, TX</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ color: charcoal }}>
              Andrea<br />
              <span style={{ color: copper }}>Salinas</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-4 font-light" style={{ color: '#3A3A3A' }}>
              23 years of Fortune 100 production — reimagined with AI.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg" style={{ color: muted }}>
              From Walmart to McDonald's to Make-A-Wish — I've produced it all. Now I'm building AI tools and video content that give brands and small businesses a real edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                onClick={e => { e.preventDefault(); servicesRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
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

        <div className="absolute bottom-8 right-8 px-4 py-3 text-right hidden sm:block" style={{ backgroundColor: `${cream}EE`, border: `1px solid ${border}` }}>
          <p className="font-display font-black text-2xl" style={{ color: copper }}>23+</p>
          <p className="text-xs tracking-widest uppercase" style={{ color: faint }}>Years in Production</p>
        </div>
      </section>

      {/* CLIENT TICKER */}
      <section className="border-y py-4 overflow-hidden" style={{ backgroundColor: sand, borderColor: border }}>
        <div className="flex gap-12 whitespace-nowrap">
          <div className="flex gap-12 items-center px-6">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span key={i} className="text-sm font-medium tracking-widest uppercase shrink-0" style={{ color: faint }}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={servicesRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-3">What I Do</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: charcoal }}>
            Three Ways I Can<br />
            <span style={{ color: copper }}>Help Your Business</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: muted }}>
            From Fortune 100 production to AI automation — I bring the strategy, the tools, and the execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.number} className="relative flex flex-col transition-all duration-300" style={{ backgroundColor: sand, border: `1px solid ${border}`, padding: '1.5rem' }}>
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-sm font-bold shrink-0" style={{ color: copper }}>{service.number}</span>
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: charcoal }}>{service.title}</h3>
                  <p className="text-xs font-medium tracking-wide mt-0.5" style={{ color: copper }}>{service.subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-sm" style={{ color: tagText, border: `1px solid ${tagBorder}` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs mb-5 font-mono" style={{ color: faint }}>{service.pricing}</p>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={service.ctaLink}
                  onClick={e => {
                    if (service.ctaLink === '#contact') {
                      e.preventDefault()
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: copper }}
                >
                  {service.cta} <ArrowRight size={14} />
                </a>
                {service.secondaryCta && (
                  <a
                    href={service.secondaryCtaLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: faint }}
                  >
                    {service.secondaryCta} <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="mt-16 p-8 sm:p-12 text-center" style={{ backgroundColor: sand, border: `1px solid ${copper}` }}>
          <p className="section-label mb-3">Ready to Work Together?</p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: charcoal }}>
            Let's Build Something<br />That Actually Works
          </h3>
          <p className="max-w-lg mx-auto mb-8 text-sm leading-relaxed" style={{ color: muted }}>
            Whether you need AI video production, production consulting, or AI agents built for your business — I'm open for new clients. Book a free 30-minute call and let's talk.
          </p>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-copper inline-flex items-center gap-2"
          >
            Book a Free Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* PRODUCTION BID DESK */}
      <section className="border-y py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: sand, borderColor: border }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Featured Tool</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2" style={{ color: charcoal }}>
              Production<br />
              <span style={{ color: copper }}>Bid Desk</span>
            </h2>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: faint }}>
              A standalone tool for producers — separate from consulting services.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: muted }}>
              Your NDA-compliant AI partner for production strategy. Drop in your creative board and instantly get ballpark budgets, timelines, and logistical realities — catching red flags before they become expensive mistakes.
            </p>
            <p className="text-sm italic mb-8" style={{ color: copper }}>"Never go into a client meeting blind again."</p>
            <a
              href="https://prod-bid-buddy.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center gap-2"
            >
              Try Production Bid Desk <ExternalLink size={15} />
            </a>
            <p className="text-xs mt-3" style={{ color: faint }}>Live App · Free to Try</p>
          </div>
          <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${border}` }}>
            <iframe
              src="https://prod-bid-buddy.lovable.app"
              className="w-full h-80 sm:h-96"
              title="Production Bid Desk Demo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="border-b py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: cream, borderColor: border }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0" style={{ border: `2px solid ${copper}` }}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
              alt="Andrea Salinas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-lg" style={{ color: charcoal }}>Andrea Salinas</p>
            <p className="text-sm mt-1 max-w-xl" style={{ color: muted }}>
              Global Integrated Producer · AI Consultant · 23 years managing multi-million dollar campaigns for Fortune 100 brands including Walmart, McDonald's, Hyundai, Pepsi, and more. Now building AI tools and agents that give brands and businesses a real edge.
            </p>
          </div>
          <div className="sm:ml-auto shrink-0">
            <Link to="/about" className="btn-outline text-sm">Full Bio</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-3">Let's Work Together</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" style={{ color: charcoal }}>
            Ready to Produce<br />
            <span style={{ color: copper }}>Something Great?</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed" style={{ color: muted }}>
            Whether you need AI video production, production consulting, or AI automation — I'm open for new clients. Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@aigrouptech.co" className="btn-copper inline-flex items-center gap-2 text-base">
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
          <p className="text-sm mt-6" style={{ color: faint }}>Houston, TX · Available for remote & on-site projects worldwide</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: sand, borderColor: border }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-lg">
            <span style={{ color: charcoal }}>ANDREA</span>
            <span style={{ color: copper }}> SALINAS</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-xs" style={{ color: faint }}>
            <span>AI VIDEO PRODUCTION</span>
            <span>·</span>
            <span>PRODUCTION CONSULTING</span>
            <span>·</span>
            <span>AI AUTOMATION</span>
            <span>·</span>
            <span>PRODUCTION BID DESK</span>
          </div>
          <p className="text-xs" style={{ color: faint }}>
            © {new Date().getFullYear()} Andrea Salinas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
