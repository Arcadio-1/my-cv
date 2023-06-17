import { Language } from "@/app/util/types";
import React from "react";
interface Props {
  languages: Language[];
}
const Language_component = (props: Props) => {
  return (
    <div className="main-resume-language">
      <h2 className="tittle">زبان های مسلط</h2>
      <div className="list">
        {props.languages.map((item) => {
          return (
            <div key={item.id} className="list-item">
              <div className="data">
                <h2 className="data-tittle">{item.tittle}</h2>
                <span className="data-persent">{item.level}%</span>
              </div>
              <div className="progressBar">
                <div
                  className="progressBar-percent"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Language_component;
