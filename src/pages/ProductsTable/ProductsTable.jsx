import React, { useState, useEffect } from "react"
import cloneDeep from "lodash/cloneDeep"
import throttle from "lodash/throttle"
import ReactPaginate from "react-paginate"
import Pagination from "rc-pagination"
import "rc-pagination/assets/index.css"
import Container from "components/Container/Container"
import Button from "components/Button/Button"
import Table from "./components/Table/Table"
import css from "./ProductsTable.module.css"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import { fetchApiProducts } from "services/api/productsApi"

const ProductsTable = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [pageCount, setPageCount] = useState(0)

  const fetchProducts = async () => {
    try {
      const response = await fetchApiProducts(
        `?limit=${limit}&page=${currentPage}`
      )

      setProducts(response.data.products)
      setPageCount(response.data.pages)
    } catch (error) {
      console.log("error:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [limit, currentPage])

  console.log("pageCount:", pageCount)

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
    setCurrentPage(selectedPage + 1)
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
            pageSize={limit}
            onChange={handlePageClick}
            current={currentPage}
            total={pageCount}
          />
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default ProductsTable
