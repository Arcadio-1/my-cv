import { Experience } from "@/util/Types/types";
import React, { Fragment } from "react";
import CalenderIcon from "./components/CalenderIcon";
import LocationIcon from "./components/LocationIcon";

interface Props {
  item: Experience;
}

const Item_container = (props: Props) => {
  const { item } = props;
  return (
    <Fragment>
      <p className="tittle">{item.tittle}</p>
      <div className="content">
        <div className="content-line">
          <CalenderIcon />
          <div className="date">
            <span className="date-since">{item.since}</span>
            <span className="date-dash">-</span>
            <span className="date-to">{item.to}</span>
          </div>
        </div>
        <div className="content-line">
          <LocationIcon />
          <span className="place">{item.place}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Item_container;
