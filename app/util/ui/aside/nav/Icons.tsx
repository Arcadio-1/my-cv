import React from "react";
import Home_icon from "./icon/Home_icon";
import About_icon from "./icon/About_icon";
import Resume_icon from "./icon/Resume_icon";
import Contact_icon from "./icon/Contact_icon";
import Portofolio_icon from "./icon/Portofolio_icon";
import Skills_icon from "./icon/Skills_icon";

const Components: any = {
  home_icon: Home_icon,
  about_icon: About_icon,
  resume_icon: Resume_icon,
  contact_icon: Contact_icon,
  portofolio_icon: Portofolio_icon,
  skills_icon: Skills_icon,
};
interface Props {
  component: string;
  id: string;
}
const Icon = (props: Props) => {
  if (typeof Components[props.component] !== "undefined") {
    return React.createElement(Components[props.component], {
      //   key: props.id,
      //   block: props,
    });
  }
  return React.createElement(
    () => <div>The component {props.component} has not been created yet.</div>,
    { key: props.id }
  );
};

export default Icon;
