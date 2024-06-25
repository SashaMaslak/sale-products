import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { IoArrowBackSharp } from "react-icons/io5"
import Container from "components/Container/Container"
import css from "./ProductInfo.module.css"

const productEmpty = {
  category: "",
  description: "",
  id: "",
  image: "",
  name: "",
  price: 0,
  quantity: 0,
  _id: "",
}

export const ProductInfo = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const product = location.state.product || productEmpty

  const goBack = () => {
    navigate(-1)
  }
  console.log("product:", product)

  return (
    <Container>
      <button onClick={goBack}>
        <IoArrowBackSharp className={css.backIcon} />
      </button>
    </Container>
  )
}
