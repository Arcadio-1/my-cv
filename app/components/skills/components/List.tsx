"use client";
import { InView, Skill } from "@/app/util/Types/types";
import React from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";
interface Props {
  skills: Skill[];
}
const List = (props: Props) => {
  // const [skills, setSkills] = useState<Skill[]>([]);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: skillRef } = useScrollSpy(InView.skills, 0.5);

  // useEffect(() => {
  //   if (inView) {
  //     setSkills((prev) => {
  //       return (prev = []);
  //     });
  //     for (let i = 0; i < props.skills.length; i++) {
  //       setTimeout(
  //         () =>
  //           setSkills((prevState) => {
  //             return (prevState = [...prevState, props.skills[i]]);
  //           }),
  //         100 * i
  //       );
  //     }
  //   }
  // }, [props.skills, inView]);

  // useEffect(() => {
  //   console.log(inView);
  // }, [inView]);

  return (
    <div ref={ref} className={`main-skills-list`}>
      {props.skills.map((skill) => {
        return (
          <div
            ref={skillRef}
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
