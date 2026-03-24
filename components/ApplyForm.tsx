"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { generateWhatsAppURL, formatMessage, validateEmail, validatePhone } from "@/lib/utils";
import { WHATSAPP_NUMBER, COURSES } from "@/lib/constants";

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border-2 bg-white px-4 py-2.5 text-sm text-[#1E2A3A] placeholder:text-[#6B7C8F]/60 outline-none transition-colors focus:border-[#7BAE8E] ${
    hasError ? "border-red-400" : "border-black/[0.08]"
  }`;

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get("course") || "";

  const liveCourses = useMemo(() => COURSES.filter((c) => c.category === "Live Program"), []);
  const isValidCourse = courseFromUrl && liveCourses.some((c) => c.title === courseFromUrl);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: isValidCourse ? courseFromUrl : "",
  });

  useEffect(() => {
    if (courseFromUrl && liveCourses.some((c) => c.title === courseFromUrl)) {
      setFormData((prev) => {
        if (prev.course !== courseFromUrl) {
          return { ...prev, course: courseFromUrl };
        }
        return prev;
      });
    }
  }, [courseFromUrl, liveCourses]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass(!!errors.phone)}
          placeholder="+1 234 567 8900"
        />
        {errors.phone && <p className="mt-1 text-sm text-[#E8845C]">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-xs font-bold text-[#1E2A3A]">
          Course Interested In *
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={inputClass(!!errors.course)}
        >
          <option value="">Select a course</option>
          {COURSES.filter((c) => c.category === "Live Program").map((course) => (
            <option key={course.id} value={course.title}>
              {course.title} ({course.duration})
            </option>
          ))}
        </select>
        {errors.course && <p className="mt-1 text-sm text-[#E8845C]">{errors.course}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#7BAE8E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#5A8A6C] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Apply Now via WhatsApp"}
      </button>
    </form>
  );
}
