import { Lang, Theme } from "@/util/Types/types";
import React, { useEffect } from "react";
import Video from "./components/Video";
import Lninks from "./components/Lninks";
import Header from "./components/Header";

interface Props {
  lang: Lang;
  theme: Theme;
}

const Latest_design = ({ lang, theme }: Props) => {
  return (
    <div
      dir="ltr"
      className={`bg-red-100 dark:bg-gray-950  bg-opacity-50 dark:bg-opacity-50 dark:backdrop-blur-sm backdrop-blur-sm mt-10 mx-4 rounded-[5px] flex flex-col gap-3 w-full md:w-auto ${
        lang === Lang.fa ? "md:ml-auto" : "md:ml-auto"
      }`}
    >
      <Header />
      <div className="flex flex-col  justify-between gap-1 items-center">
        <Video />
        <Lninks />
      </div>
    </div>
  );
};

export default Latest_design;
