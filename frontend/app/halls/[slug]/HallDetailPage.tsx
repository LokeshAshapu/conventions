"use client";
import { useState } from "react";
import Link from "next/link";
import type { Hall } from "@/lib/data";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function MiniCalendar({ bookedDates }: { bookedDates: string[] }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isBooked = (d: number) => {
    const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    return bookedDates.includes(ds);
  };
  const isPast = (d: number) => new Date(year, month, d) < today;

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "var(--radius-lg)", padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <button onClick={prev} style={{ background: "none", border: "none", color: "var(--gold)", cursor: "pointer", fontSize: "1.2rem" }}>‹</button>
        <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{MONTHS[month]} {year}</span>
        <button onClick={next} style={{ background: "none", border: "none", color: "var(--gold)", cursor: "pointer", fontSize: "1.2rem" }}>›</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", textAlign: "center" }}>
        {DAYS.map(d => <div key={d} style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", paddingBottom: "4px" }}>{d}</div>)}
        {[...Array(firstDay)].map((_, i) => <div key={`e${i}`} />)}
        {[...Array(daysInMonth)].map((_, i) => {
          const d = i + 1;
          const booked = isBooked(d);
          const past = isPast(d);
          return (
            <div key={d} style={{
              width: "100%", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "50%", fontSize: "0.78rem", fontWeight: past ? 400 : 600,
              background: booked ? "rgba(128,0,0,0.3)" : "transparent",
              color: booked ? "#e05050" : past ? "rgba(255,255,255,0.2)" : "var(--white)",
              textDecoration: booked ? "line-through" : "none",
            }}>
              {d}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(128,0,0,0.6)", display: "inline-block" }} /> Booked
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "inline-block" }} /> Available
        </span>
      </div>
    </div>
  );
}

export default function HallDetailPage({ hall }: { hall: Hall }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: "", phone: "", date: "", guests: "", eventType: "Wedding" });
  const [inquirySent, setInquirySent] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in booking ${hall.name}. Could you share availability and pricing details?`
  );

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setInquirySent(true);
  };

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div className="container" style={{ padding: "1.5rem 1.5rem 0" }}>
        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>Home</Link>
          {" / "}
          <Link href="/halls" style={{ color: "rgba(255,255,255,0.4)" }}>Halls</Link>
          {" / "}
          <span style={{ color: "var(--gold)" }}>{hall.name}</span>
        </p>
      </div>

      <div className="container" style={{ padding: "1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "2.5rem", alignItems: "start" }}>

          {/* Main Content */}
          <div>
            {/* Image Gallery */}
            <div style={{ marginBottom: "2rem" }}>
              {/* Main Image */}
              <div style={{
                position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden",
                marginBottom: "0.75rem", cursor: "pointer", height: 440,
              }} onClick={() => setLightboxOpen(true)}>
                <img
                  src={hall.images[activeImage]}
                  alt={hall.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                }} />
                {/* Badges overlay */}
                <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
                  {hall.featured && <span className="badge badge-gold">⭐ Featured</span>}
                  {hall.discount && <span className="badge badge-maroon">🔖 {hall.discount}% OFF</span>}
                </div>
                <div style={{
                  position: "absolute", bottom: "1rem", right: "1rem",
                  background: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-sm)", padding: "0.4rem 0.85rem",
                  fontSize: "0.8rem", color: "rgba(255,255,255,0.7)",
                }}>
                  🖼 View all {hall.images.length} photos
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: "flex", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
                {hall.images.map((img, i) => (
                  <div key={i} onClick={() => setActiveImage(i)} style={{
                    flexShrink: 0, width: 100, height: 70,
                    borderRadius: "var(--radius-sm)", overflow: "hidden", cursor: "pointer",
                    border: `2px solid ${i === activeImage ? "var(--gold)" : "transparent"}`,
                    transition: "border 0.2s",
                  }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Title & Location */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: "0.35rem" }}>
                    {hall.name}
                  </h1>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>📍 {hall.address}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", justifyContent: "flex-end", marginBottom: "0.25rem" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: i < Math.round(hall.rating) ? "var(--gold)" : "rgba(255,255,255,0.2)", fontSize: "1rem" }}>★</span>
                    ))}
                    <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{hall.rating}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{hall.reviewCount} verified reviews</p>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: "👥", label: "Capacity", value: `${hall.minCapacity}–${hall.maxCapacity}` },
                { icon: "💰", label: "Per Event", value: `₹${(hall.pricePerEvent / 1000).toFixed(0)}K` },
                { icon: "📅", label: "Per Day", value: `₹${(hall.pricePerDay / 1000).toFixed(0)}K` },
                { icon: "🏛️", label: "Rooms", value: `${hall.rooms.length} halls` },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.35rem" }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--gold)" }}>{s.value}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.85rem" }}>About This Venue</h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
                {hall.description}
              </p>
            </div>

            {/* Facilities */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Facilities & Amenities</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {hall.facilities.map((f) => (
                  <span key={f} style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "999px",
                    background: "rgba(201,162,39,0.08)",
                    border: "1px solid rgba(201,162,39,0.2)",
                    color: "var(--champagne)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                  }}>✓ {f}</span>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Available Halls & Rooms</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {hall.rooms.map((room) => (
                  <div key={room.name} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1rem 1.25rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "var(--radius-md)",
                    flexWrap: "wrap", gap: "0.5rem",
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{room.name}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{room.area}</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <span className={`badge ${room.ac ? "badge-blue" : "badge-gold"}`}>{room.ac ? "❄️ AC" : "🌬 Non-AC"}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)" }}>👥 {room.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Types */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Suitable For</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {hall.eventTypes.map((e) => <span key={e} className="badge badge-gold">{e}</span>)}
              </div>
            </div>

            {/* Availability Calendar */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Availability Calendar</h2>
              <MiniCalendar bookedDates={hall.bookedDates} />
            </div>

            {/* Map */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Location</h2>
              <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${hall.lng - 0.02},${hall.lat - 0.015},${hall.lng + 0.02},${hall.lat + 0.015}&layer=mapnik&marker=${hall.lat},${hall.lng}`}
                  width="100%"
                  height="320"
                  frameBorder="0"
                  title={`Map for ${hall.name}`}
                  style={{ display: "block" }}
                />
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${hall.lat},${hall.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "0.75rem" }}
              >
                🗺 Get Directions on Google Maps
              </a>
            </div>

            {/* Reviews */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>
                Customer Reviews ({hall.reviews.length})
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {hall.reviews.map((review) => (
                  <div key={review.id} style={{
                    padding: "1.5rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "var(--radius-md)",
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
                      <img src={review.avatar} alt={review.author} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,162,39,0.4)", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{review.author}</div>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                          <div>{[...Array(review.rating)].map((_, i) => <span key={i} style={{ color: "var(--gold)" }}>★</span>)}</div>
                          <span className="badge badge-gold" style={{ fontSize: "0.7rem" }}>{review.event}</span>
                          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "5.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Pricing Card */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,162,39,0.25)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem",
            }}>
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>Starting from</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 800, color: "var(--gold)" }}>
                  ₹{(hall.pricePerEvent / 1000).toFixed(0)}K
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>per event • exclusive of GST</div>
              </div>

              {hall.discount && (
                <div style={{
                  background: "rgba(128,0,0,0.2)",
                  border: "1px solid rgba(128,0,0,0.3)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.6rem 1rem",
                  marginBottom: "1rem",
                  fontSize: "0.82rem",
                  color: "#e05050",
                }}>
                  🎉 Save {hall.discount}% — Limited time offer!
                </div>
              )}

              {inquirySent ? (
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎉</div>
                  <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>Inquiry Sent!</p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>Callback in 30 minutes</p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <input required className="form-input" placeholder="Your Name" value={inquiryForm.name} onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })} />
                  <input required type="tel" className="form-input" placeholder="Phone Number" value={inquiryForm.phone} onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })} />
                  <input required type="date" className="form-input" style={{ colorScheme: "dark" }} value={inquiryForm.date} onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })} min={new Date().toISOString().split("T")[0]} />
                  <input required type="number" className="form-input" placeholder="Guest Count" value={inquiryForm.guests} onChange={(e) => setInquiryForm({ ...inquiryForm, guests: e.target.value })} />
                  <select className="form-select" value={inquiryForm.eventType} onChange={(e) => setInquiryForm({ ...inquiryForm, eventType: e.target.value })}>
                    {hall.eventTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    🚀 Request Free Quote
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
            }}>
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Quick Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href={`tel:${hall.phone}`} className="btn btn-maroon" style={{ width: "100%", gap: "0.5rem" }}>
                  📞 Call Now
                </a>
                <a href={`https://wa.me/${hall.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: "100%", gap: "0.5rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="overlay" onClick={() => setLightboxOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }} onClick={(e) => e.stopPropagation()}>
            <img src={hall.images[activeImage]} alt="" style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "var(--radius-lg)", objectFit: "contain" }} />
            <button onClick={() => setLightboxOpen(false)} style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "rgba(0,0,0,0.7)", border: "none", color: "white",
              width: 36, height: 36, borderRadius: "50%", fontSize: "1.2rem", cursor: "pointer",
            }}>✕</button>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1rem", flexWrap: "wrap" }}>
              {hall.images.map((img, i) => (
                <img key={i} src={img} alt="" onClick={() => setActiveImage(i)} style={{
                  width: 60, height: 45, objectFit: "cover", borderRadius: "var(--radius-sm)",
                  cursor: "pointer", border: `2px solid ${i === activeImage ? "var(--gold)" : "transparent"}`,
                }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
