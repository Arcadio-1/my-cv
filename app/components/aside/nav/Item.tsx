import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  tittle: string;
  tag: string;
  icon: string;
}
const Item = (props: Props) => {
  return (
    <li>
      <Link href={props.tag} className="flex">
        <Image src={props.icon} width={20} height={20} alt={props.tittle} />
        <span>{props.tittle}</span>
      </Link>
    </li>
  );
};

export default Item;
