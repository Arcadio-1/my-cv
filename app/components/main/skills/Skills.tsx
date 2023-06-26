import { CV, Skill } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import List from "./components/List";
import Image from "next/image";
interface Props {
  skills: Skill[];
}

const Skills = (props: Props) => {
  return (
    <div className="main-skills">
      <SectionHeader tittle="مهارت ها" description="" />
      <List skills={props.skills} />
      {/* <div className="main-skills-imageContainer ">
        <div className="img-1">
          <Image
            src={"/images/vectors/coding.png"}
            height={300}
            width={300}
            alt="masengers"
          />
        </div>
      </div>
      <div className="main-skills-imageContainer ">
        <div className="img-2">
          <Image
            src={"/images/vectors/design.png"}
            height={300}
            width={300}
            alt="masengers"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
