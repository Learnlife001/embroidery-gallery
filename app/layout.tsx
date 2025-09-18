import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ single metadata object
export const metadata: Metadata = {
  metadataBase: new URL("https://embroidery-gallery.vercel.app"),
  title: "Embroidery Gallery – Handmade Designs",
  description:
    "Browse our embroidery gallery with unique, handmade designs and patterns.",
  keywords: ["embroidery", "handmade", "gallery", "crafts", "patterns"],
  openGraph: {
    title: "Embroidery Gallery – Handmade Designs",
    description:
      "Explore unique handmade embroidery fabrics, crafts, and designs.",
    url: "https://embroidery-gallery.vercel.app/",
    siteName: "Embroidery Gallery",
    images: [
      {
        url: "/images/preview.png", // make sure this image exists in /public/images
        width: 800,
        height: 600,
        alt: "Embroidery Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// ✅ viewport export stays separate
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
