"use client";
import { Language } from "@/app/util/Types/types";
import React from "react";
import List from "./components/List";
interface Props {
  languages: Language[];
}
const Languages = (props: Props) => {
  return (
    <div className="main-resume-language">
      <h2 className="tittle">زبان های مسلط</h2>
      <List languages={props.languages} />
    </div>
  );
};

export default Languages;
