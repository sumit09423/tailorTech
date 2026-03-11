"use client";

import Link from "next/link";
import Image from "next/image";
import { Course } from "@/lib/constants";
import { useState } from "react";

interface CourseCardProps {
  course: Course;
  buttonText?: string;
}

export default function CourseCard({ course, buttonText = "View Details" }: CourseCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-[#1f1f3a] rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700 overflow-hidden">
      {/* Course Image */}
      {course.image && !imageError && (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#e91e63]/20 to-[#e91e63]/10">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      {course.image && imageError && (
        <div className="w-full h-48 bg-gradient-to-br from-[#e91e63]/20 to-[#e91e63]/10 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-sm text-gray-400">{course.title}</p>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            course.mode === "Live" 
              ? "bg-[#e91e63]/20 text-[#e91e63]" 
              : "bg-gray-700 text-gray-300"
          }`}>
            {course.mode}
          </span>
        </div>
        <p className="text-gray-300 mb-4 line-clamp-3">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
        </div>
        <Link
          href={buttonText === "Apply Now" || buttonText === "Enroll Now" 
            ? `/apply?course=${encodeURIComponent(course.title)}`
            : `/programs#${course.id}`}
          className="block w-full text-center px-4 py-2 bg-[#e91e63] text-white rounded-lg font-medium hover:bg-[#c2185b] transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
