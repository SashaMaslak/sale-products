import React, { useEffect, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button/Button"
import css from "./ModalProduct.module.css"
import Input from "components/Input/Input"
import { TextArea } from "components/TextArea/TextArea"

export const ModalProduct = ({
  handleCloseModal,
  isOpenModal,
  titleModal,
  titleSubmitBtn,
  handleEditProduct,
  productToEdit,
}) => {
  const [product, setProduct] = useState(productToEdit)

  console.log("product:", product)

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === "Escape") {
        handleCloseModal()
      }
    }

    if (isOpenModal) {
      window.addEventListener("keydown", handleKeyPress)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [isOpenModal, handleCloseModal])

  if (!isOpenModal) {
    return null
  }

  const handleChange = (e, inputName) => {
    const value = e.target.value
    setProduct({ ...product, [inputName]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleEditProduct(product)
  }

  return (
    <div className={css.modalWrapper}>
      <div
        className={css.modalBackdrop}
        onClick={() => handleCloseModal(false)}
      ></div>
      <div className={css.modal}>
        <span
          className={css.closeButton}
          onClick={() => handleCloseModal(false)}
        >
          <AiOutlineCloseCircle className={css.iconCloseForm} size={32} />
        </span>
        <h3>{titleModal}</h3>
        <form className={css.form}>
          <label className={css.labelForm}>Category:</label>
          <Input
            value={product?.category}
            onChange={e => handleChange(e, "category")}
            className={css.inputForm}
            inputName="categoryProduct"
            inputType="text"
            inputPlaceholder="Category"
            inModal
          />
          <label className={css.labelForm}>Name:</label>
          <Input
            value={product?.name}
            onChange={e => handleChange(e, "name")}
            inputName="nameProduct"
            inputType="text"
            inputPlaceholder="Name"
            inModal
          />
          <label className={css.labelForm}>Quantity:</label>
          <Input
            value={product?.quantity}
            onChange={e => handleChange(e, "quantity")}
            inputName="quantityProduct"
            inputType="number"
            inputPlaceholder="Quantity"
            inModal
          />
          <label className={css.labelForm}>Price:</label>
          <Input
            value={product?.price}
            onChange={e => handleChange(e, "price")}
            inputName="priceProduct"
            inputType="number"
            inputPlaceholder="Price"
            inModal
          />
          <label className={css.labelForm}>Description:</label>
          <TextArea
            value={product?.description}
            onChange={e => handleChange(e, "description")}
            textareaPlaceholder="Description"
            title="Description:"
            height="100px"
          />
          <div className={css.btnGroup}>
            <Button
              onClick={() => handleCloseModal(false)}
              buttonType="button"
              buttonTitle="Cancel"
              styleAdd="light"
            />
            <Button
              onClick={e => handleSubmit(e)}
              buttonType="submit"
              buttonTitle={titleSubmitBtn}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
