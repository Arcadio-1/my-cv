import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <span>© Copyright</span>
        <span>Arcadio</span>
      </div>
      <div className="flex">
        <span className="">Designed by</span>
        <Link target="_blank" href={"https://github.com/Arcadio-1"}>
          <span>Arcadio</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
