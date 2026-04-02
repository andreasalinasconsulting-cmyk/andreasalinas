import { useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SPOTS = [
  // Walmart
  {
    brand: 'Walmart',
    title: 'This Is How We Holiday',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4204000H_N_FY23HOLIDAY_THISISHOWWEHOLIDAY_HA30_Subtitled-NFA_30-50MB-Unslated.mp4',
  },
  {
    brand: 'Walmart',
    title: 'This Is How We Holiday — Celebrate',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4251000H_N_FY23HOLIDAY_THISISHOWWEHOLIDAYCELEBRATEREV1_HA15_Subtitled-NFA_30-50MB-Unslated.mp4',
  },
  {
    brand: 'Walmart',
    title: 'Soccer Girls',
    length: ':15',
    type: 'Social · Snapchat',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/FY24_Q1_W+_USM_SoccerGirls_VerB_HA_15s_Snapchat.mp4',
  },
  {
    brand: 'Walmart',
    title: 'Everyday Low Price',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/WGLG4379000H_D_FY24Q1EDLP_VLPBPETOLV_HA15_30-50MB_Unslated.mp4',
  },
  // McDonald's
  {
    brand: "McDonald's",
    title: '$2.29 Sausage McMuffin & Hash Browns',
    length: ':15',
    type: 'OLV · Digital',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCLL534522V_$2.29SausageMcMuffin&HashBrownsGCMEnglish-1516-9_NS.mp4',
  },
  {
    brand: "McDonald's",
    title: 'Five Reasons',
    length: ':15',
    type: 'OLV · Digital',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCWK201524V_FiveReason_GCM_15_OLV_16x9_Agency.mp4',
  },
  {
    brand: "McDonald's",
    title: '2 for $5 Core Breakfast',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/MCLZ570322V_2_FOR_5dlr_Core_Breakfast_HCM_Spanish_30_16x9_NS.mp4',
  },
  // Hyundai
  {
    brand: 'Hyundai',
    title: 'Under a Different Light',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4001000H_UNDERADIFFERENTLIGHT_30_Broadband-1920x1080.mp4',
  },
  {
    brand: 'Hyundai',
    title: 'Under a Different Light',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4002000H_UNDERADIFFERENTLIGHT15_SM-16x9.mp4',
  },
  {
    brand: 'Hyundai',
    title: 'Palisade — Elevando lo que sigue',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN5001000H_MY25_Palisade_Elevandoloquesigue_30_Spanish_Agency.mp4',
  },
  {
    brand: 'Hyundai',
    title: 'Tucson — Rightsizing',
    length: ':15',
    type: 'YouTube · PR',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/HNHN4011000H_MY25_Tucson_Rightsizing-15_Spanish_PR-YouTube.mp4',
  },
  // H-E-B
  {
    brand: 'H-E-B',
    title: 'Seafood / Ceviche',
    length: ':15',
    type: 'YouTube · Digital',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZHEB5361000H_SpanishTV_HMBrand_Seafood_2025_Ceviche_HD_15_YT-1920x1080.mp4',
  },
  // Mattress Firm
  {
    brand: 'Mattress Firm',
    title: 'Why Mattress Firm — Brand',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZBMF240025HMFRM-ES_16x9_evergreen_brand-whymfrm_MFRM_spinning-LPG-expertise_15_TV_Broadband-1920x1080_Unslated.mp4',
  },
  {
    brand: 'Mattress Firm',
    title: 'Promo — Vendor',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/ZBMF240053HMFRM-ES_16x9_JFSWK37-40_bromo-vendor_TSI-TPX-100_onhold-500-300IG_30_TV_Broadband-1920x1080_Unslated.mp4',
  },
  // Baylor
  {
    brand: 'Baylor Scott & White',
    title: 'Beyond Education',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/BCMTV202503H_BeyondEducation30_Agency.mp4',
  },
  // Dos Equis
  {
    brand: 'Dos Equis',
    title: 'Educational — Always On Anthem',
    length: ':30',
    type: 'Digital · OLV',
    lang: 'Spanglish',
    url: 'https://cdn.manus.im/uploads/webdev/andie-salinas-portfolio/XXLNC2511_Educational_Video_Always-On_ANTHEM_30SEC_Spanglish_16x9(2).mov',
  },
]

const BRANDS = ['All', ...Array.from(new Set(SPOTS.map(s => s.brand)))]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? SPOTS : SPOTS.filter(s => s.brand === active)

  return (
    <div className="min-h-screen bg-charcoal text-offwhite">
      <Nav />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Selected Work</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4">
            Fortune 100<br />
            <span className="text-gradient">Campaigns</span>
          </h1>
          <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
            {SPOTS.length} spots across {BRANDS.length - 1} brands. Multicultural production, bilingual campaigns, broadcast and digital.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {BRANDS.map(brand => (
            <button
              key={brand}
              onClick={() => setActive(brand)}
              className={`text-xs px-4 py-2 border transition-all duration-200 ${
                active === brand
                  ? 'border-copper bg-copper text-white'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-offwhite'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((spot, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all duration-300">
              <div className="relative bg-black">
                <video
                  src={spot.url}
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  playsInline
                />
              </div>
              <div className="p-4">
                <p className="text-copper text-xs font-bold uppercase tracking-wide mb-1">{spot.brand}</p>
                <h3 className="font-display text-base font-bold text-offwhite mb-2 leading-tight">{spot.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5">{spot.length}</span>
                  <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5">{spot.type}</span>
                  <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5">{spot.lang}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm mb-4">Ready to create something this powerful for your brand?</p>
          <Link to="/#contact"
            onClick={e => { e.preventDefault(); window.location.href = '/#contact' }}
            className="btn-copper inline-flex items-center gap-2"
          >
            Work With Me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
