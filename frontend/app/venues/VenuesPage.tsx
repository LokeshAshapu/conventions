"use client";
import Link from "next/link";
import { halls, HALL_INFO } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function VenuesPage() {
  const searchParams = useSearchParams();
  
  const filteredHalls = useMemo(() => {
    const event = searchParams.get("event")?.toLowerCase();
    const city = searchParams.get("city")?.toLowerCase();
    const guests = parseInt(searchParams.get("guests") || "0");
    const q = searchParams.get("q")?.toLowerCase();

    return halls.filter((hall) => {
      // Event filtering
      if (event && !hall.eventTypes.some(t => t.toLowerCase().includes(event)) && 
          !hall.type.toLowerCase().includes(event)) return false;
      
      // City filtering
      if (city && !hall.location.toLowerCase().includes(city)) return false;
      
      // Capacity filtering
      if (guests && hall.maxCapacity < guests) return false;

      // Text query filtering
      if (q && !hall.name.toLowerCase().includes(q) && 
          !hall.shortDescription.toLowerCase().includes(q) &&
          !hall.facilities.some(f => f.toLowerCase().includes(q))) return false;

      return true;
    });
  }, [searchParams]);

  const hasFilters = searchParams.get("event") || searchParams.get("city") || searchParams.get("guests") || searchParams.get("q");

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh" }}>
      {/* Hero Banner */}
      <div style={{
        position: "relative",
        height: 380,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=70"
          alt="Venues"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Our Spaces</span>
          <h1 className="text-display" style={{ marginBottom: "1rem", color: "var(--ivory)" }}>
            The Venues
          </h1>
          <p className="text-body" style={{ maxWidth: 560, margin: "0 auto", fontSize: "1rem" }}>
            {hasFilters ? `Found ${filteredHalls.length} matching spaces` : `${halls.length} architecturally distinct spaces, each a blank canvas for your imagination.`}
          </p>
          {hasFilters && (
            <Link href="/venues" style={{ display: "inline-block", marginTop: "1.5rem", color: "var(--gold)", textDecoration: "underline", fontSize: "0.9rem" }}>
              Clear all filters
            </Link>
          )}
        </div>
      </div>

      {/* Venues Grid */}
      <div className="container" style={{ padding: "5rem 1.5rem" }}>
        {filteredHalls.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
            {filteredHalls.map((venue, i) => (
            <div key={venue.id} id={venue.slug} className="split-grid" style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
              gap: "4rem",
              alignItems: "center",
            }}>
              {/* Image side */}
              <div className="mobile-order-first" style={{ order: i % 2 === 0 ? 0 : 1, position: "relative" }}>
                <div style={{ position: "relative", height: 480, overflow: "hidden" }}>
                  <img
                    src={venue.coverImage}
                    alt={venue.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "scale(1)"; }}
                  />
                  {/* Thumbnail strip */}
                  {venue.images.length > 1 && (
                    <div style={{
                      position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem",
                      display: "flex", gap: "0.5rem",
                    }}>
                      {venue.images.slice(0, 4).map((img, ii) => (
                        <div key={ii} style={{ flex: 1, height: 60, border: "1px solid rgba(255,255,255,0.2)", overflow: "hidden" }}>
                          <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Info side */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span className="text-label" style={{ color: "var(--ivory-faint)" }}>{venue.type}</span>
                  <span className="text-label" style={{ color: "var(--gold)" }}>{venue.ac ? "AC" : "Open Air"}</span>
                </div>

                <h2 className="text-h1" style={{ marginBottom: "1rem" }}>
                  {venue.name}
                </h2>

                <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "1.5rem" }}>
                  <div>
                    <div className="text-label" style={{ marginBottom: "0.25rem" }}>Capacity</div>
                    <div style={{ fontFamily: "Playfair Display", fontSize: "1.25rem", color: "var(--ivory)" }}>{venue.capacity.toLocaleString("en-IN")} Guests</div>
                  </div>
                  <div>
                    <div className="text-label" style={{ marginBottom: "0.25rem" }}>Area</div>
                    <div style={{ fontFamily: "Playfair Display", fontSize: "1.25rem", color: "var(--ivory)" }}>{venue.area}</div>
                  </div>
                </div>

                <p className="text-body" style={{ marginBottom: "2.5rem" }}>
                  {venue.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <p className="text-label" style={{ marginBottom: "1rem" }}>Amenities</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    {venue.features.map((f) => (
                      <span key={f} style={{
                        fontFamily: "Inter",
                        fontSize: "0.8rem",
                        color: "var(--ivory-dim)",
                        border: "1px solid var(--border-subtle)",
                        padding: "0.4rem 1rem",
                      }}>{f}</span>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div style={{ marginBottom: "3rem" }}>
                  <p className="text-label" style={{ marginBottom: "1rem" }}>Best Suited For</p>
                  <p style={{ fontFamily: "Playfair Display", fontSize: "1.1rem", color: "var(--ivory)" }}>
                    {venue.idealFor.join("  —  ")}
                  </p>
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-outline" style={{ flex: 1 }}>
                    Enquire Availability
                  </Link>
                  <a
                    href={`https://wa.me/${HALL_INFO.whatsapp}?text=${encodeURIComponent(`Hello! I'm interested in booking ${venue.name} for my event. Could you please share availability and pricing?`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost" style={{ flex: 1 }}
                  >
                    WhatsApp Let's Talk
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <h2 className="text-h2" style={{ marginBottom: "1rem" }}>No Spaces Found</h2>
            <p className="text-body" style={{ marginBottom: "2rem" }}>We couldn't find any venues matching your current search criteria.</p>
            <Link href="/venues" className="btn btn-primary" style={{ display: "inline-block" }}>View All Venues</Link>
          </div>
        )}
      </div>
    </div>
  );
}
