import React from "react"
import RcPagination from "rc-pagination"
import "./Pagination.css"

export const Pagination = ({
  limit,
  handlePageClick,
  currentPage,
  totalResult,
}) => (
  <div className="paginationBlock">
    <RcPagination
      pageSize={limit}
      onChange={handlePageClick}
      current={currentPage}
      total={totalResult}
    />
  </div>
)
