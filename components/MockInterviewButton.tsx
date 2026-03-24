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
      type="button"
      onClick={handleClick}
      className="rounded-full bg-[#7BAE8E] px-10 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#5A8A6C] hover:shadow-lg"
    >
      Book a Slot via WhatsApp
    </button>
  );
}
