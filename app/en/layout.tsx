// import { Providers } from "@/redux/provider";
// import "../styles/main.scss";

import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Hossein Skandari | Frontend",
  description: "Hossein Skandari Personal Website",
  manifest: `/manifest_en.json`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url: "https://rkdo.ir",
    title: "Hossein Skandari | Frontend",
    description: "Hossein Skandari Personal Website",
    siteName: "Hossein Skandari | Frontend Developer",
    images: [
      {
        url: "/images/pwa_icons/android-icon-192x192.png",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/images/pwa_icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/pwa_icons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/images/pwa_icons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
