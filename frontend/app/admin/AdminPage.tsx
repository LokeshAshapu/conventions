"use client";
import { useState } from "react";
import { halls } from "@/lib/data";
import Link from "next/link";

const ADMIN_PASSWORD = "grandvenue2026";

const mockLeads = [
  { id: "l1", name: "Aarav Mehta", phone: "+91 6301451462", event: "Wedding", date: "2026-06-15", guests: 500, hall: "The Grand Maharaja Palace", status: "New", time: "2 hrs ago" },
  { id: "l2", name: "Sunita Rao", phone: "+91 6301451462", event: "Corporate", date: "2026-05-20", guests: 200, hall: "Skyline Banquet", status: "Contacted", time: "5 hrs ago" },
  { id: "l3", name: "Ravi Sharma", phone: "+91 6301451462", event: "Birthday", date: "2026-05-10", guests: 150, hall: "Diamond Banquet", status: "Booked", time: "1 day ago" },
  { id: "l4", name: "Priya Nair", phone: "+91 6301451462", event: "Reception", date: "2026-07-01", guests: 800, hall: "Royal Orchid", status: "New", time: "3 hrs ago" },
  { id: "l5", name: "TechCorp Pvt Ltd", phone: "+91 6301451462", event: "Conference", date: "2026-05-25", guests: 300, hall: "Lotus Convention", status: "Contacted", time: "2 days ago" },
];

