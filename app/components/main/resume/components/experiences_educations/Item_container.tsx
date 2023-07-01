import { Experience } from "@/app/util/types";
import React, { Fragment } from "react";

interface Props {
  item: Experience;
}

const Item_container = (props: Props) => {
  const { item } = props;
  return (
    <Fragment>
      <p className="tittle">{item.tittle}</p>
      <div className="date">
        <span className="date-since">{item.since}</span>
        <span className="date-dash">-</span>
        <span className="date-to">{item.to}</span>
      </div>
      <span className="place">{item.place}</span>
    </Fragment>
  );
};

export default Item_container;
