"use client";

import { Batch } from "@/lib/constants";
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

    const getOrdinalSuffix = (d: number) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)} ${month}${year !== new Date().getFullYear() ? ` ${year}` : ""}`;
  };

  const handleBookNow = () => {
    const message = `Hello TailorTech, I'm interested in booking a seat for ${batch.courseName} batch starting on ${formatDate(batch.startDate)}.`;
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  const getCourseDuration = () => {
    const courseMap: Record<string, string> = {
      "Data Engineering": "120 hours",
      "Java Full Stack Development": "175 hours",
    };
    return courseMap[batch.courseName] || "";
  };

  return (
    <div className="rounded-[14px] border border-black/[0.05] bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-[#1E2A3A]" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
        {batch.courseName}
      </h3>
      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-[#6B7C8F]">
          <svg className="h-5 w-5 shrink-0 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium text-[#1E2A3A]">Next batch:</span>
          <span>{formatDate(batch.startDate)}</span>
        </div>
        {getCourseDuration() && (
          <div className="flex items-center gap-2 text-sm text-[#6B7C8F]">
            <svg className="h-5 w-5 shrink-0 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium text-[#1E2A3A]">Duration:</span>
            <span>{getCourseDuration()}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-[#6B7C8F]">
          <svg className="h-5 w-5 shrink-0 text-[#6B7C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium text-[#1E2A3A]">Mode:</span>
          <span>Live Online</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7C8F]">
          <svg className="h-5 w-5 shrink-0 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="font-medium text-[#1E2A3A]">Seats:</span>
          <span
            className={`font-semibold ${batch.seatsAvailable < 5 ? "text-[#E8845C]" : "text-[#5A8A6C]"}`}
          >
            {batch.seatsAvailable}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleBookNow}
        className="w-full rounded-full bg-[#7BAE8E] py-2.5 text-sm font-bold text-white transition hover:bg-[#5A8A6C]"
      >
        Apply Now
      </button>
    </div>
  );
}
