"use client";
// import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";
// import { InView } from "@/app/util/Types/types";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  tittle: string;
}

const Tittle = (props: Props) => {
  // const { ref: aboutRef } = useScrollSpy(InView.about, 0.4);

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`main-about-tittle  ${
        inView ? "main-about-tittle-animator" : ""
      }`}
    >
      <h2>{props.tittle}</h2>
    </div>
  );
};

export default Tittle;
