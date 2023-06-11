import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const ASide = () => {
  return (
    <aside className="border-2 h-screen">
      <Header />
      <Nav />
      <Footer />
    </aside>
  );
};

export default ASide;
