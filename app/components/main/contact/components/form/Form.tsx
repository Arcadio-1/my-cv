"use client";
import useInputValidation from "@/app/util/Hooks/UseInputValidation";
import React, { FormEvent } from "react";
import Item from "./components/Item";
// import EmailIcon from "../contactLines/components/EmailIcon";
import MailIcon from "./components/MailIcon";
import UserIcon from "./components/UserIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { Status } from "@/app/util/types";
import NotifCard from "@/app/components/util-ui/notifCard/NotifCard";

const Form = () => {
  const dispatchSendMessageStatus = useDispatch();
  const dispatchNotifCardStatus = useDispatch();
  const sendMessageStatus = useSelector(
    (state: any) => state.ui.send_message_status
  );
  const notifCardStatus = useSelector(
    (state: any) => state.ui.notif_card_status
  );

  // useEffect(() => {
  //   console.log(sendMessageStatus);
  //   console.log(notifCardStatus);
  // }, [sendMessageStatus, notifCardStatus]);

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
        tittle: "در حال ارسال",
        message: "در حال ارسال پیغام شما",
      })
    );
    dispatchNotifCardStatus(
      uiAction.set_notif_card_status({
        status: Status.loading,
        tittle: "در حال ارسال",
        message: "در حال ارسال پیغام شما",
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
      console.log(response);
      if (response.status === 200) {
        nameResetHandler();
        emailResetHandler();
        messageResetHandler();
        dispatchNotifCardStatus(
          uiAction.set_notif_card_status({
            status: Status.success,
            tittle: "با موفقیت ارسال شد",
            message: "ارسال پیام با موفقیت انجام شد",
          })
        );
        dispatchSendMessageStatus(
          uiAction.set_send_message_status({
            status: Status.success,
            tittle: "با موفقیت ارسال شد",
            message: "ارسال پیام با موفقیت انجام شد",
          })
        );
      }
      if (response.status === 500) {
        dispatchSendMessageStatus(
          uiAction.set_send_message_status({
            status: Status.error,
            tittle: "خطا در ارسال",
            message: "خطا در ارسال پیام لطفا با فیلترشکن امتحان کنید",
          })
        );
        dispatchNotifCardStatus(
          uiAction.set_notif_card_status({
            status: Status.error,
            tittle: "خطا در ارسال",
            message: "خطا در ارسال پیام لطفا با فیلترشکن امتحان کنید",
          })
        );
      }
    } catch (error) {
      dispatchSendMessageStatus(
        uiAction.set_send_message_status({
          status: Status.error,
          tittle: "خطا در ارسال",
          message: "خطا در ارسال پیام لطفا با فیلترشکن امتحان کنید",
        })
      );
      dispatchNotifCardStatus(
        uiAction.set_notif_card_status({
          status: Status.error,
          tittle: "خطا در ارسال",
          message: "خطا در ارسال پیام لطفا با فیلترشکن امتحان کنید",
        })
      );
    }
  };

  return (
    <div className="main-contact-form">
      <NotifCard />

      <form className="formContainer">
        <Item
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={nameValue}
          isValid={isNameValid}
          error={nameError}
          errorMsg={"لطفا نام خود را وارد کنید"}
          label="نام"
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
          label="ایمیل"
          htmlId="email"
          inputType="email"
          itemRef={emailRef}
          errorMsg={" ایمیل وارد شده صحیح نمیباشد"}
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
              placeholder="پیام شما"
              className={`main-contact-form-item-textArea ${
                isMessageValid ? "focus:outline-g1_2" : ""
              }`}
            />
          </div>
          {messageError && (
            <p className="main-contact-form-item-errorMsg">
              لطفا پیام خود را وارد کنید
            </p>
          )}
        </div>
        <div className="actions">
          {sendMessageStatus.status !== Status.loading && (
            <button onClick={submitMessageHandler} className="actions-submit">
              ارسال
            </button>
          )}
          {sendMessageStatus.status === Status.loading && (
            <p className="actions-submit opacity-70 cursor-default">
              در حال ارسال
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
