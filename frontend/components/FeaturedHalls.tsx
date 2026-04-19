"use client";
import Link from "next/link";
import Image from "next/image";
import { halls } from "@/lib/data";

export default function FeaturedHalls() {
  const featured = halls.filter((h) => h.featured);

  return (
    <section className="section" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="container">
        <div className="section-header">
          <span className="label">Featured Venues</span>
          <div className="gold-divider" />
          <h2 className="heading-1">
            Handpicked <span className="gradient-text">Premium Halls</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.75rem" }}>
            Verified. Rated. Exceptional. Our top picks for your next event.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.75rem" }}>
          {featured.map((hall) => (
            <HallCard key={hall.id} hall={hall} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/venues" className="btn btn-secondary btn-lg">
            View All Halls →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HallCard({ hall }: { hall: (typeof halls)[0] }) {
  return (
    <Link href={`/halls/${hall.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          transition: "all 0.35s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-6px)";
          el.style.borderColor = "rgba(201,162,39,0.35)";
          el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.borderColor = "rgba(255,255,255,0.07)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
          <img
            src={hall.coverImage}
            alt={hall.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.07)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          />
          {/* Badges */}
          <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
            {hall.featured && (
              <span className="badge badge-gold">⭐ Featured</span>
            )}
            {hall.discount && (
              <span className="badge badge-maroon">🔖 {hall.discount}% OFF</span>
            )}
          </div>
          {/* Rating */}
          <div style={{
            position: "absolute", bottom: "1rem", right: "1rem",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(10px)",
            borderRadius: "var(--radius-sm)",
            padding: "0.3rem 0.65rem",
            display: "flex", alignItems: "center", gap: "0.3rem",
          }}>
            <span style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{hall.rating}</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>({hall.reviewCount})</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "1.5rem" }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            marginBottom: "0.35rem",
            color: "var(--white)",
          }}>
            {hall.name}
          </h3>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>
            📍 {hall.location}
          </p>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            {hall.shortDescription}
          </p>

          {/* Facility chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
            {hall.facilities.slice(0, 4).map((f) => (
              <span key={f} className="chip">{f}</span>
            ))}
            {hall.facilities.length > 4 && (
              <span className="chip">+{hall.facilities.length - 4} more</span>
            )}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>Starting from</span>
              <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--gold)" }}>
                ₹{(hall.pricePerEvent / 1000).toFixed(0)}K
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>/event</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
              👥 Up to {hall.maxCapacity.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
