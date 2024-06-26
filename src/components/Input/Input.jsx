import React from "react"
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import css from "./Input.module.css"

const Input = ({
  inputName,
  inputType,
  inputPlaceholder,
  required,
  toggleVisiblePass,
  value,
  isEmpty,
  onChange,
  onBlur,
  inModal,
}) => (
  <div className={`${css.formGroup} ${inModal && css.inModal}`}>
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${css.input} ${isEmpty && css.inputEmpty}`}
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      required={required}
    />

    {inputName === "password" && inputType === "password" && (
      <button>
        <FaEyeSlash
          onClick={() => toggleVisiblePass()}
          className={`icon ${css.loginFormIcon}`}
        />
      </button>
    )}
    {inputName === "password" && inputType === "text" && (
      <button>
        <FaEye
          onClick={() => toggleVisiblePass()}
          className={`icon ${css.loginFormIcon}`}
        />
      </button>
    )}
  </div>
)

export default Input
