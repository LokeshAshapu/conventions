"use client";
import Link from "next/link";
import { eventCategories } from "@/lib/data";

export default function EventCategories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="label">Event Types</span>
          <div className="gold-divider" />
          <h2 className="heading-1">Plan Any <span className="gradient-text">Occasion</span></h2>
          <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "0.75rem", maxWidth: 500, margin: "0.75rem auto 0" }}>
            From intimate gatherings to grand galas — we have the perfect venue for every event.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
        }}>
          {eventCategories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/halls?event=${cat.id}`}
              style={{ textDecoration: "none", animationDelay: `${i * 0.05}s` }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.background = `rgba(${hexToRgb(cat.color)}, 0.1)`;
                  el.style.borderColor = `rgba(${hexToRgb(cat.color)}, 0.4)`;
                  el.style.boxShadow = `0 12px 40px rgba(${hexToRgb(cat.color)}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: 1 }}>
                  {cat.icon}
                </div>

                {/* Label */}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.35rem",
                }}>
                  {cat.label}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>
                  {cat.description}
                </p>

                {/* Count Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "999px",
                  background: `rgba(${hexToRgb(cat.color)}, 0.12)`,
                  color: cat.color,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  border: `1px solid rgba(${hexToRgb(cat.color)}, 0.25)`,
                }}>
                  {cat.count} venues
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "201,162,39";
}
