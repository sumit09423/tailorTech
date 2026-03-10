"use client";

import { generateWhatsAppURL } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function MockInterviewButton() {
  const handleClick = () => {
    const message = "Hello TailorTech, I'm interested in booking a mock interview session.";
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 bg-white text-[#e91e63] rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
    >
      Book a Slot via WhatsApp
    </button>
  );
}
