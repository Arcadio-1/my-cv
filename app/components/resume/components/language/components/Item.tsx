"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView, Language } from "@/app/util/Types/types";
import React, { useEffect, useState } from "react";

interface Props {
  language: Language;
}

const Item = (props: Props) => {
  const { language } = props;
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
    <div ref={languageRef} key={language.id} className="list-item">
      <div className="data">
        <h2 className="data-tittle">{language.tittle}</h2>
        <span className="data-persent">{level}%</span>
      </div>
      <div className="progressBar">
        <div
          className="progressBar-percent"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Item;
