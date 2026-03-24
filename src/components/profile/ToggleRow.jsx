import { useState } from "react";

export function ToggleRow({ label, desc, defaultOn }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".8rem 0", borderBottom: "1px solid rgba(0,0,0,.04)" }}>
      <div>
        <strong style={{ display: "block", fontSize: ".9rem", color: "#1E2A3A" }}>{label}</strong>
        <span style={{ fontSize: ".78rem", color: "#6B7C8F" }}>{desc}</span>
      </div>
      <div
        role="switch"
        aria-checked={on}
        onClick={() => setOn(!on)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOn(!on);
          }
        }}
        tabIndex={0}
        style={{
          width: 48,
          height: 26,
          borderRadius: 13,
          background: on ? "#7BAE8E" : "rgba(0,0,0,.12)",
          cursor: "pointer",
          position: "relative",
          transition: "background .3s",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: on ? 24 : 2, transition: "left .3s", boxShadow: "0 2px 6px rgba(0,0,0,.12)" }} />
      </div>
    </div>
  );
}
