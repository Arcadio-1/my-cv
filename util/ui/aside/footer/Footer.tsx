import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="aside_footer">
      <div className="aside_footer_copyright">
        <span>© Copyright</span>
        <span>Arcadio</span>
      </div>
      <div className="aside_footer_designed">
        <span className="">Designed by </span>
        <Link target="_blank" href={"https://github.com/Arcadio-1"}>
          <span className="aside_footer_designed_name">Arcadio</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
