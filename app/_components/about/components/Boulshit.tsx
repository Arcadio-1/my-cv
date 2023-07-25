"use client";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { InView } from "@/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useSelector } from "react-redux";
import style from "../about.module.scss";

interface Props {
  children: any;
}
const Boulshit = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      // className={`main_about_boulshit  ${
      //   isAnimationActive && inView ? "main_about_boulshit_animator" : ""
      // }`}
      className={`${style.main_about_boulshit} ${
        isAnimationActive && inView ? style.main_about_boulshit_animator : ""
      }`}
    >
      <div
        className={style.main_about_boulshit_content}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </div>
  );
};

export default Boulshit;
