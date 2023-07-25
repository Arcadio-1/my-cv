import React from "react";

interface Props {
  label: string;
  clsName?: string;
  htmlId: string;
  inputType: string;
  inputCls?: string;
  isValid: boolean;
  children: any;
  value?: string | number;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
  error: boolean;
  itemRef: any;
}

const Item = (props: Props) => {
  const {
    label,
    clsName,
    htmlId,
    inputType,
    inputCls,
    isValid,
    children,
    value,
    onBlur,
    onChange,
    errorMsg,
    error,
    itemRef,
  } = props;
  return (
    <div
      className={`main_contact_form_item ${clsName ? clsName : ""} ${
        value && "mt-5"
      }`}
    >
      <div
        className={`main_contact_form_item_container ${
          isValid ? "validItem" : ""
        } ${error ? "unvalidItem" : ""} `}
      >
        <label htmlFor={htmlId} className={`main_contact_form_item_icon`}>
          {children}
        </label>
        <label
          htmlFor={htmlId}
          className={`main_contact_form_item_label  ${value && "labelUper"}`}
        >
          {label}
        </label>
        <input
          ref={itemRef}
          required
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`main_contact_form_item_input ${inputCls}`}
          id={htmlId}
          type={inputType}
        />
      </div>

      {error && (
        <label
          htmlFor={htmlId}
          className="main_contact_form_item_errorMsg"
        >{`${errorMsg}`}</label>
      )}
    </div>
  );
};

export default Item;
