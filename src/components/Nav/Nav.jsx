import React, { useState } from "react"
import Button from "components/Button/Button"
import css from "./Nav.module.css"
import { ModalProduct } from "components/Modals/ModalProduct/ModalProduct"
import { Navigate } from "react-router-dom"

export const Nav = () => {
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false)

  const handleClickBtnNav = (e, btnName) => {
    e.stopPropagation()
    switch (btnName) {
      case "preview":
        console.log("press preview")
        return <Navigate to="preview" replace={true} />
      case "table":
        console.log("press table")
        return <Navigate to="products" replace={true} />
      case "addProduct":
        setIsOpenModalAddProduct(true)
        break
      default:
        break
    }
  }

  return (
    <nav className={css.nav}>
      <div className={css.leftBtns}>
        <Button
          onClick={() => <Navigate to="preview" replace={true} />}
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
          handleCloseModal={setIsOpenModalAddProduct}
          isOpenModal={isOpenModalAddProduct}
          titleModal="Add Product:"
          titleSubmitBtn="Create"
        />
      )}
    </nav>
  )
}
