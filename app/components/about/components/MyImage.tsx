"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import { UiMainState } from "@/redux/features/ui/uiSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
// import { useInView } from "react-intersection-observer";
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
      className={`main-about-image  ${
        isAnimationActive && inView ? "main-about-image-animator" : ""
      }`}
    >
      <Image
        className="object-cover"
        src={props.imageUrl}
        width={500}
        height={500}
        alt={props.alt}
      />
    </div>
  );
};

export default MyImage;

// <div
//   ref={ref}
//   className={`main-about-image  ${
//     inView ? "main-about-image-animator" : ""
//   }`}
// ></div>
