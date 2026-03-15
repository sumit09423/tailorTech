import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import BatchCard from "@/components/BatchCard";
import Link from "next/link";
import { COURSES, TESTIMONIALS, UPCOMING_BATCHES, WHY_TAILORTECH } from "@/lib/constants";

export default function Home() {
  const liveCourses = COURSES.filter((c) => c.category === "Live Program");
  const featuredTestimonials = TESTIMONIALS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* What We Offer Section */}
        <section id="what-we-offer" className="py-16 md:py-24 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                At TailorTech, we offer carefully designed programs focused on building strong fundamentals, practical skills, and real-world project experience in modern software technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {liveCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Why TailorTech Section */}
        <section id="why-tailortech" className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why TailorTech
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're committed to your success with a learning approach that works
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {WHY_TAILORTECH.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Feedback Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Student Feedback
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Hear from our students who have transformed their careers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block px-6 py-3 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors"
              >
                View All Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Batches Section */}
        <section id="upcoming-batches" className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming Batches
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Start your learning journey with TailorTech. Explore the upcoming live programs and secure your seat in the next batch.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {UPCOMING_BATCHES.map((batch) => (
                <BatchCard key={batch.id} batch={batch} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-[#e91e63] to-[#c2185b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Building Skills That Are Truly Tailor-Made.
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join TailorTech and learn through practical projects, small live batches, and focused mentorship designed to help you grow in the software industry.
              </p>
              <Link
                href="/apply"
                className="inline-block px-8 py-4 bg-white text-[#e91e63] rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

