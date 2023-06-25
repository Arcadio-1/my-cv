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
  } = props;
  return (
    <div
      className={`main-contact-form-item ${clsName ? clsName : ""} ${
        value && "mt-5"
      }`}
    >
      <div
        className={`main-contact-form-item-container ${
          isValid ? "validItem" : ""
        } ${error ? "unvalidItem" : ""} `}
      >
        <label htmlFor={htmlId} className={`main-contact-form-item-icon`}>
          {children}
        </label>
        <label
          htmlFor={htmlId}
          className={`main-contact-form-item-label  ${value && "labelUper"}`}
        >
          {label}
        </label>
        <input
          required
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`main-contact-form-item-input ${inputCls}`}
          id={htmlId}
          type={inputType}
        />
      </div>

      {error && (
        <label
          htmlFor={htmlId}
          className="main-contact-form-item-errorMsg"
        >{`${errorMsg}`}</label>
      )}
    </div>
  );
};

export default Item;
