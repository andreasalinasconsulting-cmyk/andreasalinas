import { useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BASE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663489371740/Q9Z5UhYGXxbH7HRiHVW6PZ'

const SPOTS = [
  // Walmart
  {
    brand: 'Walmart',
    title: 'This Is How We Holiday',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: `${BASE}/walmart_holiday_fy23_ff0bf41f.mp4`,
  },
  {
    brand: 'Walmart',
    title: 'This Is How We Holiday — Celebrate',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'English',
    url: `${BASE}/walmart_holiday_celebrate_15_6d5d9bb7.mp4`,
  },
  {
    brand: 'Walmart',
    title: 'Soccer Girls',
    length: ':15',
    type: 'Social · Snapchat',
    lang: 'Spanish',
    url: `${BASE}/walmart_soccergirls_15_eb5ace34.mp4`,
  },
  {
    brand: 'Walmart',
    title: 'Everyday Low Price',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: `${BASE}/walmart_edlp_15_95fa048d.mp4`,
  },
  // McDonald's
  {
    brand: "McDonald's",
    title: '$2.29 Sausage McMuffin & Hash Browns',
    length: ':15',
    type: 'OLV · Digital',
    lang: 'English',
    url: `${BASE}/mcdonalds_sausagemcmuffin_15_432c3eec.mp4`,
  },
  {
    brand: "McDonald's",
    title: 'Five Reasons',
    length: ':15',
    type: 'OLV · Digital',
    lang: 'English',
    url: `${BASE}/mcdonalds_fivereason_15_17de4dc0.mp4`,
  },
  {
    brand: "McDonald's",
    title: '2 for $5 Core Breakfast',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: `${BASE}/mcdonalds_breakfast_spanish_30_09fd57a7.mp4`,
  },
  // Hyundai
  {
    brand: 'Hyundai',
    title: 'Under a Different Light',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: `${BASE}/hyundai_underadifferentlight_30_51dc585b.mp4`,
  },
  {
    brand: 'Hyundai',
    title: 'Under a Different Light',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'English',
    url: `${BASE}/hyundai_underadifferentlight_15_c5a2b74e.mp4`,
  },
  {
    brand: 'Hyundai',
    title: 'Palisade — Elevando lo que sigue',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: `${BASE}/hyundai_palisade_spanish_30_8e2c0fca.mp4`,
  },
  {
    brand: 'Hyundai',
    title: 'Tucson — Rightsizing',
    length: ':15',
    type: 'YouTube · PR',
    lang: 'Spanish',
    url: `${BASE}/hyundai_tucson_spanish_15_4418891f.mp4`,
  },
  // H-E-B
  {
    brand: 'H-E-B',
    title: 'Seafood / Ceviche',
    length: ':15',
    type: 'YouTube · Digital',
    lang: 'Spanish',
    url: `${BASE}/heb_seafood_ceviche_spanish_15_e22e434a.mp4`,
  },
  // Mattress Firm
  {
    brand: 'Mattress Firm',
    title: 'Why Mattress Firm — Brand',
    length: ':15',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: `${BASE}/mattressfirm_brand_spanish_15_c2c7974a.mp4`,
  },
  {
    brand: 'Mattress Firm',
    title: 'Promo — Vendor',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'Spanish',
    url: `${BASE}/mattressfirm_promo_spanish_30_db55e141.mp4`,
  },
  // Baylor
  {
    brand: 'Baylor Scott & White',
    title: 'Beyond Education',
    length: ':30',
    type: 'TV · Broadcast',
    lang: 'English',
    url: `${BASE}/baylor_beyondeducation_30_85162043.mp4`,
  },
  // Dos Equis
  {
    brand: 'Dos Equis',
    title: 'Educational — Always On Anthem',
    length: ':30',
    type: 'Digital · OLV',
    lang: 'Spanglish',
    url: `${BASE}/dosxx_anthem_spanglish_30_61faa594.mp4`,
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
          <Link to="/"
            onClick={() => { setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
            className="btn-copper inline-flex items-center gap-2"
          >
            Work With Me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
