"use client";
import React, { useState, useEffect } from "react";
import MobileIcon from "./components/MobileIcon";
import EmailIcon from "./components/EmailIcon";
import TelegramIcon from "./components/TelegramIcon";
import Item from "./components/Item";
import { useInView } from "react-intersection-observer";
import { Contact_base_labels } from "@/app/util/Types/types";
interface Props {
  mobile: string;
  email: string;
  telegram: string;
  labels: Contact_base_labels;
}

const ContactLines = (props: Props) => {
  const [contactLinesState, setContactLinesState] = useState<
    React.ReactElement[]
  >([]);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
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
    if (inView) {
      setContactLinesState((prev) => {
        return (prev = []);
      });
      for (let i = 0; i < contactLines_arry.length; i++) {
        setTimeout(() => {
          setContactLinesState((prev) => {
            return (prev = [...prev, contactLines_arry[i]]);
          });
        }, 300 * i);
      }
    }
  }, [inView, props]);

  return (
    <div ref={ref} className="main-contact-contactLines">
      {contactLinesState.map((item, index) => {
        return (
          <div
            className={`main-contact-contactLines-item ${
              inView ? "main-contact-contactLines-animator" : ""
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
