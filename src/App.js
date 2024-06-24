import { useEffect } from "react"
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom"
import ProductsTable from "pages/ProductsTable/ProductsTable"
import { Loader } from "components/Loader/Loader"
import "./App.css"

import ProductsPreview from "pages/ProductsPreview/ProductsPreview"
import Login from "pages/Login/Login"
import { Suspense, useState } from "react"

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const authToken = localStorage.getItem("token")
    setToken(authToken)
  }, [token])
  console.log(token)
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  )
}

export default App
