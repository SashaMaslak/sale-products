import React, { useState } from "react"
import axios from "axios"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Logo from "components/Logo/Logo"
import css from "./Card.module.css"
const Card = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [user, setUser] = useState({ name: "", password: "" })
  const [errorsInputs, setErrorsInputs] = useState({ name: "", password: "" })
  const [token, setToken] = useState("")

  const toggleVisiblePass = () => setIsPasswordHidden(prev => !prev)

  const checkError = () => {
    let hasErrorInput = false
    const newErrorsInput = { name: "", password: "" }

    if (user.name === "") {
      newErrorsInput.name = "Name is required"
      hasErrorInput = true
    }
    if (user.password === "") {
      newErrorsInput.password = "Password is required"
      hasErrorInput = true
    }

    setErrorsInputs(newErrorsInput)
    return hasErrorInput
  }

  const handleChange = (e, inputName) => {
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
    if (user[inputName] === "") {
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

  const handleSubmit = async (e, btnName) => {
    e.preventDefault()

    const isError = checkError()

    if (isError) {
      return
    }

    resetUser()
    if (btnName === "SignIn") {
      try {
        const result = await axios.post(
          "http://localhost:3001/auth/login",
          user
        )
        setToken(result.data.token)
        localStorage.setItem("authToken", token)
      } catch (error) {
        console.error("Error logging in:", error)
      }
    }
    if (btnName === "SignUp") {
      console.log(`Submit signUp: ${user.name} ${user.password}`)
    }
  }

  return (
    <div className={css.loginForm}>
      <div className={css.logo}>
        <Logo />
      </div>

      <h2 className={css.titleForm}>Login Form</h2>
      <Input
        value={user.name}
        onChange={e => handleChange(e, "name")}
        onBlur={() => handleBlur("name")}
        inputName="name"
        inputType="text"
        inputPlaceholder="User name"
        required={true}
      />
      {errorsInputs.name && (
        <p className={css.errorInput}>{errorsInputs.name}</p>
      )}
      <Input
        value={user.password}
        onChange={e => handleChange(e, "password")}
        onBlur={() => handleBlur("password")}
        inputName="password"
        inputType={isPasswordHidden ? "password" : "text"}
        inputPlaceholder="Password"
        required={true}
        toggleVisiblePass={toggleVisiblePass}
      />
      {errorsInputs.password && (
        <p className={css.errorInput}>{errorsInputs.password}</p>
      )}
      <div className={css.btnGroup}>
        <Button
          onClick={e => handleSubmit(e, "SignIn")}
          buttonType="submit"
          buttonTitle="Sign IN"
        />
        <Button
          onClick={e => handleSubmit(e, "SignUp")}
          buttonType="submit"
          buttonTitle="Sign UP"
        />
      </div>
      <div className={css.footerCard}>
        <p>Having a problem? Contact our support team: support@example.com</p>
      </div>
    </div>
  )
}

export default Card
