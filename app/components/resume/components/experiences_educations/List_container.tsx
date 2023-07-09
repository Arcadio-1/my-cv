"use client";
import { Experience } from "@/app/util/Types/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import Item_container from "./Item_container";
interface Props {
  header: string;
  experience: Experience[];
}
const List_container = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

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
