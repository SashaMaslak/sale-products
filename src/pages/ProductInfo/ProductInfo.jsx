import React, { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IoArrowBackSharp } from "react-icons/io5"
import { MdCheckCircleOutline } from "react-icons/md"
import { RxCross1 } from "react-icons/rx"
import Container from "components/Container/Container"
import { Loader } from "components/Loader/Loader"
import { fetchApiProducts } from "services/api/productsApi"
import css from "./ProductInfo.module.css"

export const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const fetchProduct = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetchApiProducts(`/${productId}`)
      setProduct(response.data)
    } catch (error) {
      console.log("error:", error)
    } finally {
      setIsLoading(false)
    }
  }, [productId])

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  return (
    <Container>
      <main>
        <div className={css.headInfo}>
          <button onClick={goBack} className={css.btnIcon}>
            <IoArrowBackSharp className={css.backIcon} />
          </button>
          <h3 className={css.titleInfo}>{product?.name}</h3>
        </div>
        <div className={css.mainInfo}>
          <div className={css.productImg}>
            <img src={product?.image} alt="Product" />
          </div>
          <div className={css.sellInfo}>
            {product?.quantity !== 0 ? (
              <div className={css.sellInfoAvail}>
                <MdCheckCircleOutline color="green" size={32} />
                <p className={css.accessInfo}>Available in store</p>
              </div>
            ) : (
              <div className={css.sellInfoAvail}>
                <RxCross1 color="red" size={32} />
                <p className={css.notAccessInfo}>Not available in store</p>
              </div>
            )}
            <p className={css.priceInfo}>{product?.price} $</p>
            <p className={css.countInfo}>Quantity: {product?.quantity}</p>
          </div>
        </div>
        <div className={css.productInfo}>
          <p className={css.wrapperTitleDescr}>
            Description:
            <span className={css.titleDescr}> {product?.name}</span>
          </p>
          <p className={css.descrInfo}>{product?.description} $</p>
        </div>
      </main>
      {isLoading && <Loader />}
    </Container>
  )
}
