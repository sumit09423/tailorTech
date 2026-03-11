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
      className="px-10 py-4 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
    >
      Book a Slot via WhatsApp
    </button>
  );
}
