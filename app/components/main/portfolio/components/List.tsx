import { Group, Portfolio } from "@/app/util/types";
import React, { useEffect } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
interface Props {
  portfolios: Portfolio[];
  filter: Group;
}
const List = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    console.log("portfolio: ", inView);
  }, [inView]);

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
