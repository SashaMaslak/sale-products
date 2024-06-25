import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "components/Header/Header"
import Nav from "components/Nav/Nav"
import css from "./Layout.module.css"
import Footer from "components/Footer/Footer"

const Layout = () => {
  const location = useLocation()
  const showNav = !location.pathname.startsWith("/product-info")

  return (
    <div className={css.layout}>
      <Header />
      {showNav && <Nav />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
