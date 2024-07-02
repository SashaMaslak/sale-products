import React, { useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button/Button"
import css from "./ModalConfirm.module.css"

export const ModalConfirm = ({
  handleCloseModal,
  isOpenModal,
  titleModal,
  textModal,
  titleSubmitBtn,
  handleConfirm,
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
        onClick={() => handleCloseModal()}
      ></div>
      <div className={css.modal}>
        <span className={css.closeButton} onClick={() => handleCloseModal()}>
          <AiOutlineCloseCircle className={css.iconCloseForm} size={32} />
        </span>
        <h3 className={css.modalTitle}>{titleModal}</h3>
        <p className={css.modalText}>{textModal}</p>
        <div className={css.btnGroup}>
          <Button
            onClick={() => handleCloseModal()}
            buttonType="button"
            buttonTitle="Cancel"
            styleAdd="light"
          />
          <Button
            onClick={handleConfirm}
            buttonType="button"
            buttonTitle={titleSubmitBtn}
          />
        </div>
      </div>
    </div>
  )
}
