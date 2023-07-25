"use client";
import { Language } from "@/util/Types/types";
import React from "react";
import List from "./components/List";
interface Props {
  languages: Language[];
  tittle: string;
}
const Languages = (props: Props) => {
  return (
    <div className="main-resume-language">
      <h2 className="tittle">{props.tittle}</h2>
      <List languages={props.languages} />
    </div>
  );
};

export default Languages;
