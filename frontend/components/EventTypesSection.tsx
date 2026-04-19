"use client";

// We remove emojis completely and use a much cleaner typography-first layout.
const eventTypes = [
  { label: "Weddings & Receptions", desc: "A timeless setting for your most significant milestone." },
  { label: "Corporate Galas", desc: "Impressive scale and rigorous professionalism." },
  { label: "Cultural Exhibitions", desc: "Flexible spaces designed to honour tradition." },
  { label: "Private Celebrations", desc: "Intimate elegance for life's beautiful moments." },
];

export default function EventTypesSection() {
  return (
    <section className="section" style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        <div className="section-header">
          <span className="text-label">Capabilities</span>
          <div className="gold-rule gold-rule-center" />
          <h2 className="text-h1">Events By Design</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900, margin: "0 auto" }}>
          {eventTypes.map((ev, i) => (
            <div
              key={ev.label}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                padding: "2.5rem 0",
                borderBottom: i === eventTypes.length - 1 ? "none" : "1px solid var(--border-subtle)",
                transition: "background 0.4s ease",
              }}
            >
              <h3 className="text-h3" style={{ color: "var(--ivory)" }}>{ev.label}</h3>
              <p className="text-body" style={{ margin: 0, alignSelf: "center", color: "var(--ivory-dim)" }}>{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
