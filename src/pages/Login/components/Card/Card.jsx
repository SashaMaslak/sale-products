import React, { useState, useEffect } from "react"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Logo from "components/Logo/Logo"
import css from "./Card.module.css"

const Card = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [btnWidth, setBtnWidth] = useState("150px")

  useEffect(() => {
    if (window.matchMedia("(max-width: 479px)").matches) {
      setBtnWidth("120px")
    }
  }, [btnWidth])

  const toggleVisiblePass = () => setIsPasswordHidden(prev => !prev)

  const handleSignClick = (e, btnName) => {
    e.preventDefault()
    switch (btnName) {
      case "SignIn":
        console.log("press SignIn")
        break
      case "SignUp":
        console.log("Press SignUp")
        break
      default:
        break
    }
  }

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
        inputType={isPasswordHidden ? "password" : "text"}
        inputPlaceholder="Password"
        required={true}
        toggleVisiblePass={toggleVisiblePass}
      />
      <div className={css.btnGroup}>
        <Button
          onClick={e => handleSignClick(e, "SignIn")}
          buttonType="submit"
          buttonTitle="Sign IN"
          width={btnWidth}
        />
        <Button
          onClick={e => handleSignClick(e, "SignUp")}
          buttonType="submit"
          buttonTitle="Sign UP"
          width={btnWidth}
        />
      </div>
      <div className={css.footerCard}>
        <p>Having a problem? Contact our support team: support@example.com</p>
      </div>
    </div>
  )
}

export default Card
