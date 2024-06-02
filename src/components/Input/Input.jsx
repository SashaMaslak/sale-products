import React from "react"
import { FaEye } from "react-icons/fa"
import { colors } from "../../constants/colors"
import css from "./Input.module.css"

const Input = props => {
  const { inputName, inputType, inputPlaceholder, required } = props
  return (
    <div className={css.formGroup}>
      <input
        className={css.input}
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={inputPlaceholder}
        required={required}
      />
      {inputType === "password" && (
        <button>
          <FaEye className={`icon ${css.loginFormIcon}`} />
        </button>
      )}
    </div>
  )
}

export default Input
