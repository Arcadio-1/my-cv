import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="aside-footer">
      <div className="aside-footer-copyright">
        <span>© Copyright</span>
        <span>Arcadio</span>
      </div>
      <div className="aside-footer-designed">
        <span className="">Designed by</span>
        <Link target="_blank" href={"https://github.com/Arcadio-1"}>
          <span>Arcadio</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
