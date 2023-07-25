import React from "react";
import Item from "./Item";
import { Social_media } from "@/util/Types/types";
interface Props {
  items: Social_media[];
}
const List = (props: Props) => {
  return (
    <ul className="aside_header_socialmedias_list">
      {props.items.map((item) => {
        return (
          <Item
            key={item.id}
            tittle={item.tittle}
            url={item.url}
            icon={item.icon}
          />
        );
      })}
    </ul>
  );
};

export default List;
