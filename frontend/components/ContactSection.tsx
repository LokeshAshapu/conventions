"use client";
import { useState } from "react";
import { HALL_INFO } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", guests: "", eventType: "Wedding", venue: "Any", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{
      backgroundColor: "var(--bg-dark)",
      borderTop: "1px solid var(--border-subtle)",
    }}>
      <div className="container">
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          
          {/* Left: Contact Info */}
          <div>
            <span className="text-label">Contact</span>
            <div className="gold-rule" />
            <h2 className="text-h1" style={{ marginBottom: "2rem" }}>Begin Your Journey</h2>
            <p className="text-body" style={{ marginBottom: "3.5rem", maxWidth: 400 }}>
              Our dedicated event specialists are available to assist you in planning an impeccable celebration.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
              <div>
                <p className="text-label" style={{ marginBottom: "0.5rem" }}>Reservations & Enquiries</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <a href={`tel:${HALL_INFO.phone}`} style={{ fontSize: "1.2rem", fontWeight: 300, color: "var(--ivory)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                  >{HALL_INFO.phone}</a>
                  {HALL_INFO.phone2 && (
                    <a href={`tel:${HALL_INFO.phone2}`} style={{ fontSize: "1.2rem", fontWeight: 300, color: "var(--ivory)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                    >{HALL_INFO.phone2}</a>
                  )}
                </div>
              </div>

              <div>
                <p className="text-label" style={{ marginBottom: "0.5rem" }}>Direct Email</p>
                <a href={`mailto:${HALL_INFO.email}`} style={{ fontSize: "1.1rem", fontWeight: 300, color: "var(--ivory)", transition: "color 0.2s", textDecoration: "underline", textDecorationColor: "var(--border-subtle)", textUnderlineOffset: 6 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ivory)"; }}
                >{HALL_INFO.email}</a>
              </div>

              <div>
                <p className="text-label" style={{ marginBottom: "0.5rem" }}>WhatsApp Concierge</p>
                <a href={`https://wa.me/${HALL_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'd like to enquire about booking your convention venue.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline" style={{ display: "inline-block", padding: "0.6rem 2rem" }}>
                  Message Us
                </a>
              </div>
            </div>

            <div>
              <p className="text-label" style={{ marginBottom: "0.5rem" }}>Location</p>
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-end" }}>
                <p style={{ fontSize: "0.95rem", color: "var(--ivory-dim)", lineHeight: 1.7, maxWidth: 240 }}>{HALL_INFO.address}</p>
                <a href={HALL_INFO.gMapsLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "var(--gold-border)" }}>
                  Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Architectural Inquiry Form */}
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "4rem 0" }}>
                <h3 className="text-h2" style={{ marginBottom: "1rem" }}>Inquiry Received</h3>
                <p className="text-body" style={{ marginBottom: "2.5rem" }}>
                  Thank you, {form.name}. A specialist from Grand Maharaja will contact you shortly to discuss your arrangements.
                </p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Return</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h3 className="text-h3" style={{ marginBottom: "0.25rem" }}>Submit Request</h3>
                  <p className="text-sm">We respond to all inquiries within 24 hours.</p>
                </div>

                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input required className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input required type="tel" className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input required type="date" className="form-input" style={{ colorScheme: "dark" }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} min={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Guests</label>
                    <input required type="number" className="form-input" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} min="1" />
                  </div>
                </div>

                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div className="form-group">
                    <label className="form-label">Event Type</label>
                    <select required className="form-select" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} suppressHydrationWarning>
                      {["Wedding", "Reception", "Corporate", "Conference", "Cultural", "Exhibition", "Other"].map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Venue Preference</label>
                    <select className="form-select" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} suppressHydrationWarning>
                      <option value="Any">Not Sure Yet</option>
                      <option>Aashirwad Grand Ballroom</option>
                      <option>Utsava Convention Hall</option>
                      <option>Anuraga Banquet</option>
                      <option>Aashirwad Gardens</option>
                      <option>Amulya Mini Hall</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Details</label>
                  <textarea className="form-input" rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} suppressHydrationWarning />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary btn-lg" style={{ marginTop: "1rem" }} suppressHydrationWarning>
                  {loading ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
