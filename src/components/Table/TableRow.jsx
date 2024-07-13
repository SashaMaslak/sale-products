import React from "react"
import { FaEdit } from "react-icons/fa"
import { FaCopy } from "react-icons/fa6"
import { RiDeleteBin6Fill } from "react-icons/ri"
import css from "./TableRow.module.css"

const TableRow = ({ product, handleClickIcon, handleDoubleClickRow }) => {
  const formattedPrice = product?.price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <tr onDoubleClick={() => handleDoubleClickRow(product)} className={css.row}>
      <td className={css.rowItem}>{product?._id}</td>
      <td className={css.rowItem}>{product?.category}</td>
      <td className={css.rowItem}>{product?.name}</td>
      <td className={css.rowItem}>{product?.quantity}</td>
      <td className={css.rowItem}>{formattedPrice}</td>
      <td className={css.rowItem}>
        <div className={css.iconsGroup}>
          <button onClick={e => handleClickIcon(e, product)} name="edit">
            <FaEdit className={`icon ${css.tableIcon}`} />
          </button>
          <button onClick={e => handleClickIcon(e, product)} name="copy">
            <FaCopy className={`icon ${css.tableIcon}`} />
          </button>
          <button
            onClick={e => {
              handleClickIcon(e, product)
            }}
            name="remove"
          >
            <RiDeleteBin6Fill className={`icon ${css.tableIcon}`} />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
