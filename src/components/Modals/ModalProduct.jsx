import React, { useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import css from "./ModalProduct.module.css"
import Input from "components/Input/Input"
import { TextArea } from "components/TextArea/TextArea"

export const ModalProduct = ({
  handleCloseModal,
  isOpenModal,
  titleModal,
  titleSubmitBtn,
}) => {
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
            className={css.inputForm}
            inputName="categoryProduct"
            inputType="text"
            inputPlaceholder="Category"
            inModal
          />
          <label className={css.labelForm}>Name:</label>
          <Input
            inputName="nameProduct"
            inputType="text"
            inputPlaceholder="Name"
            inModal
          />
          <label className={css.labelForm}>Quantity:</label>
          <Input
            inputName="quantityProduct"
            inputType="number"
            inputPlaceholder="Quantity"
            inModal
          />
          <label className={css.labelForm}>Price:</label>
          <Input
            inputName="priceProduct"
            inputType="number"
            inputPlaceholder="Price"
            inModal
          />
          <label className={css.labelForm}>Description:</label>
          <TextArea
            textareaPlaceholder="Description"
            title="Description:"
            height="100px"
          />
          <div className={css.btnGroup}>
            <Button
              onClick={() => handleCloseModal(false)}
              buttonType="submit"
              buttonTitle="Cancel"
              styleAdd="light"
            />
            <Button
              onClick={() => handleCloseModal(false)}
              buttonType="submit"
              buttonTitle={titleSubmitBtn}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
