import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "components/Button/Button"
import css from "./Nav.module.css"
import { ModalProduct } from "components/Modals/ModalProduct/ModalProduct"

const Nav = () => {
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClickBtnNav = (e, btnName) => {
    e.stopPropagation()
    switch (btnName) {
      case "preview":
        navigate("/preview")
        break
      case "products":
        navigate("/products")
        break
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
          onClick={e => handleClickBtnNav(e, "preview")}
          buttonType="button"
          buttonTitle="Preview"
          styleAdd="border"
          width="160px"
          iconName="preview"
          iconSize="32px"
          isActive={location.pathname === "/preview"}
        />
        <Button
          onClick={e => handleClickBtnNav(e, "products")}
          buttonType="button"
          buttonTitle="Table"
          styleAdd="border"
          width="160px"
          iconName="table"
          iconSize="32px"
          isActive={location.pathname === "/products"}
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
          handleCloseModal={() => setIsOpenModalAddProduct(false)}
          isOpenModal={isOpenModalAddProduct}
          titleModal="Add Product:"
          titleSubmitBtn="Create"
        />
      )}
    </nav>
  )
}

export default Nav
