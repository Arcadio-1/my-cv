"use client";
import React from "react";
// import { useInView } from "react-intersection-observer";
interface Props {
  children: any;
}
const Boulshit = (props: Props) => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  return (
    <div
      // ref={ref}
      className={`main-about-boulshit main-about-boulshit-animator `}
    >
      <div
        className="main-about-boulshit-content"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </div>
  );
};

export default Boulshit;

// className={`main-about-boulshit  ${
//   inView ? "main-about-boulshit-animator" : ""
// }`}
