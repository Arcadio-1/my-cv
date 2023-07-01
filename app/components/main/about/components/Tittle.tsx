"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const Tittle = () => {
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
      <h2>توسعه دهنده فرانت اند و طراح UI/UX</h2>
    </div>
  );
};

export default Tittle;
