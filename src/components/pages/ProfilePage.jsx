import { useState } from "react";
import { COURSES } from "../../data/content.js";
import { Toast } from "../ui/Toast.jsx";
import { ToggleRow } from "../profile/ToggleRow.jsx";

export function ProfilePage({ nav, w, user, setUser, onLogout, onUnenroll }) {
  const m = w < 640;
  const t = w < 1024;
  const [tab, setTab] = useState("profile");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email, phone: user.phone, bio: user.bio || "", city: user.city || "" });
  const [toast, setToast] = useState("");
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const save = () => {
    setUser({ ...user, ...form });
    setEditing(false);
    setToast("Profile updated!");
    setTimeout(() => setToast(""), 2500);
  };
  const enrolledCourses = COURSES.filter((c) => (user.enrolled || []).includes(c.id));

  const tabBtn = (k, l, ic) => (
    <button key={k} type="button" onClick={() => setTab(k)} style={{ display: "flex", alignItems: "center", gap: ".5rem", padding: ".7rem 1.1rem", borderRadius: 12, fontSize: ".85rem", fontWeight: tab === k ? 700 : 500, background: tab === k ? "#E8F3EC" : "transparent", color: tab === k ? "#5A8A6C" : "#6B7C8F", border: "none", cursor: "pointer", width: "100%", textAlign: "left", transition: "all .2s", fontFamily: "'Muli',sans-serif" }}>
      <span style={{ fontSize: "1rem" }}>{ic}</span>
      {l}
    </button>
  );

  return (
    <>
      <Toast msg={toast} />
      <section style={{ padding: m ? "5.5rem 5% 1.5rem" : "6.5rem 6% 1.5rem", background: "#FFF8F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem", fontSize: ".78rem" }}>
            <a onClick={() => nav("home")} style={{ color: "#6B7C8F", cursor: "pointer" }}>
              Home
            </a>
            <span style={{ color: "#6B7C8F", margin: "0 .3rem" }}>›</span>
            <span style={{ color: "#1E2A3A", fontWeight: 700 }}>My Profile</span>
          </div>
          <div style={{ display: "flex", alignItems: m ? "center" : "center", gap: m ? "1rem" : "1.5rem", flexDirection: m ? "column" : "row", textAlign: m ? "center" : "left", padding: "1.5rem 0" }}>
            <div style={{ width: m ? 80 : 100, height: m ? 80 : 100, borderRadius: "50%", background: "linear-gradient(135deg,#7BAE8E,#5A8A6C)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: m ? "2rem" : "2.5rem", fontWeight: 800, flexShrink: 0, boxShadow: "0 8px 24px rgba(123,174,142,.25)" }}>{user.name.charAt(0).toUpperCase()}</div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: m ? "1.4rem" : "1.8rem", color: "#1E2A3A", marginBottom: ".15rem" }}>{user.name}</h1>
              <p style={{ fontSize: ".88rem", color: "#6B7C8F", marginBottom: ".3rem" }}>{user.email}</p>
              <div style={{ display: "flex", gap: ".8rem", justifyContent: m ? "center" : "flex-start", fontSize: ".78rem", color: "#6B7C8F" }}>
                <span>📍 {user.city || "Jodhpur"}</span>
                <span>📅 Joined {user.joinDate || "Mar 2026"}</span>
                <span>📚 {enrolledCourses.length} courses</span>
              </div>
            </div>
            <button type="button" onClick={() => onLogout()} style={{ padding: ".55rem 1.3rem", borderRadius: 50, fontSize: ".82rem", fontWeight: 700, border: "2px solid rgba(232,92,92,.2)", background: "transparent", color: "#E85C5C", cursor: "pointer", fontFamily: "'Muli',sans-serif", whiteSpace: "nowrap" }}>
              Logout
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: m ? "1.5rem 5% 3rem" : "2rem 6% 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: t ? "1fr" : "220px 1fr", gap: "2rem" }}>
          <div>
            <div style={{ background: "#fff", borderRadius: 16, padding: ".8rem", border: "1px solid rgba(0,0,0,.04)", display: "flex", flexDirection: t ? "row" : "column", gap: ".3rem", position: t ? "static" : "sticky", top: 70, overflowX: t ? "auto" : "visible" }}>
              {tabBtn("profile", "My Profile", "👤")}
              {tabBtn("courses", "My Courses", "📚")}
              {tabBtn("settings", "Settings", "⚙️")}
            </div>
          </div>

          <div>
            {tab === "profile" && (
              <div style={{ background: "#fff", borderRadius: 18, padding: m ? "1.3rem" : "2rem", border: "1px solid rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.3rem", color: "#1E2A3A" }}>Personal Information</h2>
                  {!editing ? (
                    <button type="button" onClick={() => setEditing(true)} style={{ padding: ".45rem 1.1rem", borderRadius: 50, fontSize: ".8rem", fontWeight: 700, border: "2px solid rgba(0,0,0,.08)", background: "#fff", color: "#1E2A3A", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                      ✏️ Edit
                    </button>
                  ) : (
                    <button type="button" onClick={save} style={{ padding: ".45rem 1.1rem", borderRadius: 50, fontSize: ".8rem", fontWeight: 700, border: "none", background: "#7BAE8E", color: "#fff", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                      Save Changes
                    </button>
                  )}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "1.2rem" }}>
                  <div>
                    <label className="tt-label">Full Name</label>
                    {editing ? <input className="tt-input" value={form.name} onChange={upd("name")} /> : <p style={{ fontSize: ".92rem", color: "#2C3E50", padding: ".6rem 0" }}>{user.name}</p>}
                  </div>
                  <div>
                    <label className="tt-label">Email</label>
                    {editing ? <input className="tt-input" value={form.email} onChange={upd("email")} /> : <p style={{ fontSize: ".92rem", color: "#2C3E50", padding: ".6rem 0" }}>{user.email}</p>}
                  </div>
                  <div>
                    <label className="tt-label">Phone</label>
                    {editing ? <input className="tt-input" value={form.phone} onChange={upd("phone")} /> : <p style={{ fontSize: ".92rem", color: "#2C3E50", padding: ".6rem 0" }}>{user.phone || "Not set"}</p>}
                  </div>
                  <div>
                    <label className="tt-label">City</label>
                    {editing ? <input className="tt-input" value={form.city} onChange={upd("city")} /> : <p style={{ fontSize: ".92rem", color: "#2C3E50", padding: ".6rem 0" }}>{user.city || "Not set"}</p>}
                  </div>
                  <div style={{ gridColumn: m ? "1" : "1/3" }}>
                    <label className="tt-label">Bio</label>
                    {editing ? <textarea className="tt-input" rows={3} placeholder="Tell us about yourself..." value={form.bio} onChange={upd("bio")} style={{ resize: "vertical" }} /> : <p style={{ fontSize: ".92rem", color: user.bio ? "#2C3E50" : "#aaa", padding: ".6rem 0" }}>{user.bio || "No bio yet. Click Edit to add one!"}</p>}
                  </div>
                </div>
              </div>
            )}

            {tab === "courses" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                  <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.3rem", color: "#1E2A3A" }}>Enrolled Courses</h2>
                  <span style={{ fontSize: ".85rem", color: "#6B7C8F" }}>
                    {enrolledCourses.length} course{enrolledCourses.length !== 1 ? "s" : ""}
                  </span>
                </div>
                {enrolledCourses.length === 0 ? (
                  <div style={{ background: "#fff", borderRadius: 18, padding: "3rem 2rem", border: "1px solid rgba(0,0,0,.04)", textAlign: "center" }}>
                    <div style={{ fontSize: "3rem", marginBottom: ".8rem" }}>📭</div>
                    <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.2rem", color: "#1E2A3A", marginBottom: ".3rem" }}>No Courses Yet</h3>
                    <p style={{ fontSize: ".88rem", color: "#6B7C8F", marginBottom: "1.2rem" }}>You haven&apos;t enrolled in any courses yet. Start exploring!</p>
                    <button type="button" onClick={() => nav("courses")} style={{ background: "#7BAE8E", color: "#fff", padding: ".75rem 1.6rem", borderRadius: 50, fontSize: ".88rem", fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                      Browse Courses
                    </button>
                  </div>
                ) : (
                  enrolledCourses.map((c, i) => (
                    <div key={c.id} style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(0,0,0,.04)", marginBottom: "1rem", overflow: "hidden", display: "flex", flexDirection: m ? "column" : "row" }}>
                      <div
                        onClick={() => nav("detail", c.id)}
                        style={{
                          width: m ? "100%" : 180,
                          minHeight: m ? 100 : 120,
                          background: c.banner,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2.2rem",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        {c.emoji}
                      </div>
                      <div style={{ padding: "1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem", flexWrap: "wrap" }}>
                          <div>
                            <h3 onClick={() => nav("detail", c.id)} style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem", color: "#1E2A3A", marginBottom: ".15rem", cursor: "pointer" }}>
                              {c.title}
                            </h3>
                            <div style={{ display: "flex", gap: ".6rem", fontSize: ".72rem", color: "#6B7C8F", marginBottom: ".6rem" }}>
                              <span>🕐 {c.duration}</span>
                              <span>📚 {c.lessons} Lessons</span>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: ".4rem" }}>
                            <span style={{ background: "#E8F3EC", color: "#5A8A6C", padding: ".25rem .65rem", borderRadius: 50, fontSize: ".68rem", fontWeight: 700 }}>Enrolled</span>
                          </div>
                        </div>
                        <div style={{ marginBottom: ".5rem" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".72rem", color: "#6B7C8F", marginBottom: ".3rem" }}>
                            <span>Progress</span>
                            <span>{[35, 62, 18, 45, 80][i % 5]}%</span>
                          </div>
                          <div style={{ height: 6, background: "rgba(0,0,0,.06)", borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${[35, 62, 18, 45, 80][i % 5]}%`, background: "linear-gradient(90deg,#7BAE8E,#5A8A6C)", borderRadius: 3, transition: "width .5s" }} />
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                          <button type="button" onClick={() => nav("detail", c.id)} style={{ padding: ".4rem 1rem", borderRadius: 50, fontSize: ".78rem", fontWeight: 700, border: "none", background: "#7BAE8E", color: "#fff", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                            Continue Learning
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              onUnenroll(c.id);
                              setToast(`Unenrolled from ${c.title}`);
                              setTimeout(() => setToast(""), 2500);
                            }}
                            style={{ padding: ".4rem 1rem", borderRadius: 50, fontSize: ".78rem", fontWeight: 600, border: "2px solid rgba(0,0,0,.08)", background: "#fff", color: "#6B7C8F", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}
                          >
                            Unenroll
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {tab === "settings" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ background: "#fff", borderRadius: 18, padding: m ? "1.3rem" : "1.8rem", border: "1px solid rgba(0,0,0,.04)" }}>
                  <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.2rem", color: "#1E2A3A", marginBottom: "1rem" }}>Notifications</h2>
                  {[
                    ["Email notifications", "Get course updates via email", true],
                    ["SMS alerts", "Receive batch reminders via SMS", false],
                    ["Promotional emails", "Offers and new course launches", true],
                  ].map(([t2, d, def], i) => (
                    <ToggleRow key={i} label={t2} desc={d} defaultOn={def} />
                  ))}
                </div>
                <div style={{ background: "#fff", borderRadius: 18, padding: m ? "1.3rem" : "1.8rem", border: "1px solid rgba(0,0,0,.04)" }}>
                  <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.2rem", color: "#1E2A3A", marginBottom: "1rem" }}>Account</h2>
                  <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
                    <button type="button" style={{ padding: ".6rem 1.3rem", borderRadius: 50, fontSize: ".85rem", fontWeight: 700, border: "2px solid rgba(0,0,0,.08)", background: "#fff", color: "#1E2A3A", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                      Change Password
                    </button>
                    <button type="button" onClick={onLogout} style={{ padding: ".6rem 1.3rem", borderRadius: 50, fontSize: ".85rem", fontWeight: 700, border: "2px solid rgba(232,92,92,.15)", background: "transparent", color: "#E85C5C", cursor: "pointer", fontFamily: "'Muli',sans-serif" }}>
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
