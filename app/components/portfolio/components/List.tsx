import {
  Group,
  Portfolio,
  Portfolio_base_buttons_titles,
} from "@/app/util/Types/types";
import React from "react";
import Item from "./Item";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
interface Props {
  portfolios: Portfolio[];
  filter: Group;
  itemsTitle: Portfolio_base_buttons_titles;
}
const List = (props: Props) => {
  const { inView, ref } = useScrollMotion();
  return (
    <div ref={ref} className="main-portfolio-list">
      {props.portfolios.map((item) => {
        return (
          <div
            key={item.id}
            className={`main-portfolio-list-item ${
              (props.filter === Group.all || props.filter === item.group) &&
              inView
                ? "selectedItem"
                : "notSelected"
            }`}
          >
            <Item portfolio={item} buttons_titles={props.itemsTitle} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
