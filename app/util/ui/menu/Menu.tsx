"use client";
import React from "react";
import MenuIcon from "./components/MenuIcon";
import CloseIcon from "./components/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { OpenToggle } from "@/app/util/Types/types";

const Menu = () => {
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
        <button onClick={OpenHandler}>
          <MenuIcon />
        </button>
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
