import { useState } from "react";
import { Reveal } from "../ui/Reveal.jsx";

export function LoginPage({ nav, w, onLogin }) {
  const m = w < 640;
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    setError("");
    if (mode === "register" && !form.name.trim()) return setError("Please enter your name");
    if (!form.email.includes("@")) return setError("Please enter a valid email");
    if (form.password.length < 6) return setError("Password must be at least 6 characters");
    onLogin({
      name: form.name || form.email.split("@")[0],
      email: form.email,
      phone: form.phone || "+91 98765 43210",
      bio: "",
      city: "Jodhpur",
      enrolled: mode === "register" ? [] : ["java-fullstack", "java-frontend"],
      joinDate: "March 2026",
    });
    nav("home");
  };
  const inp = { marginBottom: "1rem" };
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: m ? "5.5rem 5% 3rem" : "6rem 6% 3rem", background: "#FFF8F0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(123,174,142,.08),transparent 70%)" }} />
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 440 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div onClick={() => nav("home")} style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.5rem", color: "#1E2A3A", display: "inline-flex", alignItems: "center", gap: ".4rem", cursor: "pointer", marginBottom: ".8rem" }}>
              <span style={{ width: 36, height: 36, background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".8rem", fontWeight: 800 }}>TT</span>
              TailorTech
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.5rem" : "1.8rem", color: "#1E2A3A", marginBottom: ".3rem" }}>{mode === "login" ? "Welcome Back!" : "Create Your Account"}</h1>
            <p style={{ fontSize: ".9rem", color: "#6B7C8F" }}>{mode === "login" ? "Sign in to access your courses" : "Join TailorTech and start learning today"}</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: m ? "1.5rem" : "2rem", boxShadow: "0 10px 40px rgba(0,0,0,.06)", border: "1px solid rgba(0,0,0,.05)" }}>
            <div style={{ display: "flex", marginBottom: "1.5rem", background: "rgba(0,0,0,.04)", borderRadius: 12, padding: 3 }}>
              {[
                ["login", "Sign In"],
                ["register", "Sign Up"],
              ].map(([k, l]) => (
                <button key={k} type="button" onClick={() => { setMode(k); setError(""); }} style={{ flex: 1, padding: ".65rem", borderRadius: 10, fontSize: ".85rem", fontWeight: 700, border: "none", cursor: "pointer", background: mode === k ? "#fff" : "transparent", color: mode === k ? "#1E2A3A" : "#6B7C8F", boxShadow: mode === k ? "0 2px 8px rgba(0,0,0,.06)" : "none", transition: "all .3s", fontFamily: "'Muli',sans-serif" }}>
                  {l}
                </button>
              ))}
            </div>
            {error && <div style={{ background: "#FFF0EA", color: "#E8845C", padding: ".7rem 1rem", borderRadius: 10, fontSize: ".82rem", fontWeight: 600, marginBottom: "1rem" }}>{error}</div>}
            {mode === "register" && (
              <div style={inp}>
                <label className="tt-label">Full Name</label>
                <input className="tt-input" placeholder="Rahul Sharma" value={form.name} onChange={upd("name")} />
              </div>
            )}
            <div style={inp}>
              <label className="tt-label">Email Address</label>
              <input className="tt-input" type="email" placeholder="you@example.com" value={form.email} onChange={upd("email")} />
            </div>
            {mode === "register" && (
              <div style={inp}>
                <label className="tt-label">Phone Number</label>
                <input className="tt-input" placeholder="+91 98765 43210" value={form.phone} onChange={upd("phone")} />
              </div>
            )}
            <div style={inp}>
              <label className="tt-label">Password</label>
              <input className="tt-input" type="password" placeholder="Min 6 characters" value={form.password} onChange={upd("password")} />
            </div>
            {mode === "login" && (
              <div style={{ textAlign: "right", marginBottom: "1rem" }}>
                <a style={{ fontSize: ".8rem", color: "#7BAE8E", fontWeight: 600, cursor: "pointer" }}>Forgot password?</a>
              </div>
            )}
            <button type="button" onClick={submit} style={{ width: "100%", padding: ".9rem", borderRadius: 50, fontSize: ".95rem", fontWeight: 700, border: "none", background: "#7BAE8E", color: "#fff", cursor: "pointer", fontFamily: "'Muli',sans-serif", marginBottom: ".8rem" }}>
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
            <div style={{ textAlign: "center", fontSize: ".85rem", color: "#6B7C8F" }}>
              {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              <a onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }} style={{ color: "#7BAE8E", fontWeight: 700, cursor: "pointer" }}>
                {mode === "login" ? "Sign Up" : "Sign In"}
              </a>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
            <p style={{ fontSize: ".78rem", color: "#6B7C8F" }}>
              By continuing, you agree to our{" "}
              <a style={{ color: "#7BAE8E", fontWeight: 600, cursor: "pointer" }}>Terms</a> &{" "}
              <a style={{ color: "#7BAE8E", fontWeight: 600, cursor: "pointer" }}>Privacy Policy</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
