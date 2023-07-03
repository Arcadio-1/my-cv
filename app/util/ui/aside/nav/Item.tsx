"use clinet";
import Link from "next/link";
import React from "react";
import Icon from "./Icons";
import { useDispatch } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
interface Props {
  id: string;
  tittle: string;
  tag: string;
  icon: string;
  component: string;
}
const Item = (props: Props) => {
  const dispatchClose = useDispatch();

  const closeHandler = () => {
    dispatchClose(uiAction.closeMenu());
  };
  return (
    <li className="aside-nav-list-item" onClick={closeHandler}>
      <Link href={props.tag}>
        <Icon component={props.component} id={props.id} />
        <span>{props.tittle}</span>
      </Link>
    </li>
  );
};

export default Item;
