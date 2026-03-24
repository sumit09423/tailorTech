import type { Metadata } from "next";
import { Mulish, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "TailorTech - Software Training Tailored to You",
    template: "%s | TailorTech",
  },
  description:
    "Learn Python, React, Java, Flutter, and more with TailorTech. Live and self-paced software training, hands-on projects, and career support.",
  keywords: [
    "coding courses",
    "Python programming",
    "React",
    "full stack development",
    "Java",
    "Flutter",
    "online coding bootcamp",
    "TailorTech",
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
    title: "TailorTech - Software Training Tailored to You",
    description:
      "Industry-aligned live and self-paced courses in web, Python, Java, mobile, and data. Build projects and grow your tech career.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${dmSerif.variable} antialiased bg-[#FFFDFB] text-[#2C3E50]`}
      >
        {children}
      </body>
    </html>
  );
}
