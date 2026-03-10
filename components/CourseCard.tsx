import Link from "next/link";
import { Course } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
  buttonText?: string;
}

export default function CourseCard({ course, buttonText = "View Details" }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            course.mode === "Live" 
              ? "bg-[#00bfff]/10 text-[#00bfff]" 
              : "bg-gray-100 text-gray-700"
          }`}>
            {course.mode}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
        </div>
        <Link
          href={`/programs#${course.id}`}
          className="block w-full text-center px-4 py-2 bg-[#e91e63] text-white rounded-lg font-medium hover:bg-[#c2185b] transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
