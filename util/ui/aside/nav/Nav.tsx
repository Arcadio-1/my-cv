import React from "react";
import List from "./List";
import { Nav_link } from "@/util/Types/types";
interface Props {
  navLinks: Nav_link[];
}

const Nav = (props: Props) => {
  return (
    <nav className="aside_nav">
      <List list={props.navLinks} />
    </nav>
  );
};

export default Nav;
