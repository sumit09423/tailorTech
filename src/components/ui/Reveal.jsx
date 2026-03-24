import { useState, useEffect, useRef } from "react";

export function Reveal({ children, delay = 0, style = {} }) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <div
      ref={r}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(22px)",
        transition: `all .55s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
