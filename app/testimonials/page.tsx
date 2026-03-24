import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata = {
  title: "Student Testimonials - TailorTech",
  description: "Read what our students have to say about their learning experience at TailorTech.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2C3E50]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-[#FFF8F0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A3A] mb-4">
                Student Testimonials
              </h1>
              <p className="text-xl text-[#6B7C8F] max-w-3xl mx-auto mb-4">
                At TailorTech, our focus is on helping learners build practical skills and confidence in real-world software development. The experiences and feedback from our learners reflect the learning environment and approach we strive to create.
              </p>
              <p className="text-lg text-[#6B7C8F] max-w-3xl mx-auto">
                Here are some thoughts shared by learners who have been part of TailorTech programs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-[#FFFDFB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-6 text-center">
                Student Feedback
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Learning Experience */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A3A] mb-6 text-center">
                Learning Experience
              </h2>
              <p className="text-lg text-[#2C3E50] mb-6 text-center">
                Learners at TailorTech benefit from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Practical and project-based learning",
                  "Small batch sizes for better interaction",
                  "Structured learning roadmaps",
                  "Guidance and interview preparation support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-[#6B7C8F]">
                    <span className="mt-1 font-bold text-[#7BAE8E]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Your Experience */}
            <div className="mx-auto max-w-3xl rounded-2xl border border-black/[0.05] bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E2A3A] mb-4">
                Share Your Experience
              </h2>
              <p className="text-[#6B7C8F] mb-6">
                If you have been part of a TailorTech program, we would love to hear about your learning experience.
              </p>
              <p className="text-[#6B7C8F]">
                Your feedback helps us continue improving and supporting future learners.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
