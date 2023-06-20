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
          (props.filter === Group.all || props.filter === item.group) && (
            <Item key={item.id} portfolio={item} />
          )
        );
      })}
    </ul>
  );
};

export default List;
