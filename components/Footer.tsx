import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-gray-800 overflow-x-hidden w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 min-w-0">
          {/* TailorTech Company Information */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/logo.png"
                alt="TailorTech Logo"
                width={160}
                height={160}
                className="rounded transition-opacity group-hover:opacity-90"
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              TailorTech offers transformative programs in software engineering, guiding students and professionals towards mastering modern tech skills.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/tailortechh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/tailortech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tailortech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs#java-frontend" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Java Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/programs#java-backend" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Java Backend
                </Link>
              </li>
              <li>
                <Link href="/programs#java-fullstack" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Java Full Stack
                </Link>
              </li>
              <li>
                <Link href="/programs#data-engineering" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Terms</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-[#e91e63] transition-colors text-sm">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <h3 className="text-white font-bold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news, tips, and courses.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full min-w-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 w-full px-4 py-2 bg-[#1f1f3a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e91e63] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 bg-[#151525]">
        <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 TailorTech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                Terms
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/help" className="text-gray-400 hover:text-[#e91e63] transition-colors">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
