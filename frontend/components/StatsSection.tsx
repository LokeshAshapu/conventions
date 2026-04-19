"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2200;
        const step = target / (dur / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

const stats = [
  { value: 5000, suffix: "+", label: "Events Hosted" },
  { value: 42, suffix: "", label: "Luxury Suites" },
  { value: 800, suffix: "+", label: "Parking Capacity" },
  { value: 60, suffix: "K", label: "Sq. Ft. Venue Area" },
];

export default function StatsSection() {
  return (
    <section style={{ 
      position: "relative", 
      marginTop: "-3.5rem", 
      zIndex: 20, 
      padding: "0 1rem" 
    }}>
      <div className="container" style={{ padding: 0 }}>
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          borderTop: "2px solid var(--gold)", /* Accent line */
          boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          backgroundColor: "#161512", /* slightly warmer dark to stand out from background */
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ 
              textAlign: "center", 
              padding: "2.5rem 1rem",
              borderRight: i !== stats.length - 1 ? "1px solid var(--border-faint)" : "none",
              borderBottom: "none"
            }} className="stat-box">
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 500,
                color: "var(--gold-light)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "var(--ivory-dim)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stat-box {
            border-right: none !important;
            border-bottom: 1px solid var(--border-faint) !important;
          }
          .stat-box:last-child {
            border-bottom: none !important;
          }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-box:nth-child(odd) {
            border-right: 1px solid var(--border-faint) !important;
          }
          .stat-box:nth-last-child(-n+2) {
             border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
