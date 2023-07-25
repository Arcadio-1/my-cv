"use client";

import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import {
  Lang,
  Nav_link,
  OpenToggle,
  Personal_info,
  Theme,
} from "@/util/Types/types";

interface Props {
  personalInfo: Personal_info;
  navLinks: Nav_link[];
  lang: Lang;
  theme: Theme;
}

const ASide = (props: Props) => {
  const isMenuOpen = useSelector((state: any) => state.ui.isMenuOpen);
  return (
    <aside
      className={`${
        isMenuOpen === OpenToggle.open ? "aside-opener" : ""
      } aside ${
        props.lang === Lang.en && props.theme === Theme.Dark
          ? "en-aside-dark"
          : ""
      }
      ${
        props.lang === Lang.en && props.theme === Theme.Light
          ? "en-aside-light"
          : ""
      }
        `}
    >
      <div className="aside-container">
        <Header personalInfo={props.personalInfo} />
        <Nav navLinks={props.navLinks} />
        <Footer />
      </div>
    </aside>
  );
};

export default ASide;
