import SectionHeader from "@/app/util/ui/SectionHeader/SectionHeader";
import React from "react";
import Form from "./components/form/Form";
import ContactLines from "./components/contactLines/ContactLines";
import { Contact_base } from "@/app/util/Types/types";
interface Props {
  mobile: string;
  email: string;
  telegram: string;
  base: Contact_base;
}
const Contact = (props: Props) => {
  return (
    <div className="main-contact">
      <SectionHeader
        tag="contact"
        tittle={props.base.section_tittle}
        description=""
      />
      <div className="main-contact-container">
        <ContactLines
          labels={props.base.labels}
          mobile={props.mobile}
          email={props.email}
          telegram={props.telegram}
        />
        <Form
          buttons={props.base.form.buttons}
          errorMessages={props.base.form.error_messages}
          notifCard={props.base.form.notif_card}
          placeHolders={props.base.form.place_holders}
        />
      </div>
    </div>
  );
};

export default Contact;
