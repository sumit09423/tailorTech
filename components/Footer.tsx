import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-[#1E2A3A] text-white">
      <div className="mx-auto max-w-[1250px] px-[5%] py-10 md:px-[6%] md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link
              href="/"
              className="mb-3 flex cursor-pointer items-center gap-2 text-xl text-white"
              style={{ fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif" }}
            >
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md text-[0.65rem] font-extrabold text-white bg-[#7BAE8E]">
                TT
              </span>
              TailorTech
            </Link>
            <p className="max-w-[260px] text-sm leading-relaxed text-white/35">
              Empowering the next generation of developers through practical training.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/tailortechh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/15"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/tailortech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/15"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tailortech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/15"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7BAE8E]">
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs#java-frontend"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Java Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#java-backend"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Java Backend
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#java-fullstack"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Java Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#data-engineering"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7BAE8E]">
              Company
            </h3>
            <ul className="mb-6 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/40 transition hover:text-white/70">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/40 transition hover:text-white/70">
                  Contact
                </Link>
              </li>
            </ul>
            <h4 className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7BAE8E]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/40 transition hover:text-white/70"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-white/40 transition hover:text-white/70">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7BAE8E]">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-white/40">
              Stay updated with our latest news, tips, and courses.
            </p>
            <form className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7BAE8E] focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#7BAE8E] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1250px] flex-wrap items-center justify-between gap-2 px-[5%] py-4 text-xs text-white/25 md:px-[6%]">
          <span>© {new Date().getFullYear()} TailorTech</span>
          <span>Made with ❤️ in Jodhpur</span>
        </div>
      </div>
    </footer>
  );
}
