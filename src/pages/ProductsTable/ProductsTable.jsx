import React, { useState, useEffect } from "react"
import { Pagination } from "components/Pagination/Pagination"
import Container from "components/Container/Container"
import Button from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import Table from "./components/Table/Table"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import { fetchApiProducts } from "services/api/productsApi"
import css from "./ProductsTable.module.css"
import { Nav } from "components/Nav/Nav"

const ProductsTable = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [totalResult, setTotalResult] = useState(0)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const response = await fetchApiProducts(
        `?limit=${limit}&page=${currentPage}`
      )

      setProducts(response.data.products)
      setTotalResult(response.data.totalResult)
    } catch (error) {
      console.log("error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(limit, currentPage, setProducts, setTotalResult)
  }, [limit, currentPage])

  const handlePageClick = selectedPage => {
    setCurrentPage(selectedPage)
  }

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
        <Nav handleClickBtnNav={handleClickBtnNav} />
        <h2 className={css.title}>Products</h2>
        <main className={css.tableBlock}>
          <Table products={products} />
        </main>
        <Pagination
          limit={limit}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
          totalResult={totalResult}
        />
      </div>
      <Footer />
      {isLoading && <Loader />}
    </Container>
  )
}

export default ProductsTable
