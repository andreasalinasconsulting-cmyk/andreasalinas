import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cream = '#F5F0E8'
const charcoal = '#1C1C1C'
const copper = '#B87333'
const sand = '#EDE8DE'
const border = '#D9D2C4'
const muted = '#5A5A5A'
const faint = '#8A8A8A'

const STATS = [
  { value: '23+', label: 'Years in Production' },
  { value: '100+', label: 'Campaigns Produced' },
  { value: 'Fortune 100', label: 'Client Roster' },
  { value: 'Bilingual', label: 'English & Spanish' },
]

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: cream, color: charcoal }}>
      <Nav />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">About</p>
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-6" style={{ color: charcoal }}>
            Andrea<br />
            <span style={{ color: copper }}>Salinas</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face"
                alt="Andrea Salinas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-6 hidden sm:block" style={{ backgroundColor: copper }}>
              <p className="font-display text-2xl font-black text-white">23+</p>
              <p className="text-white/80 text-xs uppercase tracking-wide">Years</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map(stat => (
                <div key={stat.label} className="p-4 border" style={{ backgroundColor: sand, borderColor: border }}>
                  <p className="font-display text-2xl font-bold" style={{ color: copper }}>{stat.value}</p>
                  <p className="text-xs mt-1 uppercase tracking-wide" style={{ color: faint }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: muted }}>
              <p>
                Andrea Salinas is a <strong style={{ color: charcoal }}>Global Integrated Producer</strong>, AI Consultant, and Virtual Agent Architect with over two decades of experience producing high-impact campaigns for Fortune 100 brands.
              </p>
              <p>
                Her production credits span Walmart, McDonald's, Hyundai, H-E-B, Mattress Firm, Dos Equis, Baylor Scott & White, and more — with deep expertise in multicultural and bilingual (English/Spanish) campaigns that reach diverse audiences authentically.
              </p>
              <p>
                In recent years, Andrea has expanded into AI strategy and automation — building custom AI agent systems (VocaStack) that help real estate agents, dental practices, medical offices, coaches, and small businesses automate the repetitive work that keeps them from scaling.
              </p>
              <p>
                She also created <strong style={{ color: charcoal }}>Production Bid Desk</strong>, an AI-powered tool that generates professional production bids, budgets, and timelines in seconds — designed for producers at every level.
              </p>
              <p className="italic" style={{ color: faint }}>
                "I've spent 23 years in rooms where decisions get made. Now I'm building the tools that make those decisions faster, smarter, and more accessible to everyone."
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/work" className="btn-copper inline-flex items-center gap-2">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href="mailto:hello@aigrouptech.co" className="btn-outline inline-flex items-center gap-2">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
