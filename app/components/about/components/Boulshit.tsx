"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import React from "react";
interface Props {
  children: any;
}
const Boulshit = (props: Props) => {
  const { inView, ref } = useScrollMotion();

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
