"use client";
import { uiAction } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenToggle, Theme } from "../../Types/types";

interface Props {
  theme: Theme;
}

export const Backdrop = (props: Props) => {
  const dispatchBackdropClose = useDispatch();
  const isShowBackdrop = useSelector((state: any) => state.ui.isShowBackdrop);

  const closeBackdropHandler = () => {
    dispatchBackdropClose(uiAction.closeBackdrop());
  };

  return (
    <div
      onClick={closeBackdropHandler}
      className={`${isShowBackdrop === OpenToggle.open ? "backdrop" : ""} ${
        props.theme === Theme.Light ? "backdrop-lighter" : ""
      }`}
    ></div>
  );
};
