import React from "react";
import Item from "./Item";
import { Nav_item } from "./Nav";
interface Props {
  list: Nav_item[];
}
const List = (props: Props) => {
  return (
    <ul className="aside-nav-list">
      {props.list.map((item) => {
        return (
          <Item
            key={item.id}
            icon={item.icon}
            tag={item.tag}
            tittle={item.tittle}
          />
        );
      })}
    </ul>
  );
};

export default List;
