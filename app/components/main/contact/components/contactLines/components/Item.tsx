import React from "react";
interface Props {
  label: string;
  content: string;
  children?: any;
}

const Item = (props: Props) => {
  return (
    <div className="main-contact-contactLines-item">
      {props.children}
      <div className="content">
        <p className="content-label">{props.label}</p>
        <p className="content-value">{props.content}</p>
      </div>
    </div>
  );
};

export default Item;
