import React from "react"
import Container from "../../components/Container/Container"
import Card from "./components/Card/Card"
import css from "./Login.module.css"

const Login = () => {
  return (
    <Container>
      <div className={css.loginPage}>
        <Card />
      </div>
    </Container>
  )
}

export default Login
