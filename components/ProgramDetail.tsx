"use client";

import { generateWhatsAppURL } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface ProgramDetailProps {
  title: string;
  duration: string;
  mode: string;
  description: string;
  longDescription: string;
  whatCovers: string[];
  whatYouGet: string[];
  fee?: {
    regular?: string;
    earlyBird?: string;
    program?: string;
  };
  programId: string;
}

export default function ProgramDetail({
  title,
  duration,
  mode,
  description,
  longDescription,
  whatCovers,
  whatYouGet,
  fee,
  programId,
}: ProgramDetailProps) {
  const handleApply = () => {
    const message = `Hello TailorTech, I'm interested in applying for ${title}.`;
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#1f1f3a] rounded-xl shadow-xl border border-gray-700 overflow-hidden mb-8 hover:shadow-2xl transition-shadow duration-300">
      {/* Header Cards Row */}
      <div className="bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5 border-b border-gray-700 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Title & Live Badge */}
          <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 md:p-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-white line-clamp-2">{title}</h2>
            </div>
            {mode === "Live Online" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#e91e63] text-white rounded-full text-xs font-semibold w-fit">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Live
              </span>
            )}
          </div>

          {/* Card 2: Duration */}
          <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 md:p-5 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#e91e63]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Duration</p>
              <p className="text-lg font-bold text-white">{duration}</p>
            </div>
          </div>

          {/* Card 3: Mode */}
          <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 md:p-5 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#e91e63]/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Mode</p>
              <p className="text-lg font-bold text-white">{mode}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">

        <p className="text-lg text-gray-200 mb-4 leading-relaxed">{description}</p>
        <p className="text-gray-300 mb-8 leading-relaxed">{longDescription}</p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What the Program Covers
          </h3>
          <ul className="space-y-3">
            {whatCovers.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-[#e91e63] mt-1.5 font-bold">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What You Get
          </h3>
          <ul className="space-y-3">
            {whatYouGet.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-[#e91e63] mt-1.5 font-bold">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Program Details
          </h3>
          <div className="bg-[#1a1a2e] p-6 rounded-lg border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-gray-400 text-sm">Duration</span>
                  <p className="text-white font-semibold">{duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-gray-400 text-sm">Mode</span>
                  <p className="text-white font-semibold">{mode}</p>
                </div>
              </div>
              {mode === "Live Online" && (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <span className="text-gray-400 text-sm">Batch Size</span>
                    <p className="text-white font-semibold">Small batches for focused learning</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {fee && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Course Fee
            </h3>
            <div className="bg-gradient-to-r from-[#e91e63]/20 to-[#e91e63]/10 p-6 rounded-lg border border-[#e91e63]/20">
              {fee.regular && fee.earlyBird ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Regular Fee:</span>
                    <span className="text-xl font-bold text-white">{fee.regular}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#e91e63]/20">
                    <span className="text-gray-300">Early Bird Fee:</span>
                    <span className="text-xl font-bold text-[#e91e63]">{fee.earlyBird}</span>
                  </div>
                </div>
              ) : fee.program ? (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Program Fee:</span>
                  <span className="text-2xl font-bold text-white">{fee.program}</span>
                </div>
              ) : null}
              {mode === "Live Online" && (
                <p className="text-sm text-gray-300 mt-4 pt-4 border-t border-[#e91e63]/20 italic">
                  ⚠️ Limited seats available for each batch.
                </p>
              )}
            </div>
          </div>
        )}

        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Start your journey toward becoming a {title.includes("Full Stack") ? "Java Full Stack Developer" : title.includes("Frontend") ? "Frontend Developer" : title.includes("Backend") ? "Backend Developer" : title.includes("Data") ? "Data Engineer" : "Developer"} with TailorTech.
          </p>
          <button
            onClick={handleApply}
            className="px-10 py-4 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
