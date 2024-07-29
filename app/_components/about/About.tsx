"use client";
import { Personal_info, About_base, Theme, Lang } from "@/util/Types/types";
import SectionHeader from "@/util/ui/SectionHeader/SectionHeader";
import React from "react";
import MyImage from "./components/MyImage";
import Boulshit from "./components/Boulshit";
import List from "./components/list/List";
import style from "./about.module.scss";
import Title from "./components/Tittle";

interface Props {
  personal_info: Personal_info;
  about: string;
  base: About_base;
  theme: Theme;
  lang: Lang;
}

const About = (props: Props) => {
  // console.log(style);
  return (
    <div
      className={`${style.main_about} ${
        props.theme === Theme.Light ? style.main_about_Light : ""
      }
  ${props.lang === Lang.en ? style.main_about_En : ""}`}
    >
      <SectionHeader
        tag="aboutMe"
        title={props.base.section_title}
        description={""}
      />

      <div className={`${style.main_about_container}`}>
        <Title title={props.base.title} />

        {/* <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        /> */}

        <List labels={props.base.labels} personal_info={props.personal_info} />

        <Boulshit>{props.about}</Boulshit>
      </div>
    </div>
  );
};

export default About;
