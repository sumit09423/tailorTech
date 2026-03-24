"use client";

import { useState } from "react";
import { generateWhatsAppURL, formatMessage, validateEmail, validatePhone } from "@/lib/utils";
import { WHATSAPP_NUMBER, COURSES } from "@/lib/constants";

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border-2 bg-white px-4 py-2.5 text-sm text-[#1E2A3A] placeholder:text-[#6B7C8F]/60 outline-none transition-colors focus:border-[#7BAE8E] ${
    hasError ? "border-red-400" : "border-black/[0.08]"
  }`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const message = formatMessage(formData, "contact");
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass(!!errors.name)}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-[#E8845C]">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass(!!errors.email)}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-[#E8845C]">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass(!!errors.phone)}
          placeholder="+91 73404 45010"
        />
        {errors.phone && <p className="mt-1 text-sm text-[#E8845C]">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="program" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Program Interested In
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className={inputClass(!!errors.program)}
        >
          <option value="">Select a program (optional)</option>
          {COURSES.map((course) => (
            <option key={course.id} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
        {errors.program && <p className="mt-1 text-sm text-[#E8845C]">{errors.program}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClass(!!errors.message)}
          placeholder="Tell us how we can help you..."
        />
        {errors.message && <p className="mt-1 text-sm text-[#E8845C]">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#7BAE8E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#5A8A6C] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
