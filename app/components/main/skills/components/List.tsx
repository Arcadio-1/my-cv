import { Skills } from "@/app/util/types";
import React from "react";
import Item from "./Item";
interface Props {
  skills: Skills;
}
const List = (props: Props) => {
  return (
    <div className="main-skills-list">
      {props.skills.map((skill) => {
        return <Item key={skill.id} skill={skill} />;
      })}
    </div>
  );
};

export default List;
