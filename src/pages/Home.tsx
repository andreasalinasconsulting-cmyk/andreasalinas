// Design: Pure white background, Cormorant Garamond serif display, Outfit sans-serif body
// Hero: "23 Years of Production. Reimagined with AI." — split layout text left, image right
// Services: 01 AI Video Production, 02 Production Consulting, 03 AI Automation & Agents
// About: bio strip, Contact: minimal centered CTA

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'

// Colors
const white = '#FFFFFF'
const darkBg = '#0A0A0A'
const charcoal = '#E8E8E8'
const copper = '#C9963A'
const muted = '#A0A0A0'
const faint = '#666666'
const border = 'rgba(255,255,255,0.10)'
const lightGray = '#111111'

// Hero image — Andie Salinas (dark cinematic)
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663489371740/Q9Z5UhYGXxbH7HRiHVW6PZ/hero_latina_onset-ncU8fhjKzYZyGQbGS99fTL.webp'

const CLIENTS = [
  'Procter & Gamble', 'Walmart', 'Pepsi', 'Coca-Cola', "McDonald's",
  'Dos Equis', 'BMW', 'Hyundai', 'Burger King', 'Frito-Lay',
  'Mattress Firm', 'H-E-B', 'Mary Kay', 'Garnier', "L'Oréal",
  'AstraZeneca', 'Baylor Scott & White', 'Make-A-Wish'
]

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div style={{ backgroundColor: darkBg, color: '#E8E8E8', minHeight: '100vh' }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="hero-grid">
          {/* Left: text */}
          <div>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>Executive Producer · AI Video Production</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem', color: charcoal }}>
              23 Years of Production.<br />
              <em style={{ color: copper, fontStyle: 'italic' }}>Reimagined with AI.</em>
            </h1>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: muted, maxWidth: '480px', marginBottom: '2.5rem' }}>
              Fortune 100 campaigns for Walmart, McDonald's, Hyundai, H-E-B, and more — now powered by AI tools that deliver broadcast-quality results at a fraction of the cost.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#services"
                onClick={e => { e.preventDefault(); servicesRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-copper"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                View Services <ArrowRight size={15} />
              </a>
              <Link to="/work" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                See My Work <ArrowRight size={15} />
              </Link>
            </div>
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: charcoal, lineHeight: 1 }}>23+</p>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: faint, marginTop: '0.25rem' }}>Years in Production</p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: border }} />
              <div>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: charcoal, lineHeight: 1 }}>100+</p>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: faint, marginTop: '0.25rem' }}>Campaigns Produced</p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: border }} />
              <div>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: charcoal, lineHeight: 1 }}>F100</p>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: faint, marginTop: '0.25rem' }}>Brand Clients</p>
              </div>
            </div>
          </div>
          {/* Right: image */}
          <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }} className="hero-image-wrap">
            <img
              src={HERO_IMAGE}
              alt="Production set"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 50%, rgba(10,10,10,0.5) 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── CLIENT TICKER ── */}
      <section style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '1.25rem 0', overflow: 'hidden', backgroundColor: lightGray }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: faint }}>
              {c}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" ref={servicesRef} style={{ padding: '7rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>What I Do</p>
        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '4rem', color: charcoal }}>
          Three Ways I Can<br />
          <em style={{ color: copper, fontStyle: 'italic' }}>Help Your Business</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', border: `1px solid ${border}` }}>
          {/* 01 */}
          <div style={{ padding: '2.5rem', borderRight: `1px solid ${border}` }}>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(184,115,51,0.15)', lineHeight: 1, marginBottom: '1.5rem' }}>01</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.6rem', fontWeight: 700, color: charcoal, marginBottom: '0.5rem' }}>AI Video Production</h3>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: copper, marginBottom: '1rem' }}>Cinematic Brand Content</p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: muted, marginBottom: '1.5rem' }}>
              Cinematic brand campaigns, nonprofit storytelling, and commercial content — produced with AI at a fraction of traditional cost. Character-consistent, photorealistic, and broadcast-quality.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Branded Campaigns', 'Commercial', 'Nonprofit', 'Social Content', 'Digital'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: faint, border: `1px solid rgba(0,0,0,0.12)`, padding: '0.25rem 0.6rem' }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: copper, fontWeight: 600, marginBottom: '1.5rem' }}>Starting at $500/video</p>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
              Book a Free Call <ArrowRight size={13} />
            </a>
          </div>

          {/* 02 */}
          <div style={{ padding: '2.5rem', borderRight: `1px solid ${border}` }}>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(184,115,51,0.15)', lineHeight: 1, marginBottom: '1.5rem' }}>02</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.6rem', fontWeight: 700, color: charcoal, marginBottom: '0.5rem' }}>Production Consulting</h3>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: copper, marginBottom: '1rem' }}>Strategy & Execution</p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: muted, marginBottom: '1.5rem' }}>
              23+ years managing multicultural, multi-million dollar campaigns for Fortune 100 brands. I help agencies and brands navigate bid strategy, logistics, risk mitigation, and production planning — now powered by AI tools.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Branded Campaigns', 'Commercial', 'Print Production', 'Nonprofit', 'Digital', 'Pre-Production'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: faint, border: `1px solid rgba(0,0,0,0.12)`, padding: '0.25rem 0.6rem' }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: copper, fontWeight: 600, marginBottom: '1.5rem' }}>Starting at $250/hr · Retainers available</p>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
              Book a Free Call <ArrowRight size={13} />
            </a>
          </div>

          {/* 03 */}
          <div style={{ padding: '2.5rem' }}>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(184,115,51,0.15)', lineHeight: 1, marginBottom: '1.5rem' }}>03</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.6rem', fontWeight: 700, color: charcoal, marginBottom: '0.5rem' }}>AI Automation & Agents</h3>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: copper, marginBottom: '1rem' }}>VocaStack — Virtual Agent Platform</p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: muted, marginBottom: '1.5rem' }}>
              Custom AI agents that answer calls, capture leads, pre-qualify clients, and handle intake — 24/7, without you lifting a finger. Built for small businesses and service providers ready to stop losing leads and start scaling.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Home Services', 'Dental', 'Medical', 'Real Estate', 'Small Businesses', 'Coaches'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: faint, border: `1px solid rgba(0,0,0,0.12)`, padding: '0.25rem 0.6rem' }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: copper, fontWeight: 600, marginBottom: '1.5rem' }}>Solo: $750–$1,500 setup · $299–$599/mo</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
                Book a Free Call <ArrowRight size={13} />
              </a>
              <a href="https://vocastack.lovable.app" target="_blank" rel="noopener noreferrer"
                className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
                Explore VocaStack <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ backgroundColor: lightGray, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>About</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: charcoal }}>
              Andrea Salinas
            </h2>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', lineHeight: 1.9, color: muted, marginBottom: '1.25rem' }}>
              With over 23 years producing multicultural, multi-platform campaigns for Fortune 100 brands, I've managed multi-million dollar productions from concept to delivery — on time, on budget, and on brand.
            </p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', lineHeight: 1.9, color: muted, marginBottom: '1.25rem' }}>
              My clients have included Walmart, McDonald's, Hyundai, H-E-B, Mattress Firm, Baylor Scott & White, Dos Equis, and dozens more. I've produced English, Spanish, and bilingual campaigns for national TV, digital, and social platforms.
            </p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', lineHeight: 1.9, color: muted, marginBottom: '2rem' }}>
              Today I'm combining that deep production expertise with cutting-edge AI tools — creating broadcast-quality content and intelligent automation systems that give brands and small businesses a real competitive edge.
            </p>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Work With Me <ArrowRight size={15} />
            </a>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { label: 'Years Experience', value: '23+' },
                { label: 'Fortune 100 Brands', value: '18+' },
                { label: 'Campaigns Produced', value: '100+' },
                { label: 'Languages', value: 'EN · ES' },
              ].map(stat => (
                <div key={stat.label} style={{ padding: '2rem', border: `1px solid ${border}`, backgroundColor: white }}>
                  <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: copper, lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: faint, marginTop: '0.5rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '7rem 2rem', maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>Let's Work Together</p>
        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.25rem', color: charcoal }}>
          Ready to Produce<br />
          <em style={{ color: copper, fontStyle: 'italic' }}>Something Great?</em>
        </h2>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: muted, marginBottom: '2.5rem' }}>
          Whether you need AI video production, production consulting, or AI automation — I'm open for new clients. Let's talk.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hello@aigrouptech.co" className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={16} /> Send an Email
          </a>
          <a href="https://linkedin.com/in/andreasalinas" target="_blank" rel="noopener noreferrer"
            className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            LinkedIn <ExternalLink size={13} />
          </a>
        </div>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: faint, marginTop: '1.5rem' }}>Available for remote & on-site projects worldwide</p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '2rem', backgroundColor: lightGray }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: '1.1rem', color: charcoal }}>Andrea Salinas</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {['AI Video Production', 'Production Consulting', 'AI Automation'].map(s => (
              <span key={s} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: faint }}>{s}</span>
            ))}
          </div>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: faint }}>© {new Date().getFullYear()} Andrea Salinas. All rights reserved.</p>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-image-wrap { height: 280px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  )
}
