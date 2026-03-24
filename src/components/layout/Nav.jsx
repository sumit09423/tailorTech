import { useState, useEffect } from "react";

export function Nav({ page, nav, w, user, onLogout }) {
  const [sh, setSh] = useState(false);
  const [mo, setMo] = useState(false);
  useEffect(() => {
    const f = () => setSh(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const m = w < 768;
  const go = (t, id) => {
    setMo(false);
    nav(t, id);
  };
  const sc = (id) => {
    setMo(false);
    nav("home");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
  };
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: m ? ".7rem 5%" : ".85rem 4%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255,253,251,.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,.04)",
          boxShadow: sh ? "0 3px 18px rgba(0,0,0,.05)" : "none",
          transition: "all .3s",
        }}
      >
        <a onClick={() => go("home")} style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.15rem" : "1.35rem", color: "#1E2A3A", display: "flex", alignItems: "center", gap: ".4rem", cursor: "pointer" }}>
          <span
            style={{
              width: m ? 28 : 34,
              height: m ? 28 : 34,
              background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: m ? ".6rem" : ".75rem",
              fontWeight: 800,
            }}
          >
            TT
          </span>
          TailorTech
        </a>
        {!m ? (
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {[
              ["home", "Home"],
              ["courses", "Programs"],
            ].map(([k, l]) => (
              <a key={k} onClick={() => go(k)} style={{ color: page === k ? "#5A8A6C" : "#6B7C8F", fontSize: ".84rem", fontWeight: page === k ? 700 : 500, cursor: "pointer", borderBottom: page === k ? "2px solid #7BAE8E" : "2px solid transparent", paddingBottom: 3 }}>
                {l}
              </a>
            ))}
            {[
              ["about", "About"],
              ["team", "Team"],
              ["reviews", "Reviews"],
            ].map(([k, l]) => (
              <a key={k} onClick={() => sc(k)} style={{ color: "#6B7C8F", fontSize: ".84rem", fontWeight: 500, cursor: "pointer" }}>
                {l}
              </a>
            ))}
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
                <a onClick={() => go("profile")} style={{ display: "flex", alignItems: "center", gap: ".45rem", cursor: "pointer", padding: ".35rem .9rem .35rem .35rem", borderRadius: 50, background: page === "profile" ? "#E8F3EC" : "rgba(0,0,0,.03)", transition: "all .3s" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".75rem", fontWeight: 800 }}>{user.name.charAt(0).toUpperCase()}</div>
                  <span style={{ fontSize: ".84rem", fontWeight: 600, color: "#1E2A3A" }}>{user.name.split(" ")[0]}</span>
                </a>
              </div>
            ) : (
              <a onClick={() => go("login")} style={{ background: "#7BAE8E", color: "#fff", padding: ".48rem 1.3rem", borderRadius: 50, fontWeight: 700, fontSize: ".84rem", cursor: "pointer" }}>
                Login
              </a>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            {user && (
              <a onClick={() => go("profile")} style={{ cursor: "pointer" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".7rem", fontWeight: 800 }}>{user.name.charAt(0).toUpperCase()}</div>
              </a>
            )}
            <button type="button" onClick={() => setMo(true)} style={{ background: "none", border: "none", padding: 4, cursor: "pointer", display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "block", width: 20, height: 2.5, background: "#1E2A3A", borderRadius: 3 }} />
              <span style={{ display: "block", width: 20, height: 2.5, background: "#1E2A3A", borderRadius: 3 }} />
              <span style={{ display: "block", width: 14, height: 2.5, background: "#1E2A3A", borderRadius: 3 }} />
            </button>
          </div>
        )}
      </nav>
      <div className={`mob-ov${mo ? " on" : ""}`} onClick={() => setMo(false)} role="presentation" />
      <div className={`mob-dr${mo ? " on" : ""}`}>
        <button type="button" className="mob-x" onClick={() => setMo(false)}>
          ✕
        </button>
        {user && (
          <div style={{ display: "flex", alignItems: "center", gap: ".6rem", paddingBottom: ".8rem", borderBottom: "1px solid rgba(0,0,0,.05)", marginBottom: ".3rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".9rem", fontWeight: 800 }}>{user.name.charAt(0).toUpperCase()}</div>
            <div>
              <strong style={{ fontSize: ".9rem", color: "#1E2A3A" }}>{user.name}</strong>
              <div style={{ fontSize: ".72rem", color: "#6B7C8F" }}>{user.email}</div>
            </div>
          </div>
        )}
        <a onClick={() => go("home")}>Home</a>
        <a onClick={() => go("courses")}>Programs</a>
        <a onClick={() => sc("about")}>About</a>
        <a onClick={() => sc("team")}>Team</a>
        {user ? (
          <>
            <a onClick={() => go("profile")}>My Profile</a>
            <a
              onClick={() => {
                setMo(false);
                onLogout();
              }}
              style={{ color: "#E8845C" }}
            >
              Logout
            </a>
          </>
        ) : (
          <button type="button" className="mob-cta-b" onClick={() => go("login")}>
            Login / Sign Up
          </button>
        )}
      </div>
    </>
  );
}
