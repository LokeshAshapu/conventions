"use client";
import { HALL_INFO } from "@/lib/data";

export default function TermsOfServicePage() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Legal</span>
        <h1 className="text-display" style={{ marginBottom: "3rem" }}>Terms of Service</h1>
        
        <div style={{ color: "var(--ivory-dim)", lineHeight: 1.8, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Welcome to {HALL_INFO.name}. By accessing our website or utilizing our event coordination services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>1. Venue Reservations</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            All venue reservations are subject to availability and written confirmation. A minimum advance deposit is required to secure your booking. Rates are subject to change without prior notice unless a formal agreement has been signed.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>2. Cancellations and Refunds</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Cancellation policies vary depending on the scale of the venue booked and the notice period provided. Our detailed cancellation schedule is appended to your formal booking contract. Deposits are generally non-refundable within 90 days of the event.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>3. Property Damage</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Clients are responsible for any damages caused to the convention centre property, fixtures, or amenities by their guests or contracted third-party vendors. An authorization hold may be required before the commencement of the event.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>4. Code of Conduct</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We strive to maintain an environment of elegance and respect. We reserve the right to refuse service or conclude an event early if guest behavior significantly violates local laws or standard hospitality regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
