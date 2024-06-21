import React, { useState } from "react"
import Button from "components/Button/Button"
import css from "./Nav.module.css"
import { ModalProduct } from "components/Modals/ModalProduct"

export const Nav = () => {
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false)

  const handleClickBtnNav = (e, btnName) => {
    e.stopPropagation()
    switch (btnName) {
      case "preview":
        console.log("pressPreview")
        break
      case "table":
        console.log("table")
        break
      case "addProduct":
        setIsOpenModalAddProduct(true)
        break
      default:
        break
    }
  }

  const handleCloseModalAddProduct = () => setIsOpenModalAddProduct(false)

  return (
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
      {isOpenModalAddProduct && (
        <ModalProduct
          handleCloseModal={handleCloseModalAddProduct}
          isOpenModal={isOpenModalAddProduct}
          titleModal="Add Product:"
        />
      )}
    </nav>
  )
}
