import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ABOUT_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "About Us - TailorTech",
  description: "Learn about TailorTech's mission, philosophy, and commitment to practical coding education.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2C3E50]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-[#FFF8F0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A3A] mb-4">
                About TailorTech
              </h1>
              <p className="text-xl text-[#6B7C8F] max-w-3xl mx-auto">
                Empowering developers through practical, hands-on learning
              </p>
            </div>
          </div>
        </section>

        {/* About TailorTech Intro */}
        <section className="py-16 md:py-24 bg-[#FFFDFB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#2C3E50] leading-relaxed">
                {ABOUT_CONTENT.intro.content}
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="bg-[#FFF8F0] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-6">
                {ABOUT_CONTENT.philosophy.title}
              </h2>
              <p className="text-lg text-[#2C3E50] leading-relaxed">
                {ABOUT_CONTENT.philosophy.content}
              </p>
            </div>
          </div>
        </section>

        {/* Our Focus */}
        <section className="py-16 md:py-24 bg-[#FFFDFB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-6">
                {ABOUT_CONTENT.focus.title}
              </h2>
              <p className="text-lg text-[#2C3E50] mb-8">
                TailorTech focuses on creating learning experiences that are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ABOUT_CONTENT.focus.points.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-black/[0.05] bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-[#1E2A3A] mb-3">{point.title}</h3>
                    <p className="text-[#6B7C8F]">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Learning Approach */}
        <section className="bg-[#FFFDFB] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-6">
                {ABOUT_CONTENT.learningApproach.title}
              </h2>
              <p className="text-lg text-[#2C3E50] leading-relaxed">
                {ABOUT_CONTENT.learningApproach.content}
              </p>
              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-[#1E2A3A]">
                  TailorTech
                </p>
                <p className="text-lg text-[#6B7C8F] mt-2">
                  Where Skills Are Tailor-Made.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
