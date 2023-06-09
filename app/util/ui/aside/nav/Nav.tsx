import React from "react";
import List from "./List";
import { Nav_link } from "@/app/util/Types/types";
interface Props {
  navLinks: Nav_link[];
}

const Nav = (props: Props) => {
  return (
    <nav className="aside-nav">
      <List list={props.navLinks} />
    </nav>
  );
};

export default Nav;
