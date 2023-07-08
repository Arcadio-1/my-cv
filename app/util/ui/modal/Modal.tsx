"use client";

import React, { Fragment, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../backdrop/Backdrop";
import { Theme } from "../../Types/types";

interface Props {
  children: ReactNode;
  theme: Theme;
}

const Modal = (props: Props) => {
  const [mounted, setMounted] = useState(false);

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
