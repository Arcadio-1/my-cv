import React from "react";
import Item from "./Item";
import { Social_media } from "@/app/util/types";
interface Props {
  items: [Social_media];
}
const List = (props: Props) => {
  return (
    <ul className="social-nav flex w-full">
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
