import React, { useState } from "react"
import css from "./Table.module.css"
import TableRow from "./TableRow"
import TableHead from "./TableHead"
import { ModalProduct } from "components/Modals/ModalProduct"

const Table = ({ products }) => {
  const [isOpenModalEditProduct, setIsOpenModalEditProduct] = useState(false)
  const [isOpenModalCopyProduct, setIsOpenModalCopyProduct] = useState(false)

  const handleDoubleClickRow = e => {
    if (e.target.classList.contains(css.rowItem)) {
      console.log("DoubleClick on <TR>>")
    } else {
      console.log("NO CLICK <TR>")
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
        console.log("PressRemove")
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
          titleSubmitBtn="Change Product"
        />
      )}

      {isOpenModalCopyProduct && (
        <ModalProduct
          handleCloseModal={setIsOpenModalCopyProduct}
          isOpenModal={isOpenModalCopyProduct}
          titleModal="Copy Product:"
          titleSubmitBtn="Create NEW product"
        />
      )}
    </>
  )
}

export default Table
