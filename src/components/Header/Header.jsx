import React from "react"
import Logo from "../Logo/Logo"
import css from "./Header.module.css"

const Header = () => (
  <header className={css.header}>
    <div className={css.logo}>
      <Logo />
    </div>
  </header>
)

export default Header
