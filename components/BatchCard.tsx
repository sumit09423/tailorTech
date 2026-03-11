"use client";

import { Batch, COURSES } from "@/lib/constants";
import { generateWhatsAppURL } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface BatchCardProps {
  batch: Batch;
}

export default function BatchCard({ batch }: BatchCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    
    // Add ordinal suffix
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    
    return `${day}${getOrdinalSuffix(day)} ${month}${year !== new Date().getFullYear() ? ` ${year}` : ""}`;
  };

  const handleBookNow = () => {
    const message = `Hello TailorTech, I'm interested in booking a seat for ${batch.courseName} batch starting on ${formatDate(batch.startDate)}.`;
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  // Get course duration from COURSES
  const getCourseDuration = () => {
    const courseMap: Record<string, string> = {
      "Data Engineering": "120 hours",
      "Java Full Stack Development": "175 hours",
    };
    return courseMap[batch.courseName] || "";
  };

  return (
    <div className="bg-[#1f1f3a] rounded-lg shadow-md p-6 border border-gray-700 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-white mb-4">{batch.courseName}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <svg className="w-5 h-5 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Next Batch Starts:</span>
          <span>{formatDate(batch.startDate)}</span>
        </div>
        {getCourseDuration() && (
          <div className="flex items-center gap-2 text-gray-300">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Duration:</span>
            <span>{getCourseDuration()}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-gray-300">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Mode:</span>
          <span>Live Online</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="font-medium">Seats Available:</span>
          <span className={`font-semibold ${batch.seatsAvailable < 5 ? "text-red-400" : "text-green-400"}`}>
            {batch.seatsAvailable}
          </span>
        </div>
      </div>
      <button
        onClick={handleBookNow}
        className="w-full px-4 py-2 bg-[#e91e63] text-white rounded-lg font-medium hover:bg-[#c2185b] transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
}
