import { Providers } from "@/redux/provider";
import "./styles/main.scss";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حسین اسکندری | فرانت اند",
  description: "سایت شخصی حسین اسکندری",
  openGraph: {
    type: "website",
    url: "https://rkdo.ir",
    title: "حسین اسکندری | فرانت اند",
    description: "وب سایت شخصی حسین اسکندری",
    siteName: "حسین اسکندری | Frontend Developer",
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="overLay" className="" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
