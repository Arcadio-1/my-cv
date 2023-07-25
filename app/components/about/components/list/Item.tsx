import React from "react";
interface Props {
  label: string;
  data: any;
}
const Item = (props: Props) => {
  return (
    <li className="main_about_list_item">
      <label className="label">{props.label} :</label>
      <span className="text">{props.data}</span>
    </li>
  );
};

export default Item;
