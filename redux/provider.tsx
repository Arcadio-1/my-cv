"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <Provider store={store}>
      <html
        lang={path && path === "/en" ? "en" : "fa"}
        dir={path && path === "/en" ? "ltr" : "rtl"}
      >
        <body>
          <div id="overLay" className="" />
          {children}
        </body>
      </html>
    </Provider>
  );
}
