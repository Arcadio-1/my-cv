"use client";
import { Experience } from "@/app/util/Types/types";
import React from "react";
import Item_container from "./Item_container";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
interface Props {
  header: string;
  experience: Experience[];
}
const List_container = (props: Props) => {
  const { inView, ref } = useScrollMotion();

  return (
    <div className="main-resume-experiences-experience">
      <h2 ref={ref} className="header">
        {props.header}
      </h2>
      <div className="list">
        {props.experience.map((item) => {
          return (
            <div
              className={`list-item ${inView ? "list-item-animator" : ""}`}
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
