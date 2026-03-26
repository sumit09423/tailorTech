function FootLink({ children, onClick }) {
  return (
    <a
      onClick={onClick}
      style={{
        display: "block",
        color: "rgba(255,255,255,.4)",
        fontSize: ".84rem",
        marginBottom: ".45rem",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

export function Footer({ nav, w }) {
  const m = w < 640;
  const t = w < 1024;
  const socials = [
    { label: "YouTube", icon: "▶", href: "https://www.youtube.com" },
    { label: "WhatsApp", icon: "🟢", href: "https://wa.me/917340445010" },
    { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/company/tailortechh" },
    { label: "Facebook", icon: "f", href: "https://www.facebook.com" },
    { label: "Instagram", icon: "◉", href: "https://www.instagram.com/tailortech.in" },
  ];
  return (
    <footer style={{ background: "#1E2A3A", color: "#fff", padding: m ? "2rem 5% 1.2rem" : "3rem 6% 1.2rem" }}>
      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: m ? "1fr" : t ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
          gap: m ? "1.5rem" : "2.2rem",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <div
            onClick={() => nav("home")}
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "1.25rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
              cursor: "pointer",
              marginBottom: ".6rem",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                background: "#7BAE8E",
                borderRadius: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: ".65rem",
                fontWeight: 800,
              }}
            >
              TT
            </span>
            TailorTech
          </div>
          <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)", lineHeight: 1.7, maxWidth: 260 }}>
            Empowering the next generation of developers through practical training.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: 1.5, color: "#7BAE8E", marginBottom: ".6rem" }}>Programs</h4>
          <FootLink onClick={() => nav("courses")}>Java Full Stack</FootLink>
          <FootLink onClick={() => nav("courses")}>Data Engineering</FootLink>
          <FootLink onClick={() => nav("courses")}>Frontend & Backend</FootLink>
          <FootLink onClick={() => nav("courses")}>Mock Interviews</FootLink>
        </div>
        <div>
          <h4 style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: 1.5, color: "#7BAE8E", marginBottom: ".6rem" }}>Company</h4>
          <FootLink>About</FootLink>
          <FootLink>Team</FootLink>
          <FootLink>Blog</FootLink>
          <FootLink>Careers</FootLink>
        </div>
        <div>
          <h4 style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: 1.5, color: "#7BAE8E", marginBottom: ".6rem" }}>Support</h4>
          <FootLink>Help Center</FootLink>
          <FootLink>Contact</FootLink>
          <FootLink>Privacy</FootLink>
          <FootLink>Terms</FootLink>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
          paddingTop: ".9rem",
          borderTop: "1px solid rgba(255,255,255,.06)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: ".5rem",
          fontSize: ".75rem",
          color: "rgba(255,255,255,.22)",
        }}
      >
        <span>© 2026 TailorTech. All rights reserved.</span>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexWrap: "wrap" }}>
          <span>Follow us:</span>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.2)",
                color: "rgba(255,255,255,.75)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: ".62rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
