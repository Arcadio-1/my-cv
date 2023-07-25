"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// <Provider store={store}>
//   <html
//     lang={path && path === "/en" ? "en" : "fa"}
//     dir={path && path === "/en" ? "ltr" : "rtl"}
//   >
//     <body>
//       <div id="overLay" className="" />
//       {children}
//     </body>
//   </html>
// </Provider>
