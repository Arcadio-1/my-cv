import { CV } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import MyImage from "./components/myImage/MyImage";
import Content from "./components/content/Content/Content";
import Footer from "./components/content/Footer";

interface Props {
  cv: CV;
}

const About = (props: Props) => {
  const { about_me } = props.cv;
  return (
    <div className="main-about">
      <SectionHeader tittle="درباره من" description={about_me} />
      <div className="main-about-container">
        <MyImage
          imageUrl={props.cv.personal_info.profile_iamge}
          alt={props.cv.personal_info.name}
        />
        <div className="main-about-main">
          <Content personal_info={props.cv.personal_info} />
          {/* <Footer quote={props.cv.motivation_quotes} /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
