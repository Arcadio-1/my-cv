import { CV, Personal_info } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React, { useEffect, useState } from "react";
import MyImage from "./components/myImage/MyImage";
import Content from "./components/content/Content/Content";
import Footer from "./components/content/Footer";
import path from "path";
import fs from "fs";

interface Props {
  personal_info: Personal_info;
}
const About = async (props: Props) => {
  const [about, setAbout] = useState<HTMLElement>();
  useEffect(() => {
    const getAbout = async () => {
      const request = await fetch("/api/myCv/get_md/about", {
        method: "GET",
        headers: { "Content-Type": "application/md" },
      });
      const data = await request.json();
      setAbout(data.data);
    };
    getAbout();
  }, []);

  useEffect(() => {
    console.log(about);
  }, [about]);
  const { about_me } = props.personal_info;
  return (
    <div className="main-about">
      <SectionHeader tittle="درباره من" description={""} />
      <div className="main-about-container">
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        {/* <div className="main-about-main"> */}
        <Content personal_info={props.personal_info} />
        {/* </div> */}
      </div>
      {about && <Footer>{about}</Footer>}
    </div>
  );
};

export default About;
