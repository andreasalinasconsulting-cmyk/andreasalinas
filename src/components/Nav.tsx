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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-xl tracking-tight">
            <span className="text-offwhite">ANDREA</span>
            <span className="text-copper"> SALINAS</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-zinc-400 hover:text-offwhite text-sm font-medium tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-zinc-400 hover:text-offwhite text-sm font-medium tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-offwhite p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(link => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-offwhite text-lg font-medium py-3 px-2 border-b border-zinc-800 hover:text-copper transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-offwhite text-lg font-medium py-3 px-2 border-b border-zinc-800 hover:text-copper transition-colors"
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
