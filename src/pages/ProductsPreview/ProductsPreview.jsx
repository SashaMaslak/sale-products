import React, { useState, useEffect } from "react"
import Container from "components/Container/Container"
import Header from "components/Header/Header"
import ProductCard from "./ProductCard/ProductCard"
import Footer from "components/Footer/Footer"
import { Pagination } from "components/Pagination/Pagination"
import { Loader } from "components/Loader/Loader"
import { fetchApiProducts } from "services/api/productsApi"
import css from "./ProductsPreview.module.css"
import { Nav } from "components/Nav/Nav"

const ProductsPreview = () => {
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

  return (
    <Container>
      <Header />
      <Nav />
      <main className={css.cardsBlock}>
        {Array.isArray(products) &&
          products.map(p => <ProductCard key={p.id} product={p} />)}
      </main>
      <Pagination
        limit={limit}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalResult={totalResult}
      />
      <Footer />
      {isLoading && <Loader />}
    </Container>
  )
}

export default ProductsPreview
