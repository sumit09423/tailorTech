import { Reveal } from "./Reveal.jsx";

export function SectionHeading({ label, title, sub, light, w }) {
  const m = w < 640;
  return (
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: m ? "1.8rem" : "2.8rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".4rem",
            fontSize: ".7rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 2.5,
            color: light ? "#7BAE8E" : "#5A8A6C",
            marginBottom: ".4rem",
          }}
        >
          <span style={{ width: 16, height: 2, background: "#7BAE8E", display: "inline-block" }} />
          {label}
        </div>
        <h2
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: m ? "1.3rem" : "clamp(1.6rem,2.8vw,2.3rem)",
            color: light ? "#fff" : "#1E2A3A",
            lineHeight: 1.2,
            marginBottom: ".4rem",
          }}
        >
          {title}
        </h2>
        {sub && (
          <p
            style={{
              fontSize: m ? ".82rem" : ".92rem",
              color: light ? "rgba(255,255,255,.45)" : "#6B7C8F",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}
