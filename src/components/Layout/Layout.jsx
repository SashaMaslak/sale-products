import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import IsLoadedContext from "context/context"
import Header from "components/Header/Header"
import Nav from "components/Nav/Nav"
import css from "./Layout.module.css"
import Footer from "components/Footer/Footer"

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const showNav = !location.pathname.startsWith("/preview/")

  return (
    <div className={css.layout}>
      <IsLoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
        <Header />
        {showNav && <Nav />}
        <Outlet />
        <Footer />
      </IsLoadedContext.Provider>
    </div>
  )
}

export default Layout
