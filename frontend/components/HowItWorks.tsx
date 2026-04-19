"use client";

const steps = [
  { step: "01", icon: "🔍", title: "Search & Discover", desc: "Browse hundreds of verified halls filtered by location, capacity, budget, and event type." },
  { step: "02", icon: "📅", title: "Check Availability", desc: "Use the live calendar to see available dates, then send a quick inquiry or WhatsApp us for instant confirmation." },
  { step: "03", icon: "✅", title: "Book & Celebrate", desc: "Confirm your booking with a simple form. Our team will coordinate every detail for your perfect event." },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="label">How It Works</span>
          <div className="gold-divider" />
          <h2 className="heading-1">Book in <span className="gradient-text">3 Simple Steps</span></h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          position: "relative",
        }}>
          {/* Connector Line */}
          <div style={{
            position: "absolute",
            top: "4rem",
            left: "calc(16.66% + 2rem)",
            right: "calc(16.66% + 2rem)",
            height: "2px",
            background: "linear-gradient(90deg, var(--gold) 0%, rgba(201,162,39,0.3) 100%)",
            zIndex: 0,
          }} className="hide-mobile" />

          {steps.map((step, i) => (
            <div key={step.step} style={{
              textAlign: "center",
              padding: "2.5rem 2rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "var(--radius-lg)",
              position: "relative",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,162,39,0.35)";
                el.style.background = "rgba(201,162,39,0.06)";
                el.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Step Number */}
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "1.5rem",
                boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
              }}>
                {step.icon}
              </div>

              <div style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
                fontWeight: 900,
                color: "rgba(201,162,39,0.07)",
                lineHeight: 1,
              }}>
                {step.step}
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: "var(--white)",
              }}>
                {step.title}
              </h3>

              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
