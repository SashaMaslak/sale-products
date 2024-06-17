import React, { useState, useEffect } from "react"
import Pagination from "rc-pagination"
import Container from "components/Container/Container"
import Button from "components/Button/Button"
import Table from "./components/Table/Table"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import { fetchApiProducts } from "services/api/productsApi"
import css from "./ProductsTable.module.css"
import "./rc-pagination.css"

const ProductsTable = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalResult, setTotalResult] = useState(0)

  const fetchProducts = async () => {
    try {
      const response = await fetchApiProducts(
        `?limit=${limit}&page=${currentPage}`
      )

      setProducts(response.data.products)
      setTotalResult(response.data.totalResult)
    } catch (error) {
      console.log("error:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [limit, currentPage])

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

  const handlePageClick = selectedPage => {
    setCurrentPage(selectedPage)
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
          <Table products={products} />
        </main>
        <div className={css.paginationBlock}>
          <Pagination
            className={css.pagination}
            pageSize={limit}
            onChange={handlePageClick}
            current={currentPage}
            total={totalResult}
          />
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default ProductsTable
