"use client";
import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
interface Props {
  children: any;
}
const Boulshit = (props: Props) => {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   console.log(inView);
  //   console.log(entry);
  // }, [inView, entry]);

  return (
    <div className="main-about-boulshit">
      <div
        className="main-about-boulshit-content"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </div>
  );
};

export default Boulshit;
