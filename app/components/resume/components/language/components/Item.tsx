"use client";
import { Language } from "@/app/util/Types/types";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  language: Language;
}

const Item = (props: Props) => {
  const { language } = props;
  const [level, setLevel] = useState<number>(0);
  const {
    ref: languageRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
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
