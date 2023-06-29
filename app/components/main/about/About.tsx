import { Personal_info } from "@/app/util/types";
import SectionHeader from "@/app/util/ui/SectionHeader";
import React from "react";
import MyImage from "./components/MyImage";
import Boulshit from "./components/Boulshit";
import List from "./components/list/List";
import Tittle from "./components/Tittle";
import matter from "gray-matter";
import { promises as fs } from "fs";
import path, { join } from "path";
import { json } from "stream/consumers";

interface Props {
  personal_info: Personal_info;
}

async function getData() {
  const directory = path.join(process.cwd(), "markdown");
  const fullPath = join(directory, `about.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const response = { status: 200, data: content };
  return response;
}

const About = async (props: Props) => {
  const request = await getData();
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
        {request.status && <Boulshit>{request.data}</Boulshit>}
      </div>
    </div>
  );
};

export default About;
