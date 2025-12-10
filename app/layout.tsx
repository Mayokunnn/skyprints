import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { CartProvider } from "@/contexts/cart-context";
import { companyStructuredData } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skyprints.vercel.app"),
  title: {
    default:
      "The Skyprint Global Services Limited - Corporate Printing & Branding Solutions",
    template: "%s | The Skyprint Global Services Limited",
  },
  description:
    "Professional printing solutions for corporate branding, technical printing, merchandise, and event branding in Lagos, Nigeria. High-quality custom printing services.",
  keywords: [
    "corporate printing",
    "branding solutions",
    "merchandise printing",
    "business cards",
    "brochures",
    "Lagos Nigeria",
    "professional printing",
    "custom printing",
    "event branding",
  ],
  authors: [{ name: "The Skyprint Global Services Limited" }],
  creator: "The Skyprint Global Services Limited",
  publisher: "The Skyprint Global Services Limited",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "The Skyprint Global Services Limited - Corporate Printing & Branding Solutions",
    description:
      "Professional printing solutions for corporate branding, technical printing, merchandise, and event branding in Lagos, Nigeria.",
    type: "website",
    url: "https://skyprints.vercel.app",
    siteName: "The Skyprint Global Services Limited",
    locale: "en_NG",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "The Skyprint Global Services Limited - Corporate Printing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Skyprint Global Services Limited - Corporate Printing & Branding Solutions",
    description:
      "Professional printing solutions for corporate branding, technical printing, merchandise, and event branding in Lagos, Nigeria.",
    images: ["/og_image.png"],
    creator: "@skyprint",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "The Skyprint Global Services Limited",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(companyStructuredData),
          }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Prefetch DNS for CDN and analytics */}
        <link rel="dns-prefetch" href="https://cdn.vercel.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Font stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="gQhhHlhPXvKYquPJ3kOq8A5M5B0hAEOUGJ_sC87UJH8"
        />
      </head>

      <body>
        <CartProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
