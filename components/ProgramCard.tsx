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
      <div className="flex h-full flex-col overflow-hidden rounded-[15px] border border-black/[0.05] bg-white shadow-sm transition-shadow hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]">
        {/* Course Image */}
        {image && !imageError && (
          <div 
            className="relative w-full h-56 bg-gradient-to-br from-[#7BAE8E]/20 to-[#7BAE8E]/10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${encodedImageUrl}")`,
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}
        {(!image || imageError) && (
          <div className="w-full h-48 bg-gradient-to-br from-[#7BAE8E]/20 to-[#7BAE8E]/10 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[#6B7C8F] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-sm text-[#6B7C8F]">{title}</p>
            </div>
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          {/* Header Cards Row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* Title Card */}
            <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-2 col-span-3">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm md:text-base font-bold text-[#1E2A3A] line-clamp-2 flex-1">{title}</h3>
                {mode === "Live Online" && (
                  <span className="px-2 py-0.5 bg-[#7BAE8E] text-white rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    Live
                  </span>
                )}
              </div>
            </div>

            {/* Duration Card */}
            <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#7BAE8E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-[#6B7C8F] truncate">Duration</p>
                <p className="text-xs font-semibold text-[#1E2A3A] truncate">{duration}</p>
              </div>
            </div>

            {/* Mode Card */}
            <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-2 flex items-center gap-2 col-span-2">
              <svg className="w-4 h-4 text-[#7BAE8E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-[#6B7C8F] truncate">Mode</p>
                <p className="text-xs font-semibold text-[#1E2A3A] truncate">{mode}</p>
              </div>
            </div>
          </div>

          <p className="text-[#6B7C8F] mb-4 line-clamp-3 text-sm flex-1">{description}</p>

          {fee && (
            <div className="mb-4">
              {fee.regular && fee.earlyBird ? (
                <div className="bg-gradient-to-r from-[#7BAE8E]/20 to-[#7BAE8E]/10 p-3 rounded-lg border border-[#7BAE8E]/20">
                  <p className="text-xs text-[#6B7C8F] mb-1">Regular: <span className="font-semibold text-[#1E2A3A]">{fee.regular}</span></p>
                  <p className="text-xs text-[#6B7C8F]">Early Bird: <span className="font-semibold text-[#7BAE8E]">{fee.earlyBird}</span></p>
                </div>
              ) : fee.program ? (
                <div className="bg-gradient-to-r from-[#7BAE8E]/20 to-[#7BAE8E]/10 p-3 rounded-lg border border-[#7BAE8E]/20">
                  <p className="text-sm font-bold text-[#1E2A3A]">{fee.program}</p>
                </div>
              ) : null}
            </div>
          )}

          <div className="flex flex-col gap-2 mt-auto">
            <button
              onClick={() => setShowDetails(true)}
              className="w-full px-4 py-2 bg-[#7BAE8E] text-white rounded-full font-bold hover:bg-[#5A8A6C] transition-colors"
            >
              Course Details
            </button>
            <button
              onClick={handleApply}
              className="w-full px-4 py-2 bg-transparent border-2 border-[#1E2A3A]/10 text-[#1E2A3A] rounded-full font-semibold hover:border-[#7BAE8E]/40 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowDetails(false)}></div>
          <div className="flex items-center justify-center min-h-screen px-4 py-8 relative z-50">
            <div
              className="rounded-xl border border-black/[0.08] bg-white shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/[0.08] bg-white p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A3A]">{title}</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-[#6B7C8F] hover:text-[#1E2A3A] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* Header Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#1E2A3A]">{title}</h3>
                      {mode === "Live Online" && (
                        <span className="px-3 py-1 bg-[#7BAE8E] text-white rounded-full text-xs font-semibold">
                          Live
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7BAE8E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7C8F] mb-1">Duration</p>
                      <p className="text-lg font-bold text-[#1E2A3A]">{duration}</p>
                    </div>
                  </div>

                  <div className="bg-[#FFF8F0] rounded-lg border border-black/[0.08] p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7BAE8E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7C8F] mb-1">Mode</p>
                      <p className="text-lg font-bold text-[#1E2A3A]">{mode}</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#2C3E50] mb-4 leading-relaxed">{description}</p>
                <p className="text-[#6B7C8F] mb-8 leading-relaxed">{longDescription}</p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What the Program Covers
                  </h3>
                  <ul className="space-y-3">
                    {whatCovers.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#6B7C8F]">
                        <span className="text-[#7BAE8E] mt-1.5 font-bold">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {whatYouGet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#6B7C8F]">
                        <span className="text-[#7BAE8E] mt-1.5 font-bold">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {fee && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-[#7BAE8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Course Fee
                    </h3>
                    <div className="bg-gradient-to-r from-[#7BAE8E]/20 to-[#7BAE8E]/10 p-6 rounded-lg border border-[#7BAE8E]/20">
                      {fee.regular && fee.earlyBird ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[#6B7C8F]">Regular Fee:</span>
                            <span className="text-xl font-bold text-[#1E2A3A]">{fee.regular}</span>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-[#7BAE8E]/20">
                            <span className="text-[#6B7C8F]">Early Bird Fee:</span>
                            <span className="text-xl font-bold text-[#7BAE8E]">{fee.earlyBird}</span>
                          </div>
                        </div>
                      ) : fee.program ? (
                        <div className="flex items-center justify-between">
                          <span className="text-[#6B7C8F]">Program Fee:</span>
                          <span className="text-2xl font-bold text-[#1E2A3A]">{fee.program}</span>
                        </div>
                      ) : null}
                      {mode === "Live Online" && (
                        <p className="text-sm text-[#6B7C8F] mt-4 pt-4 border-t border-[#7BAE8E]/20 italic">
                          ⚠️ Limited seats available for each batch.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="text-center pt-6 border-t border-black/[0.08]">
                  <button
                    onClick={handleApply}
                    className="px-10 py-4 bg-[#7BAE8E] text-white rounded-full font-bold hover:bg-[#5A8A6C] transition-all shadow-lg hover:shadow-xl text-lg"
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
