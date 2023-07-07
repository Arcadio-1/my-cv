// "use client";
import { Providers } from "@/redux/provider";
import "../styles/main.scss";
import React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
// import middleware from "./util/functions/getPath";

export const metadata: Metadata = {
  title: "حسین اسکندری | فرانت اند",
  description: "سایت شخصی حسین اسکندری",
  manifest: `/manifest.json`,
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
    title: "حسین اسکندری | فرانت اند",
    description: "وب سایت شخصی حسین اسکندری",
    siteName: "حسین اسکندری | Frontend Developer",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const route = usePathname();
  // const lang = route.split("/");
  // const route = window.location.protocol;

  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const lang = fullUrl.split("/");

  function checkLang(age: string) {
    return age === "en";
  }
  const pathname = lang.find(checkLang);
  console.log(pathname);
  // console.log(lang);
  // console.log(fullUrl);
  // console.log(headersList);

  return (
    <html
      lang={pathname && pathname === "en" ? "en" : "fa"}
      dir={pathname && pathname === "en" ? "ltr" : "rtl"}
    >
      <body>
        <div id="overLay" className="" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
