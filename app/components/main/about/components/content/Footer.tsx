import { About_me, Motivation_quote } from "@/app/util/types";
import React from "react";
interface Props {
  children: any;
}
const Footer = (props: Props) => {
  console.log(props.children);
  return (
    <footer className="main-about-footer">
      <div
        className="main-about-footer-content"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    </footer>
  );
};

export default Footer;
