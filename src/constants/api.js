import axios from "axios"

export const usersApi = axios.create({
  baseURL: "https://sale-products-server.onrender.com/auth/",
})

export const productsApi = axios.create({
  baseURL: "https://sale-products-server.onrender.com/products/",
})
