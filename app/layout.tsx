import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Rahul" }],
  creator: "Rahul",
  publisher: "Rahul",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rahul.dev",
  },
  openGraph: {
    title: "Rahul - Full Stack Developer | Modern Web Applications",
    description:
      "Full Stack Developer with 5+ years of experience building modern, scalable web applications. Specializing in React, Next.js, Node.js, and cloud technologies.",
    type: "website",
    url: "https://rahul.dev",
    siteName: "Rahul's Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://rahul.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul - Full Stack Developer | Modern Web Applications",
    description:
      "Full Stack Developer with 5+ years of experience building modern, scalable web applications.",
    images: ["https://rahul.dev/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years of experience building modern, scalable web applications.",
    url: "https://rahul.dev",
    sameAs: [
      "https://github.com/rahul",
      "https://linkedin.com/in/rahul",
      "https://twitter.com/rahul",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
    ],
  };

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
