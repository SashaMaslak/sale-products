import React from "react"
import products from "assets/products.json"
import css from "./Table.module.css"
import TableRow from "../TableRow/TableRow"
import TableHead from "../TableHead/TableHead"

const Table = () => (
  <table className={css.table}>
    <TableHead />
    <tbody>
      {Array.isArray(products) &&
        products.map(p => <TableRow key={p.id} product={p} />)}
    </tbody>
  </table>
)

export default Table
