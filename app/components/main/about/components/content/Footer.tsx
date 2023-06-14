import { Motivation_quote } from "@/app/util/types";
import React from "react";
interface Props {
  quote: Motivation_quote;
}
const Footer = (props: Props) => {
  return (
    <footer className="main-about-footer">
      <span className="main-about-footer-quote">{props.quote.quote}</span>
      <p className="main-about-footer-quoteBy">{props.quote.by}</p>
    </footer>
  );
};

export default Footer;
