import React from "react"
import Container from "../../components/Container/Container"
import Logo from "../../components/Logo/Logo"
import Button from "../../components/Button/Button"
import Table from "./components/Table/Table"
import css from "./ProductsTable.module.css"
import Footer from "../../components/Footer/Footer"

const ProductsTable = () => {
  return (
    <Container>
      <div className={css.productsTablePage}>
        <header className={css.header}>
          <div className={css.logo}>
            <Logo />
          </div>
        </header>

        <nav className={css.nav}>
          <Button
            buttonType="button"
            buttonTitle="Preview"
            style="border"
            minSize="150px"
            iconName="preview"
          />
          <Button
            buttonType="button"
            buttonTitle="Add product"
            style="border"
            minSize="150px"
            iconName="addProduct"
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
