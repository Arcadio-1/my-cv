import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  tittle: string;
  url: string;
  icon: string;
}
const Item = (props: Props) => {
  return (
    <li className="aside-header-socialmedias-list-item">
      <Link target="_blank" href={props.url}>
        <Image
          // className="bg-[snow] rounded-full"
          src={props.icon}
          alt={props.tittle}
          width={22}
          height={22}
        />
      </Link>
    </li>
  );
};

export default Item;
