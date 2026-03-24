import { Reveal } from "../ui/Reveal.jsx";
import { SITE, whatsappLink } from "../../data/content.js";

export function CtaSection({ nav, w }) {
  const m = w < 640;
  const apply = () => {
    window.open(whatsappLink("Hi, I'd like to apply to TailorTech."), "_blank", "noopener,noreferrer");
  };
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)",
        padding: m ? "2.5rem 5%" : "4rem 6%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: -70, right: -70, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,.05)" }} />
      <Reveal>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.3rem" : "clamp(1.6rem,2.8vw,2.3rem)", color: "#fff", marginBottom: ".5rem" }}>{SITE.ctaTitle}</h2>
          <p style={{ fontSize: m ? ".85rem" : ".95rem", color: "rgba(255,255,255,.72)", marginBottom: "1.3rem", lineHeight: 1.7 }}>{SITE.ctaSubtext}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: ".6rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={apply}
              style={{
                background: "#fff",
                color: "#5A8A6C",
                padding: m ? ".7rem 1.4rem" : ".75rem 1.6rem",
                borderRadius: 50,
                fontSize: ".88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Apply Now
            </button>
            <button
              type="button"
              onClick={() => nav("courses")}
              style={{
                background: "transparent",
                color: "#fff",
                padding: m ? ".7rem 1.4rem" : ".75rem 1.6rem",
                borderRadius: 50,
                fontSize: ".88rem",
                fontWeight: 600,
                border: "2px solid rgba(255,255,255,.3)",
                cursor: "pointer",
              }}
            >
              Browse Programs
            </button>
          </div>
          <p style={{ marginTop: "1rem", fontSize: ".78rem", color: "rgba(255,255,255,.55)" }}>
            WhatsApp {SITE.whatsappDisplay} · {SITE.email}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
