import { Group, Portfolio } from "@/app/util/types";
import React from "react";
import Item from "./Item";
interface Props {
  portfolios: Portfolio[];
  filter: Group;
}
const List = (props: Props) => {
  return (
    <ul className="main-portfolio-list">
      {props.portfolios.map((item) => {
        return (
          <li
            key={item.id}
            className={`main-portfolio-list-item ${
              props.filter === Group.all || props.filter === item.group
                ? "selectedItem"
                : "notSelected"
            }`}
          >
            <Item portfolio={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
