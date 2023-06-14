import { Providers } from "@/redux/provider";
import "./styles/main.scss";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حسین اسکندری | فرانت اند",
  description: "سایت شخصی حسین اسکندری",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
