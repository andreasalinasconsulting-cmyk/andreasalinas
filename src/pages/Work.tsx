// Design: Pure white background, Work page with Fortune 100 brand filter + CGI/AI Originals section
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { ArrowRight } from 'lucide-react'

const charcoal = '#1C1C1C'
const copper = '#B87333'
const muted = '#5A5A5A'
const faint = '#8A8A8A'
const lightGray = '#F8F8F8'

const SPOTS = [
  { brand: 'Walmart', title: 'This Is How We Holiday', length: ':30', type: 'TV · Broadcast', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4204000H_N_FY23HOLIDAY_THISISHOWWEHOLIDAY_HA30_Subtitled-NFA_30-50MB-Unslated.mp4' },
  { brand: 'Walmart', title: 'Holiday — Celebrate', length: ':15', type: 'TV · Broadcast', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4251000H_N_FY23HOLIDAY_THISISHOWWEHOLIDAYCELEBRATEREV1_HA15_Subtitled-NFA_30-50MB-Unslated.mp4' },
  { brand: 'Walmart', title: 'Soccer Girls', length: ':15', type: 'Social · Snapchat', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/FY24_Q1_W+_USM_SoccerGirls_VerB_HA_15s_Snapchat.mp4' },
  { brand: 'Walmart', title: 'Everyday Low Price', length: ':15', type: 'TV · Broadcast', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4379000H_D_FY24Q1EDLP_VLPBPETOLV_HA15_30-50MB_Unslated.mp4' },
  { brand: "McDonald's", title: '$2.29 Sausage McMuffin & Hash Browns', length: ':15', type: 'OLV · Digital', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCLL534522V_$2.29SausageMcMuffin&HashBrownsGCMEnglish-1516-9_NS.mp4' },
  { brand: "McDonald's", title: 'Five Reasons', length: ':15', type: 'OLV · Digital', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCWK201524V_FiveReason_GCM_15_OLV_16x9_Agency.mp4' },
  { brand: "McDonald's", title: '2 for $5 Core Breakfast', length: ':30', type: 'TV · Broadcast', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCLZ570322V_2_FOR_5dlr_Core_Breakfast_HCM_Spanish_30_16x9_NS.mp4' },
  { brand: 'Hyundai', title: 'Under a Different Light', length: ':30', type: 'TV · Broadcast', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4001000H_UNDERADIFFERENTLIGHT_30_Broadband-1920x1080.mp4' },
  { brand: 'Hyundai', title: 'Under a Different Light', length: ':15', type: 'TV · Broadcast', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4002000H_UNDERADIFFERENTLIGHT15_SM-16x9.mp4' },
  { brand: 'Hyundai', title: 'Palisade — Elevando lo que sigue', length: ':30', type: 'TV · Broadcast', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN5001000H_MY25_Palisade_Elevandoloquesigue_30_Spanish_Agency.mp4' },
  { brand: 'Hyundai', title: 'Tucson — Rightsizing', length: ':15', type: 'YouTube · PR', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4011000H_MY25_Tucson_Rightsizing-15_Spanish_PR-YouTube.mp4' },
  { brand: 'H-E-B', title: 'Seafood / Ceviche', length: ':15', type: 'YouTube · Digital', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZHEB5361000H_SpanishTV_HMBrand_Seafood_2025_Ceviche_HD_15_YT-1920x1080.mp4' },
  { brand: 'Mattress Firm', title: 'Why Mattress Firm — Brand', length: ':15', type: 'TV · Broadcast', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZBMF240025HMFRM-ES_16x9_evergreen_brand-whymfrm_MFRM_spinning-LPG-expertise_15_TV_Broadband-1920x1080_Unslated.mp4' },
  { brand: 'Mattress Firm', title: 'Promo — Vendor', length: ':30', type: 'TV · Broadcast', lang: 'Spanish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZBMF240053HMFRM-ES_16x9_JFSWK37-40_bromo-vendor_TSI-TPX-100_onhold-500-300IG_30_TV_Broadband-1920x1080_Unslated.mp4' },
  { brand: 'Baylor Scott & White', title: 'Beyond Education', length: ':30', type: 'TV · Broadcast', lang: 'English', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/BCMTV202503H_BeyondEducation30_Agency.mp4' },
  { brand: 'Dos Equis', title: 'Always On Anthem', length: ':30', type: 'Digital · OLV', lang: 'Spanglish', url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/XXLNC2511_Educational_Video_Always-On_ANTHEM_30SEC_Spanglish_16x9(2).mov' },
]

const CGI_SPOTS = [
  { title: 'AI Car Spot — SUV', category: 'AI Automotive', description: 'Photorealistic AI-generated SUV commercial. Full CGI production.', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663489371740/TadINuJSyTkbtATw.mp4' },
  { title: 'Velour Perfume — CGI', category: 'AI Beauty', description: 'Luxury fragrance campaign produced entirely with AI and CGI.', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663489371740/XYNQzPfZEJIpikrK.mp4' },
  { title: 'Perfume Commercial — CGI', category: 'AI Beauty', description: 'High-fashion perfume spot. AI-generated visuals, broadcast quality.', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663489371740/IoGUTHuRlIqJsVPB.mp4' },
  { title: 'Cola Spot — CGI', category: 'AI Beverage', description: 'Cinematic beverage commercial. Full CGI AI production.', url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663489371740/GlMzlMZpMlVZVuIe.mp4' },
]

const BRANDS = ['All', ...Array.from(new Set(SPOTS.map(s => s.brand)))]

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? SPOTS : SPOTS.filter(s => s.brand === active)

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: charcoal, minHeight: '100vh' }}>
      <Nav />

      {/* HEADER */}
      <div style={{ paddingTop: '9rem', paddingBottom: '4rem', maxWidth: '1280px', margin: '0 auto', padding: '9rem 2rem 4rem' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>Selected Work</p>
        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: '700px', color: charcoal }}>
          23 Years of Campaigns.<br />
          <em style={{ color: copper, fontStyle: 'italic' }}>Real Work. Real Brands.</em>
        </h1>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: muted, maxWidth: '560px', marginBottom: '3rem' }}>
          A selection of multicultural, multi-platform commercial campaigns produced for Fortune 100 brands. English and Spanish-language spots across national TV, digital, and social.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {BRANDS.map(brand => (
            <button key={brand} onClick={() => setActive(brand)}
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem 1.25rem', border: active === brand ? '1.5px solid #B87333' : '1.5px solid rgba(184,115,51,0.3)', backgroundColor: active === brand ? '#B87333' : 'transparent', color: active === brand ? '#fff' : '#B87333', cursor: 'pointer', transition: 'all 0.2s' }}
            >{brand}</button>
          ))}
        </div>
      </div>

      {/* FORTUNE 100 GRID */}
      <div style={{ paddingBottom: '5rem', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((spot, i) => (
            <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
              <div style={{ backgroundColor: '#000' }}>
                <video src={spot.url} controls preload="metadata" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} playsInline />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: copper, marginBottom: '0.4rem' }}>{spot.brand}</p>
                <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: charcoal, lineHeight: 1.3 }}>{spot.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {[spot.length, spot.type, spot.lang].map(tag => (
                    <span key={tag} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(0,0,0,0.08)', color: faint }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CGI / AI ORIGINALS */}
      <div style={{ backgroundColor: lightGray, borderTop: '1px solid rgba(0,0,0,0.08)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>CGI / AI Originals</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: charcoal }}>
            AI-Generated Campaigns.<br />
            <em style={{ color: copper, fontStyle: 'italic' }}>Broadcast Quality. Fraction of the Cost.</em>
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: muted, maxWidth: '560px', marginBottom: '3rem' }}>
            Original AI-produced spots showcasing what's possible when 23 years of production expertise meets cutting-edge generative AI technology.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {CGI_SPOTS.map((spot, i) => (
              <div key={i} style={{ border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                <div style={{ backgroundColor: '#000' }}>
                  <video src={spot.url} controls preload="metadata" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} playsInline />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: copper, marginBottom: '0.4rem' }}>{spot.category}</p>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: charcoal, lineHeight: 1.3 }}>{spot.title}</h3>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', color: muted, lineHeight: 1.6 }}>{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: faint, marginBottom: '1rem' }}>Ready to create something this powerful for your brand?</p>
        <Link to="/#contact" onClick={e => { e.preventDefault(); window.location.href = '/#contact' }}
          className="btn-copper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Work With Me <ArrowRight size={16} />
        </Link>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '2rem', backgroundColor: lightGray }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, fontSize: '1.1rem', color: charcoal }}>Andrea Salinas</p>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: faint }}>© 2025 Andrea Salinas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
