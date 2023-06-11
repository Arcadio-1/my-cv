import React from "react";
import List from "./List";
export interface Nav_item {
  id: string;
  tittle: string;
  tag: string;
  icon: string;
}
type Nav_list = Nav_item[];
const Nav = () => {
  const nav_items: Nav_list = [
    {
      id: "1",
      tittle: "صفحه نخست",
      tag: "#home",
      icon: "/images/nav/home.svg",
    },
    {
      id: "2",
      tittle: "درباره من",
      tag: "#about",
      icon: "/images/nav/about.svg",
    },
    {
      id: "3",
      tittle: "رزومه",
      tag: "#resume",
      icon: "/images/nav/resume.svg",
    },
    {
      id: "4",
      tittle: "نمونه کارها",
      tag: "#portfolio",
      icon: "/images/nav/portfolio.svg",
    },
    {
      id: "5",
      tittle: "تماس",
      tag: "#contact",
      icon: "/images/nav/contact.svg",
    },
  ];
  return (
    <nav className="main-nav">
      <List list={nav_items} />
    </nav>
  );
};

export default Nav;
