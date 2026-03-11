/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppURL(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Format form data into WhatsApp message
 */
export function formatMessage(
  formData: Record<string, string>,
  type: "contact" | "apply"
): string {
  if (type === "contact") {
    return `Hello TailorTech,

I'm interested in learning more about your courses.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.program ? `Program Interested In: ${formData.program}` : ''}

Message:
${formData.message}

Looking forward to hearing from you!`;
  } else {
    return `Hello TailorTech,

I would like to apply for enrollment.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interested In: ${formData.course}

Please let me know about the next steps.`;
  }
}

/**
 * Validate phone number (basic validation)
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
