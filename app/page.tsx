import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import BatchCard from "@/components/BatchCard";
import { COURSES, TESTIMONIALS, UPCOMING_BATCHES, WHY_TAILORTECH } from "@/lib/constants";

export default function Home() {
  const liveCourses = COURSES.filter((c) => c.category === "Live Program");
  const featuredTestimonials = TESTIMONIALS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2C3E50]">
      <Navigation />
      <main className="pt-20">
        <Hero />

        <section id="what-we-offer" className="bg-[#FFF8F0] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-normal text-[#1E2A3A] md:text-4xl">
                What We Offer
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7C8F]">
                At TailorTech, we offer carefully designed programs focused on building strong
                fundamentals, practical skills, and real-world project experience in modern software
                technologies.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {liveCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        <section id="why-tailortech" className="bg-[#FFFDFB] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-normal text-[#1E2A3A] md:text-4xl">
                Why TailorTech
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#6B7C8F]">
                We&apos;re committed to your success with a learning approach that works
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {WHY_TAILORTECH.map((feature, index) => (
                <div key={index} className="rounded-2xl border border-black/[0.05] bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 text-5xl">{feature.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1E2A3A]">{feature.title}</h3>
                  <p className="text-[#6B7C8F]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#FFF8F0] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-normal text-[#1E2A3A] md:text-4xl">
                Student Feedback
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#6B7C8F]">
                Hear from our students who have transformed their careers
              </p>
            </div>
            <div className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block rounded-full bg-[#7BAE8E] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5A8A6C]"
              >
                View All Testimonials
              </Link>
            </div>
          </div>
        </section>

        <section id="upcoming-batches" className="bg-[#FFFDFB] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-normal text-[#1E2A3A] md:text-4xl">
                Upcoming Batches
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#6B7C8F]">
                Start your learning journey with TailorTech. Explore the upcoming live programs and
                secure your seat in the next batch.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {UPCOMING_BATCHES.map((batch) => (
                <BatchCard key={batch.id} batch={batch} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #7BAE8E, #5A8A6C)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-normal text-white md:text-4xl">
                Start Building Skills That Are Truly Tailor-Made.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-white/90">
                Join TailorTech and learn through practical projects, small live batches, and focused
                mentorship designed to help you grow in the software industry.
              </p>
              <Link
                href="/apply"
                className="inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-[#5A8A6C] shadow-md transition hover:bg-white/95"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
