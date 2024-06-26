import React from "react"
import { Hourglass } from "react-loader-spinner"
import css from "./Loader.module.css"

export const Loader = () => (
  <div className={css.spinnerOverlay}>
    <Hourglass
      visible={true}
      height="48"
      width="48"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#ffca42", "#fff096"]}
    />
  </div>
)
