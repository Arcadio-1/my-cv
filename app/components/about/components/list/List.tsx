"use client";
import React, { useEffect } from "react";
import Item from "./Item";
import {
  About_base_labels,
  InView,
  Personal_info,
} from "@/app/util/Types/types";
import useScrollMotion from "@/app/util/Hooks/UseScrollMotion";
interface Props {
  personal_info: Personal_info;
  labels: About_base_labels;
}
const List = (props: Props) => {
  const { personal_info, labels } = props;
  const { inView, ref } = useScrollMotion(InView.about);

  return (
    <div
      ref={ref}
      className={`main-about-list  ${inView ? "main-about-list-animator" : ""}`}
    >
      <div className="main-about-list-col">
        <Item label={labels.mobile} data={personal_info.mobile} />
        <Item label={labels.residence} data={personal_info.residence} />
        <Item
          label={labels.marital_status}
          data={personal_info.marital_status}
        />
        <Item label={labels.age} data={personal_info.age} />
      </div>
      <div className="main-about-list-col">
        <Item label={labels.email} data={personal_info.email} />
        <Item label={labels.degree} data={personal_info.degree} />
        <Item
          label={labels.military_service}
          data={personal_info.military_service}
        />
        <Item label={labels.get_project} data={personal_info.get_project} />
      </div>
    </div>
  );
};

export default List;

// className={`main-about-list  ${inView ? "main-about-list-animator" : ""}`}
