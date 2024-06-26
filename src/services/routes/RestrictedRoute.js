import { Navigate } from "react-router-dom"
import { AUTH_TOKEN } from "constants/localStorage"

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isToken = localStorage.getItem(AUTH_TOKEN)

  return isToken ? <Navigate to={redirectTo} /> : Component
}
