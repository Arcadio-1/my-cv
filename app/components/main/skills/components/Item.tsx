import { Skill } from "@/app/util/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Props {
  skill: Skill;
}
const Item = (props: Props) => {
  const { skill } = props;
  const { tittle, id, level, icon_img, icon_icon } = skill;

  const [levState, setLevState] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < level; i++) {
      setTimeout(
        () =>
          setLevState((prevState) => {
            return (prevState = prevState + 1);
          }),
        20 * i
      );
    }
  }, [level]);
  return (
    <div className="main-skills-list-item">
      <div className="main-skills-list-item-content">
        <div className="main-skills-list-item-content-data">
          <span className="percent">{levState}%</span>
          <h2 className="tittle">{tittle}</h2>
        </div>
        <div className="main-skills-list-item-content-progressBar">
          <div className="percent" style={{ width: `${levState}%` }}></div>
        </div>
      </div>
      <div className="main-skills-list-item-image">
        <Image src={icon_img} width={200} height={200} alt={tittle} />
      </div>
    </div>
  );
};

export default Item;
