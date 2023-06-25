import React from "react";
import MobileIcon from "./components/MobileIcon";
import EmailIcon from "./components/EmailIcon";
import TelegramIcon from "./components/TelegramIcon";
import Item from "./components/Item";
interface Props {
  mobile: string;
  email: string;
  telegram: string;
}
const ContactLines = (props: Props) => {
  return (
    <div className="main-contact-contactLines">
      <Item content={props.email} label="پست الکترونیک:">
        <EmailIcon />
      </Item>
      <Item content={props.mobile} label=" موبایل:">
        <MobileIcon />
      </Item>
      <Item content={props.telegram} label="تلگرام:">
        <TelegramIcon />
      </Item>
    </div>
  );
};

export default ContactLines;
