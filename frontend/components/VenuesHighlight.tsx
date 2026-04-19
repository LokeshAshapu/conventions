"use client";
import Link from "next/link";
import { venues } from "@/lib/data";

export default function VenuesHighlight() {
  const featured = venues.slice(0, 4);

  return (
    <section className="section bg-card">
      <div className="container">
        <div className="section-header">
          <span className="text-label">Our Venues</span>
          <div className="gold-rule gold-rule-center" />
          <h2 className="text-h1" style={{ marginBottom: "1.5rem" }}>Spaces That Inspire</h2>
          <p className="text-body" style={{ maxWidth: 600, margin: "0 auto" }}>
            From grand ballrooms to lush open-air lawns — every architectural space within the Grand Maharaja Convention is crafted for timeless elegance.
          </p>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginBottom: "4rem" }}>
          {featured.map((venue, i) => (
            <Link key={venue.id} href={`/venues`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                height: 400,
                cursor: "pointer",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1.03)";
                  (e.currentTarget.querySelector(".venue-overlay") as HTMLElement).style.background = "rgba(13,12,11,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget.querySelector(".venue-overlay") as HTMLElement).style.background = "transparent";
                }}
              >
                <img
                  src={venue.coverImage}
                  alt={venue.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                />
                
                {/* Subtle base gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(13,12,11,0.9) 0%, rgba(13,12,11,0.4) 40%, transparent 100%)",
                }} />
                
                {/* Hover overlay transition */}
                <div className="venue-overlay" style={{
                  position: "absolute", inset: 0,
                  transition: "background 0.5s ease",
                }} />
                
                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
                    <span className="text-label" style={{ color: "var(--ivory-dim)" }}>{venue.type}</span>
                    <span className="text-label" style={{ color: "var(--gold)" }}>{venue.ac ? "AC" : "Open Air"}</span>
                  </div>
                  <h3 className="text-h2" style={{ marginBottom: "0.5rem" }}>{venue.name}</h3>
                  <p className="text-sm">
                    Up to {venue.capacity.toLocaleString("en-IN")} guests &nbsp;•&nbsp; {venue.area}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/venues" className="btn btn-outline" style={{ padding: "0.8rem 3rem" }}>
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
