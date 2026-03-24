import { useState } from "react";
import { Reveal } from "../ui/Reveal.jsx";

function formatPrice(c) {
  if (c.price === "—" || c.price === "") {
    return { main: c.priceLabel || "Contact", sub: null };
  }
  const sym = c.currency === "USD" ? "$" : c.currency === "INR" ? "₹" : "";
  return {
    main: `${sym}${c.price}`,
    sub: c.original && c.original !== c.price ? `${sym}${c.original}` : null,
  };
}

export function CourseCard({ c, nav, delay = 0 }) {
  const [h, setH] = useState(false);
  const { main, sub } = formatPrice(c);
  const headerStyle = c.image
    ? {
        height: 160,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "#1a1e2e",
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 100%), url(${c.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        height: 160,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: c.banner,
        position: "relative",
      };

  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            nav("detail", c.id);
          }
        }}
        onClick={() => nav("detail", c.id)}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          background: "#fff",
          borderRadius: 15,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,.05)",
          transition: "all .3s",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transform: h ? "translateY(-5px)" : "none",
          boxShadow: h ? "0 14px 36px rgba(0,0,0,.07)" : "none",
        }}
      >
        <div style={headerStyle}>
          <span style={{ alignSelf: "flex-start", background: "rgba(255,255,255,.22)", backdropFilter: "blur(8px)", color: "#fff", fontSize: ".63rem", fontWeight: 700, padding: ".22rem .55rem", borderRadius: 50, textTransform: "uppercase", letterSpacing: 0.7, zIndex: 2 }}>{c.badge}</span>
          <span style={{ fontSize: c.image ? "1.6rem" : "2.2rem", alignSelf: "flex-end", zIndex: 2, filter: "drop-shadow(0 2px 4px rgba(0,0,0,.25))" }}>{c.emoji}</span>
          {!c.image && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(0,0,0,.12) 100%)" }} />}
        </div>
        <div style={{ padding: "1.1rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: ".98rem", color: "#1E2A3A", marginBottom: ".2rem" }}>{c.title}</h3>
          <p style={{ fontSize: ".78rem", color: "#6B7C8F", lineHeight: 1.55, marginBottom: ".35rem", flex: 1 }}>{c.desc}</p>
          <div style={{ display: "flex", gap: ".25rem", flexWrap: "wrap", marginBottom: ".5rem" }}>
            {c.tags.map((tg) => (
              <span key={tg} style={{ fontSize: ".6rem", padding: ".18rem .45rem", borderRadius: 50, fontWeight: 700, background: tg.includes("Live") || tg === "Live Online" ? "#E8F3EC" : "#D4EEF8", color: tg.includes("Live") || tg === "Live Online" ? "#3d7a54" : "#3a8aaa" }}>
                {tg}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: ".55rem", marginBottom: ".7rem", fontSize: ".7rem", color: "#6B7C8F", flexWrap: "wrap" }}>
            <span>🕐 {c.duration}</span>
            <span>📍 {c.mode}</span>
            <span>⭐ {c.rating}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: ".55rem", borderTop: "1px solid rgba(0,0,0,.04)" }}>
            <div>
              <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem", color: "#1E2A3A" }}>{main}</span>
              {sub && <span style={{ fontSize: ".72rem", color: "#6B7C8F", textDecoration: "line-through", marginLeft: ".2rem" }}>{sub}</span>}
            </div>
            <span style={{ background: "#E8F3EC", color: "#5A8A6C", padding: ".32rem .8rem", borderRadius: 50, fontSize: ".7rem", fontWeight: 700 }}>{c.kind === "service" ? "Book" : "Details"}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
