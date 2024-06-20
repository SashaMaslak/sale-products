import React from "react"
import { GoSignOut } from "react-icons/go"
import Logo from "../Logo/Logo"
import css from "./Header.module.css"

const Header = () => (
  <header className={css.header}>
    <div className={css.logo}>
      <Logo />
    </div>
    <button>
      <GoSignOut className={`icon`} size={32} />
    </button>
  </header>
)

export default Header
