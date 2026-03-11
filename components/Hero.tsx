import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/10 via-[#e91e63]/5 to-[#e91e63]/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Build Real Tech Skills with{" "}
              <span className="text-[#e91e63]">
                TailorTech
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed">
              Where Skills Are Tailor-Made.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/programs"
                className="px-6 py-3 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Programs
              </Link>
              <Link
                href="/apply"
                className="px-6 py-3 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px]">
            <Image
              src="/hero.png"
              alt="TailorTech - Coding Education and Technology"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
