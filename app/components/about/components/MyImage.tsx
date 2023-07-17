"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import Image from "next/image";
import React from "react";
// import { useInView } from "react-intersection-observer";
interface Props {
  imageUrl: string;
  alt: string;
}
const MyImage = (props: Props) => {
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      className={`main-about-image  ${
        inView ? "main-about-image-animator" : ""
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
