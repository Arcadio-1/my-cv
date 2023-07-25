import React, { Fragment } from "react";
interface Props {
  label: string;
  content: string;
  children?: any;
}

const Item = (props: Props) => {
  return (
    <Fragment>
      {props.children}
      <div className="content">
        <p className="content-label">{props.label}</p>
        <p className="content-value">{props.content}</p>
      </div>
    </Fragment>
  );
};

export default Item;
