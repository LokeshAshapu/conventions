"use client";
import { useState } from "react";
import Link from "next/link";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", eventType: "Wedding", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, post to backend API
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section className="section" style={{
      background: "linear-gradient(135deg, rgba(128,0,0,0.15) 0%, rgba(201,162,39,0.08) 100%)",
      borderTop: "1px solid rgba(201,162,39,0.12)",
    }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <span className="label text-gold" style={{ display: "block", marginBottom: "0.75rem" }}>Get In Touch</span>
            <div className="gold-divider gold-divider-left" style={{ marginBottom: "1.25rem" }} />
            <h2 className="heading-1" style={{ marginBottom: "1rem" }}>
              Ready to Book Your <span className="gradient-text">Dream Venue?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
              Fill in the quick inquiry form and our event specialists will contact you within 30 minutes with availability and pricing.
            </p>

            {/* Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="tel:+916301451462" style={{
                display: "flex", alignItems: "center", gap: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--maroon), var(--maroon-dark))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.1rem" }}>Call Now (One-tap dialing)</div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--white)" }}>+91 63014 51462</div>
                </div>
              </a>

              <a href="https://wa.me/916301451462" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1rem",
                background: "rgba(37,211,102,0.06)",
                border: "1px solid rgba(37,211,102,0.2)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
                transition: "all 0.2s",
                textDecoration: "none",
              }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #25D366, #128C7E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.1rem" }}>WhatsApp — Instant Reply</div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#25D366" }}>Chat with an Expert Now</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Quick Inquiry Form */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(201,162,39,0.2)",
            borderRadius: "var(--radius-xl)",
            padding: "2.5rem",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Inquiry Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>Our team will contact you within 30 minutes via call or WhatsApp.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: "0.25rem" }}>Quick Inquiry</h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", marginBottom: "1.75rem" }}>Get a callback in under 30 minutes</p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input required className="form-input" placeholder="Rahul Sharma" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input required type="tel" className="form-input" placeholder="+91 9XXXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="form-group">
                      <label className="form-label">Event Date *</label>
                      <input required type="date" className="form-input" style={{ colorScheme: "dark" }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Guest Count *</label>
                      <input required type="number" className="form-input" placeholder="250" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} min="1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Event Type *</label>
                    <select required className="form-select" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}>
                      {["Wedding", "Reception", "Engagement", "Birthday", "Corporate", "Conference", "Exhibition", "Cultural", "Other"].map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Requirements</label>
                    <textarea className="form-input" rows={3} placeholder="Catering preferences, decoration theme, special requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
                    🚀 Send Inquiry — Free Callback
                  </button>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
                    🔒 Your information is secure & won't be shared with third parties.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
