import { useState } from "react";
import { COURSES, FILTERS } from "../../data/content.js";
import { CourseCard } from "../course/CourseCard.jsx";
import { CtaSection } from "../layout/CtaSection.jsx";

export function Courses({ nav, w }) {
  const m = w < 640;
  const t = w < 1024;
  const [f, sF] = useState("all");
  const fl = f === "all" ? COURSES : COURSES.filter((c) => c.cat === f);
  return (
    <>
      <section style={{ padding: m ? "5rem 5% 1.5rem" : "6.5rem 6% 2rem", background: "#FFF8F0", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div style={{ marginBottom: ".8rem", fontSize: ".75rem" }}>
            <a onClick={() => nav("home")} style={{ color: "#6B7C8F", cursor: "pointer" }}>
              Home
            </a>
            <span style={{ color: "#6B7C8F", margin: "0 .3rem" }}>›</span>
            <span style={{ color: "#1E2A3A", fontWeight: 700 }}>Our Programs</span>
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.5rem" : "clamp(1.7rem,2.8vw,2.5rem)", color: "#1E2A3A", marginBottom: ".4rem" }}>
            All <em style={{ fontStyle: "italic", color: "#7BAE8E" }}>Programs</em>
          </h1>
          <p style={{ fontSize: m ? ".82rem" : ".95rem", color: "#6B7C8F" }}>Java, data engineering, full stack — plus mock interviews. Content aligned with the TailorTech website draft.</p>
        </div>
      </section>
      <div style={{ padding: m ? ".8rem 5%" : "1rem 6%", background: "#FFFDFB", borderBottom: "1px solid rgba(0,0,0,.04)", position: "sticky", top: m ? 44 : 52, zIndex: 100, backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: ".5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: m ? ".2rem" : ".35rem", flexWrap: "wrap" }}>
            {FILTERS.map((fi) => (
              <button key={fi.key} type="button" onClick={() => sF(fi.key)} style={{ padding: m ? ".3rem .55rem" : ".4rem .9rem", borderRadius: 50, fontSize: m ? ".65rem" : ".74rem", fontWeight: 700, border: f === fi.key ? "2px solid #7BAE8E" : "2px solid rgba(0,0,0,.05)", background: f === fi.key ? "#7BAE8E" : "#fff", color: f === fi.key ? "#fff" : "#6B7C8F", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                {fi.label}
              </button>
            ))}
          </div>
          <span style={{ fontSize: ".8rem", color: "#6B7C8F" }}>
            <strong style={{ color: "#1E2A3A" }}>{fl.length}</strong> courses
          </span>
        </div>
      </div>
      <section style={{ padding: m ? "1.5rem 5% 2.5rem" : "2rem 6% 3.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : t ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: "1.3rem" }}>
          {fl.map((c, i) => (
            <CourseCard key={c.id} c={c} nav={nav} delay={i * 0.03} />
          ))}
        </div>
      </section>
      <CtaSection nav={nav} w={w} />
    </>
  );
}
