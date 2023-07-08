"use client";
import { Personal_info, About_base, InView } from "@/app/util/Types/types";
import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import MyImage from "./components/MyImage";
import Boulshit from "./components/Boulshit";
import List from "./components/list/List";
import Tittle from "./components/Tittle";
import useScrollSpy from "@/app/util/Hooks/UseScrollSpy";

interface Props {
  personal_info: Personal_info;
  about: string;
  base: About_base;
}

const About = async (props: Props) => {
  return (
    <div className="main-about">
      <SectionHeader
        tag="aboutMe"
        tittle={props.base.section_tittle}
        description={""}
      />
      <div className="main-about-container">
        <Tittle tittle={props.base.tittle} />
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        <List labels={props.base.labels} personal_info={props.personal_info} />
        {props.about && <Boulshit>{props.about}</Boulshit>}
      </div>
      {/* <Testing /> */}
    </div>
  );
};

export default About;
