import { Group, Portfolio } from "@/app/util/Types/types";
import React, { useEffect } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
interface Props {
  portfolios: Portfolio[];
  filter: Group;
}
const List = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <ul ref={ref} className="main-portfolio-list">
      {props.portfolios.map((item) => {
        return (
          <li
            key={item.id}
            className={`main-portfolio-list-item ${
              (props.filter === Group.all || props.filter === item.group) &&
              inView
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
