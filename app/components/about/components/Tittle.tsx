"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  tittle: string;
}

const Tittle = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
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
