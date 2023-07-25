"use client";
import React from "react";
import MobileIcon from "./components/MobileIcon";
import EmailIcon from "./components/EmailIcon";
import TelegramIcon from "./components/TelegramIcon";
import Item from "./components/Item";
import { Contact_base_labels, InView } from "@/util/Types/types";
import useScrollMotion from "@/util/Hooks/UseScrollMotion";
import { useSelector } from "react-redux";
import { UiMainState } from "@/redux/features/ui/uiSlice";
interface Props {
  mobile: string;
  email: string;
  telegram: string;
  labels: Contact_base_labels;
}

const ContactLines = (props: Props) => {
  const isAnimationActive = useSelector(
    (state: UiMainState) => state.ui.activeAnimation
  );
  const { inView, ref } = useScrollMotion(InView.contact);
  const contactLines_arry: React.ReactElement[] = [
    <Item key={1} content={props.email} label={props.labels.email}>
      <EmailIcon />
    </Item>,
    <Item key={2} content={props.mobile} label={props.labels.mobile}>
      <MobileIcon />
    </Item>,
    <Item key={3} content={props.telegram} label={props.labels.telegram}>
      <TelegramIcon />
    </Item>,
  ];

  return (
    <div ref={ref} className="main-contact-contactLines">
      {contactLines_arry.map((item, index) => {
        return (
          <div
            className={`main-contact-contactLines-item ${
              isAnimationActive && inView
                ? "main-contact-contactLines-animator"
                : ""
            } `}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ContactLines;
