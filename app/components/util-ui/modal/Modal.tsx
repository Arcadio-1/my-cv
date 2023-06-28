"use client";

import React, { Fragment, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
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
    </Fragment>
  ) : null;
};

export default Modal;
