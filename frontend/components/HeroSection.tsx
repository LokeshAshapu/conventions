"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HALL_INFO } from "@/lib/data";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=90",
    eyebrow: "Weddings & Receptions",
    title: "Setting the Stage for",
    accent: "Unforgettable Events",
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1800&q=90",
    eyebrow: "Cultural Celebrations",
    title: "An Exquisite Venue for",
    accent: "Every Milestone",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=90",
    eyebrow: "Corporate Excellence",
    title: "Where Ambition Meets",
    accent: "Elegance",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", display: "flex", alignItems: "center" }}>

      {/* Background Slides */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: i === current ? 1 : 0,
          transform: i === current ? "scale(1)" : "scale(1.04)",
          transition: "opacity 1.4s ease, transform 8s ease",
          willChange: "opacity, transform",
        }} />
      ))}

      {/* Layered Overlays — cinematic, not vibrant */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(8,7,5,0.55) 0%, rgba(8,7,5,0.35) 50%, rgba(8,7,5,0.80) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(8,7,5,0.65) 0%, transparent 60%)",
      }} />

      {/* Subtle Grain Texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        opacity: 0.03,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 680, paddingTop: "2rem" }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            marginBottom: "1.75rem",
          }} className="anim-up">
            <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.7 }} />
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold-light)",
              opacity: 0.9,
            }}>
              {slide.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--white)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }} className="anim-up delay-1">
            {slide.title}
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--gold-light)",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }} className="anim-up delay-2">
            {slide.accent}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "0.95rem",
            color: "rgba(245,239,224,0.6)",
            lineHeight: 1.8,
            marginBottom: "2.75rem",
            maxWidth: 480,
            fontWeight: 300,
          }} className="anim-up delay-3">
            {HALL_INFO.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="anim-up delay-4">
            <Link href="/venues" className="btn btn-primary btn-lg">
              Explore Venues
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Enquire Now
            </Link>
            <a
              href={`https://wa.me/${HALL_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'd like to know more about event bookings at Grand Maharaja Convention.")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost btn-lg hide-mobile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators — minimal lines */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.5rem",
        zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 36 : 20,
              height: 1.5,
              background: i === current ? "var(--gold)" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
