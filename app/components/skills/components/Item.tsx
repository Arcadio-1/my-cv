import { Skill } from "@/app/util/Types/types";
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
        className="main-skills-list-item-progressBar"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%,#3875aa ${levState}%,#00000010 0% )`,
        }}
      >
        <div className="main-skills-list-item-main">
          <Image src={icon_img} width={200} height={200} alt={tittle} />
        </div>
      </div>
      <h2 className="main-skills-list-item-tittle">{tittle}</h2>
    </div>
  );
};

export default Item;
