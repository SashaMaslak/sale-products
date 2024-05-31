import React from "react"
import css from "./Button.module.css"

const Button = props => {
  const { buttonType } = props
  return (
    <div>
      <button type={buttonType} className={css.button}>
        Login
      </button>
    </div>
  )
}

export default Button
