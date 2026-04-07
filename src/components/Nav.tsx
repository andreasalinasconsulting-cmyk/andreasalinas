// Design: Minimal white nav, "Andrea Salinas" serif wordmark, uppercase sans-serif links
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const charcoal = "#1C1C1C"
const copper = "#B87333"
const muted = "#6A6A6A"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ]

  const handleNav = (href: string) => {
    setOpen(false)
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href
      } else {
        const id = href.replace("/#", "")
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, backgroundColor:"rgba(255,255,255,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px" }}>
          <Link to="/" style={{ textDecoration:"none" }}>
            <span style={{ fontFamily:'"Cormorant Garamond", Georgia, serif', fontWeight:700, fontSize:"1.15rem", letterSpacing:"0.02em", color:charcoal }}>
              Andrea Salinas
            </span>
          </Link>
          <div className="hidden md:flex" style={{ alignItems:"center", gap:"2rem" }}>
            {links.map(link =>
              link.href.startsWith("/#") ? (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.7rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:muted, background:"none", border:"none", cursor:"pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.color = charcoal)}
                  onMouseLeave={e => (e.currentTarget.style.color = muted)}
                >{link.label}</button>
              ) : (
                <Link key={link.label} to={link.href}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.7rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:muted, textDecoration:"none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = charcoal)}
                  onMouseLeave={e => (e.currentTarget.style.color = muted)}
                >{link.label}</Link>
              )
            )}
            <a href="/#contact" onClick={e => { e.preventDefault(); handleNav("/#contact") }}
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#fff", backgroundColor:copper, padding:"0.5rem 1.4rem", textDecoration:"none" }}
            >Hire Me</a>
          </div>
          <button
            className="md:hidden"
            style={{ color:charcoal, background:'none', border:'none', cursor:'pointer', padding:'0.5rem' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden" style={{ backgroundColor:"#fff", borderTop:"1px solid rgba(0,0,0,0.08)" }}>
          <div style={{ padding:"1rem 2rem", display:"flex", flexDirection:"column", gap:"0.25rem" }}>
            {links.map(link =>
              link.href.startsWith("/#") ? (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ textAlign:"left", fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, background:"none", border:"none", borderBottom:"1px solid rgba(0,0,0,0.08)", padding:"0.75rem 0", cursor:"pointer" }}
                >{link.label}</button>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setOpen(false)}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, textDecoration:"none", borderBottom:"1px solid rgba(0,0,0,0.08)", padding:"0.75rem 0", display:"block" }}
                >{link.label}</Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
