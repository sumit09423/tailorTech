import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
