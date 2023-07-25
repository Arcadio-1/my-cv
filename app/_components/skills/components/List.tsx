"use client";
import { InView, Skill } from "@/util/Types/types";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { useSelector } from "react-redux";
import { UiMainState } from "@/redux/features/ui/uiSlice";
interface Props {
  skills: Skill[];
}
const List = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const [skills, setSkills] = useState<Skill[]>([]);

  const { inView, ref } = useScrollMotion(InView.skills, isAnimationActive);

  useEffect(() => {
    if (inView) {
      setSkills((prev) => {
        return (prev = []);
      });
      for (let i = 0; i < props.skills.length; i++) {
        setTimeout(
          () =>
            setSkills((prevState) => {
              return (prevState = [...prevState, props.skills[i]]);
            }),
          100 * i
        );
      }
    }
  }, [props.skills, inView]);

  return (
    <div ref={ref} className={`main_skills_list`}>
      {isAnimationActive
        ? skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`${inView ? "main_skills_list_item_animator" : ""}`}
              >
                <Item skill={skill} />
              </div>
            );
          })
        : props.skills.map((skill) => {
            return (
              <div key={skill.id}>
                <Item skill={skill} />
              </div>
            );
          })}
    </div>
  );
};

export default List;
