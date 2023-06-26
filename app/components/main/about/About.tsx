import { CV, Personal_info } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React, { useEffect, useState } from "react";
import MyImage from "./components/MyImage";
import Footer from "./components/Boulshit";
import List from "./components/list/List";
import Tittle from "./components/Tittle";

interface Props {
  personal_info: Personal_info;
}
const About = async (props: Props) => {
  const [boulshit, setBoulshit] = useState<HTMLElement>();
  useEffect(() => {
    const getAbout = async () => {
      const request = await fetch("/api/myCv/get_md/about", {
        method: "GET",
        headers: { "Content-Type": "application/md" },
      });
      const data = await request.json();
      setBoulshit(data.data);
    };
    getAbout();
  }, []);

  return (
    <div className="main-about">
      <SectionHeader tittle="درباره من" description={""} />
      <div className="main-about-container">
        {/* <div className="main-about-tyu"> */}
        <Tittle />
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        {/* </div> */}
        <List personal_info={props.personal_info} />
        {boulshit && <Footer>{boulshit}</Footer>}
      </div>
    </div>
  );
};

export default About;
