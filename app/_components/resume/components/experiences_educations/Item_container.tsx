import { Experience } from "@/util/Types/types";
import React, { Fragment } from "react";
import CalenderIcon from "./components/CalenderIcon";
import LocationIcon from "./components/LocationIcon";
import Link from "next/link";

interface Props {
  item: Experience;
}

const Item_container = (props: Props) => {
  const { item } = props;
  return (
    <Fragment>
      <p className="title">{item.title}</p>
      <div className="content">
        <div className="content_line">
          <CalenderIcon />
          <div className="date">
            <span className="date_since">{item.since}</span>
            <span className="date_dash">_</span>
            <span className="date_to">{item.to}</span>
          </div>
        </div>
        <div className="content_line">
          <LocationIcon />
          {item.link ? (
            <Link target="_blank" className="place" href={item.link}>
              {item.place}
            </Link>
          ) : (
            <span className="place">{item.place}</span>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Item_container;
