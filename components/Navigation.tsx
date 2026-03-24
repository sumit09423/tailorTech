"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] border-b border-black/[0.04] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_3px_18px_rgba(0,0,0,0.05)]" : ""
        }`}
        style={{
          background: "rgba(255, 253, 251, 0.92)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto flex h-[3.25rem] md:h-[4.25rem] max-w-[1400px] items-center justify-between px-[5%] md:px-[4%]">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1E2A3A]"
            style={{ fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif" }}
          >
            <span
              className="flex h-7 w-7 md:h-[34px] md:w-[34px] shrink-0 items-center justify-center rounded-lg text-[0.6rem] md:text-[0.75rem] font-extrabold text-white"
              style={{
                background: "linear-gradient(135deg, #7BAE8E, #5A8A6C)",
              }}
            >
              TT
            </span>
            <span className="text-lg md:text-xl leading-none">TailorTech</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors pb-0.5 border-b-2 ${
                    active
                      ? "text-[#5A8A6C] font-bold border-[#7BAE8E]"
                      : "text-[#6B7C8F] border-transparent hover:text-[#5A8A6C]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1 p-1 text-[#1E2A3A]"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span className="block h-0.5 w-5 rounded-sm bg-current" />
            <span className="block h-0.5 w-5 rounded-sm bg-current" />
            <span className="block h-0.5 w-3.5 rounded-sm bg-current self-end" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[998] bg-black/40 transition-opacity md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[999] flex h-full w-[270px] max-w-[85vw] flex-col gap-1 overflow-y-auto bg-white py-16 px-7 shadow-[-8px_0_30px_rgba(0,0,0,0.08)] transition-[transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute right-4 top-4 p-2 text-xl text-[#1E2A3A]"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border-b border-black/[0.05] py-3 text-base font-semibold text-[#1E2A3A]"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
