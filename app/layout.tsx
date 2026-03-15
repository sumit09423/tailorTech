import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "TailorTech - Master Coding Skills with Practical Learning",
    template: "%s | TailorTech",
  },
  description:
    "Transform your career with TailorTech's hands-on coding courses. Join small live batches and get personalized guidance from industry experts in Java Full Stack, Backend, Frontend, and Data Engineering.",
  keywords: [
    "coding courses",
    "Java programming",
    "full stack development",
    "backend development",
    "frontend development",
    "data engineering",
    "online coding bootcamp",
    "programming courses",
  ],
  authors: [{ name: "TailorTech" }],
  creator: "TailorTech",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tailortech.com",
    siteName: "TailorTech",
    title: "TailorTech - Master Coding Skills with Practical Learning",
    description:
      "Transform your career with hands-on coding courses. Join small live batches and get personalized guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} antialiased font-body`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
