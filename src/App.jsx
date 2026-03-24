import { useState, useCallback } from "react";
import "./index.css";
import { useWindowWidth } from "./hooks/useWindowWidth.js";
import { Nav } from "./components/layout/Nav.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { Home } from "./components/pages/Home.jsx";
import { Courses } from "./components/pages/Courses.jsx";
import { CourseDetail } from "./components/pages/CourseDetail.jsx";
import { LoginPage } from "./components/pages/LoginPage.jsx";
import { ProfilePage } from "./components/pages/ProfilePage.jsx";

export default function App() {
  const [pg, sPg] = useState("home");
  const [cid, sCid] = useState("java-fullstack");
  const w = useWindowWidth();
  const [user, setUser] = useState(null);
  const nav = useCallback((t, id) => {
    if (t === "detail") {
      sCid(id || "java-fullstack");
      sPg("detail");
    } else sPg(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleLogin = (u) => setUser(u);
  const handleLogout = () => {
    setUser(null);
    sPg("home");
  };
  const handleEnroll = (id) => {
    if (!user) return;
    setUser({ ...user, enrolled: [...(user.enrolled || []), id] });
  };
  const handleUnenroll = (id) => {
    if (!user) return;
    setUser({ ...user, enrolled: (user.enrolled || []).filter((x) => x !== id) });
  };

  return (
    <div style={{ fontFamily: "'Muli',sans-serif", color: "#2C3E50", background: "#FFFDFB", minHeight: "100vh" }}>
      <Nav key={pg} page={pg} nav={nav} w={w} user={user} onLogout={handleLogout} />
      {pg === "home" && <Home nav={nav} w={w} user={user} />}
      {pg === "courses" && <Courses nav={nav} w={w} />}
      {pg === "detail" && <CourseDetail key={cid} nav={nav} cid={cid} w={w} user={user} onEnroll={handleEnroll} />}
      {pg === "login" && <LoginPage nav={nav} w={w} onLogin={handleLogin} />}
      {pg === "profile" && user && <ProfilePage nav={nav} w={w} user={user} setUser={setUser} onLogout={handleLogout} onUnenroll={handleUnenroll} />}
      <Footer nav={nav} w={w} />
    </div>
  );
}
