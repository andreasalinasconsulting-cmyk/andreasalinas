import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNav = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(245,240,232,0.97)', borderColor: '#D9D2C4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display font-bold text-xl tracking-tight">
            <span style={{ color: '#1C1C1C' }}>ANDREA</span>
            <span style={{ color: '#B87333' }}> SALINAS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium tracking-wide transition-colors"
                  style={{ color: '#5A5A5A' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5A5A5A')}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium tracking-wide transition-colors"
                  style={{ color: '#5A5A5A' }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: '#5A5A5A' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ backgroundColor: '#EDE8DE', borderColor: '#D9D2C4' }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(link => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-lg font-medium py-3 px-2 border-b transition-colors"
                  style={{ color: '#1C1C1C', borderColor: '#D9D2C4' }}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-3 px-2 border-b transition-colors"
                  style={{ color: '#1C1C1C', borderColor: '#D9D2C4' }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
