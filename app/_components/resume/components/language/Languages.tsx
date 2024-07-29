"use client";
import { Language } from "@/util/Types/types";
import React from "react";
import List from "./components/List";
interface Props {
  languages: Language[];
  title: string;
}
const Languages = (props: Props) => {
  return (
    <div className="main_resume_language">
      <h2 className="title">{props.title}</h2>
      <List languages={props.languages} />
    </div>
  );
};

export default Languages;
