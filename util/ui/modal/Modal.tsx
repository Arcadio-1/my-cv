"use client";

import React, { Fragment, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../backdrop/Backdrop";
import { Theme } from "../../Types/types";
import { UiMainState, uiAction } from "@/redux/features/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  children: ReactNode;
  theme: Theme;
}

const Modal = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const dispatchWindowWidth = useDispatch();
  const dispatchActiveAnimation = useDispatch();
  const windowWidth = useSelector((state: UiMainState) => state.ui.windowWidth);
  useEffect(() => {
    function updateSize() {
      dispatchWindowWidth(uiAction.set_windowWidth(window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatchWindowWidth]);

  useEffect(() => {
    if (windowWidth > 768) {
      dispatchActiveAnimation(uiAction.activeAnimation());
    }
    if (windowWidth < 768) {
      dispatchActiveAnimation(uiAction.deactiveAnimation());
    }
  }, [windowWidth, dispatchActiveAnimation]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? (
    <Fragment>
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("overLay")!
      )}
      {ReactDOM.createPortal(
        <Backdrop theme={props.theme} />,
        document.getElementById("overLay")!
      )}
    </Fragment>
  ) : null;
};

export default Modal;
