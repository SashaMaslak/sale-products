import axios from "axios"

export const apiUsers = axios.create({
  baseURL: "https://sale-products-server.onrender.com/auth/",
})

export const fetchApiUser = async (endpoint, user) => {
  return await apiUsers.post(`${endpoint}`, user)
}

export const setToken = token => {
  apiUsers.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const deleteToken = () => {
  apiUsers.defaults.headers.common["Authorization"] = ""
}
