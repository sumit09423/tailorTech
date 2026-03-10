import Navigation from "@/components/Navigation";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata = {
  title: "Student Testimonials - TailorTech",
  description: "Read what our students have to say about their learning experience at TailorTech.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#00bfff]/10 to-[#e91e63]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Student Testimonials
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students who have transformed their careers with TailorTech
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
