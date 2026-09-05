import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Roknuzzaman | AI, Web, App & Automation Specialist",
  description:
    "MD Roknuzzaman — AI, Web, App & Automation Specialist. Building practical digital solutions for businesses.",
  keywords: [
    "MD Roknuzzaman",
    "AI Specialist",
    "Web Developer",
    "App Developer",
    "AI Automation",
    "WordPress",
    "Prompt Engineering",
    "Digital Solutions",
  ],
  authors: [{ name: "MD Roknuzzaman" }],
  creator: "MD Roknuzzaman",

  openGraph: {
    title: "MD Roknuzzaman | AI, Web, App & Automation Specialist",
    description:
      "Building practical digital solutions for businesses.",
    type: "website",
    siteName: "MD Roknuzzaman",
  },

  twitter: {
    card: "summary_large_image",
    title: "MD Roknuzzaman | AI, Web, App & Automation Specialist",
    description:
      "Building practical digital solutions for businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
