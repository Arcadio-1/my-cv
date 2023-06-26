import React, { useEffect } from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { OpenToggle } from "@/app/util/types";

const ASide = () => {
  const isMenuOpen = useSelector((state: any) => state.ui.isMenuOpen);
  return (
    <aside
      className={`${
        isMenuOpen === OpenToggle.open ? "opener" : ""
      } asideContainer`}
    >
      <div className="aside">
        <Header />
        <Nav />
        <Footer />
      </div>
    </aside>
  );
};

export default ASide;
