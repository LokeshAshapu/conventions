"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HALL_INFO } from "@/lib/data";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/venues", label: "Venues" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handling remains unchanged
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.4s ease",
    background: scrolled
      ? "rgba(10,9,7,0.96)"
      : "transparent",
    borderBottom: scrolled ? "1px solid rgba(197,162,83,0.12)" : "none",
    backdropFilter: scrolled ? "blur(20px)" : "none",
  };

  return (
    <header style={navStyle}>
      <div className="container" style={{ padding: "0 2rem" }}>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "5rem" }}>

          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ position: "relative", width: "2.8rem", height: "2.8rem" }}>
              <Image 
                src="/logo.png" 
                alt="Grand Maharaja Logo" 
                fill 
                style={{ objectFit: "contain", borderRadius: "4px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--white)",
              }}>
                Grand<span style={{ color: "var(--gold)" }}>Maharaja</span>
              </span>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                opacity: 0.7,
                marginTop: "2px",
              }}>
                Convention Centre
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hide-mobile">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)) ? "var(--gold)" : "rgba(245,239,224,0.6)",
                  transition: "color 0.2s ease",
                }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--ivory)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)) ? "var(--gold)" : "rgba(245,239,224,0.6)"; }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <a
              href={`https://wa.me/${HALL_INFO.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost btn-sm hide-mobile"
              style={{ letterSpacing: "0.1em", fontSize: "0.68rem" }}
            >
              WhatsApp
            </a>
            <a href={`tel:${HALL_INFO.phone}`} className="btn btn-primary btn-sm" style={{ letterSpacing: "0.08em", fontSize: "0.68rem" }}>
              Book Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: "none", flexDirection: "column", gap: "4px", padding: "6px" }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {[1,2,3].map((i) => (
                <span key={i} style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: "var(--ivory)",
                  transition: "all 0.3s",
                }} />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,9,7,0.98)",
          borderTop: "1px solid var(--border-faint)",
          padding: "2rem",
          backdropFilter: "blur(20px)",
        }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setMenuOpen(false)} style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--ivory)",
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href={`tel:${HALL_INFO.phone}`} className="btn btn-primary" style={{ flex: 1, textAlign: "center" }}>Call Now</a>
            <a href={`https://wa.me/${HALL_INFO.whatsapp}`} className="btn btn-ghost" style={{ flex: 1, textAlign: "center" }}>WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}
