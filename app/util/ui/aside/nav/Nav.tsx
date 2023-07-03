import React from "react";
import List from "./List";
export interface Nav_item {
  id: string;
  tittle: string;
  tag: string;
  icon: string;
  component: string;
  headline: string;
}
type Nav_list = Nav_item[];
const Nav = () => {
  const nav_items: Nav_list = [
    {
      id: "1",
      tittle: "صفحه نخست",
      tag: "#home",
      icon: "/images/nav/home.svg",
      component: "home_icon",
      headline: "Home_icon",
    },
    {
      id: "2",
      tittle: "درباره من",
      tag: "#about",
      icon: "/images/nav/about.svg",
      component: "about_icon",
      headline: "About_icon",
    },
    {
      id: "3",
      tittle: "رزومه",
      tag: "#resume",
      icon: "/images/nav/resume.svg",
      component: "resume_icon",
      headline: "Resume_icon",
    },
    {
      id: "4",
      tittle: "نمونه کارها",
      tag: "#portfolio",
      icon: "/images/nav/portfolio.svg",
      component: "portofolio_icon",
      headline: "Portofolio_icon",
    },
    {
      id: "5",
      tittle: "تماس",
      tag: "#contact",
      icon: "/images/nav/contact.svg",
      component: "contact_icon",
      headline: "Contact_icon",
    },
  ];
  return (
    <nav className="aside-nav">
      <List list={nav_items} />
    </nav>
  );
};

export default Nav;
