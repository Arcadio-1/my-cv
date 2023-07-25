import {
  Group,
  InView,
  Portfolio,
  Portfolio_base_buttons_titles,
} from "@/util/Types/types";
import React from "react";
import Item from "./Item";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { useSelector } from "react-redux";
import { UiMainState } from "@/redux/features/ui/uiSlice";
interface Props {
  portfolios: Portfolio[];
  filter: Group;
  itemsTitle: Portfolio_base_buttons_titles;
}
const List = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.portfolio);
  return (
    <div ref={ref} className="main-portfolio-list">
      {props.portfolios.map((item) => {
        return (
          <div
            key={item.id}
            className={`main-portfolio-list-item ${
              (props.filter === Group.all || props.filter === item.group) &&
              (!isAnimationActive || inView)
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
