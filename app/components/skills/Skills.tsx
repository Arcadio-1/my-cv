import { Skill } from "@/app/util/Types/types";
import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import List from "./components/List";
interface Props {
  skills: Skill[];
}

const Skills = (props: Props) => {
  return (
    <div className="main-skills">
      <SectionHeader tag="skills" tittle="مهارت ها" description="" />
      <List skills={props.skills} />
    </div>
  );
};

export default Skills;
