"use client";
import { useAppSelector } from "@/redux/hook";
// import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { Expertise, Hero_base, InView, Lang, Theme } from "@/util/Types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [selectedExpertise, setSelectedExpertise] = useState<number>(1);
  const { activeAnimation: isAnimationActive } = useAppSelector(
    (state) => state.ui
  );
  // const { inView, ref } = useScrollMotion(InView.home, isAnimationActive);

  const length = expertise.length;
  useEffect(() => {
    const interval = setInterval(
      () =>
        setSelectedExpertise((prev) => {
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
  }, [expertise, length]);

  return (
    <div>
      <div className=" main_hero_content main_hero_content_animatiner">
        <div className="main_hero_content_tittle">
          <h1>{`${name} ${lastname}`}</h1>
        </div>
        <div className="main_hero_content_expertise">
          {selectedExpertise === 1 && (
            <div className="main_hero_content_expertise_item">
              {lang === Lang.fa && <span className="label"> من </span>}
              {lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text text1">
                {expertise[0].tittle}
                {lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
          {selectedExpertise === 2 && (
            <div className="main_hero_content_expertise_item">
              {lang === Lang.fa && <span className="label"> من </span>}
              {lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text  text2">
                {expertise[1].tittle}
                {lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
          {selectedExpertise === 3 && (
            <div className="main_hero_content_expertise_item">
              {lang === Lang.fa && <span className="label"> من </span>}
              {lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text text3">
                {expertise[2].tittle}
                {lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
        </div>

        <div className="main_hero_content_links">
          <a
            href={resumePng}
            target="_blank"
            className="main_hero_content_links_item"
          >
            {base.buttons.download_resume_png}
          </a>
          <a
            href={resumePdf}
            target="_blank"
            className="main_hero_content_links_item"
          >
            {base.buttons.download_resume_pdf}
          </a>
        </div>
      </div>
      <div className="main_hero_content_miniImage z-10 bg-slate-50 p-2 animate-bounce rounded-full bg-opacity-5 backdrop-blur-[2px] shadow-md mr-auto">
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
      </div>
    </div>
  );
};

export default Contents;
