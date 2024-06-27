import React from "react"
import { NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import css from "./Footer.module.css"

const Footer = () => (
  <footer className={css.footer}>
    &copy; 2024 Admin Panel | Designed by{" "}
    <NavLink to="https://github.com/SashaMaslak" className={css.linkFooter}>
      <FaGithub />
      <span>SashaMaslak</span>
    </NavLink>
  </footer>
)

export default Footer
