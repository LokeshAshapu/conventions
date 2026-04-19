"use client";
import { useState } from "react";
import { gallery } from "@/lib/data";

const CATS = ["All", "Wedding", "Corporate", "Outdoor", "Birthday", "Reception"];

export default function GalleryFullPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        position: "relative", height: 380, overflow: "hidden",
        display: "flex", alignItems: "center",
      }}>
        <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1800&q=70" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Portfolio</span>
          <h1 className="text-display" style={{ marginBottom: "1rem" }}>
            The Gallery
          </h1>
          <p className="text-body" style={{ margin: "0 auto", maxWidth: 600 }}>
            Visual narratives of the extraordinary events we have had the privilege to curate over the years.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
          {CATS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily: "Inter",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: filter === f ? "var(--ivory)" : "var(--ivory-faint)",
              borderBottom: filter === f ? "1px solid var(--gold)" : "1px solid transparent",
              paddingBottom: "0.4rem",
              transition: "all 0.3s ease",
            }}>
              {f} <span style={{ fontSize: "0.65rem", marginLeft: "0.3rem", color: filter === f ? "var(--gold)" : "var(--ivory-muted)" }}>{filter === f ? items.length : ""}</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid — tight architectural fit */}
        <div style={{ columns: "3 300px", gap: "1rem" }}>
          {items.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightbox(gallery.indexOf(item))}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1.03)";
                (e.currentTarget.querySelector(".hover-overlay") as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector("img") as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget.querySelector(".hover-overlay") as HTMLElement).style.opacity = "0";
              }}
            >
              <img
                src={item.image}
                alt={item.caption}
                style={{ width: "100%", display: "block", transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
              />
              <div className="hover-overlay" style={{
                position: "absolute", inset: 0,
                background: "rgba(13,12,11,0.6)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 0.4s ease",
              }}>
                <span className="text-label" style={{ marginBottom: "0.5rem" }}>{item.category}</span>
                <span style={{ fontFamily: "Playfair Display", fontSize: "1.2rem", fontWeight: 400, color: "var(--ivory)", textAlign: "center", padding: "0 1rem" }}>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Minimalist Lightbox */}
      {lightbox !== null && (
        <div
          className="overlay"
          onClick={() => setLightbox(null)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "-3rem", right: "0", color: "var(--ivory)", fontSize: "1.5rem", fontWeight: 300, cursor: "pointer", opacity: 0.7 }}>✕</button>
            
            <img
              src={gallery[lightbox].image}
              alt={gallery[lightbox].caption}
              style={{ maxWidth: "85vw", maxHeight: "80vh", objectFit: "contain", border: "1px solid var(--border-subtle)" }}
            />
            
            <div style={{ textAlign: "center", marginTop: "1.5rem", maxWidth: "85vw", width: "100%" }}>
              <span className="text-label" style={{ display: "block", marginBottom: "0.5rem" }}>{gallery[lightbox].category}</span>
              <p style={{ fontFamily: "Playfair Display", fontSize: "1.2rem", color: "var(--ivory)", fontWeight: 400 }}>{gallery[lightbox].caption}</p>
            </div>
            
            {/* Prev / Next Minimal Arrows */}
            <button onClick={() => setLightbox((l) => Math.max(0, (l ?? 0) - 1))} style={{ position: "absolute", top: "45%", left: "0", transform: "translateY(-50%)", color: "var(--ivory)", fontSize: "2.5rem", fontWeight: 300, opacity: lightbox > 0 ? 0.7 : 0.1, cursor: lightbox > 0 ? "pointer" : "default" }}>‹</button>
            <button onClick={() => setLightbox((l) => Math.min(gallery.length - 1, (l ?? 0) + 1))} style={{ position: "absolute", top: "45%", right: "0", transform: "translateY(-50%)", color: "var(--ivory)", fontSize: "2.5rem", fontWeight: 300, opacity: lightbox < gallery.length - 1 ? 0.7 : 0.1, cursor: lightbox < gallery.length - 1 ? "pointer" : "default" }}>›</button>
          </div>
        </div>
      )}
    </div>
  );
}
