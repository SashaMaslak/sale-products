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
    <tr
      onDoubleClick={e => handleDoubleClickRow(e, product)}
      className={css.row}
    >
      <td className={css.rowItem}>{product?.id}</td>
      <td className={css.rowItem}>{product?.category}</td>
      <td className={css.rowItem}>{product?.name}</td>
      <td className={css.rowItem}>{product?.quantity}</td>
      <td className={css.rowItem}>{formattedPrice}</td>
      <td className={css.rowItem}>
        <div className={css.iconsGroup}>
          <button onClick={e => handleClickIcon(e)} name="edit">
            <FaEdit className={`icon ${css.tableIcon}`} />
          </button>
          <button onClick={e => handleClickIcon(e)} name="copy">
            <FaCopy className={`icon ${css.tableIcon}`} />
          </button>
          <button onClick={e => handleClickIcon(e)} name="remove">
            <RiDeleteBin6Fill className={`icon ${css.tableIcon}`} />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
