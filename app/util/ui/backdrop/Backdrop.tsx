"use client";
import { uiAction } from "@/redux/features/ui/uiSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenToggle } from "../../Types/types";
export const Backdrop = () => {
  const dispatchBackdropClose = useDispatch();
  const isShowBackdrop = useSelector((state: any) => state.ui.isShowBackdrop);

  const closeBackdropHandler = () => {
    dispatchBackdropClose(uiAction.closeBackdrop());
  };

  return (
    <div
      onClick={closeBackdropHandler}
      className={`${isShowBackdrop === OpenToggle.open ? "backdrop" : ""}`}
    ></div>
  );
};
