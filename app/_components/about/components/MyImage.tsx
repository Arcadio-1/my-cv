"use client";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { InView } from "@/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
// import { useInView } from "react-intersection-observer";
import style from "../about.module.scss";
interface Props {
  imageUrl: string;
  alt: string;
}
const MyImage = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      className={`${style.main_about_image}  ${
        isAnimationActive && inView ? style.main_about_image_animator : ""
      }`}
    >
      <Image
        className="object_cover"
        src={props.imageUrl}
        width={500}
        height={500}
        alt={props.alt}
      />
    </div>
  );
};

export default MyImage;
