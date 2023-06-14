import { CV } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import List from "./components/List";
interface Props {
  cv: CV;
}

const Skills = (props: Props) => {
  return (
    <div className="main-skills">
      <SectionHeader tittle="مهارت ها" description="" />
      <List skills={props.cv.skills} />
    </div>
  );
};

export default Skills;
