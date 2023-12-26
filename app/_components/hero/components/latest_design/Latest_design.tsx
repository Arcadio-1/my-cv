import { Lang } from "@/util/Types/types";
import React from "react";
import Video from "./components/Video";
import Lninks from "./components/Lninks";
import Header from "./components/Header";

interface Props {
  lang: Lang;
}

const Latest_design = ({ lang }: Props) => {
  return (
    <div
      dir="ltr"
      className={`bg-gray-950 bg-opacity-50 backdrop-blur-sm mt-10 mx-4 rounded-[5px] flex flex-col gap-3 ${
        lang === Lang.fa ? "ml-auto" : "ml-auto"
      }`}
    >
      <Header />
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <Video />
        <Lninks />
      </div>
    </div>
  );
};

export default Latest_design;
