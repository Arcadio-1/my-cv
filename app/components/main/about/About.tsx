import { Personal_info } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import MyImage from "./components/MyImage";
import Footer from "./components/Boulshit";
import List from "./components/list/List";
import Tittle from "./components/Tittle";

interface Props {
  personal_info: Personal_info;
}

async function getData() {
  const request = await fetch("http://localhost:3000/api/myCv/get_md/about");
  const data = await request.json();

  return data.data;
}

const About = async (props: Props) => {
  const data = await getData();

  return (
    <div className="main-about">
      <SectionHeader tittle="درباره من" description={""} />
      <div className="main-about-container">
        <Tittle />
        <MyImage
          imageUrl={props.personal_info.profile_iamge}
          alt={props.personal_info.name}
        />
        <List personal_info={props.personal_info} />
        {data && <Footer>{data}</Footer>}
      </div>
    </div>
  );
};

export default About;
