import { COURSES, TEAM, REVIEWS, SITE, ABOUT, WHY_TAILORTECH, BATCHES, HOME_STATS, whatsappLink } from "../../data/content.js";
import { Reveal } from "../ui/Reveal.jsx";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { CourseCard } from "../course/CourseCard.jsx";
import { CtaSection } from "../layout/CtaSection.jsx";

const FEATURED_PROGRAMS = COURSES.filter((c) => c.kind === "program");

export function Home({ nav, w, user }) {
  const m = w < 640;
  const t = w < 1024;
  const upcomingFeatured = BATCHES.filter((b) => b.courseId && b.seats != null).slice(0, 2);

  return (
    <>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: m ? "5.5rem 5% 2rem" : t ? "6rem 5% 2.5rem" : "6rem 6% 3rem", background: "#FFF8F0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -140, right: -140, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(123,174,142,.08),transparent 70%)" }} />
        <div style={{ maxWidth: 1260, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: t ? "1fr" : "1fr 1fr", gap: t ? "2rem" : "3rem", alignItems: "center", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: t ? "center" : "left" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: "#E8F3EC", color: "#5A8A6C", padding: ".32rem .8rem", borderRadius: 50, fontSize: m ? ".66rem" : ".72rem", fontWeight: 700, marginBottom: "1rem", animation: "fadeUp .7s ease-out" }}>
              <span style={{ width: 6, height: 6, background: "#7BAE8E", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              Live online · Small batches
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.65rem" : t ? "2.1rem" : "clamp(2rem,3.8vw,3rem)", lineHeight: 1.12, color: "#1E2A3A", marginBottom: ".75rem", animation: "fadeUp .7s ease-out .1s both" }}>
              Build Real Tech Skills with <em style={{ fontStyle: "italic", color: "#7BAE8E" }}>TailorTech</em>
            </h1>
            <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.05rem" : "1.2rem", color: "#5A8A6C", marginBottom: "1rem", animation: "fadeUp .7s ease-out .15s both" }}>{SITE.heroSubtitle}</p>
            <p style={{ fontSize: m ? ".85rem" : ".95rem", lineHeight: 1.75, color: "#6B7C8F", maxWidth: t ? "100%" : "480px", margin: t ? "0 auto 1.3rem" : "0 0 1.3rem", animation: "fadeUp .7s ease-out .2s both" }}>{SITE.whatWeOffer}</p>
            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", justifyContent: t ? "center" : "flex-start", animation: "fadeUp .7s ease-out .3s both" }}>
              <button type="button" onClick={() => nav("courses")} style={{ background: "#7BAE8E", color: "#fff", padding: m ? ".7rem 1.3rem" : ".75rem 1.5rem", borderRadius: 50, fontSize: m ? ".82rem" : ".86rem", fontWeight: 700, border: "none", cursor: "pointer" }}>
                View Programs →
              </button>
              <button
                type="button"
                onClick={() => window.open(whatsappLink("Hi, I would like to know more about TailorTech programs."), "_blank", "noopener,noreferrer")}
                style={{ background: "transparent", color: "#1E2A3A", padding: m ? ".7rem 1.3rem" : ".75rem 1.5rem", borderRadius: 50, fontSize: m ? ".82rem" : ".86rem", fontWeight: 600, border: "2px solid rgba(30,42,58,.1)", cursor: "pointer" }}
              >
                Chat on WhatsApp
              </button>
              {!user && (
                <button type="button" onClick={() => nav("login")} style={{ background: "#fff", color: "#5A8A6C", padding: m ? ".7rem 1.3rem" : ".75rem 1.5rem", borderRadius: 50, fontSize: m ? ".82rem" : ".86rem", fontWeight: 600, border: "2px solid rgba(123,174,142,.35)", cursor: "pointer" }}>
                  Learner login
                </button>
              )}
            </div>
          </div>
          <div style={{ position: "relative", maxWidth: t ? 380 : "none", margin: t ? "0 auto" : "0", animation: "fadeUp .8s ease-out .2s both" }}>
            <div style={{ background: "#1a1e2e", borderRadius: 12, overflow: "hidden", boxShadow: "0 22px 50px rgba(30,42,58,.13)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".35rem", padding: ".55rem .85rem", background: "#151826" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((dot) => (
                  <span key={dot} style={{ width: 8, height: 8, borderRadius: "50%", background: dot }} />
                ))}
                <span style={{ marginLeft: "auto", color: "rgba(255,255,255,.22)", fontSize: ".62rem" }}>your_future.py</span>
              </div>
              <div style={{ padding: m ? ".8rem" : "1rem", fontFamily: "'Courier New',monospace", fontSize: m ? ".62rem" : ".68rem", lineHeight: 1.95 }}>
                {["# Welcome to TailorTech", "from tailortech import Career", "", "student = Career()", "student.learn([", `  "Python", "React",`, `  "Java", "Spring"`, "])", "", "student.build_projects()", "student.get_hired() # ✨"].map((line, i) => (
                  <div key={i} style={{ opacity: 0, animation: `fadeUp .25s ease-out ${0.15 + i * 0.08}s forwards` }}>
                    <span style={{ color: "rgba(255,255,255,.1)", userSelect: "none", display: "inline-block", width: 20, fontSize: ".58rem" }}>{i + 1}</span>
                    <span style={{ color: line.startsWith("#") ? "rgba(255,255,255,.18)" : line.includes("from") || line.includes("import") ? "#c792ea" : line.includes('"') ? "#c3e88d" : "#89ddff" }}>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "#1E2A3A", padding: m ? "1.5rem 5%" : "2rem 6%", display: "grid", gridTemplateColumns: m ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: m ? "1rem" : "1.5rem", textAlign: "center" }}>
        {HOME_STATS.map(([n, l]) => (
          <div key={l}>
            <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.15rem" : "1.45rem", color: "#7BAE8E", display: "block" }}>{n}</span>
            <span style={{ fontSize: m ? ".68rem" : ".75rem", color: "rgba(255,255,255,.4)" }}>{l}</span>
          </div>
        ))}
      </div>

      <section id="about" style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#FFFDFB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: t ? "1fr" : "1fr 1fr", gap: t ? "2rem" : "3.5rem", alignItems: "center" }}>
          <Reveal>
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", borderRadius: 18, background: "linear-gradient(135deg,#E8F3EC,#D4EEF8)", padding: m ? "1.5rem" : "2rem", minHeight: m ? 220 : 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: m ? "2.8rem" : "3.5rem", marginBottom: ".4rem" }}>💻🚀</div>
                  <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1rem" : "1.25rem", color: "#1E2A3A" }}>Code Your Future</div>
                </div>
              </div>
              {!m && (
                <div style={{ position: "absolute", bottom: -14, right: -14, width: 105, height: 105, borderRadius: 12, background: "#E8845C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textAlign: "center" }}>
                  <div>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.6rem" }}>4+</div>
                    <div style={{ fontSize: ".65rem", fontWeight: 700 }}>Years</div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "#5A8A6C", marginBottom: ".4rem" }}>
                <span style={{ width: 16, height: 2, background: "#7BAE8E", display: "inline-block" }} />
                {ABOUT.title}
              </div>
              <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.2rem" : "clamp(1.5rem,2.5vw,2.1rem)", color: "#1E2A3A", lineHeight: 1.2, marginBottom: ".5rem" }}>{ABOUT.headline}</h2>
              <p style={{ fontSize: m ? ".82rem" : ".9rem", color: "#6B7C8F", lineHeight: 1.7, marginBottom: "1rem" }}>{ABOUT.intro}</p>
              {ABOUT.focusPoints.map((fp) => (
                <div key={fp.title} style={{ display: "flex", gap: ".6rem", padding: ".65rem", background: "#FFF8F0", borderRadius: 11, marginBottom: ".4rem" }}>
                  <div style={{ width: 34, height: 34, minWidth: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 800, background: "#E8F3EC", color: "#5A8A6C" }}>{fp.title.charAt(0)}</div>
                  <div>
                    <span style={{ fontSize: m ? ".8rem" : ".84rem", color: "#1E2A3A", fontWeight: 700, display: "block" }}>{fp.title}</span>
                    <span style={{ fontSize: m ? ".76rem" : ".8rem", color: "#6B7C8F", lineHeight: 1.5 }}>{fp.desc}</span>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: m ? ".78rem" : ".82rem", color: "#6B7C8F", lineHeight: 1.65, marginTop: ".8rem", fontStyle: "italic" }}>{SITE.tagline}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#FFF8F0" }}>
        <SectionHeading w={w} label="Our Programs" title="Main programs" sub="Java frontend & backend, full stack, data engineering, and a recorded full stack track — live online where noted." />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : t ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: "1.3rem" }}>
          {FEATURED_PROGRAMS.map((c, i) => (
            <CourseCard key={c.id} c={c} nav={nav} delay={i * 0.05} />
          ))}
        </div>
        <Reveal>
          <div style={{ textAlign: "center", marginTop: "1.8rem", display: "flex", gap: ".6rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button type="button" onClick={() => nav("courses")} style={{ background: "#7BAE8E", color: "#fff", padding: ".75rem 1.5rem", borderRadius: 50, fontSize: ".86rem", fontWeight: 700, border: "none", cursor: "pointer" }}>
              All programs & mock interviews →
            </button>
          </div>
        </Reveal>
      </section>

      <section style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#FFFDFB" }}>
        <SectionHeading w={w} label="Why TailorTech" title="Built for real-world software careers" sub="Points from our website content draft." />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : t ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: "1.1rem" }}>
          {WHY_TAILORTECH.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div style={{ background: "#fff", borderRadius: 14, padding: m ? "1.2rem" : "1.4rem", border: "1px solid rgba(0,0,0,.03)", height: "100%" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: ".8rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: ".95rem", color: "#1E2A3A", marginBottom: ".35rem" }}>{item.title}</h3>
                <p style={{ fontSize: ".8rem", color: "#6B7C8F", lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#FFF8F0" }}>
        <SectionHeading w={w} label="Upcoming Batches" title="Start your learning journey" sub="Explore upcoming live programs and secure your seat in the next batch." />
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "1.2rem" }}>
          {upcomingFeatured.map((b) => (
            <Reveal key={b.label + b.start}>
              <div style={{ background: "#fff", borderRadius: 16, padding: m ? "1.2rem" : "1.4rem", border: "1px solid rgba(0,0,0,.06)", boxShadow: "0 8px 28px rgba(0,0,0,.04)", borderLeft: `4px solid ${b.color}` }}>
                <div style={{ fontSize: ".72rem", fontWeight: 800, color: b.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: ".35rem" }}>{b.label}</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.1rem", color: "#1E2A3A", marginBottom: ".5rem" }}>Next batch starts: {b.start}</h3>
                <p style={{ fontSize: ".82rem", color: "#6B7C8F", marginBottom: ".25rem" }}>{b.time}</p>
                <p style={{ fontSize: ".82rem", color: "#6B7C8F", marginBottom: ".6rem" }}>
                  Seats available: <strong style={{ color: "#1E2A3A" }}>{b.seats}</strong>
                </p>
                <button type="button" onClick={() => window.open(whatsappLink(`Hi, I want to apply for ${b.label} (batch ${b.start}).`), "_blank", "noopener,noreferrer")} style={{ background: "#7BAE8E", color: "#fff", border: "none", padding: ".55rem 1.2rem", borderRadius: 50, fontWeight: 700, fontSize: ".82rem", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                  Apply Now
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="team" style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#1E2A3A" }}>
        <SectionHeading w={w} light label="How we teach" title="Small batches · Real projects" />
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : t ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "1.1rem" }}>
          {TEAM.map((tm, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ textAlign: "center", padding: "1.2rem .9rem", background: "rgba(255,255,255,.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,.04)" }}>
                <div style={{ width: 65, height: 65, borderRadius: "50%", margin: "0 auto .7rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", background: `rgba(123,174,142,${0.08 + i * 0.05})` }}>{tm.emoji}</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: ".92rem", color: "#fff" }}>{tm.title}</h3>
                <div style={{ fontSize: ".65rem", color: "#7BAE8E", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, margin: ".1rem 0 .35rem" }}>{tm.role}</div>
                <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.35)", lineHeight: 1.5 }}>{tm.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="reviews" style={{ padding: m ? "2.5rem 5%" : "4rem 6%", background: "#FFF8F0" }}>
        <SectionHeading w={w} label="Student feedback" title="What learners say" sub="Experiences from TailorTech programs (draft testimonials — no company names)." />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : t ? "repeat(2,1fr)" : "repeat(3,1fr)", gap: "1.1rem" }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 3) * 0.05}>
              <div style={{ background: "#fff", borderRadius: 14, padding: m ? "1.2rem" : "1.5rem", border: "1px solid rgba(0,0,0,.03)", height: "100%" }}>
                <div style={{ color: "#D4A853", fontSize: ".75rem", marginBottom: ".4rem", letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontSize: ".85rem", color: "#2C3E50", lineHeight: 1.7, marginBottom: ".8rem", fontStyle: "italic" }}>&quot;{r.text}&quot;</p>
                <div style={{ display: "flex", alignItems: "center", gap: ".45rem" }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: ["#E8F3EC", "#FFF0EA", "#D4EEF8"][i % 3], display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".85rem" }}>{r.avatar}</div>
                  <div>
                    <strong style={{ display: "block", color: "#1E2A3A", fontSize: ".8rem" }}>{r.name}</strong>
                    <span style={{ fontSize: ".7rem", color: "#6B7C8F" }}>{r.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection nav={nav} w={w} />
    </>
  );
}
