"use client";

import { useState, useEffect } from "react";
import { generateWhatsAppURL } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface ProgramCardProps {
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
  image?: string;
}

export default function ProgramCard({
  title,
  duration,
  mode,
  description,
  longDescription,
  whatCovers,
  whatYouGet,
  fee,
  programId,
  image,
}: ProgramCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload image to check if it loads successfully
  useEffect(() => {
    if (image) {
      const img = new Image();
      img.onload = () => setImageError(false);
      img.onerror = () => setImageError(true);
      img.src = image;
    }
  }, [image]);

  const handleApply = () => {
    const message = `Hello TailorTech, I'm interested in applying for ${title}.`;
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  // Encode image URL to handle special characters like parentheses
  const encodedImageUrl = image ? image.replace(/\(/g, '%28').replace(/\)/g, '%29') : '';

  return (
    <>
      {/* Compact Card */}
      <div className="bg-[#1f1f3a] rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700 overflow-hidden h-full flex flex-col">
        {/* Course Image */}
        {image && !imageError && (
          <div 
            className="relative w-full h-56 bg-gradient-to-br from-[#e91e63]/20 to-[#e91e63]/10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${encodedImageUrl}")`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}
        {(!image || imageError) && (
          <div className="w-full h-48 bg-gradient-to-br from-[#e91e63]/20 to-[#e91e63]/10 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-sm text-gray-400">{title}</p>
            </div>
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          {/* Header Cards Row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* Title Card */}
            <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-2 col-span-3">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 flex-1">{title}</h3>
                {mode === "Live Online" && (
                  <span className="px-2 py-0.5 bg-[#e91e63] text-white rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    Live
                  </span>
                )}
              </div>
            </div>

            {/* Duration Card */}
            <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#e91e63] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 truncate">Duration</p>
                <p className="text-xs font-semibold text-white truncate">{duration}</p>
              </div>
            </div>

            {/* Mode Card */}
            <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-2 flex items-center gap-2 col-span-2">
              <svg className="w-4 h-4 text-[#e91e63] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 truncate">Mode</p>
                <p className="text-xs font-semibold text-white truncate">{mode}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 line-clamp-3 text-sm flex-1">{description}</p>

          {fee && (
            <div className="mb-4">
              {fee.regular && fee.earlyBird ? (
                <div className="bg-gradient-to-r from-[#e91e63]/20 to-[#e91e63]/10 p-3 rounded-lg border border-[#e91e63]/20">
                  <p className="text-xs text-gray-300 mb-1">Regular: <span className="font-semibold text-white">{fee.regular}</span></p>
                  <p className="text-xs text-gray-300">Early Bird: <span className="font-semibold text-[#e91e63]">{fee.earlyBird}</span></p>
                </div>
              ) : fee.program ? (
                <div className="bg-gradient-to-r from-[#e91e63]/20 to-[#e91e63]/10 p-3 rounded-lg border border-[#e91e63]/20">
                  <p className="text-sm font-bold text-white">{fee.program}</p>
                </div>
              ) : null}
            </div>
          )}

          <div className="flex flex-col gap-2 mt-auto">
            <button
              onClick={() => setShowDetails(true)}
              className="w-full px-4 py-2 bg-[#e91e63] text-white rounded-lg font-medium hover:bg-[#c2185b] transition-colors"
            >
              Course Details
            </button>
            <button
              onClick={handleApply}
              className="w-full px-4 py-2 bg-transparent border border-[#e91e63] text-[#e91e63] rounded-lg font-medium hover:bg-[#e91e63]/10 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/70" onClick={() => setShowDetails(false)}></div>
          <div className="flex items-center justify-center min-h-screen px-4 py-8 relative z-50">
            <div
              className="bg-[#1f1f3a] rounded-xl shadow-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#1f1f3a] border-b border-gray-700 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* Header Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      {mode === "Live Online" && (
                        <span className="px-3 py-1 bg-[#e91e63] text-white rounded-full text-xs font-semibold">
                          Live
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#e91e63]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Duration</p>
                      <p className="text-lg font-bold text-white">{duration}</p>
                    </div>
                  </div>

                  <div className="bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#e91e63]/20 rounded-lg flex items-center justify-center flex-shrink-0">
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
                  <button
                    onClick={handleApply}
                    className="px-10 py-4 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