const analyticsData = [
  { label: "Total Views", value: "12,847", change: "+18%", icon: "👁" },
  { label: "Inquiries", value: "342", change: "+24%", icon: "📩" },
  { label: "Bookings", value: "89", change: "+12%", icon: "✅" },
  { label: "Revenue", value: "₹48.2L", change: "+31%", icon: "💰" },
];

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [leads, setLeads] = useState(mockLeads);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) { setAuthenticated(true); setError(""); }
    else setError("Incorrect password. Try: grandvenue2026");
  };

  const updateLeadStatus = (id: string, status: string) => {
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l));
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "radial-gradient(ellipse at center, rgba(201,162,39,0.06) 0%, var(--bg-dark) 70%)",
        paddingTop: "5rem",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(201,162,39,0.2)",
          borderRadius: "var(--radius-xl)",
          padding: "3rem",
          width: "100%",
          maxWidth: 400,
        }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🔐</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.25rem" }}>Admin Login</h1>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>GrandVenue Owner Dashboard</p>
          </div>
          <form onSubmit={login} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            {error && <p style={{ color: "#e05050", fontSize: "0.82rem" }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Login to Dashboard</button>
          </form>
          <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            Demo password: <code style={{ color: "var(--gold)" }}>grandvenue2026</code>
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "dashboard", label: "📊 Dashboard" },
    { id: "leads", label: "📩 Leads" },
    { id: "listings", label: "🏛 Listings" },
    { id: "settings", label: "⚙️ Settings" },
  ];

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "rgba(0,0,0,0.3)" }}>
      <div className="container" style={{ padding: "2rem 1.5rem" }}>
        {/* Admin Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              Owner Dashboard
            </h1>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
              Welcome back! Here's your performance overview.
            </p>
          </div>
          <button onClick={() => setAuthenticated(false)} className="btn btn-secondary btn-sm">
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "0" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.65rem 1.25rem",
                background: "none",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab.id ? "var(--gold)" : "transparent"}`,
                color: activeTab === tab.id ? "var(--gold)" : "rgba(255,255,255,0.55)",
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor: "pointer",
                fontSize: "0.88rem",
                transition: "all 0.2s",
                marginBottom: "-1px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div>
            {/* Analytics Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
              {analyticsData.map((item) => (
                <div key={item.label} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#25D366", background: "rgba(37,211,102,0.1)", padding: "0.2rem 0.6rem", borderRadius: "999px" }}>
                      {item.change}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 800, color: "var(--gold)", marginBottom: "0.25rem" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{item.label}</div>
                </div>
              ))}
            </div>

            {/* Recent Leads Quick View */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem",
              marginBottom: "2rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}>Recent Inquiries</h3>
                <button onClick={() => setActiveTab("leads")} className="btn btn-secondary btn-sm">View All</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {leads.slice(0, 3).map((lead) => (
                  <div key={lead.id} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.85rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "var(--radius-sm)",
                    flexWrap: "wrap", gap: "0.5rem",
                  }}>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{lead.name}</span>
                      <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginLeft: "0.75rem" }}>{lead.event} • {lead.date} • {lead.guests} guests</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                      <span className={`badge ${lead.status === "New" ? "badge-maroon" : lead.status === "Booked" ? "badge-green" : "badge-blue"}`}>
                        {lead.status}
                      </span>
                      <a href={`tel:${lead.phone}`} className="btn btn-sm btn-maroon">📞</a>
                      <a href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp">💬</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart (Visual Mock) */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem",
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Monthly Inquiries</h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem", height: 150 }}>
                {[40, 65, 55, 80, 70, 90, 85, 120, 100, 130, 95, 145].map((v, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
                    <div style={{
                      width: "100%",
                      height: `${(v / 150) * 130}px`,
                      background: i === 11 ? "linear-gradient(to top, var(--gold), var(--gold-light))" : "rgba(201,162,39,0.3)",
                      borderRadius: "4px 4px 0 0",
                      transition: "all 0.3s",
                    }} />
                    <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)" }}>
                      {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === "leads" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}>
                All Inquiries & Leads
              </h2>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="badge badge-maroon">New: {leads.filter(l => l.status === "New").length}</span>
                <span className="badge badge-blue">Contacted: {leads.filter(l => l.status === "Contacted").length}</span>
                <span className="badge badge-green">Booked: {leads.filter(l => l.status === "Booked").length}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {leads.map((lead) => (
                <div key={lead.id} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr auto",
                  gap: "1rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{lead.name}</div>
                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>{lead.phone}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "0.15rem" }}>⏱ {lead.time}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", marginBottom: "0.2rem" }}>
                      <span className="badge badge-gold" style={{ marginRight: "0.4rem" }}>{lead.event}</span>
                      {lead.hall}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>
                      📅 {lead.date} &nbsp;•&nbsp; 👥 {lead.guests} guests
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="form-select"
                      style={{ padding: "0.35rem 0.7rem", fontSize: "0.78rem", width: "auto" }}
                    >
                      <option>New</option>
                      <option>Contacted</option>
                      <option>Booked</option>
                      <option>Cancelled</option>
                    </select>
                    <a href={`tel:${lead.phone}`} className="btn btn-sm btn-maroon">📞 Call</a>
                    <a href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp">💬 WhatsApp</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === "listings" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}>Your Hall Listings</h2>
              <button className="btn btn-primary btn-sm">+ Add New Hall</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {halls.map((hall) => (
                <div key={hall.id} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}>
                  <img src={hall.coverImage} alt={hall.name} style={{ width: 80, height: 60, objectFit: "cover", borderRadius: "var(--radius-sm)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, marginBottom: "0.2rem" }}>{hall.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                      📍 {hall.location} &nbsp;•&nbsp; 👥 {hall.maxCapacity} guests &nbsp;•&nbsp; ₹{(hall.pricePerEvent / 1000).toFixed(0)}K/event
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.4rem" }}>
                      {hall.featured && <span className="badge badge-gold">⭐ Featured</span>}
                      <span className="badge badge-green">Active</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Link href={`/halls/${hall.slug}`} className="btn btn-sm btn-secondary">View</Link>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div style={{ maxWidth: 600 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Account Settings</h2>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Business Name</label>
                  <input className="form-input" defaultValue="GrandVenue Admin" />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Email</label>
                  <input type="email" className="form-input" defaultValue="admin@grandvenue.in" />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number</label>
                  <input type="tel" className="form-input" defaultValue="+91 63014 51462" />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Auto-Reply Message</label>
                  <textarea className="form-input" rows={3} defaultValue="Hello! Thank you for contacting GrandVenue. Our team will get back to you within 30 minutes with availability and pricing details." />
                </div>
                <button className="btn btn-primary" style={{ width: "fit-content" }}>Save Settings</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
