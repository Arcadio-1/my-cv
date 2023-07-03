import { Skill } from "@/app/util/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Props {
  skill: Skill;
}
const Item = (props: Props) => {
  const { skill } = props;
  const { tittle, level, icon_img } = skill;

  const [levState, setLevState] = useState<number>(0);
  useEffect(() => {
    for (let i = 0; i < level; i++) {
      setTimeout(
        () =>
          setLevState((prevState) => {
            return (prevState = prevState + 1);
          }),
        50 * i
      );
    }
  }, [level]);
  return (
    <div className="main-skills-list-item">
      <div
        className="main-skills-list-item-contentBase"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%,#2079c5 ${levState}%,#adcdc910 ${
            100 - levState
          }% )`,
        }}
      >
        <div className="main-skills-list-item-contentBase-container">
          <Image src={icon_img} width={200} height={200} alt={tittle} />
          <span className="main-skills-list-item-contentBase-container-percent">
            %{levState}
          </span>
        </div>
      </div>
      <h2 className="main-skills-list-item-tittle">{tittle}</h2>
    </div>
  );
};

export default Item;
