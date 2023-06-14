import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icons";
interface Props {
  id: string;
  tittle: string;
  tag: string;
  icon: string;
  component: string;
}
const Item = (props: Props) => {
  return (
    <li className="aside-nav-list-item">
      <Link href={props.tag}>
        <Icon component={props.component} id={props.id} />
        {/* <Image src={props.icon} width={20} height={20} alt={props.tittle} /> */}
        <span>{props.tittle}</span>
      </Link>
    </li>
  );
};

export default Item;
