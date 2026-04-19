"use client";
import Link from "next/link";
import { HALL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-mid)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "6rem 0 3rem",
    }}>
      <div className="container">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "4rem", 
          marginBottom: "5rem" 
        }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--ivory)" }}>
                Grand<span style={{ color: "var(--gold)" }}>Maharaja</span>
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-dark)", marginTop: "4px" }}>
                Convention Centre
              </span>
            </div>
            <p className="text-body" style={{ maxWidth: 320, marginBottom: "2rem", fontSize: "0.85rem" }}>
              {HALL_INFO.city}'s premier convention centre — setting the stage for unforgettable events since {HALL_INFO.established}.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { label: "Facebook", href: HALL_INFO.facebook },
                { label: "Instagram", href: HALL_INFO.instagram },
                { label: "Youtube", href: HALL_INFO.youtube },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "var(--ivory-dim)", transition: "var(--transition-fast)", borderBottom: "1px solid transparent"
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory-dim)"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Navigate
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[["Home", "/"], ["Venues", "/venues"], ["Gallery", "/gallery"], ["About Us", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} style={{ fontFamily: "'Inter', sans-serif", color: "var(--ivory-dim)", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory-dim)"; }}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Our Spaces
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Aashirwad Ballroom", "Utsava Convention", "Anuraga Banquet", "Aashirwad Gardens", "Amulya Mini Hall", "Pre-Function Hall"].map((v) => (
                <li key={v}>
                  <Link href="/venues" style={{ fontFamily: "'Inter', sans-serif", color: "var(--ivory-dim)", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory-dim)"; }}
                  >{v}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Enquiries
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <a href={`tel:${HALL_INFO.phone}`} style={{ fontFamily: "'Inter', sans-serif", color: "var(--ivory-dim)", fontSize: "0.95rem", textDecoration: "none" }}>{HALL_INFO.phone}</a>
              <a href={`mailto:${HALL_INFO.email}`} style={{ fontFamily: "'Inter', sans-serif", color: "var(--ivory-dim)", fontSize: "0.95rem", textDecoration: "none" }}>{HALL_INFO.email}</a>
              <div style={{ fontFamily: "'Inter', sans-serif", color: "var(--ivory-faint)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 220 }}>
                {HALL_INFO.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{ color: "var(--ivory-faint)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} {HALL_INFO.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]].map(([t, href]) => (
              <Link key={t} href={href} style={{ color: "var(--ivory-faint)", fontSize: "0.8rem", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory-faint)"; }}
              >{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
