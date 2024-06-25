import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import ProductsTable from "pages/ProductsTable/ProductsTable"
import ProductsPreview from "pages/ProductsPreview/ProductsPreview"
import Layout from "components/Layout/Layout"
import Login from "pages/Login/Login"
import "./App.css"

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
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/preview" element={<ProductsPreview />} />
      </Route>
    </Routes>
  )
}

export default App
