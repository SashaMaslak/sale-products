import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import TableRow from "./TableRow"
import TableHead from "./TableHead"
import { ModalProduct } from "components/Modals/ModalProduct/ModalProduct"
import { ModalConfirm } from "components/Modals/ModalConfirm/ModalConfirm"
import css from "./Table.module.css"

const Table = ({ products }) => {
  const navigate = useNavigate()

  const [isOpenModalEditProduct, setIsOpenModalEditProduct] = useState(false)
  const [isOpenModalCopyProduct, setIsOpenModalCopyProduct] = useState(false)
  const [isOpenModalDeleteProduct, setIsOpenModalDeleteProduct] =
    useState(false)

  const handleDoubleClickRow = (e, product) => {
    if (!e.target.closest(".productBuyBtn")) {
      const id = product._id
      navigate(`/preview/${product._id}`)
    }
  }

  const handleClickIcon = e => {
    e.stopPropagation()
    switch (e.currentTarget.name) {
      case "edit":
        setIsOpenModalEditProduct(true)
        break
      case "copy":
        setIsOpenModalCopyProduct(true)
        break
      case "remove":
        setIsOpenModalDeleteProduct(true)
        break
      default:
        break
    }
  }

  return (
    <>
      <table className={css.table}>
        <TableHead />
        <tbody>
          {Array.isArray(products) &&
            products.map(p => (
              <TableRow
                key={p.id}
                product={p}
                handleClickIcon={handleClickIcon}
                handleDoubleClickRow={handleDoubleClickRow}
              />
            ))}
        </tbody>
      </table>
      {isOpenModalEditProduct && (
        <ModalProduct
          handleCloseModal={setIsOpenModalEditProduct}
          isOpenModal={isOpenModalEditProduct}
          titleModal="Edit Product:"
          titleSubmitBtn="Changes"
        />
      )}

      {isOpenModalCopyProduct && (
        <ModalProduct
          handleCloseModal={setIsOpenModalCopyProduct}
          isOpenModal={isOpenModalCopyProduct}
          titleModal="Copy Product:"
          titleSubmitBtn="Create NEW"
        />
      )}

      {isOpenModalDeleteProduct && (
        <ModalConfirm
          handleCloseModal={setIsOpenModalDeleteProduct}
          isOpenModal={isOpenModalDeleteProduct}
          titleModal="Confirm deletion of the product"
          textModal="
Are u sure you want to delete this product?"
          titleSubmitBtn="Confirm"
        />
      )}
    </>
  )
}

export default Table
