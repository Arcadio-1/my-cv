import useInputValidation from "@/app/util/Hooks/UseInputValidation";
import React from "react";
import Item from "./components/Item";
import EmailIcon from "../contactLines/components/EmailIcon";
import MailIcon from "./components/MailIcon";
import UserIcon from "./components/UserIcon";

const Form = () => {
  const {
    value: nameValue,
    isValid: isNameValid,
    errorStatus: nameError,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: nameResetHandler,
  } = useInputValidation((value) => {
    const nameString = String(value);
    const regex = RegExp(/^[a-zA-Z\-0-9]+$/);
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
  } = useInputValidation((value) => {
    const emailString = String(value).toLowerCase();
    const regex = RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValid = regex.test(emailString);
    return isValid;
  });

  const {
    value: addressValue,
    isValid: isAddressValid,
    errorStatus: addressError,
    inputBlurHandler: addressBlurHandler,
    inputChangeHandler: addressChangeHandler,
    reset: addressResetHandler,
  } = useInputValidation((value) => {
    const addressString = String(value);
    const regex = RegExp(/^\s*\S+(?:\s+\S+){2}/);
    const isValid = regex.test(addressString);
    return isValid;
  });

  return (
    <div className="main-contact-form">
      <form className="formContainer">
        <Item
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={nameValue}
          isValid={isNameValid}
          error={nameError}
          errorMsg={"نام خود را به زبان فارسی وارد کنید"}
          label="نام"
          htmlId="name"
          inputType="text"
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
          errorMsg={" ایمیل وارد شده صحیح نمیباشد"}
        >
          <MailIcon />
        </Item>
        <div
          className={`main-contact-form-item ${
            isAddressValid ? "focus:outline-g1_2" : ""
          }`}
        >
          <div
            className={`main-contact-form-item-container ${
              addressError ? "unvalidItem" : ""
            } ${isAddressValid ? "validItem" : ""}`}
          >
            <textarea
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              value={addressValue}
              required
              rows={10}
              placeholder="پیام شما"
              className={`main-contact-form-item-textArea ${
                isAddressValid ? "focus:outline-g1_2" : ""
              }`}
            />
          </div>
          {addressError && (
            <p className="main-contact-form-item-errorMsg">
              لطفا پیام خود را وارد کنید
            </p>
          )}
        </div>
        <div className="actions">
          <button className="actions-submit">ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
