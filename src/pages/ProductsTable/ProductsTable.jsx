import { useState, useEffect, useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Pagination } from "components/Pagination/Pagination"
import Container from "components/Container/Container"
import { Loader } from "components/Loader/Loader"
import IsLoadedContext from "context/context"
import { ModalProduct } from "components/Modals/ModalProduct/ModalProduct"
import { ModalConfirm } from "components/Modals/ModalConfirm/ModalConfirm"
import Table from "../../components/Table/Table"
import {
  fetchAddProduct,
  fetchApiProducts,
  fetchEditProduct,
} from "services/api/productsApi"
import { deleteProduct } from "services/api/productsApi"
import css from "./ProductsTable.module.css"

const ProductsTable = () => {
  const navigate = useNavigate()
  const { isLoaded, setIsLoaded } = useContext(IsLoadedContext)
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
    if (!isLoaded) {
      fetchProducts()
      setIsLoaded(true)
      return
    }
  }, [isLoaded])

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
        setProductToEdit(product)
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

  const handleDoubleClickRow = product => {
    navigate(`/preview/${product._id}`)
  }

  const handleDeleteProduct = async () => {
    try {
      if (productToDelete) {
        await deleteProduct(productToDelete._id)
        console.log("Product deleted successfully")
        await fetchProducts()
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    } finally {
      setIsOpenModalDeleteProduct(false)
    }
  }

  const handleEditProduct = async (
    { _id, id, updatedAt, ...restedProduct },
    action
  ) => {
    try {
      if (productToEdit) {
        if (action === "edit") {
          await fetchEditProduct(_id, restedProduct)
          console.log("Product changed successfully")
        }
        if (action === "create") {
          await fetchAddProduct(restedProduct)
          console.log("Product copied successfully")
        }
        await fetchProducts()
      }
    } catch (error) {
      console.error("Error editing or copied product:", error)
    } finally {
      setIsOpenModalEditProduct(false)
      setIsOpenModalCopyProduct(false)
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
          titleSubmitBtn="Change"
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
          handleEditProduct={handleEditProduct}
          productToEdit={productToEdit}
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
