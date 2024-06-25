import React from "react"
import logo from "assets/images/logo.png"
import css from "./Logo.module.css"
import { NavLink } from "react-router-dom"

const Logo = () => (
  <NavLink to="/">
    <img src={logo} alt="logo" className={css.logo} />
  </NavLink>
)

export default Logo
