"use client";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { InView, Language } from "@/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  language: Language;
}

const Item = (props: Props) => {
  const { language } = props;
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const [level, setLevel] = useState<number>(0);

  const { inView, ref: languageRef } = useScrollMotion(InView.resume);

  useEffect(() => {
    if (inView) {
      for (let i = 0; i < props.language.level; i++) {
        setTimeout(() => {
          setLevel((prev) => {
            return (prev = prev + 1);
          });
        }, 20 * i);
      }
    }
  }, [props.language.level, inView]);
  return (
    <div ref={languageRef} key={language.id} className="list_item">
      <Image src={language.img} alt={language.tittle} width={40} height={40} />
      <div className="content">
        <div className="data">
          <h2 className="data_tittle">{language.tittle}</h2>
          <span className="data_persent">
            {isAnimationActive ? level : props.language.level}%
          </span>
        </div>
        <div className="progressBar">
          <div
            className="progressBar_percent"
            style={{
              width: `${isAnimationActive ? level : props.language.level}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
