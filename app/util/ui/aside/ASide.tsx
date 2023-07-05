"use client";

import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { Nav_link, OpenToggle, Personal_info } from "@/app/util/Types/types";

interface Props {
  personalInfo: Personal_info;
  navLinks: Nav_link[];
}

const ASide = (props: Props) => {
  const isMenuOpen = useSelector((state: any) => state.ui.isMenuOpen);
  return (
    <aside
      className={`${
        isMenuOpen === OpenToggle.open ? "aside-opener" : ""
      } aside`}
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