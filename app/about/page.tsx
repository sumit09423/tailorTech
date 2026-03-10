import Navigation from "@/components/Navigation";
import { ABOUT_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "About Us - TailorTech",
  description: "Learn about TailorTech's mission, philosophy, and commitment to practical coding education.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#00bfff]/10 to-[#e91e63]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About TailorTech
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering developers through practical, hands-on learning
              </p>
            </div>
          </div>
        </section>

        {/* Why TailorTech Started */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.whyStarted.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ABOUT_CONTENT.whyStarted.content}
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.philosophy.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ABOUT_CONTENT.philosophy.content}
              </p>
            </div>
          </div>
        </section>

        {/* Focus on Practical Learning */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.practicalLearning.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {ABOUT_CONTENT.practicalLearning.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Real Projects</h3>
                  <p className="text-gray-600">
                    Build portfolio-worthy projects that demonstrate your skills to employers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Tools</h3>
                  <p className="text-gray-600">
                    Learn the tools and technologies actually used in professional environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Small Batch Learning Approach */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.smallBatchApproach.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {ABOUT_CONTENT.smallBatchApproach.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">10-15 Students</h3>
                  <p className="text-gray-600">Small batch sizes ensure individual attention</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Interactive Sessions</h3>
                  <p className="text-gray-600">Ask questions and get immediate feedback</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Support</h3>
                  <p className="text-gray-600">Mentorship tailored to your learning pace</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
