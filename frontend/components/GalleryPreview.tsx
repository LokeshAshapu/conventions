"use client";
import { useState } from "react";
import Link from "next/link";
import { gallery } from "@/lib/data";

const FILTERS = ["All", "Wedding", "Corporate", "Outdoor", "Reception"];

export default function GalleryPreview() {
  const [filter, setFilter] = useState("All");
  const visible = gallery.filter((g) => filter === "All" || g.category === filter).slice(0, 6);

  return (
    <section className="section bg-card">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className="text-label">Portfolio</span>
            <div className="gold-rule" />
            <h2 className="text-h1">Curated Moments</h2>
          </div>
          
          {/* Subtle text links instead of pill buttons for filters */}
          <div style={{ display: "flex", gap: "2rem" }} className="hide-mobile">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: filter === f ? "var(--ivory)" : "var(--ivory-faint)",
                  borderBottom: filter === f ? "1px solid var(--gold)" : "1px solid transparent",
                  paddingBottom: "0.25rem",
                  transition: "all 0.3s ease",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Grid */}
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "4rem" }}>
          {visible.map((item) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <img
                src={item.image}
                alt={item.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/gallery" className="btn btn-ghost" style={{ padding: "0.8rem 3rem", border: "1px solid var(--border-subtle)" }}>
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
