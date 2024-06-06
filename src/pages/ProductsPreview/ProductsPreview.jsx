import React from "react"
import Container from "components/Container/Container"
import Header from "components/Header/Header"
import ProductCard from "./ProductCard/ProductCard"
import Footer from "components/Footer/Footer"
import products from "assets/products.json"
import css from "./ProductsPreview.module.css"

const ProductsPreview = () => {
  return (
    <Container>
      <Header />

      <main className={css.cardsBlock}>
        {Array.isArray(products) &&
          products.map(p => <ProductCard key={p.id} product={p} />)}
      </main>

      <Footer />
    </Container>
  )
}

export default ProductsPreview
