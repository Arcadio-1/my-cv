"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import React from "react";
interface Props {
  children: any;
}
const Boulshit = (props: Props) => {
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      className={`main-about-boulshit  ${
        inView ? "main-about-boulshit-animator" : ""
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
