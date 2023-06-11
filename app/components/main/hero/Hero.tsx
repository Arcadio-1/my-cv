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
    <div className="bg-[url('/images/hero/hero.jpg')] h-screen w-full bg-cover border-2 border-red-500 flex">
      <div className="border-2 border-red-500 h-full w-full flex flex-col">
        <div className="border-2 flex items-center justify-center border-red-500 h-full w-full">
          <h1 className="text-gray-100 text-[10rem]">{`${props.name} ${props.lastname}`}</h1>
        </div>
        <div className="flex flex-col">
          {props.expertise?.map((item) => {
            return (
              <span className="text-gray-100 text-[2rem]" key={item.id}>
                {item.message}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div>{/* <p onClick={() => uploadHandler()}>tessssssssssss</p> */}</div>
