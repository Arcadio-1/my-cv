"use client";
import React from "react";
import Item from "./Item";
import { Personal_info } from "@/app/util/types";
import { useInView } from "react-intersection-observer";
interface Props {
  personal_info: Personal_info;
}
const List = (props: Props) => {
  const { personal_info } = props;

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <ul
      ref={ref}
      className={`main-about-list  ${inView ? "main-about-list-animator" : ""}`}
    >
      <div className="main-about-list-col">
        <Item label="شماره تماس" data={personal_info.mobile} />
        <Item label="وضعیت خدمت" data={personal_info.military_service} />
        <Item label="وضعیت تاهل" data={personal_info.marital_status} />
        <Item label="سن" data={personal_info.age} />
      </div>
      <div className="main-about-list-col">
        <Item label="محل سکونت" data={personal_info.residence} />
        <Item label="مدرک تحصیلی" data={personal_info.degree} />
        <Item label="پست الکترونیک" data={personal_info.email} />
        <Item label="پذیرش سفارش" data={personal_info.get_project} />
      </div>
    </ul>
  );
};

export default List;
