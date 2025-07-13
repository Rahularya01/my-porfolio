import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul - Full Stack Developer | Modern Web Applications",
  description:
    "Full Stack Developer with 5+ years of experience building modern, scalable web applications. Specializing in React, Next.js, Node.js, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Rahul" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Rahul - Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years of experience building modern, scalable web applications.",
    type: "website",
    url: "https://rahul.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul - Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years of experience building modern, scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
