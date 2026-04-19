"use client";
import { HALL_INFO } from "@/lib/data";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <span className="text-label" style={{ display: "block", marginBottom: "1rem" }}>Legal</span>
        <h1 className="text-display" style={{ marginBottom: "3rem" }}>Privacy Policy</h1>
        
        <div style={{ color: "var(--ivory-dim)", lineHeight: 1.8, fontSize: "0.95rem" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            At {HALL_INFO.name}, we hold the privacy of our clients and guests in the highest regard. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website or book our venues.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about our venues or services. This includes your name, email address, phone number, and event details via our inquiry forms.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The information we collect is used solely to facilitate your event planning process. This includes responding to your inquiries, providing availability and pricing, and coordinating event logistics. We do not sell your personal data to third-party vendors.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>3. Data Security</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We implement industry-standard security measures to protect your data. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to improperly collect, access, steal, or modify your information.
          </p>

          <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.5rem", color: "var(--ivory)", marginTop: "2.5rem", marginBottom: "1rem" }}>4. Contact Us</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you have any questions or comments about this policy, you may email us at {HALL_INFO.email} or call us at {HALL_INFO.phone}.
          </p>
        </div>
      </div>
    </div>
  );
}
