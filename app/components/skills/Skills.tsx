import { InView, Skill, Skills_base } from "@/app/util/Types/types";
import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import List from "./components/List";
import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";
interface Props {
  skills: Skill[];
  base: Skills_base;
}

const Skills = (props: Props) => {
  const { ref: skillRef } = useScrollSpy(InView.skills);

  return (
    <div className="main-skills" ref={skillRef} id="skills">
      <SectionHeader tittle={props.base.section_tittle} description="" />
      <List skills={props.skills} />
    </div>
  );
};

export default Skills;
