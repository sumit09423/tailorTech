import { useState } from "react";
import { COURSES, CURRICULUM_BY_COURSE, BATCHES, FAQS, whatsappLink, SITE } from "../../data/content.js";
import { Toast } from "../ui/Toast.jsx";
import { CtaSection } from "../layout/CtaSection.jsx";

function parsePrice(c) {
  const p = parseInt(String(c.price).replace(/,/g, ""), 10);
  const o = parseInt(String(c.original).replace(/,/g, ""), 10);
  if (!Number.isFinite(p) || !Number.isFinite(o) || o <= 0 || p >= o) return null;
  return Math.round((1 - p / o) * 100);
}

export function CourseDetail({ nav, cid, w, user, onEnroll }) {
  const c = COURSES.find((x) => x.id === cid) || COURSES[0];
  const curriculum = CURRICULUM_BY_COURSE[cid] || CURRICULUM_BY_COURSE[c.id] || [];
  const m = w < 640;
  const t = w < 1024;
  const [tab, sTab] = useState("program");
  const [oM, sOM] = useState([0]);
  const [oF, sOF] = useState([]);
  const [toast, setToast] = useState("");
  const tM = (i) => sOM((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const tF = (i) => sOF((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const disc = parsePrice(c);
  const isEnrolled = user && (user.enrolled || []).includes(c.id);
  const sym = c.currency === "USD" ? "$" : "";

  const handlePrimary = () => {
    if (c.kind === "service") {
      window.open(whatsappLink(`Hi, I'd like to book a Mock Interview session with TailorTech.`), "_blank", "noopener,noreferrer");
      return;
    }
    if (!user) {
      nav("login");
      return;
    }
    if (isEnrolled) {
      nav("profile");
      return;
    }
    onEnroll(c.id);
    setToast(`You're enrolled in ${c.title}!`);
    setTimeout(() => setToast(""), 2500);
  };

  const applyWhatsApp = () => {
    window.open(whatsappLink(`Hi, I want to apply for: ${c.title}`), "_blank", "noopener,noreferrer");
  };

  const tagStyle = (tg) => {
    const live = tg.includes("Live") || tg === "Live Online";
    return {
      padding: ".2rem .55rem",
      borderRadius: 50,
      fontSize: ".63rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.7,
      background: live ? "#E8F3EC" : "#D4EEF8",
      color: live ? "#5A8A6C" : "#6BB3D4",
    };
  };

  const sidebarHeader = {
    height: m ? 100 : 125,
    background: c.banner,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const perks = c.kind === "service" ? c.whatYouGet : ["Live or structured learning", "Hands-on projects", "Mentor support", "Interview preparation (where applicable)", "Small batch attention", "Industry-aligned roadmap"];

  return (
    <>
      <Toast msg={toast} />
      <section style={{ padding: m ? "5rem 5% 1.5rem" : "6rem 6% 2rem", background: "#FFF8F0", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem", fontSize: ".75rem", display: "flex", gap: ".3rem", flexWrap: "wrap" }}>
            <a onClick={() => nav("home")} style={{ color: "#6B7C8F", cursor: "pointer" }}>
              Home
            </a>
            <span style={{ color: "#6B7C8F" }}>›</span>
            <a onClick={() => nav("courses")} style={{ color: "#6B7C8F", cursor: "pointer" }}>
              Programs
            </a>
            <span style={{ color: "#6B7C8F" }}>›</span>
            <span style={{ color: "#1E2A3A", fontWeight: 700 }}>{c.title}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: t ? "1fr" : "1fr 320px", gap: t ? "1.5rem" : "2rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", gap: ".3rem", flexWrap: "wrap", marginBottom: ".6rem" }}>
                <span style={{ padding: ".2rem .55rem", borderRadius: 50, fontSize: ".63rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.7, background: "rgba(212,168,83,.15)", color: "#b8860b" }}>⭐ {c.badge}</span>
                {c.tags.map((tg) => (
                  <span key={tg} style={tagStyle(tg)}>
                    {tg}
                  </span>
                ))}
              </div>
              <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.3rem" : t ? "1.6rem" : "clamp(1.5rem,2.5vw,2.2rem)", color: "#1E2A3A", lineHeight: 1.2, marginBottom: ".6rem" }}>{c.title}</h1>
              <p style={{ fontSize: m ? ".82rem" : ".9rem", color: "#6B7C8F", lineHeight: 1.7, marginBottom: ".9rem" }}>{c.desc}</p>
              <p style={{ fontSize: m ? ".8rem" : ".88rem", color: "#2C3E50", lineHeight: 1.65, marginBottom: ".9rem" }}>{c.longDesc}</p>
              <div style={{ display: "flex", gap: m ? ".6rem" : "1rem", flexWrap: "wrap", marginBottom: ".8rem" }}>
                {[
                  ["🕐", c.duration],
                  ["📍", c.mode],
                  ["⭐", `${c.rating} rating`],
                ].map(([ic, l]) => (
                  <span key={l} style={{ display: "flex", alignItems: "center", gap: ".2rem", fontSize: m ? ".74rem" : ".82rem", color: "#2C3E50" }}>
                    {ic} {l}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                <span style={{ color: "#D4A853", fontSize: ".82rem", letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: ".78rem", color: "#6B7C8F" }}>{c.rating}/5</span>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 15, overflow: "hidden", boxShadow: "0 7px 25px rgba(0,0,0,.05)", border: "1px solid rgba(0,0,0,.04)", position: t ? "static" : "sticky", top: 70, order: t ? -1 : 0 }}>
              <div style={sidebarHeader}>
                <span style={{ fontSize: m ? "2.5rem" : "3rem", filter: "drop-shadow(0 2px 6px rgba(0,0,0,.25))" }}>{c.emoji}</span>
              </div>
              <div style={{ padding: m ? "1.1rem" : "1.3rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: ".35rem", flexWrap: "wrap", marginBottom: ".1rem" }}>
                  {c.price === "—" || c.price === "" ? (
                    <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.2rem" : "1.35rem", color: "#1E2A3A" }}>{c.priceLabel}</span>
                  ) : (
                    <>
                      <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.5rem" : "1.7rem", color: "#1E2A3A" }}>
                        {sym}
                        {c.price}
                      </span>
                      {c.original && c.original !== c.price && (
                        <span style={{ fontSize: ".82rem", color: "#6B7C8F", textDecoration: "line-through" }}>
                          {sym}
                          {c.original}
                        </span>
                      )}
                      {disc != null && <span style={{ fontSize: ".65rem", fontWeight: 700, color: "#fff", background: "#E8845C", padding: ".12rem .4rem", borderRadius: 50 }}>{disc}% OFF</span>}
                    </>
                  )}
                </div>
                {c.earlyBird && <div style={{ fontSize: ".72rem", color: "#5A8A6C", fontWeight: 600, marginBottom: ".35rem" }}>{c.earlyBird}</div>}
                <div style={{ fontSize: ".72rem", color: "#6B7C8F", marginBottom: "1rem" }}>{c.kind === "service" ? "Book a one-on-one session via WhatsApp." : `Questions? ${SITE.whatsappDisplay}`}</div>
                <button type="button" onClick={handlePrimary} style={{ width: "100%", padding: ".8rem", borderRadius: 50, fontSize: ".9rem", fontWeight: 700, border: "none", background: isEnrolled && c.kind !== "service" ? "#1E2A3A" : "#7BAE8E", color: "#fff", cursor: "pointer", fontFamily: "'Muli',sans-serif", marginBottom: ".4rem" }}>
                  {c.kind === "service" ? "Book a Slot →" : isEnrolled ? "Go to Dashboard →" : "Enroll / Save My Seat →"}
                </button>
                <button type="button" onClick={applyWhatsApp} style={{ width: "100%", padding: ".8rem", borderRadius: 50, fontSize: ".9rem", fontWeight: 700, border: "2px solid rgba(0,0,0,.06)", background: "transparent", color: "#1E2A3A", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                  Apply Now (WhatsApp)
                </button>
                {c.programDetails?.batchSize && <div style={{ fontSize: ".72rem", color: "#6B7C8F", marginTop: ".75rem" }}>{c.programDetails.batchSize}</div>}
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(0,0,0,.04)" }}>
                  {perks.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: ".4rem", fontSize: ".78rem", color: "#2C3E50", marginBottom: ".4rem" }}>
                      <span style={{ color: "#7BAE8E", fontWeight: 700 }}>✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: m ? "1.5rem 5%" : "2rem 6%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: t ? "1fr" : "1fr 320px", gap: "2rem" }}>
          <div>
            <div style={{ display: "flex", gap: ".12rem", borderBottom: "2px solid rgba(0,0,0,.04)", marginBottom: "1.3rem", overflowX: "auto" }}>
              {[
                ["program", "Program"],
                ["curriculum", "Curriculum"],
                ["schedule", "Schedule"],
                ["faq", "FAQ"],
              ].map(([k, l]) => (
                <button key={k} type="button" onClick={() => sTab(k)} style={{ padding: m ? ".5rem .75rem" : ".6rem 1rem", fontSize: m ? ".76rem" : ".82rem", fontWeight: 700, color: tab === k ? "#5A8A6C" : "#6B7C8F", background: "none", border: "none", borderBottom: tab === k ? "2.5px solid #7BAE8E" : "2.5px solid transparent", marginBottom: -2, whiteSpace: "nowrap", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                  {l}
                </button>
              ))}
            </div>

            {tab === "program" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem", color: "#1E2A3A", marginBottom: ".6rem" }}>What the Program Covers</h3>
                  {c.whatItCovers.map((sec, i) => (
                    <div key={i} style={{ marginBottom: "1rem", background: "#fff", borderRadius: 12, padding: m ? ".9rem" : "1rem", border: "1px solid rgba(0,0,0,.04)" }}>
                      <div style={{ fontWeight: 700, fontSize: ".88rem", color: "#1E2A3A", marginBottom: ".35rem" }}>{sec.title}</div>
                      <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: m ? ".78rem" : ".82rem", color: "#6B7C8F", lineHeight: 1.6 }}>
                        {sec.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", borderRadius: 12, padding: m ? ".9rem" : "1rem", border: "1px solid rgba(0,0,0,.04)" }}>
                  <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem", color: "#1E2A3A", marginBottom: ".6rem" }}>What You Get</h3>
                  <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: m ? ".78rem" : ".82rem", color: "#6B7C8F", lineHeight: 1.65 }}>
                    {c.whatYouGet.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "curriculum" &&
              curriculum.map((mod, mi) => (
                <div key={mi} style={{ marginBottom: ".6rem" }}>
                  <div onClick={() => tM(mi)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: m ? ".6rem .75rem" : ".75rem 1rem", background: oM.includes(mi) ? "#E8F3EC" : "#fff", borderRadius: oM.includes(mi) ? "10px 10px 0 0" : "10px", border: `1px solid ${oM.includes(mi) ? "#7BAE8E" : "rgba(0,0,0,.04)"}`, cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                      <span style={{ width: 28, height: 28, borderRadius: 7, background: oM.includes(mi) ? "#7BAE8E" : "#E8F3EC", color: oM.includes(mi) ? "#fff" : "#5A8A6C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".65rem", fontWeight: 800 }}>{mod.num}</span>
                      <div>
                        <div style={{ fontSize: m ? ".78rem" : ".84rem", fontWeight: 700, color: "#1E2A3A" }}>{mod.title}</div>
                        <div style={{ fontSize: ".65rem", color: "#6B7C8F" }}>{mod.meta}</div>
                      </div>
                    </div>
                    <span style={{ fontSize: ".7rem", color: "#6B7C8F", transform: oM.includes(mi) ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▼</span>
                  </div>
                  {oM.includes(mi) && (
                    <div style={{ background: "#fff", border: "1px solid #7BAE8E", borderTop: "none", borderRadius: "0 0 10px 10px", padding: m ? ".6rem .75rem" : ".75rem 1rem" }}>
                      {mod.lessons.map((ls, li) => {
                        const [nm, dur] = ls.split("|");
                        return (
                          <div key={li} style={{ display: "flex", alignItems: "center", gap: ".4rem", padding: ".35rem 0", borderBottom: li < mod.lessons.length - 1 ? "1px solid rgba(0,0,0,.03)" : "none", fontSize: m ? ".74rem" : ".8rem", color: "#2C3E50" }}>
                            <span style={{ color: "#7BAE8E", fontSize: ".72rem" }}>{nm.includes("🛠") ? "🛠" : "▶"}</span>
                            <span style={{ flex: 1 }}>{nm.replace("🛠 ", "")}</span>
                            <span style={{ fontSize: ".65rem", color: "#6B7C8F" }}>{dur}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

            {tab === "schedule" && (
              <>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1rem" : "1.2rem", color: "#1E2A3A", marginBottom: ".8rem" }}>Upcoming Batches</h3>
                <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2,1fr)", gap: ".8rem" }}>
                  {BATCHES.map((b, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 12, padding: m ? ".9rem" : "1rem", border: "1px solid rgba(0,0,0,.03)", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: b.color }} />
                      <div style={{ fontSize: ".62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: b.color, marginBottom: ".3rem" }}>{b.label}</div>
                      <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: ".95rem", color: "#1E2A3A", marginBottom: ".4rem" }}>{b.name}</div>
                      <div style={{ fontSize: ".74rem", color: "#6B7C8F", marginBottom: ".2rem" }}>{b.start}</div>
                      <div style={{ fontSize: ".74rem", color: "#6B7C8F", marginBottom: ".2rem" }}>{b.time}</div>
                      <div style={{ fontSize: ".74rem", color: "#6B7C8F", marginBottom: ".35rem" }}>{b.mode}</div>
                      <span style={{ display: "inline-block", fontSize: ".65rem", fontWeight: 700, padding: ".18rem .5rem", borderRadius: 50, marginTop: ".2rem", background: b.status === "few" ? "#FFF0EA" : "#E8F3EC", color: b.status === "few" ? "#E8845C" : "#5A8A6C" }}>{b.seats != null ? `${b.seats} seats` : "Open"}</span>
                      {b.courseId && (
                        <button type="button" onClick={() => nav("detail", b.courseId)} style={{ display: "block", marginTop: ".6rem", background: "none", border: "none", color: "#7BAE8E", fontWeight: 700, fontSize: ".78rem", cursor: "pointer", padding: 0, fontFamily: "'Muli',sans-serif" }}>
                          View program →
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === "faq" &&
              FAQS.map(([q, a], i) => (
                <div key={i} style={{ marginBottom: ".45rem" }}>
                  <div onClick={() => tF(i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: m ? ".6rem .75rem" : ".75rem 1rem", background: oF.includes(i) ? "#E8F3EC" : "#fff", borderRadius: oF.includes(i) ? "10px 10px 0 0" : "10px", border: `1px solid ${oF.includes(i) ? "#7BAE8E" : "rgba(0,0,0,.04)"}`, cursor: "pointer", fontSize: m ? ".78rem" : ".84rem", fontWeight: 700, color: "#1E2A3A", gap: ".5rem" }}>
                    <span style={{ flex: 1 }}>{q}</span>
                    <span style={{ fontSize: ".65rem", color: "#6B7C8F", transform: oF.includes(i) ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }}>▼</span>
                  </div>
                  {oF.includes(i) && <div style={{ background: "#fff", border: "1px solid #7BAE8E", borderTop: "none", borderRadius: "0 0 10px 10px", padding: m ? ".6rem .75rem" : ".75rem 1rem", fontSize: m ? ".76rem" : ".8rem", color: "#6B7C8F", lineHeight: 1.7 }}>{a}</div>}
                </div>
              ))}
          </div>
          <div />
        </div>
      </div>
      <CtaSection nav={nav} w={w} />
    </>
  );
}
