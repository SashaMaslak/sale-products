import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { Hourglass } from "react-loader-spinner"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Logo from "components/Logo/Logo"
import { fetchApiUser, setToken } from "services/api/usersApi"
import css from "./Card.module.css"
import "react-toastify/dist/ReactToastify.css"

const Card = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [user, setUser] = useState({ name: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [errorsInputs, setErrorsInputs] = useState({ name: "", password: "" })
  const [messageDB, setMessageDB] = useState({ info: "", error: "" })

  const toggleVisiblePass = () => setIsPasswordHidden(prev => !prev)

  const checkError = () => {
    let hasErrorInput = false
    const newErrorsInput = { name: "", password: "" }

    if (user.name.trim() === "") {
      newErrorsInput.name = "Name is required"
      hasErrorInput = true
    }
    if (user.password.trim() === "") {
      newErrorsInput.password = "Password is required"
      hasErrorInput = true
    }

    setErrorsInputs(newErrorsInput)
    return hasErrorInput
  }

  const handleChange = (e, inputName) => {
    setMessageDB({ info: "", error: "" })
    const value = e.target.value
    setUser({ ...user, [inputName]: value })
    if (value !== "") {
      setErrorsInputs(prevErrors => ({
        ...prevErrors,
        [inputName]: "",
      }))
    }
  }

  const handleBlur = inputName => {
    if (user[inputName].trim() === "") {
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

  const resetUser = () => setUser({ name: "", password: "" })

  const handleSubmit = async (e, action) => {
    e.preventDefault()

    const isError = checkError()

    if (isError) {
      return
    }
    setIsLoading(true)
    try {
      const result = await fetchApiUser(action, user)
      if (action === "login") {
        setToken()
        localStorage.setItem("authToken", result.data.token)
      }
      setMessageDB(prev => ({ ...prev, info: result.data.message }))
      toast.success(result.data.message)
      resetUser()
    } catch (error) {
      toast.error(`${error.response.data.message}`)
      setMessageDB(prev => ({ ...prev, error: error.response.data.message }))
    }
    setIsLoading(false)
  }

  return (
    <div className={css.loginForm}>
      <div className={css.logo}>
        <Logo />
      </div>

      <h2 className={css.titleForm}>Login Form</h2>
      <div className={css.inputsGroup}>
        <Input
          value={user.name}
          isEmpty={errorsInputs.name}
          onChange={e => handleChange(e, "name")}
          onBlur={() => handleBlur("name")}
          inputName="name"
          inputType="text"
          inputPlaceholder="User name"
          required={true}
        />
        {errorsInputs.name && (
          <p className={`${css.errorInput} ${css.errorInputName}`}>
            *{errorsInputs.name}
          </p>
        )}
        <Input
          value={user.password}
          isEmpty={errorsInputs.password}
          onChange={e => handleChange(e, "password")}
          onBlur={() => handleBlur("password")}
          inputName="password"
          inputType={isPasswordHidden ? "password" : "text"}
          inputPlaceholder="Password"
          required={true}
          toggleVisiblePass={toggleVisiblePass}
        />
        {errorsInputs.password && (
          <p className={`${css.errorInput} ${css.errorInputPass}`}>
            *{errorsInputs.password}
          </p>
        )}
        {messageDB.error && (
          <p className={`${css.errorDB}`}>{messageDB.error}</p>
        )}
        {messageDB.info && (
          <p className={`${css.infoDB}`}>
            <p>{messageDB.info}</p>
          </p>
        )}
      </div>

      <div className={css.btnGroup}>
        <Button
          onClick={e => handleSubmit(e, "login")}
          buttonType="submit"
          buttonTitle="Sign IN"
        />
        <Button
          onClick={e => handleSubmit(e, "register")}
          buttonType="submit"
          buttonTitle="Sign UP"
        />
      </div>
      <div className={css.footerCard}>
        <p>Having a problem? Contact our support team: support@example.com</p>
      </div>
      <ToastContainer />
      {isLoading && (
        <div className={css.spinnerOverlay}>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#ffca42", "#fff096"]}
          />
        </div>
      )}
    </div>
  )
}

export default Card
