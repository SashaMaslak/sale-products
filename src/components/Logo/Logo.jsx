import React from "react"
import logo from "../../assets/images/logo.png"
import css from "./Logo.module.css"

const Logo = () => {
  return (
    <a href="https://google.com" className={css.logoBlock}>
      <img src={logo} alt="logo" className={css.logo} />
    </a>
  )
}

export default Logo
