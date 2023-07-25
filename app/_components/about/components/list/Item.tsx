import React from "react";
import style from "../../about.module.scss";
interface Props {
  label: string;
  data: any;
}
const Item = (props: Props) => {
  return (
    <li className={style.main_about_list_item}>
      <label className={style.label}>{props.label} :</label>
      <span className={style.text}>{props.data}</span>
    </li>
  );
};

export default Item;
