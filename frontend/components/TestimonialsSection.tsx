"use client";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "var(--bg-mid)" }}>
      <div className="container">
        <div className="section-header">
          <span className="text-label">Client Experiences</span>
          <div className="gold-rule gold-rule-center" />
          <h2 className="text-h1">Words of Appreciation</h2>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3rem" }}>
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.id} style={{
              padding: "3rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-faint)",
              position: "relative",
            }}>
              {/* Elegant quote mark */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                left: "2rem",
                fontFamily: "'Playfair Display', serif",
                fontSize: "6rem",
                color: "var(--border-subtle)",
                lineHeight: 1,
              }}>“</div>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "var(--ivory)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontWeight: 300,
                }}>
                  {t.comment}
                </p>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                  <img src={t.avatar} alt={t.author} style={{ width: 40, height: 40, borderRadius: "50%", opacity: 0.8, filter: "grayscale(100%) brightness(1.2)" }} />
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "var(--ivory)", letterSpacing: "0.05em" }}>{t.author}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--ivory-faint)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{t.event}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
