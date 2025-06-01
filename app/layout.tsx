import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Embroidery Gallery | Factory Direct Designs',
  description: 'Browse unique factory-direct embroidery fabrics. Contact via WeChat or WhatsApp to order.',
  openGraph: {
    title: 'Embroidery Gallery',
    description: 'Beautiful embroidery fabrics, direct from factory. Contact to order.',
    images: [
      {
        url: '/images/preview-cover.jpg',
        width: 800,
        height: 600,
        alt: 'Embroidery Preview'
      }
    ],
    type: 'website'
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
