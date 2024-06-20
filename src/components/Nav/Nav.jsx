import React from "react"
import Button from "components/Button/Button"
import css from "./Nav.module.css"

export const Nav = ({ handleClickBtnNav }) => (
  <nav className={css.nav}>
    <div className={css.leftBtns}>
      <Button
        onClick={e => handleClickBtnNav(e, "preview")}
        buttonType="button"
        buttonTitle="Preview"
        styleAdd="border"
        width="160px"
        iconName="preview"
        iconSize="32px"
      />
      <Button
        onClick={e => handleClickBtnNav(e, "table")}
        buttonType="button"
        buttonTitle="Table"
        styleAdd="border"
        width="160px"
        iconName="table"
        iconSize="32px"
      />
    </div>
    <Button
      onClick={e => handleClickBtnNav(e, "addProduct")}
      buttonType="button"
      buttonTitle="Add product"
      styleAdd="border"
      width="160px"
      iconName="addProduct"
      iconSize="32px"
    />
  </nav>
)
