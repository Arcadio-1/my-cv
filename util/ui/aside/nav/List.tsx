import React from "react";
import Item from "./Item";
import { Nav_link } from "@/util/Types/types";

interface Props {
  list: Nav_link[];
}
const List = (props: Props) => {
  return (
    <ul className="aside_nav_list">
      {props.list.map((item) => {
        return (
          <Item
            key={item.id}
            icon={item.icon}
            link={item.link}
            tittle={item.tittle}
            id={item.id}
            component={item.component}
          />
        );
      })}
    </ul>
  );
};

export default List;
