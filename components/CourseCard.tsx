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
    <div className="flex h-full flex-col overflow-hidden rounded-[15px] border border-black/[0.05] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]">
      {course.image && !imageError && (
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#E8F3EC] to-[#D4EEF8]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
            onError={() => setImageError(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      {course.image && imageError && (
        <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-[#E8F3EC] to-[#D4EEF8]">
          <div className="text-center">
            <svg
              className="mx-auto mb-2 h-16 w-16 text-[#6B7C8F]/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <p className="text-sm text-[#6B7C8F]">{course.title}</p>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-snug text-[#1E2A3A]" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
            {course.title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
              course.mode === "Live"
                ? "bg-[#E8F3EC] text-[#3d7a54]"
                : "bg-[#D4EEF8] text-[#3a8aaa]"
            }`}
          >
            {course.mode}
          </span>
        </div>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#6B7C8F]">
          {course.description}
        </p>
        <div className="mb-4 flex items-center gap-2 text-sm text-[#6B7C8F]">
          <svg className="h-4 w-4 shrink-0 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{course.duration}</span>
        </div>
        <Link
          href={
            buttonText === "Apply Now" || buttonText === "Enroll Now"
              ? `/apply?course=${encodeURIComponent(course.title)}`
              : `/programs#${course.id}`
          }
          className="mt-auto block w-full rounded-full bg-[#7BAE8E] py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#5A8A6C]"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
