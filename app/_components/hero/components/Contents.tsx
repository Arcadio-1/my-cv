"use client";
import { useAppSelector } from "@/redux/hook";
// import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { Expertise, Hero_base, InView, Lang, Theme } from "@/util/Types/types";
import CheckIcon from "@/util/ui/controler/icons/CheckIcon";
import GithubIcon from "@/util/ui/controler/icons/GithubIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Latest_design from "./latest_design/Latest_design";
import About_me_hero from "./About_me_hero";

interface Props {
  name: string;
  lastname: string;
  expertise: Expertise[];
  lang: Lang;
  resumePdf: string;
  resumePng: string;
  base: Hero_base;
  theme: Theme;
}
const Contents = ({
  base,
  lang,
  lastname,
  name,
  resumePdf,
  resumePng,
  expertise,
  theme,
}: Props) => {
  return (
    <div className="w-full">
      <div className=" main_hero_content main_hero_content_animatiner">
        <About_me_hero
          base={base}
          expertise={expertise}
          lang={lang}
          lastname={lastname}
          name={name}
          resumePdf={resumePdf}
          resumePng={resumePng}
          theme={theme}
        />
        <Latest_design lang={lang} />
      </div>
      {/* <div className="main_hero_content_miniImage z-10 bg-slate-50 p-2 animate-bounce rounded-full bg-opacity-5 backdrop-blur-[2px] shadow-md mr-auto">
        {theme === Theme.Dark ? (
          <Image
            className=" "
            src={`/images/hero/dark.png`}
            alt="hi"
            width={200}
            height={200}
          />
        ) : (
          <Image
            className=" "
            src={`/images/hero/light.png`}
            alt="hi"
            width={200}
            height={200}
          />
        )}
      </div> */}
    </div>
  );
};

export default Contents;
