import Navigation from "@/components/Navigation";
import ApplyForm from "@/components/ApplyForm";
import { Suspense } from "react";

export const metadata = {
  title: "Apply Now - TailorTech",
  description: "Apply for enrollment in TailorTech coding courses. Start your journey to becoming a professional developer.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Apply Now
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take the first step towards your coding career. Fill out the form below and we'll get in touch with you.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1f1f3a] rounded-lg shadow-lg p-8 md:p-12 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Enrollment Application
                </h2>
                <p className="text-gray-300 mb-8">
                  Please fill out the form below. After submission, you'll be redirected to WhatsApp
                  where our team will assist you with the enrollment process.
                </p>
                <Suspense fallback={<div className="text-center py-8 text-gray-300">Loading form...</div>}>
                  <ApplyForm />
                </Suspense>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e91e63]">✓</span>
                    <span>You'll be redirected to WhatsApp with your application details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e91e63]">✓</span>
                    <span>Our team will review your application and get back to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e91e63]">✓</span>
                    <span>We'll discuss course details, schedule, and answer any questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e91e63]">✓</span>
                    <span>Complete enrollment and start your coding journey!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
