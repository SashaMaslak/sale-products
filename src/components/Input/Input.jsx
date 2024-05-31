import React from "react"
import css from "./Input.module.css"

const Input = props => {
  const { inputName, inputType, inputPlaceholder } = props
  console.log(inputName)
  return (
    <div className={css.formGroup}>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={inputPlaceholder}
        required
      />
    </div>
  )
}

export default Input
