import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#e91e63]/10 to-[#00bfff]/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Master Coding Skills with{" "}
            <span className="bg-gradient-to-r from-[#00bfff] to-[#e91e63] bg-clip-text text-transparent">
              TailorTech
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Transform your career with hands-on, practical learning. 
            Join small live batches and get personalized guidance from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="px-8 py-4 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </Link>
            <Link
              href="/apply"
              className="px-8 py-4 bg-[#00bfff] text-white rounded-lg font-semibold hover:bg-[#0099cc] transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
