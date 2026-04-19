"use client";
import { HALL_INFO, testimonials, awards } from "@/lib/data";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: 380, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=70" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Heritage</span>
          <h1 className="text-display" style={{ marginBottom: "1rem" }}>
            Our Legacy
          </h1>
          <p className="text-body" style={{ maxWidth: 560, margin: "0 auto" }}>
            Over two decades of curating timeless moments in {HALL_INFO.city}.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "8rem" }}>
            <div>
              <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Est. {HALL_INFO.established}</span>
              <div className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2 className="text-h1" style={{ marginBottom: "2rem", lineHeight: 1.2 }}>
                An extraordinary event requires a canvas of <span style={{ fontFamily: "Playfair Display", fontStyle: "italic", color: "var(--gold)" }}>exquisite distinction</span>.
              </h2>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                Since {HALL_INFO.established}, Grand Maharaja Convention has been {HALL_INFO.city}'s foremost property for grand celebrations. Spread across 60,000 sq. ft. of manicured landscapes and architectural marvels, we cater to everything from intimate cultural ceremonies to globally recognized corporate galas.
              </p>
              <p className="text-body">
                Complemented by 42 luxurious resident suites and state-of-the-art facilities, we provide a complete ecosystem for unforgettable hospitality.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1541086052-6fbdb5aa1b4d?w=800&q=85"
                alt="About Grand Maharaja"
                style={{ width: "100%", height: 500, objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: "-2rem",
                left: "-2rem",
                background: "var(--bg-mid)",
                padding: "2rem 2.5rem",
                border: "1px solid var(--border-subtle)",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 400, color: "var(--gold)", lineHeight: 1 }}>
                  {HALL_INFO.established}
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ivory-dim)", marginTop: "0.5rem" }}>Year Established</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div style={{ marginBottom: "8rem" }}>
            <div className="section-header">
              <span className="text-label">Our Philosophy</span>
              <div className="gold-rule gold-rule-center" />
              <h2 className="text-h1">The Grand Standard</h2>
            </div>
            <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
              {[
                { title: "Excellence", desc: "Award-winning service that defines the pinnacle of hospitality." },
                { title: "Dedication", desc: "A seasoned cadre of event specialists orchestrating every detail." },
                { title: "Elegance", desc: "Architectural spaces that seamlessly blend tradition with contemporary luxury." },
                { title: "Innovation", desc: "Equipped with state-of-the-art audiovisual and lighting technology." },
              ].map((v, i) => (
                <div key={v.title} style={{
                  padding: "3rem 2rem",
                  borderTop: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                }}>
                  <div style={{ fontFamily: "Playfair Display", fontSize: "2rem", color: "var(--gold)", opacity: 0.3, marginBottom: "1rem" }}>{`0${i + 1}`}</div>
                  <h3 className="text-h3" style={{ marginBottom: "1rem" }}>{v.title}</h3>
                  <p className="text-body" style={{ fontSize: "0.85rem" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div style={{ marginBottom: "8rem" }}>
            <div className="section-header">
              <span className="text-label">Distinction</span>
              <div className="gold-rule gold-rule-center" />
              <h2 className="text-h1">Awards & Recognition</h2>
            </div>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
              {awards.map((award) => (
                <div key={award.title} style={{
                  display: "flex", alignItems: "center", gap: "2rem",
                  padding: "2.5rem",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                }}>
                  <div style={{ fontFamily: "Playfair Display", fontSize: "3rem", color: "var(--gold-dark)", lineHeight: 1 }}>§</div>
                  <div>
                    <h4 className="text-h3" style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>{award.title}</h4>
                    <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "var(--ivory-dim)", letterSpacing: "0.05em" }}>{award.org} — {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
