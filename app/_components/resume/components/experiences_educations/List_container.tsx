"use client";
import { Experience, InView } from "@/util/Types/types";
import React from "react";
import Item_container from "./Item_container";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { useSelector } from "react-redux";
import { UiMainState } from "@/redux/features/ui/uiSlice";
interface Props {
  header: string;
  experience: Experience[];
}
const List_container = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.resume, isAnimationActive);

  return (
    <div className="main_resume_experiences_experience">
      <h2 ref={ref} className="header">
        {props.header}
      </h2>
      <div className="list">
        {props.experience.map((item) => {
          return (
            <div
              className={`list_item ${
                isAnimationActive && inView ? "list_item_animator" : ""
              }`}
              key={item.id}
            >
              <Item_container item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List_container;
