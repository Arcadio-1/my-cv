import { Experience } from "@/app/util/types";
import React from "react";
interface Props {
  header: string;
  experience: Experience[];
}
const Experience_component = (props: Props) => {
  // const { id, tittle, place, since, to } = props.experience;
  return (
    <div className="main-resume-experiences-experience">
      <h2 className="header">{props.header}</h2>
      <div className="list">
        {props.experience.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <p className="tittle">{item.tittle}</p>
              <div className="date">
                <span className="date-since">{item.since}</span>
                <span className="date-dash">-</span>
                <span className="date-to">{item.to}</span>
              </div>
              <span className="place">{item.place}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience_component;
