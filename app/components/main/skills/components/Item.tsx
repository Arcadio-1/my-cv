import { Skill } from "@/app/util/types";
import Image from "next/image";
import React from "react";
interface Props {
  skill: Skill;
}
const Item = (props: Props) => {
  const { skill } = props;
  const { tittle, id, level, icon_img, icon_icon } = skill;
  console.log(props);
  return (
    <div className="main-skills-list-item">
      <div className="main-skills-list-item-content">
        <div className="main-skills-list-item-content-data">
          <span className="persent">{level}%</span>
          <h2 className="tittle">{tittle}</h2>
        </div>
        <div className="main-skills-list-item-content-progressBar">
          <div className="persent" style={{ width: `${level}%` }}></div>
        </div>
      </div>
      <div className="main-skills-list-item-image">
        <Image src={icon_img} width={200} height={200} alt={tittle} />
      </div>
    </div>
  );
};

export default Item;
