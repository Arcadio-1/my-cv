import { CV, Personal_info } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import MyImage from "./components/myImage/MyImage";
import Content from "./components/content/Content/Content";
import Footer from "./components/content/Footer";

interface Props {
  personal_info: Personal_info;
}

const About = (props: Props) => {
  const { about_me } = props.personal_info;
  return (
    <div className="main-about">
      <SectionHeader tittle="درباره من" description={about_me} />
      <div className="main-about-container">
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        <div className="main-about-main">
          <Content personal_info={props.personal_info} />
          {/* <Footer quote={props.cv.motivation_quotes} /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
