"use client";
import Hero from "./components/main/hero/Hero";
import About from "./components/main/about/About";
import Skills from "./components/main/skills/Skills";
import Resume from "./components/main/resume/Resume";
import Portfolio from "./components/main/portfolio/Portfolio";
import Contact from "./components/main/contact/Contact";
import { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { CV, Full_status, Status } from "./util/types";
import ASide from "./components/aside/ASide";
import { useAppDispatch } from "@/redux/hook";
import { get_cv_server } from "@/redux/features/getData/getDataAction";
import Main from "./components/main/Main";
import Head from "next/head";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "حسین اسکندری | فرانت اند",
//   description: "سایت شخصی حسین اسکندری",
// };

export default async function Home() {
  const server_cv_status: Full_status = useSelector(
    (state: any) => state.ui.get_server_cv_status
  );

  const dispatch_server_cv = useAppDispatch();
  useEffect(() => {
    dispatch_server_cv(get_cv_server());
  }, [dispatch_server_cv]);

  if (server_cv_status && server_cv_status.status == Status.success) {
    return (
      <div className="flex cv">
        <ASide />
        <Main />
      </div>
    );
  }
  return (
    <div>
      <p>loading</p>
    </div>
  );
}
