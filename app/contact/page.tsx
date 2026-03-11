import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { generateWhatsAppURL } from "@/lib/utils";

export const metadata = {
  title: "Contact Us - TailorTech",
  description: "Get in touch with TailorTech. We're here to answer your questions and help you start your coding journey.",
};

export default function ContactPage() {
  const whatsappUrl = generateWhatsAppURL(
    WHATSAPP_NUMBER,
    "Hello TailorTech, I have a question."
  );

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions about our programs or want to learn more about TailorTech? We're here to help. Feel free to reach out and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 mb-6">
                    If you would like more information about our programs, upcoming batches, or enrollment process, you can contact us through the details below.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Phone / WhatsApp
                      </h3>
                      <p className="text-gray-300 mb-4">+91 73404 45010</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>

                    <div className="bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Email
                      </h3>
                      <a
                        href="mailto:tailortech.team@gmail.com"
                        className="text-[#e91e63] hover:text-[#c2185b] transition-colors"
                      >
                        tailortech.team@gmail.com
                      </a>
                    </div>

                    <div className="bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Instagram
                      </h3>
                      <p className="text-gray-300 mb-2">
                        Follow us for updates, announcements, and learning content.
                      </p>
                      <a
                        href="https://instagram.com/tailortech.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e91e63] hover:text-[#c2185b] transition-colors"
                      >
                        @tailortech.in
                      </a>
                    </div>

                    <div className="bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        LinkedIn
                      </h3>
                      <p className="text-gray-300 mb-2">
                        Connect with us and stay updated with TailorTech announcements and insights.
                      </p>
                      <a
                        href="https://www.linkedin.com/company/tailortechh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e91e63] hover:text-[#c2185b] transition-colors"
                      >
                        TailorTech
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-300 mb-6">
                    You can also reach out by filling out the enquiry form.
                  </p>
                  <ContactForm />
                  
                  {/* Quick Support */}
                  <div className="mt-8 bg-[#1f1f3a] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Quick Support
                    </h3>
                    <p className="text-gray-300 mb-4">
                      For faster responses regarding program details or enrollment, you can connect with us directly on WhatsApp.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Tagline */}
        <section className="py-12 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">TailorTech</p>
              <p className="text-lg text-gray-300 mt-2">Where Skills Are Tailor-Made.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
