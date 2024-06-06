import React from "react"
import { HiMiniArrowsUpDown } from "react-icons/hi2"
import css from "./TableHead.module.css"

const TableHead = () => {
  const isTabletMax = window.matchMedia("(max-width: 767px)").matches
  let cageActions = isTabletMax ? "Ed/Cop/Del" : "Edit/Copy/Delete"

  const handleClickSort = (e, columnName) => {
    e.stopPropagation()
    switch (columnName) {
      case "id":
        console.log("pressIdSort")
        break
      case "category":
        console.log("PressCategorySort")
        break
      case "name":
        console.log("PressNameSort")
        break
      case "quantity":
        console.log("PressQuantitySort")
        break
      case "price":
        console.log("PressPriceSort")
        break
      default:
        break
    }
  }

  return (
    <thead>
      <tr className={css.rowHead}>
        <th width="10%" className={css.rowHeadItem}>
          <div onClick={e => handleClickSort(e, "id")}>
            <span className={css.textRowHead}>ID</span>
            <button>
              <HiMiniArrowsUpDown />
            </button>
          </div>
        </th>
        <th width="20%" className={css.rowHeadItem}>
          <div onClick={e => handleClickSort(e, "category")}>
            <span className={css.textRowHead}>Category</span>
            <button>
              <HiMiniArrowsUpDown />
            </button>
          </div>
        </th>
        <th width="34%" className={css.rowHeadItem}>
          <div onClick={e => handleClickSort(e, "name")}>
            <span className={css.textRowHead}>Name</span>
            <button>
              <HiMiniArrowsUpDown />
            </button>
          </div>
        </th>
        <th width="13%" className={css.rowHeadItem}>
          <div onClick={e => handleClickSort(e, "quantity")}>
            <span className={css.textRowHead}>Quantity</span>
            <button>
              <HiMiniArrowsUpDown />
            </button>
          </div>
        </th>
        <th width="13%" className={css.rowHeadItem}>
          <div onClick={e => handleClickSort(e, "price")}>
            <span className={css.textRowHead}>Price (₴)</span>
            <button>
              <HiMiniArrowsUpDown />
            </button>
          </div>
        </th>
        <th width="10%" className={css.rowHeadItem}>
          {cageActions}
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
