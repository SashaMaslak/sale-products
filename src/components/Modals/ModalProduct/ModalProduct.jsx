import { useEffect, useState, useContext } from "react"
import IsLoadedContext from "context/context"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button/Button"
import css from "./ModalProduct.module.css"
import Input from "components/Input/Input"
import { TextArea } from "components/TextArea/TextArea"

const emptyForm = {
  category: "",
  name: "",
  quantity: "",
  price: "",
  description: "",
}

export const ModalProduct = ({
  handleCloseModal,
  isOpenModal,
  titleModal,
  titleSubmitBtn,
  handleEditProduct,
  handleCopyProduct,
  productToEdit,
}) => {
  const [product, setProduct] = useState(productToEdit || emptyForm)
  const { setIsLoaded } = useContext(IsLoadedContext)
  const [errorsInputs, setErrorsInputs] = useState(emptyForm)

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

  const checkError = () => {
    let hasErrorInput = false
    const newErrorsInput = emptyForm

    for (const key in product) {
      if (product[key].trim() === "") {
        newErrorsInput[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } не може бути пустим.`
        hasErrorInput = true
      }
    }

    setErrorsInputs(newErrorsInput)
    return hasErrorInput
  }

  const handleChange = (e, inputName) => {
    const value = e.target.value
    setProduct({ ...product, [inputName]: value })
    if (value !== "") {
      setErrorsInputs(prevErrors => ({
        ...prevErrors,
        [inputName]: "",
      }))
    }
  }

  const handleBlur = inputName => {
    if (!product[inputName].trim()) {
      setErrorsInputs(prevErrors => ({
        ...prevErrors,
        [inputName]: `${
          inputName.charAt(0).toUpperCase() + inputName.slice(1)
        } is required`,
      }))
    } else {
      setErrorsInputs(prevErrors => ({
        ...prevErrors,
        [inputName]: "",
      }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const isError = checkError()

    if (isError) {
      return
    }
    if (e.target.textContent === "Change") await handleEditProduct(product)
    if (e.target.textContent === "Create NEW") await handleCopyProduct(product)
    setIsLoaded(false)
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
        <h3 className={css.titleModal}>{titleModal}</h3>
        <form className={css.form}>
          <label className={css.labelForm}>Category:</label>
          <Input
            value={product?.category}
            isEmpty={errorsInputs.category}
            onChange={e => handleChange(e, "category")}
            onBlur={() => handleBlur("category")}
            className={css.inputForm}
            inputName="categoryProduct"
            inputType="text"
            inputPlaceholder="Category"
            inModal
          />
          {errorsInputs.category && (
            <p className={`${css.errorInput} ${css.errorInputCategory}`}>
              *{errorsInputs.category}
            </p>
          )}
          <label className={css.labelForm}>Name:</label>
          <Input
            value={product?.name}
            isEmpty={errorsInputs.name}
            onChange={e => handleChange(e, "name")}
            onBlur={() => handleBlur("name")}
            inputName="nameProduct"
            inputType="text"
            inputPlaceholder="Name"
            inModal
          />
          {errorsInputs.name && (
            <p className={`${css.errorInput} ${css.errorInputName}`}>
              *{errorsInputs.name}
            </p>
          )}
          <label className={css.labelForm}>Quantity:</label>
          <Input
            value={product?.quantity}
            isEmpty={errorsInputs.quantity}
            onChange={e => handleChange(e, "quantity")}
            onBlur={() => handleBlur("quantity")}
            inputName="quantityProduct"
            inputType="number"
            inputPlaceholder="Quantity"
            inModal
          />
          {errorsInputs.quantity && (
            <p className={`${css.errorInput} ${css.errorInputQuantity}`}>
              *{errorsInputs.quantity}
            </p>
          )}
          <label className={css.labelForm}>Price:</label>
          <Input
            value={product?.price}
            isEmpty={errorsInputs.price}
            onChange={e => handleChange(e, "price")}
            onBlur={() => handleBlur("price")}
            inputName="priceProduct"
            inputType="number"
            inputPlaceholder="Price"
            inModal
          />
          {errorsInputs.price && (
            <p className={`${css.errorInput} ${css.errorInputPrice}`}>
              *{errorsInputs.price}
            </p>
          )}
          <label className={css.labelForm}>Description:</label>
          <TextArea
            value={product?.description}
            isEmpty={errorsInputs.description}
            onChange={e => handleChange(e, "description")}
            onBlur={() => handleBlur("description")}
            textareaPlaceholder="Description"
            title="Description:"
            height="100px"
          />
          {errorsInputs.description && (
            <p className={`${css.errorInput} ${css.errorInputDescription}`}>
              *{errorsInputs.description}
            </p>
          )}
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
