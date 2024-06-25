import React from "react"
import { GoSignOut } from "react-icons/go"
import Logo from "../Logo/Logo"
import css from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import { AUTH_TOKEN } from "constants/localStorage"

const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem(AUTH_TOKEN)
    navigate("/")
  }

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Logo />
      </div>
      <button onClick={handleSignOut}>
        <GoSignOut className={`icon`} size={32} />
      </button>
    </header>
  )
}

export default Header
