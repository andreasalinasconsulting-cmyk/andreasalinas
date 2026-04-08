// Design: Dark cinematic nav, "Andrea Salinas" serif wordmark, uppercase sans-serif links
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const charcoal = "#E8E8E8"
const copper = "#B87333"
const muted = "#888888"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
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
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, backgroundColor:"rgba(10,10,10,0.95)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 1.5rem" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px" }}>
          <Link to="/" style={{ textDecoration:"none", flexShrink:0 }}>
            <span style={{ fontFamily:'"Cormorant Garamond", Georgia, serif', fontWeight:700, fontSize:"1.1rem", letterSpacing:"0.02em", color:charcoal }}>
              Andrea Salinas
            </span>
          </Link>
          <div className="hidden md:flex" style={{ alignItems:"center", gap:"1.25rem" }}>
            {links.map(link =>
              link.href.startsWith("/#") ? (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.68rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:muted, background:"none", border:"none", cursor:"pointer", whiteSpace:"nowrap" }}
                  onMouseEnter={e => (e.currentTarget.style.color = charcoal)}
                  onMouseLeave={e => (e.currentTarget.style.color = muted)}
                >{link.label}</button>
              ) : (
                <Link key={link.label} to={link.href}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.68rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:muted, textDecoration:"none", whiteSpace:"nowrap" }}
                  onMouseEnter={e => (e.currentTarget.style.color = charcoal)}
                  onMouseLeave={e => (e.currentTarget.style.color = muted)}
                >{link.label}</Link>
              )
            )}
            {/* CONTACT — bold */}
            <button onClick={() => handleNav("/#contact")}
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, background:"none", border:"none", cursor:"pointer", whiteSpace:"nowrap" }}
            >Contact</button>
            {/* External product links */}
            <a href="https://vocastack.com" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:copper, textDecoration:"none", border:`1px solid ${copper}`, padding:"0.28rem 0.75rem", whiteSpace:"nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = copper; (e.currentTarget as HTMLElement).style.color = "#000" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = copper }}
            >VocaStack</a>
            <a href="https://prod-bid-desk.manus.space" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:copper, textDecoration:"none", border:`1px solid ${copper}`, padding:"0.28rem 0.75rem", whiteSpace:"nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = copper; (e.currentTarget as HTMLElement).style.color = "#000" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = copper }}
            >Prod Bid Desk</a>
            <a href="mailto:hello@aigrouptech.co"
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#fff", backgroundColor:copper, padding:"0.4rem 1.1rem", textDecoration:"none", whiteSpace:"nowrap" }}
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
        <div className="md:hidden" style={{ backgroundColor:"#0A0A0A", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ padding:"1rem 1.5rem", display:"flex", flexDirection:"column", gap:"0.25rem" }}>
            {links.map(link =>
              link.href.startsWith("/#") ? (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  style={{ textAlign:"left", fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, background:"none", border:"none", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.75rem 0", cursor:"pointer" }}
                >{link.label}</button>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setOpen(false)}
                  style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.75rem 0", display:"block" }}
                >{link.label}</Link>
              )
            )}
            <button onClick={() => handleNav("/#contact")}
              style={{ textAlign:"left", fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:charcoal, background:"none", border:"none", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.75rem 0", cursor:"pointer" }}
            >Contact</button>
            <a href="https://vocastack.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:copper, textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.75rem 0", display:"block" }}
            >VocaStack</a>
            <a href="https://prod-bid-desk.manus.space" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              style={{ fontFamily:"Outfit, sans-serif", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:copper, textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.75rem 0", display:"block" }}
            >Prod Bid Desk</a>
          </div>
        </div>
      )}
    </nav>
  )
}
