"use client";

import { useState } from "react";
import { generateWhatsAppURL, formatMessage, validateEmail, validatePhone } from "@/lib/utils";
import { WHATSAPP_NUMBER, COURSES } from "@/lib/constants";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-[#1f1f3a] border rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent text-white placeholder-gray-500 ${
            errors.name ? "border-red-500" : "border-gray-600"
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-[#1f1f3a] border rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent text-white placeholder-gray-500 ${
            errors.email ? "border-red-500" : "border-gray-600"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-[#1f1f3a] border rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent text-white placeholder-gray-500 ${
            errors.phone ? "border-red-500" : "border-gray-600"
          }`}
          placeholder="+91 73404 45010"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-2">
          Program Interested In
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-[#1f1f3a] border rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent text-white ${
            errors.program ? "border-red-500" : "border-gray-600"
          }`}
        >
          <option value="">Select a program (optional)</option>
          {COURSES.map((course) => (
            <option key={course.id} value={course.title} className="bg-[#1f1f3a]">
              {course.title}
            </option>
          ))}
        </select>
        {errors.program && <p className="mt-1 text-sm text-red-400">{errors.program}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 bg-[#1f1f3a] border rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent text-white placeholder-gray-500 ${
            errors.message ? "border-red-500" : "border-gray-600"
          }`}
          placeholder="Tell us how we can help you..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
