import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import Form from "./components/form/Form";
import ContactLines from "./components/contactLines/ContactLines";
import { Personal_info, Social_media } from "@/app/util/Types/types";
interface Props {
  mobile: string;
  email: string;
  telegram: string;
}
const Contact = (props: Props) => {
  return (
    <div className="main-contact">
      <SectionHeader tag="contact" tittle="تماس با من" description="" />
      <div className="main-contact-container">
        <ContactLines
          mobile={props.mobile}
          email={props.email}
          telegram={props.telegram}
        />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
