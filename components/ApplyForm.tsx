"use client";

import { useState } from "react";
import { generateWhatsAppURL, formatMessage, validateEmail, validatePhone } from "@/lib/utils";
import { WHATSAPP_NUMBER, COURSES } from "@/lib/constants";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const message = formatMessage(formData, "apply");
    const url = generateWhatsAppURL(WHATSAPP_NUMBER, message);
    window.open(url, "_blank");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00bfff] focus:border-transparent ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00bfff] focus:border-transparent ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00bfff] focus:border-transparent ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="+1 234 567 8900"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
          Course Interested In *
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00bfff] focus:border-transparent ${
            errors.course ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select a course</option>
          {COURSES.filter(c => c.category === "Live Program").map((course) => (
            <option key={course.id} value={course.title}>
              {course.title} ({course.duration})
            </option>
          ))}
        </select>
        {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#e91e63] text-white rounded-lg font-semibold hover:bg-[#c2185b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Apply Now via WhatsApp"}
      </button>
    </form>
  );
}
