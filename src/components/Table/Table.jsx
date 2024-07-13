import React from "react"
import TableRow from "./TableRow"
import TableHead from "./TableHead"
import css from "./Table.module.css"

const Table = ({ products, handleClickIcon, handleDoubleClickRow }) => {
  return (
    <>
      <table className={css.table}>
        <TableHead />
        <tbody>
          {Array.isArray(products) &&
            products.map(p => (
              <TableRow
                key={p._id}
                product={p}
                handleClickIcon={handleClickIcon}
                handleDoubleClickRow={handleDoubleClickRow}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
