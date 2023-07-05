import { Group } from "@/app/util/Types/types";
import React from "react";
interface Props {
  filters: Group[];
  onFilter: (group: Group) => void;
  filter: Group;
  label: string;
}
const Filter = (props: Props) => {
  return (
    <div className="main-portfolio-filter">
      <ul className="nav">
        <li
          onClick={() => {
            props.onFilter(Group.all);
          }}
          className={`item ${props.filter === Group.all && "selecteFilter"}`}
          key={Math.random() * 10}
        >
          <span>{props.label}</span>
        </li>
        {props.filters.map((item, index) => {
          return (
            <li
              onClick={() => {
                props.onFilter(item);
              }}
              className={`item ${props.filter === item && "selecteFilter"}`}
              key={item}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
