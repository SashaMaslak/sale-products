import React from "react"
import { Outlet } from "react-router-dom"
import Header from "components/Header/Header"
import { Nav } from "components/Nav/Nav"
import css from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout
