"use client";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
import { InView } from "@/app/util/Types/types";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  tittle: string;
}

const Tittle = (props: Props) => {
  const { inView, ref } = useScrollMotion(InView.about);
  // const ref = useRef<HTMLDivElement>(null);

  // const [show, setShow] = useState<boolean>(false);

  // const onScroll: EventListener = (event: Event) => {
  //   let height = window.innerHeight;
  //   const topPos = ref.current?.getBoundingClientRect().top;
  //   console.log(height);
  //   if (topPos && topPos < height / 1.2) {
  //     console.log("top Pos", topPos);
  //     setShow(true);
  //     window.removeEventListener("scroll", onScroll);
  //   }
  // };

  // useEffect(() => {
  //   const win: Window = window;
  //   win.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div
      ref={ref}
      className={`main-about-tittle ${
        inView ? "main-about-tittle-animator" : ""
      }  `}
    >
      <h2>{props.tittle}</h2>
    </div>
  );
};

export default Tittle;

// const { ref, inView, entry } = useInView({
//   threshold: 0.5,
//   triggerOnce: true,
// });

// const callback = (entry: any) => {
//   console.log(...entry);
//   // console.log("showed");
//   console.log(entry.isIntersecting);
//   // Get intersection data here
//   // Like entry.intersectionRatio
//   // Here we can set state or update ref
//   // based on entry data
// };

// useEffect(() => {
//   const observer = new IntersectionObserver(callback, {
//     root: ref.current,

//     // Creates a threshold of with increments of 0.01

//     threshold: 1,
//   });

//   observer.observe(ref.current!);
// }, []);
