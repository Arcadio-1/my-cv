import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const ASide = () => {
  return (
    <aside className="aside">
      {/* <div className="aside-container"> */}
      <Header />
      <Nav />
      <Footer />
      {/* </div> */}
    </aside>
  );
};

export default ASide;
