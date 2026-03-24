import { Testimonial } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="h-full rounded-[14px] border border-black/[0.03] bg-white p-6 shadow-sm">
      <div className="mb-3 flex gap-0.5 text-[#D4A853]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "opacity-100" : "opacity-25"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-sm italic leading-relaxed text-[#2C3E50]">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <div className="border-t border-black/[0.04] pt-4">
        <p className="font-semibold text-[#1E2A3A]">{testimonial.name}</p>
        <p className="text-xs text-[#6B7C8F]">{testimonial.course}</p>
      </div>
    </div>
  );
}
