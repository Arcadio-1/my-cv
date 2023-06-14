import React from "react";
import List from "./components/List";
import { Personal_info } from "@/app/util/types";
interface Props {
  personal_info: Personal_info;
}
const Content = (props: Props) => {
  return (
    <div className="main-about-content">
      <h2 className="main-about-content-tittle">
        توسعه دهنده فرانت اند و طراح UI/UX
      </h2>
      <List personal_info={props.personal_info} />
    </div>
  );
};

export default Content;
