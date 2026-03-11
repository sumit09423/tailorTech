import Navigation from "@/components/Navigation";
import { ABOUT_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "About Us - TailorTech",
  description: "Learn about TailorTech's mission, philosophy, and commitment to practical coding education.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About TailorTech
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Empowering developers through practical, hands-on learning
              </p>
            </div>
          </div>
        </section>

        {/* About TailorTech Intro */}
        <section className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-200 leading-relaxed">
                {ABOUT_CONTENT.intro.content}
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 md:py-24 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {ABOUT_CONTENT.philosophy.title}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {ABOUT_CONTENT.philosophy.content}
              </p>
            </div>
          </div>
        </section>

        {/* Our Focus */}
        <section className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {ABOUT_CONTENT.focus.title}
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                TailorTech focuses on creating learning experiences that are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ABOUT_CONTENT.focus.points.map((point, index) => (
                  <div key={index} className="bg-[#1f1f3a] p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Learning Approach */}
        <section className="py-16 md:py-24 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {ABOUT_CONTENT.learningApproach.title}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {ABOUT_CONTENT.learningApproach.content}
              </p>
              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-white">
                  TailorTech
                </p>
                <p className="text-lg text-gray-300 mt-2">
                  Where Skills Are Tailor-Made.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
