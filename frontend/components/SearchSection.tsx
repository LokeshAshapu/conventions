"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const eventTypes = ["All Events", "Wedding", "Corporate", "Birthday", "Cultural", "Conference", "Exhibition"];
const cities = ["All Cities", "Hyderabad", "Mumbai", "Delhi", "Bengaluru", "Chennai", "Pune"];

export default function SearchSection() {
  const router = useRouter();
  const [eventType, setEventType] = useState("All Events");
  const [city, setCity] = useState("All Cities");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (eventType !== "All Events") params.set("event", eventType.toLowerCase());
    if (city !== "All Cities") params.set("city", city.toLowerCase());
    if (guests) params.set("guests", guests);
    if (date) params.set("date", date);
    router.push(`/halls?${params.toString()}`);
  };

  return (
    <section style={{
      background: "linear-gradient(180deg, var(--bg-dark) 0%, #111111 100%)",
      padding: "0 0 4rem",
      marginTop: "-4rem",
      position: "relative",
      zIndex: 20,
    }}>
      <div className="container">
        <div style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(201,162,39,0.2)",
          borderRadius: "var(--radius-xl)",
          padding: "2.5rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: "1.25rem" }}>
            🔍 Find Your Perfect Venue
          </p>
          <form onSubmit={handleSearch}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
              gap: "1rem",
              alignItems: "end",
            }}>
              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select
                  className="form-select"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  {eventTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">City</label>
                <select
                  className="form-select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Guest Count</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g. 500"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="1"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Event Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  style={{ colorScheme: "dark" }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ height: "50px", padding: "0 2rem" }}>
                Search Halls
              </button>
            </div>
          </form>

          {/* Quick Tags */}
          <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginRight: "0.25rem" }}>Popular:</span>
            {["Wedding Halls", "Corporate Venues", "Banquet Halls", "Conference Rooms", "Exhibition Centres"].map((t) => (
              <button
                key={t}
                onClick={() => router.push(`/halls?q=${encodeURIComponent(t)}`)}
                style={{
                  padding: "0.3rem 0.85rem",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
