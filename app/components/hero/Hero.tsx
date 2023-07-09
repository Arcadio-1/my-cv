"use client";
import { Expertise, Lang, Theme } from "@/app/util/Types/types";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  lastname: string;
  expertise: Expertise[];
  hero_image_dark: string;
  hero_image_light: string;
  lang: Lang;
  theme: Theme;
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
    <div className=" main-hero" id="hero">
      <div
        className="main-hero-background"
        style={{
          backgroundImage: `url(${
            props.theme === Theme.Dark
              ? props.hero_image_dark
              : props.hero_image_light
          })`,
        }}
      ></div>
      <div className=" main-hero-content main-hero-content-animatiner">
        <div className="main-hero-content-tittle">
          <h1>{`${props.name} ${props.lastname}`}</h1>
        </div>
        <div className="main-hero-content-expertise">
          {expertise === 1 && (
            <div className="main-hero-content-expertise-item">
              {props.lang === Lang.fa && <span className="label"> من </span>}
              {props.lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text text1">
                {props.expertise[0].tittle}
                {props.lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
          {expertise === 2 && (
            <div className="main-hero-content-expertise-item">
              {props.lang === Lang.fa && <span className="label"> من </span>}
              {props.lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text  text2">
                {props.expertise[1].tittle}
                {props.lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
          {expertise === 3 && (
            <div className="main-hero-content-expertise-item">
              {props.lang === Lang.fa && <span className="label"> من </span>}
              {props.lang === Lang.en && <span className="label"> I`m </span>}
              <span className="text text3">
                {props.expertise[2].tittle}
                {props.lang !== Lang.en && " هستم "}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
