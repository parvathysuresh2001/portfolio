import { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_KEYWORDS, authorName,  metadataValues } from "@/lib/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  description: metadataValues.description,
  keywords: SITE_KEYWORDS,
  creator: authorName,
  verification: {
    google: metadataValues.verification.google,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: metadataValues.openGraph.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}${metadataValues.openGraph.imagePath}`,
        width: 1200,
        height: 630,
        alt: "Nevin Michael portfolio",
        type: metadataValues.openGraph.imageType,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: metadataValues.twitter.description,
    images: [`${SITE_URL}${metadataValues.twitter.imagePath}`],
  },
  icons: {
    icon: "/favicon/favicon.ico", // Main favicon path
    shortcut: "/favicon/favicon.ico", // For shortcut icon
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png", // 16x16 favicon
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png", // 32x32 favicon
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-chrome-192x192.png", // Android Chrome icon
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon/android-chrome-512x512.png", // Optional high-res Android Chrome icon
      },
    ],
  },
  manifest: "/favicon/site.webmanifest", // Path to the webmanifest file
};