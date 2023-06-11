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
    <li className="2px solid bg-red-500">
      <Link target="_blank" href={props.url}>
        <Image src={props.icon} alt={props.tittle} width={20} height={20} />
      </Link>
    </li>
  );
};

export default Item;
