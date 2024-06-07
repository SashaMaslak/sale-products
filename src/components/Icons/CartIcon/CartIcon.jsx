import React from "react"
import cartIcon from "assets/svg/carts-col.svg"

const CartIcon = ({ size }) => (
  <svg width={size} height={size}>
    <use href={`${cartIcon}#icon-cart-col-plus`}></use>
  </svg>
)

export default CartIcon
