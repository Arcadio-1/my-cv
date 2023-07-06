"use client";
import { Experience } from "@/app/util/Types/types";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Item_container from "./Item_container";
interface Props {
  header: string;
  experience: Experience[];
}
const List_container = (props: Props) => {
  const [experiences, setExperience] = useState<Experience[]>([]);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    setExperience((prev) => {
      return (prev = []);
    });
    if (inView) {
      for (let i = 0; i < props.experience.length; i++) {
        setTimeout(
          () =>
            setExperience((prevState) => {
              return (prevState = [...prevState, props.experience[i]]);
            }),
          1000 * i
        );
      }
    }
  }, [props.experience, inView]);

  return (
    <div className="main-resume-experiences-experience">
      <h2 ref={ref} className="header">
        {props.header}
      </h2>
      <div className="list">
        {experiences.map((item) => {
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
