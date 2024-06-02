import React from "react"
import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"
import Logo from "../../../../components/Logo/Logo"
import css from "./Card.module.css"

const Card = () => {
  return (
    <div className={css.loginForm}>
      <div className={css.logo}>
        <Logo />
      </div>

      <h2 className={css.titleForm}>Login Form</h2>
      <Input
        inputName="username"
        inputType="text"
        inputPlaceholder="User name"
        required={true}
      />
      <Input
        inputName="password"
        inputType="password"
        inputPlaceholder="Password"
        required={true}
      />
      <div className={css.btnGroup}>
        <Button buttonType="submit" buttonTitle="Sign In" minSize="180px" />
        <Button buttonType="submit" buttonTitle="Sign Up" minSize="180px" />
      </div>
      <div>
        <p className={css.footerCard}>
          Having a problem? Contact our support team: support@example.com
        </p>
      </div>
    </div>
  )
}

export default Card
