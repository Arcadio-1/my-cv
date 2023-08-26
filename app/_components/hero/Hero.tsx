"use client";
import { useAppSelector } from "@/redux/hook";
// import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { Expertise, Hero_base, InView, Lang, Theme } from "@/util/Types/types";
import React, { useEffect, useState } from "react";
import Contents from "./components/Contents";
import Image from "next/image";

interface Props {
  name: string;
  lastname: string;
  expertise: Expertise[];
  hero_image_dark: string;
  hero_image_light: string;
  lang: Lang;
  theme: Theme;
  resumePdf: string;
  resumePng: string;
  base: Hero_base;
}
const Hero = ({
  theme,
  hero_image_dark,
  hero_image_light,
  base,
  expertise,
  lang,
  lastname,
  name,
  resumePdf,
  resumePng,
}: Props) => {
  return (
    <div className=" main_hero" id="home">
      <div
        className="main_hero_background"
        style={{
          backgroundImage: `url(${
            theme === Theme.Dark ? hero_image_dark : hero_image_light
          })`,
        }}
      ></div>
      <Contents
        theme={theme}
        base={base}
        lang={lang}
        lastname={lastname}
        name={name}
        resumePdf={resumePdf}
        resumePng={resumePng}
        expertise={expertise}
      />
      {/* <div className="z-10 bg-slate-100 p-2 animate-bounce rounded-full bg-opacity-10 backdrop-blur-sm shadow-md mr-auto">
        <Image
          className=" "
          src={`/images/hero/light.png`}
          alt="hi"
          width={300}
          height={300}
        />
      </div> */}
    </div>
  );
};

export default Hero;
