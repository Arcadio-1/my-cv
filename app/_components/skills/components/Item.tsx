import { Skill } from "@/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
interface Props {
  skill: Skill;
}
const Item = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
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
    <div className="main_skills_list_item">
      <div
        className="main_skills_list_item_progressBar"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%,#3875aa ${
            isAnimationActive ? levState : level
          }%,#00000010 0% )`,
        }}
      >
        <div className="main_skills_list_item_main">
          <Image src={icon_img} width={100} height={100} alt={tittle} />
        </div>
      </div>
      <h2 className="main_skills_list_item_tittle">{tittle}</h2>
    </div>
  );
};

export default Item;
