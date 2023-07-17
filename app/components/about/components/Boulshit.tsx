"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useSelector } from "react-redux";
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
      className={`main-about-boulshit  ${
        isAnimationActive && inView ? "main-about-boulshit-animator" : ""
      }`}
    >
      <div
        className="main-about-boulshit-content"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </div>
  );
};

export default Boulshit;
