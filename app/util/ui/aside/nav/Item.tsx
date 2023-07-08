"use clinet";
import Link from "next/link";
import React, { useEffect } from "react";
import Icon from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
interface Props {
  id: string;
  tittle: string;
  link: string;
  icon: string;
  component: string;
}
const Item = (props: Props) => {
  const dispatchClose = useDispatch();
  const inView = useSelector<string>((state: any) => state.ui.inView);

  useEffect(() => {
    console.log(inView);
    // console.log(props.link);
  }, [inView]);

  const closeHandler = () => {
    dispatchClose(uiAction.closeMenu());
  };
  return (
    <li className={`aside-nav-list-item `} onClick={closeHandler}>
      <div className={`${inView === props.link ? "active" : ""}`}>
        <Link href={`#${props.link}`}>
          <Icon component={props.component} id={props.id} />
          <span>{props.tittle}</span>
        </Link>
      </div>
    </li>
  );
};

export default Item;
