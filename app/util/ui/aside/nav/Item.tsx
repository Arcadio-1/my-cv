"use clinet";
// import Link from "next/link";
import React, { useEffect } from "react";
import Icon from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { UiMainState, uiAction } from "@/redux/features/ui/uiSlice";
import { usePathname } from "next/navigation";
interface Props {
  id: string;
  tittle: string;
  link: string;
  icon: string;
  component: string;
}
const Item = (props: Props) => {
  const path = usePathname();
  const dispatchClose = useDispatch();
  const isMenuOpen = useSelector((state: UiMainState) => state.ui.isMenuOpen);

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  const closeHandler = () => {
    if (isMenuOpen) {
      dispatchClose(uiAction.closeMenu());
    }
  };
  return (
    <li className={`aside-nav-list-item `} onClick={isMenuOpen && closeHandler}>
      <a href={`${path}#${props.link}`}>
        <Icon component={props.component} id={props.id} />
        <span>{props.tittle}</span>
      </a>
    </li>
  );
};

export default Item;
