import React from "react"
import imgLaptop from "assets/images/laptop.jpeg"
import Button from "components/Button/Button"
import css from "./ProductCard.module.css"

const ProductCard = ({ product }) => {
  const handleCardClick = e => {
    if (!e.target.closest(".productBuyBtn")) {
      console.log("Click on card")
    }
  }

  const handleBuyClick = e => {
    e.stopPropagation()
    console.log("Click on buy Button")
  }

  return (
    <div onClick={e => handleCardClick(e)} className={css.productCard}>
      <div className={css.productImg}>
        <img src={imgLaptop} alt="Product 2" />
      </div>

      <div className={css.productInfo}>
        <h3 className={css.productInfoTitle}>{product?.name}</h3>
        <p className={css.productInfoDescr}>{product?.description}</p>
        <div className={css.priceAndQuantity}>
          <p className={css.productInfoPrice}>${product?.price}</p>
          <p className={css.productInfoQuantity}>
            Quantity: {product?.quantity}
          </p>
        </div>
      </div>
      <div className={css.productBuyBtn}>
        <Button
          onClick={e => handleBuyClick(e)}
          buttonType="button"
          buttonTitle="Buy product"
          iconName="buyProduct"
        />
      </div>
    </div>
  )
}

export default ProductCard
