"use client";
import React from "react";
import { Lang, Theme } from "../../Types/types";
import Link from "next/link";
import Light_icon from "./icons/Light_icon";
import Dark_icon from "./icons/Dark_icon";
import GithubIcon from "./icons/GithubIcon";
import En_icon from "./icons/En_icon";
import Fa_icon from "./icons/Fa_icon";

interface Props {
  lang: Lang;
  theme: Theme;
  onChangeTheme: () => void;
}

const ControlerBox = (props: Props) => {
  const { lang, theme, onChangeTheme } = props;
  return (
    <div className="controler">
      <div className="controler-list">
        {lang === Lang.fa && (
          <div className="controler-list-item">
            <Link href={"/en"}>
              <En_icon />
            </Link>
          </div>
        )}
        {lang === Lang.en && (
          <div className="controler-list-item">
            <Link href={"/"}>
              <Fa_icon />
            </Link>
          </div>
        )}
        {theme === Theme.Dark && (
          <div onClick={onChangeTheme} className="controler-list-item">
            <Light_icon />
          </div>
        )}
        {theme === Theme.Light && (
          <div onClick={onChangeTheme} className="controler-list-item">
            <Dark_icon />
          </div>
        )}
        <div className="controler-list-item">
          <Link target="_blank" href={"https://github.com/Arcadio-1/my-cv.git"}>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlerBox;
