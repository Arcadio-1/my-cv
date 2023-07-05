"use client";
import useInputValidation from "@/app/util/Hooks/UseInputValidation";
import React, { FormEvent } from "react";
import Item from "./components/Item";
import MailIcon from "./components/MailIcon";
import UserIcon from "./components/UserIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import {
  Form_base_buttons,
  Form_base_error_messages,
  Form_base_notifs_card,
  Form_base_place_holders,
  Status,
} from "@/app/util/Types/types";
import NotifCard from "@/app/util/ui/notifCard/NotifCard";
import { useInView } from "react-intersection-observer";

interface Props {
  placeHolders: Form_base_place_holders;
  errorMessages: Form_base_error_messages;
  buttons: Form_base_buttons;
  notifCard: Form_base_notifs_card;
}

const Form = (props: Props) => {
  const dispatchSendMessageStatus = useDispatch();
  const dispatchNotifCardStatus = useDispatch();
  const sendMessageStatus = useSelector(
    (state: any) => state.ui.send_message_status
  );
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const {
    value: nameValue,
    isValid: isNameValid,
    errorStatus: nameError,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: nameResetHandler,
    inputRef: nameRef,
  } = useInputValidation((value) => {
    const nameString = String(value);
    const regex = RegExp(/^\s*\S/);
    const isValid = regex.test(nameString);
    return isValid;
  });

  const {
    value: emailValue,
    isValid: isEmailValid,
    errorStatus: emailError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: emailResetHandler,
    inputRef: emailRef,
  } = useInputValidation((value) => {
    const emailString = String(value).toLowerCase();
    const regex = RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValid = regex.test(emailString);
    return isValid;
  });

  const {
    value: messageValue,
    isValid: isMessageValid,
    errorStatus: messageError,
    inputBlurHandler: messageBlurHandler,
    inputChangeHandler: messageChangeHandler,
    reset: messageResetHandler,
    textareaRef: messageRef,
  } = useInputValidation((value) => {
    const messageString = String(value);
    const regex = RegExp(/^\s*\S+(?:\s+\S+){1}/);
    const isValid = regex.test(messageString);
    return isValid;
  });

  const submitMessageHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!isNameValid) {
      nameRef.current?.focus();
      nameBlurHandler();
      return;
    }
    if (!isEmailValid) {
      emailRef.current?.focus();
      emailBlurHandler();
      return;
    }
    if (!isMessageValid) {
      messageRef.current?.focus();
      messageBlurHandler();
      return;
    }
    dispatchSendMessageStatus(
      uiAction.set_send_message_status({
        status: Status.loading,
        tittle: `${props.notifCard.loading.tittle}`,
        message: `${props.notifCard.loading.message}`,
      })
    );
    dispatchNotifCardStatus(
      uiAction.set_notif_card_status({
        status: Status.loading,
        tittle: `${props.notifCard.loading.tittle}`,
        message: `${props.notifCard.loading.message}`,
      })
    );
    try {
      const postMessage = await fetch("/api/sendMessage", {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: messageValue,
        }),
      });
      const response = await postMessage.json();
      if (response.status === 200) {
        nameResetHandler();
        emailResetHandler();
        messageResetHandler();
        dispatchNotifCardStatus(
          uiAction.set_notif_card_status({
            status: Status.success,
            tittle: `${props.notifCard.success.tittle}`,
            message: `${props.notifCard.success.message}`,
          })
        );
        dispatchSendMessageStatus(
          uiAction.set_send_message_status({
            status: Status.success,
            tittle: `${props.notifCard.success.tittle}`,
            message: `${props.notifCard.success.message}`,
          })
        );
      }
      if (response.status === 500) {
        dispatchSendMessageStatus(
          uiAction.set_send_message_status({
            status: Status.error,
            tittle: `${props.notifCard.error.tittle}`,
            message: `${props.notifCard.error.message}`,
          })
        );
        dispatchNotifCardStatus(
          uiAction.set_notif_card_status({
            status: Status.error,
            tittle: `${props.notifCard.error.tittle}`,
            message: `${props.notifCard.error.message}`,
          })
        );
      }
    } catch (error) {
      dispatchSendMessageStatus(
        uiAction.set_send_message_status({
          status: Status.error,
          tittle: `${props.notifCard.error.tittle}`,
          message: `${props.notifCard.error.message}`,
        })
      );
      dispatchNotifCardStatus(
        uiAction.set_notif_card_status({
          status: Status.error,
          tittle: `${props.notifCard.error.tittle}`,
          message: `${props.notifCard.error.message}`,
        })
      );
    }
  };

  return (
    <div
      className={`main-contact-form ${
        inView ? "main-contact-form-animator" : ""
      }`}
    >
      <NotifCard />

      <form ref={ref} className="formContainer">
        <Item
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={nameValue}
          isValid={isNameValid}
          error={nameError}
          errorMsg={props.errorMessages.name}
          label={props.placeHolders.name}
          htmlId="name"
          inputType="text"
          itemRef={nameRef}
        >
          <UserIcon />
        </Item>
        <Item
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={emailValue}
          isValid={isEmailValid}
          error={emailError}
          label={props.placeHolders.email}
          htmlId="email"
          inputType="email"
          itemRef={emailRef}
          errorMsg={props.errorMessages.email}
        >
          <MailIcon />
        </Item>
        <div
          className={`main-contact-form-item ${
            isMessageValid ? "focus:outline-g1_2" : ""
          }`}
        >
          <div
            className={`main-contact-form-item-container ${
              messageError ? "unvalidItem" : ""
            } ${isMessageValid ? "validItem" : ""}`}
          >
            <textarea
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={messageValue}
              required
              rows={10}
              ref={messageRef}
              placeholder={props.placeHolders.message}
              className={`main-contact-form-item-textArea ${
                isMessageValid ? "focus:outline-g1_2" : ""
              }`}
            />
          </div>
          {messageError && (
            <p className="main-contact-form-item-errorMsg">
              {props.errorMessages.message}
            </p>
          )}
        </div>
        <div className="actions">
          {sendMessageStatus.status !== Status.loading && (
            <button onClick={submitMessageHandler} className="actions-submit">
              {props.buttons.send}
            </button>
          )}
          {sendMessageStatus.status === Status.loading && (
            <p className="actions-submit opacity-70 cursor-default">
              {props.buttons.sending}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
