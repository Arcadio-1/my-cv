"use client";
import { Expertise } from "@/app/util/types";
import React from "react";

interface Props {
  name: string;
  lastname: string;
  expertise: Expertise[];
  hero_image: string;
}
const Hero = (props: Props) => {
  return (
    <div className=" main-hero">
      <div className=" main-hero-content ">
        <div className="main-hero-content-tittle">
          <h1>{`${props.name} ${props.lastname}`}</h1>
        </div>
        <div className="main-hero-content-expertise">
          {props.expertise.map((item) => {
            return <span key={item.id}>{`من یک ${item.message} هستم`}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div>{/* <p onClick={() => uploadHandler()}>tessssssssssss</p> */}</div>
