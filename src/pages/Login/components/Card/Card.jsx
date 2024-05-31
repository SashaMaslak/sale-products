import React from "react"
import logo from "../../../../assets/images/logo.png"
import css from "./Card.module.css"
import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"

const Card = () => {
  return (
    <div className={css.loginForm}>
      <div className={css.logoBlock}>
        <img src={logo} alt="logo" className={css.logo} />
      </div>
      <h2 className={css.titleForm}>Login Form</h2>
      <Input
        inputName="username"
        inputType="text"
        inputPlaceholder="User name"
      />
      <Input
        inputName="password"
        inputType="password"
        inputPlaceholder="Password"
      />
      <Button buttonType="submit" />
      <div>
        <p className={css.footerCard}>
          Having a problem? Contact our support team: support@example.com
        </p>
      </div>
    </div>
  )
}

export default Card
