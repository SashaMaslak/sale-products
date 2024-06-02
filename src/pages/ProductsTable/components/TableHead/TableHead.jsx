import React from "react"
import { HiMiniArrowsUpDown } from "react-icons/hi2"
import css from "./TableHead.module.css"

const TableHead = () => {
  return (
    <thead>
      <tr className={css.rowHead}>
        <th width="10%" className={css.rowHeadItem}>
          <span className={css.textRowHead}>ID</span>
          <button>
            <HiMiniArrowsUpDown />
          </button>
        </th>
        <th width="20%" className={css.rowHeadItem}>
          <span className={css.textRowHead}>Category</span>
          <button>
            <HiMiniArrowsUpDown />
          </button>
        </th>
        <th width="34%" className={css.rowHeadItem}>
          <span className={css.textRowHead}>Name</span>
          <button>
            <HiMiniArrowsUpDown />
          </button>
        </th>
        <th width="13%" className={css.rowHeadItem}>
          <span className={css.textRowHead}>Quantity</span>
          <button>
            <HiMiniArrowsUpDown />
          </button>
        </th>
        <th width="13%" className={css.rowHeadItem}>
          <span className={css.textRowHead}>Price (₴)</span>
          <button>
            <HiMiniArrowsUpDown />
          </button>
        </th>
        <th width="10%" className={css.rowHeadItem}>
          Edit/Delete
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
