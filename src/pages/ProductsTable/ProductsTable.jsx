import React, { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Pagination } from "components/Pagination/Pagination"
import Container from "components/Container/Container"
import { Loader } from "components/Loader/Loader"
import { ModalProduct } from "components/Modals/ModalProduct/ModalProduct"
import { ModalConfirm } from "components/Modals/ModalConfirm/ModalConfirm"
import Table from "../../components/Table/Table"
import {
  fetchApiProducts,
  fetchEditProduct,
  fetchOneProduct,
} from "services/api/productsApi"
import { deleteProduct } from "services/api/productsApi"
import css from "./ProductsTable.module.css"

const ProductsTable = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(12)
  const [totalResult, setTotalResult] = useState(0)
  const [isOpenModalEditProduct, setIsOpenModalEditProduct] = useState(false)
  const [isOpenModalCopyProduct, setIsOpenModalCopyProduct] = useState(false)
  const [isOpenModalDeleteProduct, setIsOpenModalDeleteProduct] =
    useState(false)
  const [productToDelete, setProductToDelete] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)

  const fetchProducts = useCallback(async () => {
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
  }, [limit, currentPage])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handlePageClick = selectedPage => {
    setCurrentPage(selectedPage)
  }

  const handleClickIcon = (e, product) => {
    e.stopPropagation()
    switch (e.currentTarget.name) {
      case "edit":
        setProductToEdit(product)
        setIsOpenModalEditProduct(true)
        break
      case "copy":
        setIsOpenModalCopyProduct(true)
        break
      case "remove":
        setProductToDelete(product)
        setIsOpenModalDeleteProduct(true)
        break
      default:
        break
    }
  }

  const handleDoubleClickRow = (e, product) => {
    if (!e.target.closest(".productBuyBtn")) {
      navigate(`/preview/${product._id}`)
    }
  }

  const handleDeleteProduct = () => {
    if (productToDelete) {
      deleteProduct(productToDelete._id)
        .then(() => {
          console.log("Product deleted successfully")
          fetchProducts()
        })
        .catch(error => {
          console.error("Error deleting product:", error)
        })
        .finally(() => {
          setIsOpenModalDeleteProduct(false)
        })
    }
  }

  const handleEditProduct = ({ _id, id, ...restedProduct }) => {
    console.log(`restedProduct:`, restedProduct)
    if (productToEdit) {
      fetchEditProduct(_id, restedProduct)
        .then(() => {
          console.log("Product changed successfully")
          fetchProducts()
        })
        .catch(error => {
          console.error("Error deleting product:", error)
        })
        .finally(() => {
          setIsOpenModalEditProduct(false)
        })
    }
  }

  return (
    <Container>
      <div className={css.productsTablePage}>
        <h2 className={css.title}>Products</h2>
        <main className={css.tableBlock}>
          <Table
            products={products}
            handleClickIcon={handleClickIcon}
            handleDoubleClickRow={handleDoubleClickRow}
          />
        </main>
        <Pagination
          limit={limit}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
          totalResult={totalResult}
        />
      </div>
      {isLoading && <Loader />}
      {isOpenModalEditProduct && (
        <ModalProduct
          handleCloseModal={() => setIsOpenModalEditProduct(false)}
          isOpenModal={isOpenModalEditProduct}
          titleModal="Edit Product:"
          titleSubmitBtn="Changes"
          handleEditProduct={handleEditProduct}
          productToEdit={productToEdit}
        />
      )}

      {isOpenModalCopyProduct && (
        <ModalProduct
          handleCloseModal={() => setIsOpenModalCopyProduct(false)}
          isOpenModal={isOpenModalCopyProduct}
          titleModal="Copy Product:"
          titleSubmitBtn="Create NEW"
        />
      )}

      {isOpenModalDeleteProduct && (
        <ModalConfirm
          handleCloseModal={() => setIsOpenModalDeleteProduct(false)}
          handleConfirm={handleDeleteProduct}
          isOpenModal={isOpenModalDeleteProduct}
          titleModal="Confirm deletion of the product"
          textModal="Are you sure you want to delete this product?"
          titleSubmitBtn="Confirm"
        />
      )}
    </Container>
  )
}

export default ProductsTable
