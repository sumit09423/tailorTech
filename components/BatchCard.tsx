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
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBookNow = () => {
    const message = `Hello TailorTech, I'm interested in booking a seat for ${batch.courseName} batch starting on ${formatDate(batch.startDate)}.`;
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{batch.courseName}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-5 h-5 text-[#00bfff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Start:</span>
          <span>{formatDate(batch.startDate)}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-5 h-5 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">End:</span>
          <span>{formatDate(batch.endDate)}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="font-medium">Seats Available:</span>
          <span className={`font-semibold ${batch.seatsAvailable < 5 ? "text-red-600" : "text-green-600"}`}>
            {batch.seatsAvailable}
          </span>
        </div>
      </div>
      <button
        onClick={handleBookNow}
        className="w-full px-4 py-2 bg-[#00bfff] text-white rounded-lg font-medium hover:bg-[#0099cc] transition-colors"
      >
        Book Now
      </button>
    </div>
  );
}
