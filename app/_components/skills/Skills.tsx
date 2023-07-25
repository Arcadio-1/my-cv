import { Skill, Skills_base } from "@/util/Types/types";
import SectionHeader from "@/util/ui/SectionHeader/SectionHeader";
import React from "react";
import List from "./components/List";
interface Props {
  skills: Skill[];
  base: Skills_base;
}

const Skills = (props: Props) => {
  return (
    <div className="main_skills" id="skills">
      <SectionHeader tittle={props.base.section_tittle} description="" />
      <List skills={props.skills} />
    </div>
  );
};

export default Skills;
