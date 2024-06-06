import React from "react"
import Container from "components/Container/Container"
import Button from "components/Button/Button"
import Table from "./components/Table/Table"
import css from "./ProductsTable.module.css"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"

const ProductsTable = () => {
  const handleClickBtnNav = (e, btnName) => {
    e.stopPropagation()
    switch (btnName) {
      case "preview":
        console.log("pressPreview")
        break
      case "addProduct":
        console.log("PressaddProduct")
        break
      default:
        break
    }
  }

  return (
    <Container>
      <div className={css.productsTablePage}>
        <Header />

        <nav className={css.nav}>
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
            onClick={e => handleClickBtnNav(e, "addProduct")}
            buttonType="button"
            buttonTitle="Add product"
            styleAdd="border"
            width="160px"
            iconName="addProduct"
            iconSize="32px"
          />
        </nav>
        <h2 className={css.title}>Products</h2>
        <main className={css.tableBlock}>
          <Table />
        </main>
      </div>
      <Footer />
    </Container>
  )
}

export default ProductsTable
