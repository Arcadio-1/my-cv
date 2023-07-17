"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  tittle: string;
}

const Tittle = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      className={`main-about-tittle ${
        isAnimationActive && inView ? "main-about-tittle-animator" : ""
      }  `}
    >
      <h2>{props.tittle}</h2>
    </div>
  );
};

export default Tittle;
