"use client";
import { Skill } from "@/app/util/types";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
interface Props {
  skills: Skill[];
}
const List = (props: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      for (let i = 0; i < props.skills.length; i++) {
        setTimeout(
          () =>
            setSkills((prevState) => {
              return (prevState = [...prevState, props.skills[i]]);
            }),
          300 * i
        );
      }
    }
  }, [props.skills, inView]);
  useEffect(() => {
    console.log(skills);
  }, [skills]);
  return (
    <div ref={ref} className="main-skills-list">
      {skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className={`${inView ? "main-skills-list-item-animator" : ""}`}
          >
            <Item skill={skill} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
