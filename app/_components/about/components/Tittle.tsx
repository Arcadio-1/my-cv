"use client";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { InView } from "@/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useSelector } from "react-redux";
import style from "../about.module.scss";
interface Props {
  title: string;
}

const Title = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.about, isAnimationActive);

  return (
    <div
      ref={ref}
      className={`${style.main_about_title} ${
        isAnimationActive && inView ? style.main_about_title_animator : ""
      }  `}
    >
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
