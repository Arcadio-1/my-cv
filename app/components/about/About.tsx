"use client";
import { Personal_info, About_base } from "@/app/util/Types/types";
import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import MyImage from "./components/MyImage";
import Boulshit from "./components/Boulshit";
import List from "./components/list/List";
import Tittle from "./components/Tittle";
// import style from "./about.module.scss";

interface Props {
  personal_info: Personal_info;
  about: string;
  base: About_base;
}

const About = async (props: Props) => {
  // console.log(style);
  return (
    <div className={`main_about`}>
      <SectionHeader
        tag="aboutMe"
        tittle={props.base.section_tittle}
        description={""}
      />
      <div className={`main_about_container`}>
        <Tittle tittle={props.base.tittle} />
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        <List labels={props.base.labels} personal_info={props.personal_info} />
        <Boulshit>{props.about}</Boulshit>
      </div>
    </div>
  );
};

export default About;
