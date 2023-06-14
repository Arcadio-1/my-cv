"use client";
import { Expertise } from "@/app/util/types";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  lastname: string;
  expertise: Expertise[];
  hero_image: string;
}
const Hero = (props: Props) => {
  const [expertise, setExpertise] = useState<number>(1);
  const length = props.expertise.length;

  useEffect(() => {
    const interval = setInterval(
      () =>
        setExpertise((prev) => {
          if (prev === length) {
            return (prev = 1);
          }
          if (prev < length) {
            return (prev = prev + 1);
          }
          return (prev = 1);
        }),
      5000
    );
    return () => {
      clearInterval(interval);
    };
  }, [props.expertise, length]);

  return (
    <div className=" main-hero">
      <div className="main-hero-background"></div>
      <div className=" main-hero-content ">
        <div className="main-hero-content-tittle">
          <h1>{`${props.name} ${props.lastname}`}</h1>
        </div>
        <div className="main-hero-content-expertise">
          {expertise === 1 && (
            <div className="main-hero-content-expertise-item">
              <span className="label">من </span>
              <span className="text text1">{props.expertise[0].message}</span>
            </div>
          )}
          {expertise === 2 && (
            <div className="main-hero-content-expertise-item">
              <span className="label">من </span>
              <span className="text  text2">{props.expertise[1].message}</span>
            </div>
          )}
          {expertise === 3 && (
            <div className="main-hero-content-expertise-item">
              <span className="label">من </span>
              <span className="text text3">{props.expertise[2].message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div>{/* <p onClick={() => uploadHandler()}>tessssssssssss</p> */}</div>
