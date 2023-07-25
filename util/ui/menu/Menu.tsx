"use client";
import React from "react";
import MenuIcon from "./components/MenuIcon";
import CloseIcon from "./components/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { Lang, OpenToggle, Theme } from "@/util/Types/types";
import ControlerBox from "../controler/ControlerBox";
interface Props {
  lang: Lang;
  theme: Theme;
  onChangeTheme: () => void;
}

const Menu = (props: Props) => {
  const dispatchClose = useDispatch();
  const dispatchOpen = useDispatch();

  const isMenuOpen = useSelector((state: any) => state.ui.isMenuOpen);

  const OpenHandler = () => {
    dispatchOpen(uiAction.openMenu());
  };

  const closeHandler = () => {
    dispatchClose(uiAction.closeMenu());
  };

  return (
    <div className="menu">
      {isMenuOpen === OpenToggle.close && (
        <div className="menu-nav">
          <button onClick={OpenHandler}>
            <MenuIcon />
          </button>
          <ControlerBox
            lang={props.lang}
            theme={props.theme}
            onChangeTheme={props.onChangeTheme}
          />
        </div>
      )}
      {isMenuOpen === OpenToggle.open && (
        <button onClick={closeHandler}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default Menu;
