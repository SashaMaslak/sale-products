import React from "react"
import { FaEdit } from "react-icons/fa"
import { RiDeleteBin6Fill } from "react-icons/ri"
import css from "./TableRow.module.css"

const TableRow = props => {
  const { product } = props
  return (
    <tr className={css.row}>
      <td className={css.rowItem}>{product?.id}</td>
      <td className={css.rowItem}>{product?.category}</td>
      <td className={css.rowItem}>{product?.name}</td>
      <td className={css.rowItem}>{product?.quantity}</td>
      <td className={css.rowItem}>{product?.price}</td>
      <td className={css.rowItem}>
        <div className={css.iconsGroup}>
          <button>
            <FaEdit className={`icon ${css.tableIcon}`} />
          </button>
          <button>
            <RiDeleteBin6Fill className={`icon ${css.tableIcon}`} />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
