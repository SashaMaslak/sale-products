import React from "react"
import { useNavigate, useParams } from "react-router-dom"
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
  const { productId } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      <button onClick={goBack}>
        <IoArrowBackSharp className={css.backIcon} />
      </button>
      <p>
        Chosen product is:{" "}
        <span style={{ fontWeight: "bold" }}>{productId}</span>
      </p>
    </Container>
  )
}
