import { productsApi } from "constants/api"

export const fetchApiProducts = async endpoint => {
  return await productsApi.get(`${endpoint}`)
}

export const deleteProduct = async id => {
  console.log("id:", id)
  return await productsApi.delete(`${id}`)
}
