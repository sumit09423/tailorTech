import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/lib/constants";
import MockInterviewButton from "@/components/MockInterviewButton";

export const metadata = {
  title: "Our Programs - TailorTech",
  description: "Explore our comprehensive coding courses including Java Frontend, Backend, Full Stack Development, and Data Engineering programs.",
};

export default function ProgramsPage() {
  const livePrograms = COURSES.filter((c) => c.category === "Live Program");
  const recordedCourses = COURSES.filter((c) => c.category === "Recorded Course");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#00bfff]/10 to-[#e91e63]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Programs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the learning path that fits your schedule and career goals
              </p>
            </div>
          </div>
        </section>

        {/* Live Programs */}
        <section id="live-programs" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Live Programs
              </h2>
              <p className="text-lg text-gray-600">
                Interactive live sessions with small batch sizes for personalized learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {livePrograms.map((course) => (
                <CourseCard key={course.id} course={course} buttonText="Apply Now" />
              ))}
            </div>
          </div>
        </section>

        {/* Recorded Courses */}
        <section id="recorded-courses" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recorded Courses
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Self-paced recorded programs - learn at your own speed
              </p>
              <p className="text-sm text-gray-500 italic">
                Perfect for those who prefer flexible learning schedules
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recordedCourses.map((course) => (
                <CourseCard key={course.id} course={course} buttonText="Enroll Now" />
              ))}
            </div>
          </div>
        </section>

        {/* Mock Interviews */}
        <section id="mock-interviews" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-[#00bfff] to-[#e91e63] rounded-lg p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mock Interviews
                </h2>
                <p className="text-lg mb-6 text-white/90">
                  Prepare for your job interviews with personalized mock interview sessions.
                  Get feedback from industry experts and boost your confidence.
                </p>
                <p className="text-base mb-8 text-white/80">
                  Our mock interviews simulate real interview scenarios and help you identify
                  areas for improvement before the actual interview.
                </p>
                <MockInterviewButton />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
