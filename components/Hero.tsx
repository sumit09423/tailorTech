import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F0] py-10 md:py-12 lg:py-16">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(123,174,142,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="text-center lg:text-left">
            <h1 className="mb-3 text-3xl font-normal leading-tight text-[#1E2A3A] md:text-4xl lg:text-5xl">
              Build Real Tech Skills with{" "}
              <span className="text-[#7BAE8E]">TailorTech</span>
            </h1>
            <p className="mb-5 text-base leading-relaxed text-[#6B7C8F] md:text-lg">
              Where Skills Are Tailor-Made.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/programs"
                className="rounded-full bg-[#7BAE8E] px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#5A8A6C]"
              >
                Explore Programs
              </Link>
              <Link
                href="/apply"
                className="rounded-full border-2 border-[#1E2A3A]/10 px-6 py-3 text-center text-sm font-semibold text-[#1E2A3A] transition hover:border-[#7BAE8E]/40"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[250px] w-full max-w-lg md:h-[300px] lg:h-[350px]">
            <Image
              src="/hero.png"
              alt="TailorTech — Coding Education and Technology"
              fill
              className="object-contain drop-shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
