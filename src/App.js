import { Route, Routes } from "react-router-dom"
import ProductsTable from "pages/ProductsTable/ProductsTable"
import ProductsPreview from "pages/ProductsPreview/ProductsPreview"
import Layout from "components/Layout/Layout"
import Login from "pages/Login/Login"
import { RestrictedRoute } from "services/routes/RestrictedRoute"
import { PrivateRoute } from "services/routes/PrivateRoute"
import "./App.css"
import { Error } from "pages/Error/Error"
import { ProductInfo } from "pages/ProductInfo/ProductInfo"

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <RestrictedRoute redirectTo="/products" component={<Login />} />
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/" component={<ProductsTable />} />
          }
        />
        <Route
          path="/preview"
          element={
            <PrivateRoute redirectTo="/" component={<ProductsPreview />} />
          }
        />
        <Route
          path="/product-info"
          element={<PrivateRoute redirectTo="/" component={<ProductInfo />} />}
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
